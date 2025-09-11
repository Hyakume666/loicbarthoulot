<template>
  <div class="section-padding" style="min-height: 100vh;">
    <div class="container">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold" style="color: var(--text) !important;">Mes Services</h1>
        <p class="lead" style="color: var(--muted) !important;">
          Une gamme complète de services informatiques pour particuliers et professionnels
        </p>
      </div>

      <div class="row g-4">
        <div class="col-lg-4 col-md-6" v-for="service in services" :key="service.id">
          <router-link :to="service.link" class="text-decoration-none">
            <div class="card card-custom h-100 service-card-clickable">
            <img :src="service.image" class="card-img-top" style="height: 200px; object-fit: cover;" :alt="service.title">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ service.title }}</h5>
              <p class="card-text text-muted flex-grow-1">{{ service.description }}</p>
              <div class="mt-auto">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-primary-custom fw-bold">{{ service.price }}</span>
                </div>
              </div>
            </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Section Pourquoi me choisir -->
      <section class="mt-5 pt-5">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold" style="color: var(--text) !important;">Pourquoi me choisir ?</h2>
        </div>
        <div class="row g-4">
          <div class="col-md-4 text-center">
            <div class="icon-feature">⚡</div>
            <h5 style="color: var(--text) !important;">Passion & polyvalence</h5>
            <p style="color: var(--muted) !important;">Que ce soit pour un PC gaming, une machine bureautique ou un site web, je traite chaque projet avec soin et passion, en m’adaptant aux besoins spécifiques de chacun.</p>
          </div>
          <div class="col-md-4 text-center">
            <div class="icon-feature">🛡️</div>
            <h5 style="color: var(--text) !important;">Approche personnalisée</h5>
            <p style="color: var(--muted) !important;">Je prends le temps d’écouter vos attentes et de proposer une solution adaptée à votre usage, votre budget et vos objectifs.</p>
          </div>
          <div class="col-md-4 text-center">
            <div class="icon-feature">💰</div>
            <h5 style="color: var(--text) !important;">Prix clairs et transparents</h5>
            <p style="color: var(--muted) !important;">Vous savez à l’avance ce que vous payez : pas de coûts cachés, des tarifs justes adaptés à la prestation.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    title: 'Montage de PC sur mesure',
    description: 'Assemblage complet de votre configuration personnalisée selon vos besoins et votre budget.',
    price: 'Sur devis',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/services/montage-pc'
  },
  {
    id: 2,
    title: 'Dépannage & réparation',
    description: 'Diagnostic et réparation de pannes matérielles et logicielles.',
    price: 'Sur devis',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/services/depannage-reparation'
  },
  {
    id: 3,
    title: 'Nettoyage et entretien',
    description: 'Nettoyage complet de votre ordinateur (poussière, ventilateurs), maintenance logicielle et optimisation des performances.',
    price: 'Sur devis',
    image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/services/nettoyage-entretien'
  },
  {
    id: 4,
    title: 'Création de site web',
    description: 'Site vitrine performant et responsive avec SEO de base, design moderne, intégration formulaire de contact et déploiement inclus.',
    price: 'Sur devis',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/services/creation-site-web'
  }
])
</script>