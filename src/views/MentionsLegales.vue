<template>
  <section class="section">
    <div class="contenu">
      <header class="tete">
        <h1>Mentions légales</h1>
        <p class="mention">Dernière mise à jour : 8 septembre 2026</p>
      </header>

      <div class="legal">
        <section class="entree">
          <h2 class="entree__titre">Éditeur du site</h2>
          <p>
            Loïc Barthoulot, prestataire informatique indépendant, canton de
            Neuchâtel, Suisse.
          </p>
          <p>
            Contact :
            <a href="mailto:contact@loicbarthoulot.ch">contact@loicbarthoulot.ch</a>
          </p>
          <!-- À COMPLÉTER : adresse postale de l'éditeur.
               Elle est attendue dans des mentions légales suisses dès qu'une
               prestation est proposée en ligne. Ajouter la ligne ci-dessous
               une fois l'adresse connue :
               <p>Adresse : rue, NPA, localité</p> -->
        </section>

        <section class="entree">
          <h2 class="entree__titre">Responsable de la publication</h2>
          <p>Loïc Barthoulot.</p>
        </section>

        <section class="entree">
          <h2 class="entree__titre">Hébergement</h2>
          <p>
            Le site est hébergé par GitHub Pages, service de GitHub, Inc.,
            San Francisco, États-Unis. Le nom de domaine
            <span>loicbarthoulot.ch</span> pointe vers cet hébergement.
          </p>
          <p>
            L'hébergeur enregistre des journaux techniques lors de la
            consultation du site. Ce point est détaillé dans la
            <router-link to="/confidentialite">politique de confidentialité</router-link>.
          </p>
        </section>

        <section class="entree">
          <h2 class="entree__titre">Propriété intellectuelle</h2>
          <p>
            Les textes, la mise en page et le code de ce site sont l'œuvre de
            Loïc Barthoulot. Leur reproduction, même partielle, demande un
            accord écrit préalable.
          </p>
          <p>
            Les marques et noms de produits cités appartiennent à leurs
            propriétaires respectifs.
          </p>
        </section>

        <section class="entree">
          <h2 class="entree__titre">Responsabilité</h2>
          <p>
            Les informations publiées ici sont données à titre indicatif et
            peuvent évoluer. Elles ne constituent ni une offre contractuelle,
            ni un devis. Une prestation fait l'objet d'un accord écrit
            distinct.
          </p>
          <p>
            Ce site renvoie vers des sites tiers, dont le contenu échappe à
            mon contrôle. Leur consultation relève de votre responsabilité.
          </p>
        </section>

        <section class="entree">
          <h2 class="entree__titre">Droit applicable</h2>
          <p>
            Le droit suisse s'applique. Le for est au canton de Neuchâtel,
            sous réserve des règles impératives protégeant les consommateurs.
          </p>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Mentions légales | Loïc Barthoulot',
  'Éditeur, hébergement, propriété intellectuelle et droit applicable du site loicbarthoulot.ch.',
  { path: '/mentions-legales' }
)
</script>

<style scoped>
.tete {
  margin-bottom: var(--e-8);
}

.tete .mention {
  margin-top: var(--e-3);
}

.entree p + p {
  margin-top: var(--e-4);
}
</style>
