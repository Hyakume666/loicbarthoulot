<template>
  <section class="hero hero--compact">
    <div class="container">
      <router-link to="/services" class="hero__retour">
        ← Retour aux prestations
      </router-link>
      <div class="row">
        <div class="col-lg-8">
          <p class="surtitre">Support et matériel</p>
          <h1 class="hero__titre mb-3">Postes de travail, dépannage et entretien</h1>
          <p class="hero__texte mb-0">
            Pour les particuliers comme pour les PME, sur Neuchâtel et la
            Suisse romande.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <div class="panneau h-100">
            <h2 class="h5 mb-3">Assemblage</h2>
            <p class="text-body-secondary">
              J'assemble des postes de travail et des machines de jeu, selon
              l'usage et le budget. Le choix des composants se décide avec
              vous, à partir de ce que la machine devra faire.
            </p>
            <p class="text-body-secondary mb-0">
              Chaque machine est testée avant livraison, et les réglages BIOS
              et système sont faits à la remise.
            </p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="panneau h-100">
            <h2 class="h5 mb-3">Dépannage</h2>
            <p class="text-body-secondary">
              Votre ordinateur ne démarre plus, il est lent, ou il présente un
              dysfonctionnement. Je cherche l'origine de la panne, matérielle
              ou logicielle, puis je répare.
            </p>
            <ul class="liste-marquee">
              <li>Intervention sur place ou en atelier</li>
              <li>Récupération de données</li>
              <li>Remplacement de composants</li>
              <li>Tests de stabilité après réparation</li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="panneau h-100">
            <h2 class="h5 mb-3">Entretien</h2>
            <p class="text-body-secondary">
              Un ordinateur entretenu chauffe moins et dure plus longtemps.
              L'entretien couvre le matériel et le système.
            </p>
            <ul class="liste-marquee mb-3">
              <li>Dépoussiérage du boîtier</li>
              <li>Nettoyage des ventilateurs</li>
              <li>Contrôle des températures</li>
              <li>Suppression des fichiers temporaires</li>
              <li>Mise à jour des pilotes</li>
              <li>Vérification des sauvegardes</li>
            </ul>
            <p class="small text-body-secondary mb-0">
              Un entretien tous les six à douze mois suffit dans la plupart des
              cas, selon l'environnement et l'usage.
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
          <h2 class="mb-3">Une panne ou un besoin de machine ?</h2>
          <p class="text-body-secondary mb-4">
            Décrivez-moi le symptôme ou l'usage prévu. Je suis joignable sept
            jours sur sept.
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
  'Dépannage informatique à Neuchâtel | Loïc Barthoulot',
  'Dépannage matériel et logiciel, récupération de données, assemblage de postes et entretien. Neuchâtel, La Chaux-de-Fonds et Suisse romande.',
  { path: '/services/support-materiel',
    filAriane: [{ nom: 'Prestations', chemin: '/services' }, { nom: 'Support et matériel', chemin: '/services/support-materiel' }]
  }
)
</script>
