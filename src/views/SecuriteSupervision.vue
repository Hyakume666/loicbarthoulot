<template>
  <section class="hero hero--compact">
    <div class="container">
      <router-link to="/services" class="hero__retour">
        ← Retour aux prestations
      </router-link>
      <div class="row">
        <div class="col-lg-8">
          <p class="surtitre">Sécurité et supervision</p>
          <h1 class="hero__titre mb-3">Savoir ce qui se passe sur vos postes</h1>
          <p class="hero__texte mb-0">
            Une protection installée ne sert à rien si personne ne regarde ce
            qu'elle remonte. Prestation assurée en partenariat avec PC-Shop
            Informatique.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="row g-4 mb-4">
        <div class="col-lg-7">
          <div class="panneau h-100">
            <h2 class="h5 mb-3">Comment c'est organisé</h2>
            <p class="text-body-secondary">
              Depuis 2023, j'assure la supervision de la sécurité opérationnelle
              sur le parc client de PC-Shop Informatique, en mandat indépendant.
              J'administre leur console de détection et de réponse, je surveille
              les détections, je qualifie les alertes et je traite celles qui le
              demandent. Je suis l'état de protection des postes et je remonte
              les cas qui nécessitent une intervention.
            </p>
            <p class="text-body-secondary mb-0">
              Cette prestation vous est proposée <strong>dans ce cadre</strong> :
              l'infrastructure de supervision et les licences sont celles de
              PC-Shop Informatique, et c'est moi qui suis vos postes au
              quotidien. Vous avez donc un interlocuteur direct et une structure
              établie derrière.
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
            <h2 class="h5 mb-3">Pourquoi ça compte pour une PME</h2>
            <p class="text-body-secondary mb-0">
              La plupart des petites structures ont un antivirus et personne
              pour lire ce qu'il signale. Une alerte non traitée est une alerte
              inutile.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="panneau h-100">
            <h2 class="h5 mb-3">Le cadre légal suit</h2>
            <p class="text-body-secondary mb-0">
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
  'Supervision de la sécurité de vos postes : surveillance des détections, qualification et traitement des alertes. En partenariat avec PC-Shop Informatique.',
  { path: '/services/securite-supervision' }
)
</script>
