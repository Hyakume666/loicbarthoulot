/**
 * Les pages que le sitemap déclare.
 *
 * Source unique : le sitemap est généré à partir d'ici à chaque build, et
 * main.ts s'appuie sur la même liste pour ses routes. Une URL renommée ne
 * peut donc plus dériver entre le routeur et le sitemap — c'est exactement
 * ce qui était arrivé à /services/automatisation-ia.
 *
 * Ce fichier ne contient aucun import de composant : vite.config.ts doit
 * pouvoir le lire sans démarrer Vue.
 */

export interface PageIndexable {
  /** Chemin servi, sans le domaine. */
  chemin: string
  /** Vue correspondante, pour dater l'entrée depuis l'historique git. */
  fichier: string
  /** Importance relative dans le site, de 0 à 1. */
  priorite: number
  frequence: 'monthly' | 'yearly'
}

export const pagesIndexables: PageIndexable[] = [
  { chemin: '/', fichier: 'src/views/Home.vue', priorite: 1.0, frequence: 'monthly' },
  { chemin: '/services', fichier: 'src/views/Services.vue', priorite: 0.9, frequence: 'monthly' },
  { chemin: '/services/digitalisation-processus', fichier: 'src/views/DigitalisationProcessus.vue', priorite: 0.8, frequence: 'monthly' },
  { chemin: '/services/creation-site-web', fichier: 'src/views/CreationSiteWeb.vue', priorite: 0.8, frequence: 'monthly' },
  { chemin: '/services/securite-supervision', fichier: 'src/views/SecuriteSupervision.vue', priorite: 0.8, frequence: 'monthly' },
  { chemin: '/services/support-materiel', fichier: 'src/views/SupportMateriel.vue', priorite: 0.8, frequence: 'monthly' },
  { chemin: '/cv', fichier: 'src/views/CV.vue', priorite: 0.7, frequence: 'monthly' },
  { chemin: '/contact', fichier: 'src/views/Contact.vue', priorite: 0.6, frequence: 'yearly' },
  { chemin: '/mentions-legales', fichier: 'src/views/MentionsLegales.vue', priorite: 0.2, frequence: 'yearly' },
  { chemin: '/confidentialite', fichier: 'src/views/Confidentialite.vue', priorite: 0.2, frequence: 'yearly' }
]
