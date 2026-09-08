<template>
  <a class="saut-contenu" href="#contenu">Aller au contenu</a>
  <Header :sur-bloc="surBloc" />
  <main id="contenu" class="principal">
    <RouterView />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

// L'accueil ouvre sur un bloc outremer pleine hauteur : l'en-tête s'y pose
// sans fond propre. Partout ailleurs il a le fond clair de la page.
const surBloc = computed(() => route.path === '/')
</script>

<style scoped>
.principal {
  flex: 1;
}
</style>
