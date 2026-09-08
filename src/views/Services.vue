<template>
  <section class="section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-8">
          <p class="surtitre">Prestations</p>
          <h1 class="mb-3">Ce que je fais</h1>
          <p class="lead text-body-secondary mb-0">
            Applications métier, digitalisation de processus, sites web et
            support informatique, pour des PME de Suisse romande.
          </p>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-lg-6">
          <div class="panneau h-100">
            <h2 class="h4 mb-3">Applications métier</h2>
            <p class="text-body-secondary">
              Un outil développé sur mesure pour une entreprise donnée : suivi
              de dossiers, gestion de stock, saisie qui alimente directement la
              facturation. L'analyse du besoin vient avant le développement, et
              la modélisation est validée avec vous.
            </p>
            <p class="small text-body-secondary mb-4">
              Java, Vue 3 et TypeScript, bases de données SQL et Oracle.
            </p>
            <router-link to="/contact" class="btn btn-primary btn-sm">
              Décrire votre besoin
            </router-link>
          </div>
        </div>

        <div class="col-lg-6">
          <router-link to="/services/automatisation-ia" class="carte-lien">
            <h2 class="carte-lien__titre h4">Digitalisation de processus</h2>
            <p class="carte-lien__texte">
              J'analyse ce qui se fait à la main dans votre entreprise, puis
              j'automatise ce qui est répétitif. Vos outils actuels restent en
              place.
            </p>
            <span class="carte-lien__suite">Voir le détail</span>
          </router-link>
        </div>

        <div class="col-lg-6">
          <router-link to="/services/creation-site-web" class="carte-lien">
            <h2 class="carte-lien__titre h4">Création de site web</h2>
            <p class="carte-lien__texte">
              Site vitrine adapté au mobile, avec référencement de base,
              formulaire de contact, hébergement et mise en ligne.
            </p>
            <span class="carte-lien__suite">Voir le détail</span>
          </router-link>
        </div>

        <div class="col-lg-6">
          <router-link to="/services/support-materiel" class="carte-lien">
            <h2 class="carte-lien__titre h4">Support et matériel</h2>
            <p class="carte-lien__texte">
              Assemblage de postes de travail, dépannage matériel et logiciel,
              récupération de données et entretien.
            </p>
            <span class="carte-lien__suite">Voir le détail</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--surface">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-7">
          <p class="surtitre">Méthode</p>
          <h2 class="mb-0">Comment je travaille</h2>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-6">
          <h3 class="h5 mb-3">L'analyse avant le développement</h3>
          <p class="text-body-secondary mb-0">
            Je commence par comprendre comment votre entreprise travaille.
            L'outil vient ensuite, et il suit votre fonctionnement plutôt que
            l'inverse.
          </p>
        </div>
        <div class="col-md-6">
          <h3 class="h5 mb-3">Un seul interlocuteur</h3>
          <p class="text-body-secondary mb-0">
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
