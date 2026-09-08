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
              Un site vitrine adapté au mobile, mis en ligne et prêt à servir.
            </p>
          </div>

          <!-- Description principale -->
          <div class="card card-custom mb-5">
            <div class="card-body p-4">
              <div class="text-center mb-4">
                <div class="icon-feature">🌐</div>
              </div>
              <h3 class="text-primary-custom text-center mb-4">Votre site vitrine</h3>
              <p class="mb-4">
                Je construis votre site sur mesure. Il s'affiche correctement
                sur mobile, sur tablette et sur ordinateur. Le référencement
                de base est en place, le formulaire de contact fonctionne, et
                je m'occupe de la mise en ligne.
              </p>
              <p>
                <strong>Technologies :</strong> Vue 3 et TypeScript par défaut,
                ou une autre stack si votre besoin le demande.
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
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Mise en page adaptée au mobile</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Référencement de base</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Formulaire de contact</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Hébergement et mise en ligne</span>
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
  'Création de site web | Loïc Barthoulot',
  'Site vitrine adapté au mobile, avec référencement de base, formulaire de contact et mise en ligne. Vue 3 et TypeScript.',
  { path: '/services/creation-site-web', image: 'https://loicbarthoulot.ch/images/creation-site-web.jpg' }
)

const advantages = ref([
  {
    id: 1,
    icon: '📱',
    title: 'Mobile, tablette, ordinateur',
    description: 'La mise en page s\'adapte à la taille de l\'écran.'
  },
  {
    id: 2,
    icon: '⚡',
    title: 'Pages légères',
    description: 'Images compressées, polices et scripts servis depuis le site.'
  },
  {
    id: 3,
    icon: '🔍',
    title: 'Référencement de base',
    description: 'Titres, descriptions, plan du site et données structurées.'
  },
  {
    id: 4,
    icon: '🛠️',
    title: 'Mise en ligne',
    description: 'Nom de domaine, hébergement et déploiement.'
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