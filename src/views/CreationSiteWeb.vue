<template>
  <section class="hero hero--compact">
    <div class="container">
      <router-link to="/services" class="hero__retour">
        ← Retour aux prestations
      </router-link>
      <div class="row">
        <div class="col-lg-8">
          <p class="surtitre">Création de site web</p>
          <h1 class="hero__titre mb-3">Un site vitrine mis en ligne et prêt à servir</h1>
          <p class="hero__texte mb-0">
            Il s'affiche correctement sur mobile, sur tablette et sur
            ordinateur.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-7">
          <div class="panneau h-100">
            <h2 class="h5 mb-3">Ce que je livre</h2>
            <p class="text-body-secondary">
              Je construis votre site sur mesure. Le référencement de base est
              en place, le formulaire de contact fonctionne, et je m'occupe de
              la mise en ligne.
            </p>
            <ul class="liste-marquee mb-4">
              <li>Mise en page adaptée au mobile</li>
              <li>Référencement de base : titres, descriptions, plan du site</li>
              <li>Formulaire de contact</li>
              <li>Hébergement et mise en ligne</li>
            </ul>
            <p class="small text-body-secondary mb-0">
              Vue 3 et TypeScript par défaut, ou une autre stack si votre
              besoin le demande.
            </p>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="panneau h-100">
            <h2 class="h5 mb-3">Ce à quoi je fais attention</h2>
            <p class="text-body-secondary">
              Les images sont compressées, les polices et les scripts sont
              servis depuis votre site plutôt que depuis un service tiers.
            </p>
            <p class="text-body-secondary mb-0">
              Les pages restent utilisables au clavier, et les contrastes
              tiennent. Ce site s'applique à lui-même ce qu'il annonce.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--surface">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <h2 class="mb-3">Parlons de votre site</h2>
          <p class="text-body-secondary mb-4">
            Décrivez-moi votre activité et ce que le site doit faire.
          </p>
          <router-link to="/contact" class="btn btn-primary">
            Me contacter
          </router-link>
        </div>
      </div>
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
