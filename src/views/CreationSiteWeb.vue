<template>
  <div class="section-padding creation-site-page" style="background-color: var(--bg) !important; min-height: 100vh;">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <!-- Bouton retour -->
          <div class="mb-4">
            <router-link to="/services" class="btn btn-primary-custom">
              <i class="fas fa-arrow-left me-2"></i>Retour aux services
            </router-link>
          </div>
          
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold">Création de site web</h1>
            <p class="lead">
              Site vitrine professionnel, performant et responsive
            </p>
          </div>

          <!-- Description principale -->
          <div class="card card-custom mb-5">
            <div class="card-body p-4">
              <div class="text-center mb-4">
                <div class="icon-feature">🌐</div>
              </div>
              <h3 class="text-primary-custom text-center mb-4">Votre présence web professionnelle</h3>
              <p class="mb-4">
                Je crée votre site vitrine sur mesure avec un design moderne et responsive. 
                Chaque site est optimisé pour le référencement (SEO de base), intègre un 
                formulaire de contact fonctionnel et est déployé clé en main.
              </p>
              <p>
                <strong>Technologies utilisées :</strong> Vue.js + Bootstrap par défaut, 
                ou stack technique adaptée selon vos besoins spécifiques.
              </p>
            </div>
          </div>

          <!-- Avantages -->
          <div class="row g-4 mb-5">
            <div class="col-md-6" v-for="advantage in advantages" :key="advantage.id">
              <div class="card card-custom h-100">
                <div class="card-body p-4 text-center">
                  <div class="icon-feature">{{ advantage.icon }}</div>
                  <h5 class="card-title">{{ advantage.title }}</h5>
                  <p class="card-text">{{ advantage.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Prestations incluses -->
          <div class="card card-custom mb-5">
            <div class="card-body p-4">
              <h3 class="text-primary-custom mb-4">Prestations incluses</h3>
              <div class="row g-3">
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Design moderne et responsive</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Optimisation SEO de base</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Formulaire de contact fonctionnel</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Déploiement et mise en ligne</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Formation à la gestion</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Support technique 3 mois</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Call to action -->
          <div class="text-center">
            <h3 class="mb-4">Prêt à créer votre site web ?</h3>
            <p class="mb-4">
              Contactez-moi pour discuter de votre projet et obtenir un devis personnalisé
            </p>
            <router-link to="/contact" class="btn btn-primary-custom btn-lg">
              Demander un devis gratuit
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
  'Création de Site Web | Loïc Barthoulot',
  'Site vitrine performant et responsive avec SEO de base, formulaire de contact et déploiement inclus. Stack Vue.js + Bootstrap.',
  { path: '/services/creation-site-web', image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200' }
)

const advantages = ref([
  {
    id: 1,
    icon: '📱',
    title: 'Responsive Design',
    description: 'Parfait sur tous les appareils : mobile, tablette et desktop'
  },
  {
    id: 2,
    icon: '⚡',
    title: 'Performance',
    description: 'Site rapide et optimisé pour une excellente expérience utilisateur'
  },
  {
    id: 3,
    icon: '🔍',
    title: 'SEO Optimisé',
    description: 'Référencement de base inclus pour être visible sur Google'
  },
  {
    id: 4,
    icon: '🛠️',
    title: 'Clé en main',
    description: 'Déploiement inclus, votre site est prêt à l\'emploi'
  }
])
</script>

<style scoped>
/* Désactive le hover uniquement sur cette page */
.creation-site-page .card-custom:hover {
  transform: none !important;
  box-shadow: none !important;
}
</style>