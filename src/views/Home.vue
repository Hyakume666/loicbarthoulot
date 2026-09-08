<template>
  <!-- Hero -->
  <section class="hero hero--accueil">
    <div class="container">
      <div class="row">
        <div class="col-lg-11 col-xl-10">
          <p class="surtitre">Informatique de gestion — Neuchâtel</p>
          <h1 class="hero__titre mb-4">
            Je m'occupe de l'informatique
            des <span class="hero__accent">PME romandes</span>.
          </h1>
          <p class="hero__texte mb-4">
            Du site web au poste de travail, en passant par la sécurité et
            l'automatisation de ce qui se répète.
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
            Construire, automatiser, surveiller, réparer. Selon ce dont votre
            entreprise a besoin.
          </p>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-xl-3">
          <router-link to="/services/creation-site-web" class="carte-lien">
            <h3 class="carte-lien__titre h5">Sites web</h3>
            <p class="carte-lien__texte">
              Site vitrine adapté au mobile, avec référencement de base,
              hébergement et mise en ligne.
            </p>
            <span class="carte-lien__suite">Voir le détail</span>
          </router-link>
        </div>

        <div class="col-md-6 col-xl-3">
          <router-link to="/services/digitalisation-processus" class="carte-lien">
            <h3 class="carte-lien__titre h5">Digitalisation de processus</h3>
            <p class="carte-lien__texte">
              J'analyse ce qui se fait à la main, puis j'automatise ce qui est
              répétitif.
            </p>
            <span class="carte-lien__suite">Voir le détail</span>
          </router-link>
        </div>

        <div class="col-md-6 col-xl-3">
          <router-link to="/services/securite-supervision" class="carte-lien">
            <h3 class="carte-lien__titre h5">Sécurité et supervision</h3>
            <p class="carte-lien__texte">
              Surveillance des détections sur vos postes, qualification et
              traitement des alertes.
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
  <section class="section section--ample section--surface">
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
  <section class="section section--dense">
    <div class="container">
      <div class="row gy-4 gx-4 align-items-center">
        <div class="col-lg-7">
          <p class="surtitre">Contact</p>
          <h2 class="mb-3">Un projet ou une question ?</h2>
          <p class="section__intro mb-0">
            Décrivez-moi votre situation. Je réponds par écrit.
          </p>
        </div>
        <div class="col-lg-5 text-lg-end">
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
  'Loïc Barthoulot — Informatique pour PME de Suisse romande',
  'Sites web, digitalisation de processus, sécurité et supervision, support et matériel. Prestataire informatique indépendant à Neuchâtel.',
  { path: '/' }
)
</script>
