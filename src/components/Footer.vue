<template>
  <footer class="pied">
    <div class="contenu pied__rangee">
      <p class="pied__mention">© {{ annee }} Loïc Barthoulot</p>

      <nav class="pied__nav" aria-label="Pied de page">
        <router-link to="/services">Ce que je fais</router-link>
        <router-link to="/cv">Parcours</router-link>
        <router-link to="/contact">Contact</router-link>
        <a
          href="https://www.linkedin.com/in/loic-barthoulot/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg class="pied__icone" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95C20.6 8.75 22 10.9 22 14.1V21h-4v-6.1c0-1.46-.03-3.34-2.05-3.34-2.05 0-2.36 1.6-2.36 3.24V21H9V9Z"
            />
          </svg>
          LinkedIn
        </a>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
const annee = new Date().getFullYear()
</script>

<style scoped>
.pied {
  background-color: var(--craie);
  border-top: 1px solid var(--trait);
  padding-block: var(--e-6);
  font-size: var(--pas-0);
  color: var(--texte-faible);
}

.pied__rangee {
  display: flex;
  flex-wrap: wrap;
  gap: var(--e-4) var(--e-6);
  align-items: baseline;
  justify-content: space-between;
}

.pied__mention {
  margin: 0;
}

.pied__nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--e-5);
}

.pied__nav a {
  display: inline-flex;
  align-items: center;
  gap: var(--e-2);
  color: var(--texte-faible);
  text-decoration: none;
  transition: color var(--duree) ease;
}

.pied__nav a:hover {
  color: var(--texte);
}

.pied__icone {
  width: 1em;
  height: 1em;
}
</style>
