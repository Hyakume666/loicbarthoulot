<template>
  <section class="section">
    <div class="contenu">
      <header class="tete">
        <h1>Ce que je fais</h1>
        <p class="tete__intro">
          Applications métier, digitalisation de processus, sites web et
          support informatique, pour des PME de Suisse romande.
        </p>
      </header>

      <div class="prestations">
        <article class="entree">
          <h2 class="entree__titre">Applications métier</h2>
          <p>
            Un outil développé sur mesure pour une entreprise donnée : suivi
            de dossiers, gestion de stock, saisie qui alimente directement la
            facturation. L'analyse du besoin vient avant le développement,
            et la modélisation est validée avec vous.
          </p>
          <p class="mention">
            Java, Vue 3 et TypeScript, bases de données SQL et Oracle.
          </p>
          <router-link to="/contact" class="entree__lien">
            Décrire votre besoin
          </router-link>
        </article>

        <article class="entree">
          <h2 class="entree__titre">Digitalisation de processus</h2>
          <p>
            J'analyse ce qui se fait à la main dans votre entreprise, puis
            j'automatise ce qui est répétitif. Vos outils actuels restent en
            place.
          </p>
          <router-link to="/services/automatisation-ia" class="entree__lien">
            Voir le détail
          </router-link>
        </article>

        <article class="entree">
          <h2 class="entree__titre">Création de site web</h2>
          <p>
            Site vitrine adapté au mobile, avec référencement de base,
            formulaire de contact, hébergement et mise en ligne.
          </p>
          <router-link to="/services/creation-site-web" class="entree__lien">
            Voir le détail
          </router-link>
        </article>

        <article class="entree">
          <h2 class="entree__titre">Support et matériel</h2>
          <p>
            Assemblage de postes de travail, dépannage matériel et logiciel,
            récupération de données et entretien.
          </p>
          <router-link to="/services/support-materiel" class="entree__lien">
            Voir le détail
          </router-link>
        </article>
      </div>
    </div>
  </section>

  <section class="section section--net">
    <div class="contenu">
      <h2 class="tete__titre-second">Comment je travaille</h2>

      <div class="colonnes colonnes--2 methode">
        <div>
          <h3>L'analyse avant le développement</h3>
          <p>
            Je commence par comprendre comment votre entreprise travaille.
            L'outil vient ensuite, et il suit votre fonctionnement plutôt que
            l'inverse.
          </p>
        </div>
        <div>
          <h3>Un seul interlocuteur</h3>
          <p>
            Vous parlez à la personne qui analyse le besoin, développe l'outil
            et le met en ligne.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Ce que je fais | Loïc Barthoulot',
  'Applications métier, digitalisation de processus, création de site web, support et matériel informatique pour PME de Suisse romande.',
  { path: '/services' }
)
</script>

<style scoped>
.tete {
  margin-bottom: var(--e-8);
}

.tete__intro {
  margin-top: var(--e-4);
  font-size: var(--pas-2);
  color: var(--texte-faible);
  max-width: 42ch;
}

.tete__titre-second {
  margin-bottom: var(--e-6);
}

.entree__lien {
  display: inline-block;
  margin-top: var(--e-3);
  font-size: var(--pas-0);
  color: var(--accent);
  text-decoration-color: var(--accent);
}

.entree .mention {
  margin-top: var(--e-2);
}

.section--net {
  background-color: var(--blanc);
  border-top: 1px solid var(--trait);
}

.methode h3 {
  margin-bottom: var(--e-3);
}
</style>
