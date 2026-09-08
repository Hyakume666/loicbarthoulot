<template>
  <section class="hero hero--pleine-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <p class="surtitre">Erreur 404</p>
          <h1 class="hero__titre mb-4">Cette page n'existe pas.</h1>
          <p class="hero__texte mb-3">
            Elle a peut-être été déplacée, ou l'adresse comporte une erreur.
          </p>
          <p class="adresse-manquante mb-4">
            Adresse demandée : <span>{{ route.fullPath }}</span>
          </p>
          <div class="d-flex flex-wrap gap-3">
            <router-link to="/" class="btn btn-primary">Retour à l'accueil</router-link>
            <router-link to="/services" class="btn btn-outline-light">Ce que je fais</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePageMeta } from '@/composables/usePageMeta'

const route = useRoute()
usePageMeta(
  'Page introuvable | Loïc Barthoulot',
  'Cette page n\'existe pas ou a été déplacée.'
)
</script>
