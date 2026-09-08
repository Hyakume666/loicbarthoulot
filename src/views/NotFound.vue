<template>
  <section class="bloc bloc--erreur">
    <div class="contenu">
      <p class="code">404</p>
      <h1 class="bloc__titre">Cette page n'existe pas.</h1>
      <p class="bloc__texte">
        Elle a peut-être été déplacée, ou l'adresse comporte une erreur.
      </p>
      <p class="retour">
        <router-link to="/" class="bouton">Retour à l'accueil</router-link>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Page introuvable | Loïc Barthoulot',
  'Cette page n\'existe pas ou a été déplacée.'
)
</script>

<style scoped>
.bloc--erreur {
  min-height: 70dvh;
  display: flex;
  align-items: center;
}

.code {
  font-size: var(--pas-0);
  color: var(--texte-faible);
  margin-bottom: var(--e-4);
}

.bloc--erreur .bloc__titre {
  font-size: clamp(2rem, 6vw, 4rem);
  max-width: 20ch;
}

.bloc__texte {
  margin-top: var(--e-5);
}

.retour {
  margin-top: var(--e-7);
}
</style>
