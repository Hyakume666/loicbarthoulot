<template>
  <footer class="pied-site mt-auto">
    <div class="container">
      <div class="pied-site__signature">
        <a href="mailto:contact@loicbarthoulot.ch" class="pied-site__adresse">
          contact@loicbarthoulot.ch
        </a>
        <p class="mb-0">La Chaux-de-Fonds, Neuchâtel et Suisse romande</p>
      </div>

      <div class="row gy-3 align-items-center">
        <div class="col-lg-4">
          <p class="mb-0">© {{ annee }} Loïc Barthoulot</p>
        </div>

        <div class="col-lg-8">
          <nav class="d-flex flex-wrap gap-3 gap-lg-4 justify-content-lg-end" aria-label="Pied de page">
            <router-link to="/services">Ce que je fais</router-link>
            <router-link to="/cv">Parcours</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/mentions-legales">Mentions légales</router-link>
            <router-link to="/confidentialite">Confidentialité</router-link>
            <a
              href="https://www.linkedin.com/in/loic-barthoulot/"
              target="_blank"
              rel="noopener noreferrer"
              class="d-inline-flex align-items-center gap-1"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95C20.6 8.75 22 10.9 22 14.1V21h-4v-6.1c0-1.46-.03-3.34-2.05-3.34-2.05 0-2.36 1.6-2.36 3.24V21H9V9Z"
                />
              </svg>
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const annee = new Date().getFullYear()
</script>
