<template>
  <div class="section-padding" style="min-height: 100vh;">
    <div class="container">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold">Mes Services</h1>
        <p class="lead">
          Une gamme complète de services informatiques pour particuliers et professionnels
        </p>
      </div>

      <div class="row g-4">
        <div class="col-lg-4 col-md-6" v-for="service in services" :key="service.id">
          <router-link :to="service.link" class="text-decoration-none">
            <div class="card card-custom h-100 service-card-clickable">
            <img :src="service.image" class="card-img-top" style="height: 200px; object-fit: cover;" :alt="service.title" loading="lazy">
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
          <h2 class="display-5 fw-bold">Pourquoi me choisir ?</h2>
        </div>
        <div class="row g-4">
          <div class="col-md-4 text-center">
            <div class="icon-feature">⚡</div>
            <h5>Passion & polyvalence</h5>
            <p>Que ce soit pour un PC gaming, une machine bureautique ou un site web, je traite chaque projet avec soin et passion, en m'adaptant aux besoins spécifiques de chacun.</p>
          </div>
          <div class="col-md-4 text-center">
            <div class="icon-feature">🛡️</div>
            <h5>Approche personnalisée</h5>
            <p>Je prends le temps d'écouter vos attentes et de proposer une solution adaptée à votre usage, votre budget et vos objectifs.</p>
          </div>
          <div class="col-md-4 text-center">
            <div class="icon-feature">💰</div>
            <h5>Prix clairs et transparents</h5>
            <p>Vous savez à l'avance ce que vous payez : pas de coûts cachés, des tarifs justes adaptés à la prestation.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { services } from '@/data/services'
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Services IT | Loïc Barthoulot',
  'Montage PC sur mesure, dépannage, nettoyage, création de site web et automatisation IA. Prestations pour particuliers et petites entreprises.',
  { path: '/services' }
)
</script>