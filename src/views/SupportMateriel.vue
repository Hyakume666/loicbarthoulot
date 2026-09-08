<template>
  <section class="section">
    <div class="contenu">
      <p class="retour">
        <router-link to="/services">Retour aux prestations</router-link>
      </p>

      <header class="tete">
        <h1>Support et matériel</h1>
        <p class="tete__intro">
          Postes de travail, dépannage et entretien, pour les particuliers
          comme pour les PME.
        </p>
      </header>

      <div class="sections">
        <section class="entree">
          <h2 class="entree__titre">Assemblage</h2>
          <p>
            J'assemble des postes de travail et des machines de jeu, selon
            l'usage et le budget. Le choix des composants se décide avec vous,
            à partir de ce que la machine devra faire.
          </p>
          <p>
            Chaque machine est testée avant livraison, et les réglages BIOS et
            système sont faits à la remise.
          </p>
        </section>

        <section class="entree">
          <h2 class="entree__titre">Dépannage</h2>
          <p>
            Votre ordinateur ne démarre plus, il est lent, ou il présente un
            dysfonctionnement. Je cherche l'origine de la panne, matérielle ou
            logicielle, puis je répare.
          </p>
          <ul class="liste colonnes colonnes--2">
            <li>Intervention sur place ou en atelier</li>
            <li>Récupération de données</li>
            <li>Remplacement de composants</li>
            <li>Tests de stabilité après réparation</li>
          </ul>
        </section>

        <section class="entree">
          <h2 class="entree__titre">Entretien</h2>
          <p>
            Un ordinateur entretenu chauffe moins et dure plus longtemps.
            L'entretien couvre le matériel et le système.
          </p>
          <ul class="liste colonnes colonnes--2">
            <li>Dépoussiérage du boîtier</li>
            <li>Nettoyage des ventilateurs</li>
            <li>Contrôle des températures</li>
            <li>Suppression des fichiers temporaires</li>
            <li>Mise à jour des pilotes</li>
            <li>Vérification des sauvegardes</li>
          </ul>
          <p class="mention">
            Un entretien tous les six à douze mois suffit dans la plupart des
            cas, selon l'environnement et l'usage.
          </p>
        </section>
      </div>
    </div>
  </section>

  <section class="section section--net">
    <div class="contenu">
      <h2>Une panne ou un besoin de machine ?</h2>
      <p class="conclusion">
        Décrivez-moi le symptôme ou l'usage prévu. Je suis joignable sept
        jours sur sept.
      </p>
      <router-link to="/contact" class="bouton">Me contacter</router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Support et matériel | Loïc Barthoulot',
  'Assemblage de postes de travail, dépannage matériel et logiciel, récupération de données et entretien. Neuchâtel et Suisse romande.',
  { path: '/services/support-materiel' }
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

.entree ul + .mention {
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
