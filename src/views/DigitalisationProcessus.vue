<template>
  <section class="hero hero--compact">
    <div class="container">
      <router-link to="/services" class="hero__retour">
        ← Retour aux prestations
      </router-link>
      <div class="row">
        <div class="col-lg-8">
          <p class="surtitre">Digitalisation de processus</p>
          <h1 class="hero__titre mb-3">Supprimer la ressaisie et les écarts qu'elle entraîne</h1>
          <p class="hero__texte mb-0">
            J'analyse ce qui se fait à la main dans votre entreprise, puis
            j'automatise ce qui est répétitif.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="row g-4 mb-4">
        <div class="col-lg-7">
          <div class="panneau h-100">
            <h2 class="h5 mb-3">Comment ça se passe</h2>
            <p class="text-body-secondary">
              Une partie du travail administratif se répète chaque semaine :
              ressaisir une commande, remettre en forme un document, reporter
              des chiffres d'un fichier à un autre. Je regarde comment votre
              entreprise travaille réellement, puis je construis l'outil qui
              prend en charge ce qui est répétitif.
            </p>
            <p class="text-body-secondary mb-0">
              Selon le cas, cela va d'un document généré automatiquement à une
              application métier développée sur mesure. Vos outils actuels
              restent en place.
            </p>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="panneau h-100">
            <h2 class="h5 mb-3">Ce qui est inclus</h2>
            <ul class="liste-marquee">
              <li>Analyse du processus tel qu'il se déroule aujourd'hui</li>
              <li>Modélisation et validation avec vous avant développement</li>
              <li>Tests sur vos données réelles</li>
              <li>Prise en main par vos équipes</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-xl-3">
          <div class="panneau h-100">
            <h3 class="h6 mb-2">Génération de documents</h3>
            <p class="small text-body-secondary mb-0">
              Devis, factures ou comptes rendus produits à partir des données
              déjà saisies, plutôt que ressaisis.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="panneau h-100">
            <h3 class="h6 mb-2">Centralisation des données</h3>
            <p class="small text-body-secondary mb-0">
              Une seule base pour les informations aujourd'hui réparties entre
              plusieurs fichiers.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="panneau h-100">
            <h3 class="h6 mb-2">Suppression de la ressaisie</h3>
            <p class="small text-body-secondary mb-0">
              Les données passent d'une étape à l'autre sans être retapées, ce
              qui supprime les écarts.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="panneau h-100">
            <h3 class="h6 mb-2">Suivi d'un dossier</h3>
            <p class="small text-body-secondary mb-0">
              Chaque dossier a un état visible, de son arrivée à sa clôture.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--surface">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <h2 class="mb-3">Décrivez-moi une tâche qui vous prend du temps</h2>
          <p class="text-body-secondary mb-4">
            Dix minutes suffisent pour dire si elle peut être automatisée.
          </p>
          <router-link to="/contact" class="btn btn-primary">
            Me contacter
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Digitalisation de processus — La Chaux-de-Fonds, Neuchâtel',
  'Analyse de vos processus, puis automatisation de ce qui se répète : documents générés, données centralisées, dossiers suivis. La Chaux-de-Fonds, Neuchâtel.',
  { path: '/services/digitalisation-processus',
    filAriane: [{ nom: 'Prestations', chemin: '/services' }, { nom: 'Digitalisation de processus', chemin: '/services/digitalisation-processus' }]
  }
)
</script>
