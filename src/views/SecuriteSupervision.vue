<template>
  <section class="section">
    <div class="container">
      <p class="mb-4">
        <router-link to="/services" class="text-body-secondary small text-decoration-none">
          ← Retour aux prestations
        </router-link>
      </p>

      <div class="row mb-5">
        <div class="col-lg-8">
          <p class="surtitre">Sécurité et supervision</p>
          <h1 class="mb-3">Savoir ce qui se passe sur vos postes</h1>
          <p class="lead text-body-secondary mb-0">
            Une protection installée ne sert à rien si personne ne regarde ce
            qu'elle remonte.
          </p>
        </div>
      </div>

      <div class="row g-4 mb-4">
        <div class="col-lg-7">
          <div class="panneau h-100">
            <h2 class="h5 mb-3">Ce que je fais aujourd'hui</h2>
            <p class="text-body-secondary">
              Depuis 2023, j'assure la supervision de la sécurité opérationnelle
              sur le parc client de PC-Shop Informatique, en mandat indépendant.
              J'administre leur console de détection et de réponse, je surveille
              les détections, je qualifie les alertes et je traite celles qui
              le demandent.
            </p>
            <p class="text-body-secondary mb-0">
              Je suis aussi l'état de protection des postes et je remonte les
              cas qui nécessitent une intervention sur place.
            </p>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="panneau h-100">
            <h2 class="h5 mb-3">Concrètement</h2>
            <ul class="liste-marquee mb-0">
              <li>Administration d'une console de détection et de réponse (XDR / EDR)</li>
              <li>Surveillance et qualification des détections</li>
              <li>Traitement des alertes, escalade des cas sérieux</li>
              <li>Suivi de l'état de protection du parc</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-6">
          <div class="panneau h-100">
            <h3 class="h6 mb-2">Pourquoi ça compte pour une PME</h3>
            <p class="small text-body-secondary mb-0">
              La plupart des petites structures ont un antivirus et personne
              pour lire ce qu'il signale. Une alerte non traitée est une alerte
              inutile.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="panneau h-100">
            <h3 class="h6 mb-2">Le cadre légal suit</h3>
            <p class="small text-body-secondary mb-0">
              La protection des données et la gouvernance de la sécurité font
              partie de mon cursus. Un incident sur des données de clients a
              aussi des conséquences juridiques.
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
          <h2 class="mb-3">Vous ne savez pas ce qui tourne sur vos postes ?</h2>
          <p class="text-body-secondary mb-4">
            Décrivez-moi votre parc et ce qui est installé dessus. On regarde
            ensemble ce qui manque.
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
  'Sécurité et supervision | Loïc Barthoulot',
  'Supervision de la sécurité opérationnelle : administration d\'une console de détection et de réponse, qualification des alertes, suivi de l\'état de protection du parc.',
  { path: '/services/securite-supervision' }
)
</script>
