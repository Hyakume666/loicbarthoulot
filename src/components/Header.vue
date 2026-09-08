<template>
  <header class="bandeau" :class="{ 'bandeau--sur-bloc': surBloc }">
    <div class="contenu bandeau__rangee">
      <router-link to="/" class="bandeau__nom">Loïc Barthoulot</router-link>

      <button
        class="bandeau__bascule"
        type="button"
        :aria-expanded="ouvert"
        aria-controls="navigation"
        @click="ouvert = !ouvert"
      >
        {{ ouvert ? 'Fermer' : 'Menu' }}
      </button>

      <nav id="navigation" class="bandeau__nav" :class="{ 'est-ouvert': ouvert }">
        <router-link to="/services">Ce que je fais</router-link>
        <router-link to="/cv">Parcours</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

defineProps<{ surBloc: boolean }>()

const ouvert = ref(false)
const route = useRoute()

watch(() => route.path, () => { ouvert.value = false })
</script>

<style scoped>
.bandeau {
  position: relative;
  z-index: 10;
  background-color: var(--craie);
  border-bottom: 1px solid var(--trait);
}

/* Sur l'accueil, l'en-tête se pose sur le bloc outremer : il n'a pas de
   fond propre et hérite des rôles de couleur du bloc. */
.bandeau--sur-bloc {
  --texte: var(--blanc);
  --texte-faible: #b9bce0;
  --trait: rgb(255 255 255 / 0.22);
  --focus: var(--or);
  position: absolute;
  inset-inline: 0;
  background-color: transparent;
  border-bottom: 0;
  color: var(--texte);
}

.bandeau__rangee {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--e-4);
  padding-block: var(--e-4);
}

.bandeau__nom {
  font-weight: 600;
  font-size: var(--pas-1);
  letter-spacing: -0.01em;
  text-decoration: none;
  color: var(--texte);
}

.bandeau__nav {
  display: flex;
  gap: var(--e-5);
  font-size: var(--pas-0);
}

.bandeau__nav a {
  color: var(--texte-faible);
  text-decoration: none;
  padding-block: var(--e-1);
  border-bottom: 2px solid transparent;
  transition: color var(--duree) ease, border-color var(--duree) ease;
}

.bandeau__nav a:hover {
  color: var(--texte);
}

.bandeau__nav a.router-link-active {
  color: var(--texte);
  border-bottom-color: var(--accent);
}

.bandeau__bascule {
  display: none;
  padding: var(--e-2) var(--e-3);
  background: transparent;
  border: 1px solid var(--trait);
  border-radius: var(--rayon);
  font-size: var(--pas-0);
  color: var(--texte);
  cursor: pointer;
}

@media (max-width: 47.999rem) {
  .bandeau__bascule {
    display: block;
  }

  .bandeau__nav {
    display: none;
    flex-direction: column;
    gap: 0;
    flex-basis: 100%;
    border-top: 1px solid var(--trait);
    margin-top: var(--e-4);
  }

  .bandeau__nav.est-ouvert {
    display: flex;
  }

  .bandeau__nav a {
    padding-block: var(--e-4);
    border-bottom: 1px solid var(--trait);
  }

  .bandeau__nav a.router-link-active {
    border-bottom-color: var(--trait);
    color: var(--accent);
  }

  .bandeau__rangee {
    flex-wrap: wrap;
  }
}
</style>
