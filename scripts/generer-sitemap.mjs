/**
 * Génère public/sitemap.xml à partir de src/pages-indexables.ts.
 *
 * La date de chaque page vient de son dernier commit git, pas de la date du
 * jour : annoncer que tout a changé à chaque build est un signal faux, et
 * Google finit par ignorer un lastmod qui bouge sans raison.
 *
 * Sans historique git — clone superficiel, archive téléchargée — le script
 * retombe sur la date de modification du fichier.
 *
 * Lancé automatiquement avant chaque build (script « prebuild »).
 */
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync, statSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://loicbarthoulot.ch'

// Lecture du fichier TypeScript sans le compiler : on n'a besoin que du
// tableau littéral, et ça évite d'ajouter un outil au build.
const source = readFileSync(resolve(racine, 'src/pages-indexables.ts'), 'utf8')
const pages = [...source.matchAll(
  /\{\s*chemin:\s*'([^']+)',\s*fichier:\s*'([^']+)',\s*priorite:\s*([\d.]+),\s*frequence:\s*'([^']+)'\s*\}/g
)].map(([, chemin, fichier, priorite, frequence]) => ({ chemin, fichier, priorite, frequence }))

if (pages.length === 0) {
  console.error('sitemap : aucune page lue dans src/pages-indexables.ts')
  process.exit(1)
}

const dateDeLaPage = (fichier) => {
  try {
    const d = execFileSync('git', ['log', '-1', '--format=%cs', '--', fichier], {
      cwd: racine, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore']
    }).trim()
    if (d) return d
  } catch {
    // git absent ou historique tronqué
  }
  return statSync(resolve(racine, fichier)).mtime.toISOString().slice(0, 10)
}

// Garde-fou : le sitemap et le routeur doivent déclarer les mêmes pages.
// Sans ça, renommer une route sans toucher à cette liste produit un sitemap
// qui pointe vers des URL mortes — et Google le signale des semaines plus
// tard, dans un rapport que personne ne lit.
const routeur = readFileSync(resolve(racine, 'src/main.ts'), 'utf8')
const cheminsRouteur = new Set(
  [...routeur.matchAll(/\{\s*path:\s*'([^']+)',\s*name:/g)].map((m) => m[1])
)
const manquants = pages.map((p) => p.chemin).filter((c) => !cheminsRouteur.has(c))
const enTrop = [...cheminsRouteur].filter(
  (c) => !c.startsWith('/:') && !pages.some((p) => p.chemin === c)
)
if (manquants.length || enTrop.length) {
  console.error('sitemap : desaccord entre pages-indexables.ts et main.ts')
  if (manquants.length) console.error('  declarees au sitemap, absentes du routeur :', manquants.join(', '))
  if (enTrop.length) console.error('  routees, absentes du sitemap :', enTrop.join(', '))
  process.exit(1)
}

const entrees = pages.map((p) => {
  const url = p.chemin === '/' ? `${SITE}/` : `${SITE}${p.chemin}`
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${dateDeLaPage(p.fichier)}</lastmod>
    <changefreq>${p.frequence}</changefreq>
    <priority>${p.priorite}</priority>
  </url>`
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Généré par scripts/generer-sitemap.mjs. Ne pas modifier à la main. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entrees}
</urlset>
`

writeFileSync(resolve(racine, 'public/sitemap.xml'), xml, 'utf8')
console.log(`sitemap : ${pages.length} pages écrites dans public/sitemap.xml`)
