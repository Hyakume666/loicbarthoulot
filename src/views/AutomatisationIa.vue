<template>
  <section class="section">
    <div class="contenu">
      <p class="retour">
        <router-link to="/services">Retour aux prestations</router-link>
      </p>

      <header class="tete">
        <h1>Digitalisation de processus</h1>
        <p class="tete__intro">
          J'analyse ce qui se fait à la main dans votre entreprise, puis
          j'automatise ce qui est répétitif.
        </p>
      </header>

      <div class="sections">
        <section class="entree">
          <h2 class="entree__titre">Comment ça se passe</h2>
          <p>
            Une partie du travail administratif se répète chaque semaine :
            ressaisir une commande, remettre en forme un document, reporter
            des chiffres d'un fichier à un autre. Je regarde comment votre
            entreprise travaille réellement, puis je construis l'outil qui
            prend en charge ce qui est répétitif.
          </p>
          <p>
            Le but est de supprimer la ressaisie et les écarts qu'elle
            entraîne. Vos outils actuels restent en place.
          </p>
        </section>

        <section class="entree">
          <h2 class="entree__titre">Ce que ça peut couvrir</h2>
          <div class="colonnes colonnes--2">
            <div>
              <h3>Génération de documents</h3>
              <p>
                Devis, factures ou comptes rendus produits à partir des
                données déjà saisies, plutôt que ressaisis.
              </p>
            </div>
            <div>
              <h3>Centralisation des données</h3>
              <p>
                Une seule base pour les informations aujourd'hui réparties
                entre plusieurs fichiers.
              </p>
            </div>
            <div>
              <h3>Suppression de la ressaisie</h3>
              <p>
                Les données passent d'une étape à l'autre sans être retapées,
                ce qui supprime les écarts.
              </p>
            </div>
            <div>
              <h3>Suivi d'un dossier</h3>
              <p>
                Chaque dossier a un état visible, de son arrivée à sa clôture.
              </p>
            </div>
          </div>
        </section>

        <section class="entree">
          <h2 class="entree__titre">Ce qui est inclus</h2>
          <ul class="liste colonnes colonnes--2">
            <li>Analyse du processus tel qu'il se déroule aujourd'hui</li>
            <li>Modélisation et validation avec vous avant développement</li>
            <li>Tests sur vos données réelles</li>
            <li>Prise en main par vos équipes</li>
          </ul>
        </section>
      </div>
    </div>
  </section>

  <section class="section section--net">
    <div class="contenu">
      <h2>Décrivez-moi une tâche qui vous prend du temps</h2>
      <p class="conclusion">
        Dix minutes suffisent pour dire si elle peut être automatisée.
      </p>
      <router-link to="/contact" class="bouton">Me contacter</router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Digitalisation de processus | Loïc Barthoulot',
  'Analyse de vos processus, puis automatisation de ce qui est répétitif : génération de documents, centralisation des données, suivi des dossiers.',
  { path: '/services/automatisation-ia' }
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
.entree p + ul,
.entree p + .colonnes {
  margin-top: var(--e-4);
}

.entree h3 {
  margin-bottom: var(--e-2);
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
