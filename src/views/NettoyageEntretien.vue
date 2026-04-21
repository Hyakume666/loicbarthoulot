<template>
  <div class="section-padding entretien-page" style="background-color: var(--bg) !important; min-height: 100vh;">
    <div class="container">
      <!-- Bouton retour -->
      <div class="mb-4">
        <router-link to="/services" class="btn btn-primary-custom">
          <i class="fas fa-arrow-left me-2"></i>Retour aux services
        </router-link>
      </div>
      
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold" style="color: var(--text) !important;">Nettoyage & Entretien</h1>
        <p class="lead" style="color: var(--muted) !important;">
          Maintenance complète pour optimiser les performances de votre PC
        </p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <!-- Description principale -->
          <div class="card card-custom mb-5">
            <div class="card-body p-4">
              <div class="text-center mb-4">
                <div class="icon-feature">🧹</div>
              </div>
              <h3 class="text-primary-custom text-center mb-4">Entretien professionnel de votre PC</h3>
              <p style="color: var(--text) !important;" class="mb-4">
                Un PC bien entretenu, c'est un PC qui dure plus longtemps et fonctionne mieux. 
                Je réalise un nettoyage complet de votre ordinateur, tant au niveau matériel 
                que logiciel, pour retrouver des performances optimales.
              </p>
              <p style="color: var(--text) !important;">
                <strong>Recommandation :</strong> Un entretien tous les 6 à 12 mois selon l'environnement et l'utilisation.
              </p>
            </div>
          </div>

          <!-- Types d'entretien -->
          <div class="row g-4 mb-5">
            <div class="col-md-6" v-for="entretien in typesEntretien" :key="entretien.id">
              <div class="card card-custom h-100">
                <div class="card-body p-4 text-center">
                  <div class="icon-feature">{{ entretien.icon }}</div>
                  <h5 class="card-title">{{ entretien.title }}</h5>
                  <p class="card-text text-muted">{{ entretien.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Prestations détaillées -->
          <div class="card card-custom mb-5">
            <div class="card-body p-4">
              <h3 class="text-primary-custom mb-4">Prestations détaillées</h3>
              <div class="row g-4">
                <div class="col-md-6">
                  <h5 class="mb-3" style="color: var(--text) !important;">Nettoyage matériel</h5>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span style="color: var(--text) !important;">Dépoussiérage complet</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span style="color: var(--text) !important;">Nettoyage ventilateurs</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span style="color: var(--text) !important;">Contrôle températures</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <h5 class="mb-3" style="color: var(--text) !important;">Optimisation logicielle</h5>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span style="color: var(--text) !important;">Nettoyage registre Windows</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span style="color: var(--text) !important;">Suppression fichiers temporaires</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span style="color: var(--text) !important;">Mise à jour drivers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Avantages -->
          <div class="card card-custom mb-5">
            <div class="card-body p-4">
              <h3 class="text-primary-custom mb-4">Bénéfices de l'entretien régulier</h3>
              <div class="row g-4">
                <div class="col-md-4 text-center">
                  <div class="mb-3">
                    <i class="fas fa-tachometer-alt text-primary-custom" style="font-size: 2.5rem;"></i>
                  </div>
                  <h5 style="color: var(--text) !important;">Performances</h5>
                  <p style="color: var(--muted) !important;" class="small">PC plus rapide et réactif</p>
                </div>
                <div class="col-md-4 text-center">
                  <div class="mb-3">
                    <i class="fas fa-thermometer-half text-primary-custom" style="font-size: 2.5rem;"></i>
                  </div>
                  <h5 style="color: var(--text) !important;">Température</h5>
                  <p style="color: var(--muted) !important;" class="small">Refroidissement optimisé</p>
                </div>
                <div class="col-md-4 text-center">
                  <div class="mb-3">
                    <i class="fas fa-clock text-primary-custom" style="font-size: 2.5rem;"></i>
                  </div>
                  <h5 style="color: var(--text) !important;">Longévité</h5>
                  <p style="color: var(--muted) !important;" class="small">Durée de vie prolongée</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Call to action -->
          <div class="text-center">
            <h3 class="mb-4" style="color: var(--text) !important;">Votre PC a besoin d'un bon nettoyage ?</h3>
            <p style="color: var(--muted) !important;" class="mb-4">
              Redonnez un coup de jeune à votre ordinateur avec un entretien professionnel
            </p>
            <router-link to="/contact" class="btn btn-primary-custom btn-lg">
              Programmer un nettoyage
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
  'Nettoyage & Entretien PC | Loïc Barthoulot',
  'Dépoussiérage, nettoyage des ventilateurs, optimisation logicielle et mise à jour des drivers. Redonnez un coup de jeune à votre PC.',
  { path: '/services/nettoyage-entretien' }
)

const typesEntretien = ref([
  {
    id: 1,
    icon: '🌪️',
    title: 'Dépoussiérage',
    description: 'Élimination de la poussière accumulée dans le boîtier et sur les composants'
  },
  {
    id: 2,
    icon: '💨',
    title: 'Ventilation',
    description: 'Nettoyage et vérification du système de refroidissement'
  },
  {
    id: 3,
    icon: '🗂️',
    title: 'Optimisation système',
    description: 'Nettoyage des fichiers temporaires et optimisation Windows'
  },
  {
    id: 4,
    icon: '🔄',
    title: 'Mises à jour',
    description: 'Installation des derniers drivers et mises à jour système'
  }
])
</script>

<style scoped>
/* Désactive le hover uniquement sur cette page */
.entretien-page .card-custom:hover {
  transform: none !important;
  box-shadow: none !important;
}
</style>