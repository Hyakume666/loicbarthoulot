<template>
  <section class="section">
    <div class="contenu">
      <p class="retour">
        <router-link to="/services">Retour aux prestations</router-link>
      </p>

      <header class="tete">
        <h1>Création de site web</h1>
        <p class="tete__intro">
          Un site vitrine adapté au mobile, mis en ligne et prêt à servir.
        </p>
      </header>

      <div class="sections">
        <section class="entree">
          <h2 class="entree__titre">Votre site vitrine</h2>
          <p>
            Je construis votre site sur mesure. Il s'affiche correctement sur
            mobile, sur tablette et sur ordinateur. Le référencement de base
            est en place, le formulaire de contact fonctionne, et je m'occupe
            de la mise en ligne.
          </p>
          <p class="mention">
            Vue 3 et TypeScript par défaut, ou une autre stack si votre besoin
            le demande.
          </p>
        </section>

        <section class="entree">
          <h2 class="entree__titre">Ce qui est inclus</h2>
          <ul class="liste colonnes colonnes--2">
            <li>Mise en page adaptée au mobile</li>
            <li>Référencement de base : titres, descriptions, plan du site</li>
            <li>Formulaire de contact</li>
            <li>Hébergement et mise en ligne</li>
          </ul>
        </section>

        <section class="entree">
          <h2 class="entree__titre">Ce à quoi je fais attention</h2>
          <p>
            Les images sont compressées, les polices et les scripts sont
            servis depuis votre site plutôt que depuis un service tiers. Les
            pages restent utilisables au clavier, et les contrastes tiennent.
          </p>
        </section>
      </div>
    </div>
  </section>

  <section class="section section--net">
    <div class="contenu">
      <h2>Parlons de votre site</h2>
      <p class="conclusion">
        Décrivez-moi votre activité et ce que le site doit faire.
      </p>
      <router-link to="/contact" class="bouton">Me contacter</router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Création de site web | Loïc Barthoulot',
  'Site vitrine adapté au mobile, avec référencement de base, formulaire de contact et mise en ligne. Vue 3 et TypeScript.',
  { path: '/services/creation-site-web' }
)
</script>

<style scoped>
.retour {
  font-size: var(--pas-0);
  margin-bottom: var(--e-6);
}

.tete {
  margin-bottom: var(--e-8);
}

.tete__intro {
  margin-top: var(--e-4);
  font-size: var(--pas-2);
  color: var(--texte-faible);
  max-width: 42ch;
}

.entree p + p,
.entree p + ul {
  margin-top: var(--e-4);
}

.section--net {
  background-color: var(--blanc);
  border-top: 1px solid var(--trait);
}

.conclusion {
  margin-block: var(--e-4) var(--e-6);
  color: var(--texte-faible);
}
</style>
