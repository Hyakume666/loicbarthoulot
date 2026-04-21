<template>
  <div class="notfound-wrapper">
    <div class="container text-center">
      <div class="notfound-code">404</div>
      <h1 class="notfound-title">Page introuvable</h1>
      <p class="notfound-desc">Cette page n'existe pas ou a été déplacée.</p>
      <router-link to="/" class="btn btn-primary-custom btn-lg">
        <i class="fas fa-home me-2"></i>Retour à l'accueil
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta('Page introuvable | Loïc Barthoulot', '')
</script>

<style scoped>
.notfound-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg);
}

.notfound-code {
  font-size: 8rem;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, var(--primary), #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.notfound-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1rem;
}

.notfound-desc {
  color: var(--muted);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}
</style>
