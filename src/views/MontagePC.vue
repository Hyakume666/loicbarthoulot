<template>
  <div class="section-padding" style="min-height: 100vh;">
    <div class="container">
      <!-- Bouton retour -->
      <div class="mb-4">
        <router-link to="/services" class="btn btn-primary-custom">
          <i class="fas fa-arrow-left me-2"></i>Retour aux services
        </router-link>
      </div>
      
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold" style="color: var(--text) !important;">Montage de PC sur mesure</h1>
        <p class="lead" style="color: var(--muted) !important;">
          Configurations adaptées à tous vos besoins et budgets
        </p>
      </div>

      <div class="row g-4">
        <div class="col-12" v-for="config in configurations" :key="config.id">
          <div class="sub-service-card">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 class="text-primary-custom mb-3" style="color: var(--primary);">{{ config.title }}</h3>
                <p class="mb-4" style="color: var(--muted);">{{ config.description }}</p>
                <div class="row g-3">
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li v-for="feature in config.features.slice(0, Math.ceil(config.features.length / 2))" 
                          :key="feature" class="mb-2" style="color: var(--text);">
                        <i class="fas fa-check text-primary-custom me-2"></i>{{ feature }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li v-for="feature in config.features.slice(Math.ceil(config.features.length / 2))" 
                          :key="feature" class="mb-2" style="color: var(--text);">
                        <i class="fas fa-check text-primary-custom me-2"></i>{{ feature }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 text-center">
                <div class="icon-feature mb-3">{{ config.icon }}</div>
                <router-link to="/contact" class="btn btn-primary-custom">
                  Demander une config
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section avantages -->
      <section class="mt-5 pt-5">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold" style="color: var(--text);">Pourquoi choisir un montage sur mesure ?</h2>
        </div>
        <div class="row g-4">
          <div class="col-md-4 text-center">
            <div class="icon-feature">🎯</div>
            <h5 style="color: var(--text);">Adapté à vos besoins</h5>
            <p style="color: var(--muted);">Configuration personnalisée selon votre usage et budget</p>
          </div>
          <div class="col-md-4 text-center">
            <div class="icon-feature">🛡️</div>
            <h5 style="color: var(--text);">Garantie complète</h5>
            <p style="color: var(--muted);">Garantie sur l'assemblage et accompagnement post-montage</p>
          </div>
          <div class="col-md-4 text-center">
            <div class="icon-feature">⚡</div>
            <h5 style="color: var(--text);">Performances optimales</h5>
            <p style="color: var(--muted);">Optimisation BIOS et système pour des performances maximales</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const configurations = ref([
  {
    id: 1,
    title: 'Configuration Bureautique',
    icon: '💼',
    description: 'Parfaite pour un usage quotidien : navigation web, bureautique, multimédia. Privilégie la faible consommation et le fonctionnement silencieux.',
    features: [
      'Processeur économe et performant',
      'SSD rapide pour la réactivité',
      'Refroidissement silencieux',
      'Faible consommation électrique',
      'Évolutivité future assurée',
      'Garantie 2 ans sur l\'assemblage'
    ]
  },
  {
    id: 2,
    title: 'Gaming - Entrée de gamme',
    icon: '🎮',
    description: 'Idéale pour débuter dans le gaming PC. Permet de jouer en 1080p avec des réglages élevés tout en maîtrisant le budget.',
    features: [
      'Gaming 1080p fluide (60+ FPS)',
      'Carte graphique moderne',
      'Budget maîtrisé et optimisé',
      'Évolutivité gaming assurée',
      'Refroidissement efficace',
      'Support technique inclus'
    ]
  },
  {
    id: 3,
    title: 'Gaming - Milieu de gamme',
    icon: '🚀',
    description: 'Le meilleur rapport performance/prix pour les gamers exigeants. Gaming en 1440p avec des réglages élevés sur la plupart des jeux.',
    features: [
      'Gaming 1440p haute qualité',
      'Excellent rapport perf/prix',
      'Ray tracing compatible',
      'Streaming et multitâche',
      'Refroidissement premium',
      'Garantie performance 3 ans'
    ]
  },
  {
    id: 4,
    title: 'Gaming - Haut de gamme',
    icon: '👑',
    description: 'Configuration ultime pour les passionnés. Gaming en 1440p/4K avec ray tracing, haute fréquence et performances exceptionnelles.',
    features: [
      'Gaming 4K et haute fréquence',
      'Ray tracing ultra performant',
      'Composants haut de gamme',
      'Refroidissement sur mesure',
      'Overclocking optimisé',
      'Support premium à vie'
    ]
  }
])
</script>