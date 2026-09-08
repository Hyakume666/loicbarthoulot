<template>
  <div class="section-padding automation-page" style="background-color: var(--bg) !important; min-height: 100vh;">
    <div class="container">
      <!-- Bouton retour -->
      <div class="mb-4">
        <router-link to="/services" class="btn btn-primary-custom">
          <i class="fas fa-arrow-left me-2"></i>Retour aux services
        </router-link>
      </div>

      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold">Digitalisation de processus</h1>
        <p class="lead">
          J'analyse ce qui se fait à la main dans votre entreprise, puis
          j'automatise ce qui est répétitif.
        </p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <!-- Description principale -->
          <div class="card card-custom mb-5">
            <div class="card-body p-4">
              <div class="text-center mb-4">
                <div class="icon-feature">🤖</div>
              </div>
              <h3 class="text-primary-custom text-center mb-4">Comment ça se passe</h3>
              <p class="mb-4">
                Une partie du travail administratif se répète chaque semaine :
                ressaisir une commande, remettre en forme un document, reporter
                des chiffres d'un fichier à un autre. Je regarde comment votre
                entreprise travaille réellement, puis je construis l'outil qui
                prend en charge ce qui est répétitif.
              </p>
              <p>
                Le but est de supprimer la ressaisie et les écarts qu'elle
                entraîne. Vos outils actuels restent en place.
              </p>
            </div>
          </div>

          <!-- Types d'automatisations -->
          <div class="row g-4 mb-5">
            <div class="col-md-6" v-for="auto in typesAutomatisations" :key="auto.id">
              <div class="card card-custom h-100">
                <div class="card-body p-4 text-center">
                  <div class="icon-feature">{{ auto.icon }}</div>
                  <h5 class="card-title">{{ auto.title }}</h5>
                  <p class="card-text text-muted">{{ auto.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Prestations incluses -->
          <div class="card card-custom mb-5">
            <div class="card-body p-4">
              <h3 class="text-primary-custom mb-4">Ce qui est inclus</h3>
              <div class="row g-3">
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i>
                      <span>Analyse du processus tel qu'il se déroule aujourd'hui</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i>
                      <span>Modélisation et validation avec vous avant développement</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i>
                      <span>Tests sur vos données réelles</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i>
                      <span>Prise en main par vos équipes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Call to action -->
          <div class="text-center">
            <h3 class="mb-4">Décrivez-moi une tâche qui vous prend du temps</h3>
            <p class="mb-4">
              Dix minutes suffisent pour dire si elle peut être automatisée.
            </p>
            <router-link to="/contact" class="btn btn-primary-custom btn-lg">
              Me contacter
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Digitalisation de processus | Loïc Barthoulot',
  'Analyse de vos processus, puis automatisation de ce qui est répétitif : génération de documents, centralisation des données, suivi des dossiers.',
  { path: '/services/automatisation-ia', image: 'https://loicbarthoulot.ch/images/automatisation-ia.jpg' }
)

const typesAutomatisations = ref([
  {
    id: 1,
    icon: '📄',
    title: 'Génération de documents',
    description: 'Devis, factures ou comptes rendus produits à partir des données déjà saisies, plutôt que ressaisis.'
  },
  {
    id: 2,
    icon: '📊',
    title: 'Centralisation des données',
    description: 'Une seule base pour les informations aujourd\'hui réparties entre plusieurs fichiers.'
  },
  {
    id: 3,
    icon: '🔁',
    title: 'Suppression de la ressaisie',
    description: 'Les données passent d\'une étape à l\'autre sans être retapées, ce qui supprime les écarts.'
  },
  {
    id: 4,
    icon: '🗂️',
    title: 'Suivi d\'un dossier',
    description: 'Chaque dossier a un état visible, de son arrivée à sa clôture.'
  }
])
</script>

<style scoped>
/* Désactive le hover uniquement sur cette page */
.automation-page .card-custom:hover {
  transform: none !important;
  box-shadow: none !important;
}
</style>
