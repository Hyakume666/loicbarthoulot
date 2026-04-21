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
        <h1 class="display-4 fw-bold" style="color: var(--text) !important;">Automatisation & IA</h1>
        <p class="lead" style="color: var(--muted) !important;">
          Gagnez des heures chaque semaine en automatisant vos tâches répétitives avec l'intelligence artificielle
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
              <h3 class="text-primary-custom text-center mb-4">Automatisation de vos processus</h3>
              <p style="color: var(--text) !important;" class="mb-4">
                Vous perdez du temps dans vos e-mails, vos documents, vos tâches administratives ou la gestion de vos clients ?
                J'analyse vos processus et mets en place des automatisations IA qui travaillent pour vous, en arrière-plan,
                sans changer vos outils habituels.
              </p>
              <p style="color: var(--text) !important;">
                <strong>Objectif :</strong> vous faire gagner plusieurs heures par semaine, réduire les erreurs et vous permettre
                de vous concentrer sur votre activité principale.
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
                      <span style="color: var(--text) !important;">Audit de vos processus et tâches répétitives</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i>
                      <span style="color: var(--text) !important;">Mise en place de workflows IA (Make, IA, Google, Notion, etc.)</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i>
                      <span style="color: var(--text) !important;">Tests, ajustements et validation avec vos données réelles</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i>
                      <span style="color: var(--text) !important;">Formation & accompagnement pour rester autonome</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Call to action -->
          <div class="text-center">
            <h3 class="mb-4" style="color: var(--text) !important;">Marre des tâches répétitives ?</h3>
            <p class="mb-4" style="color: var(--muted) !important;">
              Contactez-moi pour une démo gratuite de 10 minutes et découvrez ce que l'IA peut automatiser dans votre activité
            </p>
            <router-link to="/contact" class="btn btn-primary-custom btn-lg">
              Réserver une démo gratuite
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
  'Automatisation IA pour indépendants & PME | Loïc Barthoulot',
  'Automatisez vos tâches répétitives avec l\'IA : e-mails, documents, chatbots, dashboards. Workflows Make, Notion, Google. Démo gratuite.',
  { path: '/services/automatisation-ia' }
)

const typesAutomatisations = ref([
  {
    id: 1,
    icon: '📧',
    title: 'Automatisation des e-mails',
    description: 'Tri, classification, réponses suggérées et extraction automatique d\'informations importantes.'
  },
  {
    id: 2,
    icon: '📄',
    title: 'Génération de documents',
    description: 'Création automatique de devis, factures, comptes rendus ou PDF à partir de formulaires ou de données existantes.'
  },
  {
    id: 3,
    icon: '💬',
    title: 'Chatbots IA personnalisés',
    description: 'Assistants IA entraînés sur vos documents (tarifs, offres, contrats) pour répondre rapidement et de manière cohérente.'
  },
  {
    id: 4,
    icon: '📊',
    title: 'Dashboards & centralisation',
    description: 'Centralisation de vos données dans Notion, Airtable ou Google Sheets avec mise à jour automatique.'
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
