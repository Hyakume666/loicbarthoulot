<template>
  <nav class="navbar navbar-expand-lg navbar-site sticky-top" aria-label="Navigation principale">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-2" aria-label="Loïc Barthoulot, accueil">
        <picture>
          <source :srcset="logoWebp" type="image/webp">
          <img :src="logoPng" alt="" width="36" height="36" class="rounded-1 bg-white p-1">
        </picture>
        <span class="fw-semibold fs-6 d-none d-sm-inline">Loïc Barthoulot</span>
      </router-link>

      <button
        class="navbar-toggler border-0 px-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        :aria-expanded="false"
        aria-label="Ouvrir le menu"
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
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const logoWebp = import.meta.env.BASE_URL + 'logo.webp'
const logoPng = import.meta.env.BASE_URL + 'logo.png'

const route = useRoute()

// Referme le menu mobile après une navigation.
watch(() => route.path, () => {
  const menu = document.getElementById('navigation')
  menu?.classList.remove('show')
})
</script>
