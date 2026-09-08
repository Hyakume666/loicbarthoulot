<template>
  <nav class="navbar navbar-expand-lg navbar-site sticky-top" aria-label="Navigation principale">
    <div class="container">
      <router-link to="/" class="navbar-brand marque" aria-label="Loïc Barthoulot, accueil">
        <picture>
          <source :srcset="logoWebp" type="image/webp">
          <img :src="logoPng" alt="" width="60" height="60" class="marque__logo">
        </picture>
        <span class="marque__nom">Loïc Barthoulot</span>
      </router-link>

      <button
        class="navbar-toggler border-0 px-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        :aria-label="ouvert ? 'Fermer le menu' : 'Ouvrir le menu'"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navigation" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-4 mt-3 mt-lg-0">
          <li class="nav-item">
            <router-link to="/services" class="nav-link">Ce que je fais</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cv" class="nav-link">Parcours</router-link>
          </li>
          <li class="nav-item mt-2 mt-lg-0">
            <router-link to="/contact" class="btn btn-primary btn-sm px-3">
              Me contacter
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const logoWebp = import.meta.env.BASE_URL + 'logo.webp'
const logoPng = import.meta.env.BASE_URL + 'logo.png'

const route = useRoute()
const ouvert = ref(false)

// Bootstrap pilote aria-expanded lui-même, mais pas aria-label : on suit
// ses événements pour que le libellé du bouton dise ce qu'il fait.
const ouvre = () => { ouvert.value = true }
const ferme = () => { ouvert.value = false }
let menu: HTMLElement | null = null

onMounted(() => {
  menu = document.getElementById('navigation')
  menu?.addEventListener('show.bs.collapse', ouvre)
  menu?.addEventListener('hide.bs.collapse', ferme)
})

onBeforeUnmount(() => {
  menu?.removeEventListener('show.bs.collapse', ouvre)
  menu?.removeEventListener('hide.bs.collapse', ferme)
})

// Referme le menu mobile après une navigation.
watch(() => route.path, () => {
  menu?.classList.remove('show')
  ouvert.value = false
})
</script>
