<template>
  <!-- Hero -->
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <p class="surtitre">Informatique de gestion — Neuchâtel</p>
          <h1 class="hero__titre mb-4">
            Des <span class="hero__accent">applications métier</span>
            pour des PME romandes.
          </h1>
          <p class="hero__texte mb-4">
            Je regarde comment votre entreprise travaille, puis je construis
            l'outil qui prend en charge ce qui se répète.
          </p>
          <div class="d-flex flex-wrap gap-3">
            <router-link to="/services" class="btn btn-primary">
              Ce que je fais
            </router-link>
            <router-link to="/cv" class="btn btn-outline-light">
              Mon parcours
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Prestations -->
  <section class="section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-7">
          <p class="surtitre">Prestations</p>
          <h2 class="mb-3">Quatre façons d'intervenir</h2>
          <p class="section__intro mb-0">
            De l'analyse d'un processus au poste de travail, en passant par
            l'outil qui fait le lien.
          </p>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-xl-3">
          <div class="panneau h-100">
            <h3 class="carte-lien__titre h5">Applications métier</h3>
            <p class="text-body-secondary mb-0">
              Un outil développé sur mesure, qui suit le fonctionnement réel
              de l'entreprise plutôt que l'inverse.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <router-link to="/services/automatisation-ia" class="carte-lien">
            <h3 class="carte-lien__titre h5">Digitalisation de processus</h3>
            <p class="carte-lien__texte">
              J'analyse ce qui se fait à la main, puis j'automatise ce qui est
              répétitif.
            </p>
            <span class="carte-lien__suite">Voir le détail</span>
          </router-link>
        </div>

        <div class="col-md-6 col-xl-3">
          <router-link to="/services/creation-site-web" class="carte-lien">
            <h3 class="carte-lien__titre h5">Sites web</h3>
            <p class="carte-lien__texte">
              Site vitrine adapté au mobile, avec référencement de base et mise
              en ligne.
            </p>
            <span class="carte-lien__suite">Voir le détail</span>
          </router-link>
        </div>

        <div class="col-md-6 col-xl-3">
          <router-link to="/services/support-materiel" class="carte-lien">
            <h3 class="carte-lien__titre h5">Support et matériel</h3>
            <p class="carte-lien__texte">
              Assemblage de postes de travail, dépannage, récupération de
              données et entretien.
            </p>
            <span class="carte-lien__suite">Voir le détail</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Le différenciateur -->
  <section class="section section--surface">
    <div class="container">
      <div class="row gy-5 gx-4 align-items-center">
        <div class="col-lg-6">
          <p class="surtitre">Ce qui me distingue</p>
          <h2 class="mb-3">
            Avant l'informatique, un CFC d'employé de commerce.
          </h2>
          <p class="text-body-secondary mb-0">
            C'est ce qui me permet de parler processus, comptabilité et
            contraintes d'organisation avec un client, pas seulement
            technique. L'analyse du besoin vient avant le développement.
          </p>
        </div>

        <div class="col-lg-5 offset-lg-1">
          <div class="panneau">
            <h3 class="h6 text-body-secondary mb-3">Formation en cours</h3>
            <p class="fw-semibold mb-1">
              Bachelor HES-SO en informatique de gestion
            </p>
            <p class="entree-cv__lieu mb-4">
              HE-Arc, Neuchâtel — dernière année
            </p>
            <ul class="liste-marquee">
              <li>Développement logiciel et technologies web</li>
              <li>Bases de données et modélisation</li>
              <li>Analyse métier et urbanisation des SI</li>
            </ul>
            <router-link to="/cv" class="btn btn-outline-light btn-sm mt-4">
              Le parcours complet
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <p class="surtitre">Contact</p>
          <h2 class="mb-3">Un projet ou une question ?</h2>
          <p class="section__intro mb-4">
            Décrivez-moi votre situation. Je réponds par écrit.
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
  'Loïc Barthoulot — Applications métier et digitalisation de processus',
  'Je construis des applications métier et j\'automatise des processus pour des PME de Suisse romande. Sites web, support et matériel.',
  { path: '/' }
)
</script>
