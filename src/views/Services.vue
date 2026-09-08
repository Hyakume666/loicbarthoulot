<template>
  <div class="section-padding" style="min-height: 100vh;">
    <div class="container">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold">Ce que je fais</h1>
        <p class="lead">
          Applications métier, digitalisation de processus, sites web et
          support informatique.
        </p>
      </div>

      <div class="row g-4">
        <div class="col-lg-4 col-md-6" v-for="service in services" :key="service.id">
          <router-link :to="service.link" class="text-decoration-none">
            <div class="card card-custom h-100 service-card-clickable">
            <img :src="service.image" class="card-img-top card-img-service" :alt="service.title" loading="lazy">
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
            <div class="icon-feature"><i class="fas fa-bolt"></i></div>
            <h5>L'analyse avant le développement</h5>
            <p>Je commence par comprendre comment votre entreprise travaille. L'outil vient ensuite, et il suit votre fonctionnement plutôt que l'inverse.</p>
          </div>
          <div class="col-md-4 text-center">
            <div class="icon-feature"><i class="fas fa-shield-alt"></i></div>
            <h5>Un seul interlocuteur</h5>
            <p>Vous parlez à la personne qui analyse le besoin, développe l'outil et le met en ligne.</p>
          </div>
          <div class="col-md-4 text-center">
            <div class="icon-feature"><i class="fas fa-tag"></i></div>
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
  'Ce que je fais | Loïc Barthoulot',
  'Applications métier, digitalisation de processus, création de site web, support et matériel informatique pour PME de Suisse romande.',
  { path: '/services' }
)
</script>