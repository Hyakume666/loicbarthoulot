<template>
  <a class="saut-contenu" href="#contenu">Aller au contenu</a>
  <div class="d-flex flex-column min-vh-100">
    <Header />
    <main id="contenu" class="flex-grow-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
