<template>
  <section class="section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-8">
          <p class="surtitre">Prestations</p>
          <h1 class="mb-3">Ce que je fais</h1>
          <p class="lead text-body-secondary mb-0">
            Sites web, digitalisation de processus, sécurité et support
            informatique, pour des PME de Suisse romande.
          </p>
        </div>
      </div>

      <div class="row g-4">
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
          <router-link to="/services/automatisation-ia" class="carte-lien">
            <h2 class="carte-lien__titre h4">Digitalisation de processus</h2>
            <p class="carte-lien__texte">
              J'analyse ce qui se fait à la main dans votre entreprise, puis
              j'automatise ce qui est répétitif. Cela va d'un document généré
              automatiquement à un outil métier développé sur mesure.
            </p>
            <span class="carte-lien__suite">Voir le détail</span>
          </router-link>
        </div>

        <div class="col-lg-6">
          <router-link to="/services/securite-supervision" class="carte-lien">
            <h2 class="carte-lien__titre h4">Sécurité et supervision</h2>
            <p class="carte-lien__texte">
              Surveillance des détections sur vos postes, qualification et
              traitement des alertes, suivi de l'état de protection du parc.
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
  'Création de site web, digitalisation de processus, sécurité et supervision, support et matériel informatique pour PME de Suisse romande.',
  { path: '/services' }
)
</script>
