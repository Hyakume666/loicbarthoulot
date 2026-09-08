<template>
  <!-- Bloc d'ouverture : l'élément mémorable du site. -->
  <section class="bloc bloc--accueil">
    <div class="contenu">
      <h1 class="bloc__titre">
        Des <span class="bloc__appui">applications métier</span>
        pour des PME romandes.
      </h1>

      <p class="bloc__texte accueil__texte">
        Je regarde comment votre entreprise travaille, puis je construis
        l'outil qui prend en charge ce qui se répète.
      </p>

      <p class="bloc__pied accueil__pied">
        <span>Neuchâtel, Suisse romande</span>
        <router-link to="/contact">Écrire</router-link>
      </p>
    </div>
  </section>

  <!-- Ce que je fais -->
  <section class="section">
    <div class="contenu">
      <h2 class="accueil__section-titre">Ce que je fais</h2>

      <div class="accueil__entrees">
        <article class="entree">
          <h3 class="entree__titre">Applications métier</h3>
          <p>
            Un outil développé sur mesure, qui suit le fonctionnement réel
            de l'entreprise plutôt que l'inverse.
          </p>
        </article>

        <article class="entree">
          <h3 class="entree__titre">
            <router-link to="/services/automatisation-ia">
              Digitalisation de processus
            </router-link>
          </h3>
          <p>
            J'analyse ce qui se fait à la main, puis j'automatise ce qui
            est répétitif, sans changer vos outils.
          </p>
        </article>

        <article class="entree">
          <h3 class="entree__titre">
            <router-link to="/services/creation-site-web">
              Sites web
            </router-link>
          </h3>
          <p>
            Site vitrine adapté au mobile, avec référencement de base,
            formulaire de contact et mise en ligne.
          </p>
        </article>

        <article class="entree">
          <h3 class="entree__titre">
            <router-link to="/services/support-materiel">
              Support et matériel
            </router-link>
          </h3>
          <p>
            Assemblage de postes de travail, dépannage matériel et
            logiciel, récupération de données et entretien.
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- Le différenciateur : le parcours commercial avant l'informatique. -->
  <section class="bloc">
    <div class="contenu">
      <h2 class="bloc__titre accueil__titre-second">
        Avant l'informatique, un CFC d'employé de commerce.
      </h2>
      <p class="bloc__texte accueil__texte">
        C'est ce qui me permet de parler processus, comptabilité et
        contraintes d'organisation avec un client, pas seulement technique.
      </p>
      <p class="bloc__pied accueil__pied">
        <span>Bachelor HES-SO en informatique de gestion, HE-Arc Neuchâtel</span>
        <router-link to="/cv">Le parcours</router-link>
      </p>
    </div>
  </section>

  <!-- Contact -->
  <section class="section">
    <div class="contenu">
      <h2>Un projet ou une question ?</h2>
      <p class="accueil__texte-clair">
        Décrivez-moi votre situation. Je réponds par écrit.
      </p>
      <router-link to="/contact" class="bouton">Me contacter</router-link>
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

<style scoped>
.accueil__texte {
  margin-top: var(--e-6);
}

.accueil__pied {
  margin-top: var(--e-8);
}

/* Le second bloc porte un texte plus long : il descend d'un pas. */
.accueil__titre-second {
  font-size: clamp(2rem, 5vw, 3.5625rem);
  max-width: 30ch;
}

.accueil__section-titre {
  margin-bottom: var(--e-7);
}

.accueil__entrees {
  display: grid;
  gap: 0;
}

@media (min-width: 48rem) {
  .accueil__entrees {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: var(--e-8);
  }

  /* Sur deux colonnes, les deux premières entrées n'ont pas de filet haut. */
  .accueil__entrees .entree:nth-child(2) {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }
}

.accueil__texte-clair {
  color: var(--texte-faible);
  margin-block: var(--e-4) var(--e-6);
}
</style>
