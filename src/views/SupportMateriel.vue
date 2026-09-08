<template>
  <div class="section-padding support-page" style="min-height: 100vh;">
    <div class="container">
      <!-- Bouton retour -->
      <div class="mb-4">
        <router-link to="/services" class="btn btn-primary-custom">
          <i class="fas fa-arrow-left me-2"></i>Retour aux services
        </router-link>
      </div>

      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold">Support et matériel</h1>
        <p class="lead">
          Postes de travail, dépannage et entretien, pour les particuliers
          comme pour les PME.
        </p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">

          <!-- Assemblage -->
          <div class="card card-custom mb-5">
            <div class="card-body p-4">
              <h2 class="text-primary-custom mb-3">Assemblage</h2>
              <p class="mb-3">
                J'assemble des postes de travail et des machines de jeu, selon
                l'usage et le budget. Chaque machine est testée avant livraison,
                et les réglages BIOS et système sont faits à la remise.
              </p>
              <p class="mb-0">
                Le choix des composants se décide avec vous, à partir de ce que
                la machine devra faire.
              </p>
            </div>
          </div>

          <!-- Dépannage -->
          <div class="card card-custom mb-5">
            <div class="card-body p-4">
              <h2 class="text-primary-custom mb-3">Dépannage</h2>
              <p class="mb-4">
                Votre ordinateur ne démarre plus, il est lent, ou il présente un
                dysfonctionnement. Je cherche l'origine de la panne, matérielle
                ou logicielle, puis je répare.
              </p>
              <div class="row g-3">
                <div class="col-md-6">
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Intervention sur place ou en atelier</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Récupération de données</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Remplacement de composants</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Tests de stabilité après réparation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Entretien -->
          <div class="card card-custom mb-5">
            <div class="card-body p-4">
              <h2 class="text-primary-custom mb-3">Entretien</h2>
              <p class="mb-4">
                Un ordinateur entretenu chauffe moins et dure plus longtemps.
                L'entretien couvre le matériel et le système.
              </p>
              <div class="row g-3">
                <div class="col-md-6">
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Dépoussiérage du boîtier</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Nettoyage des ventilateurs</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Contrôle des températures</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Suppression des fichiers temporaires</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Mise à jour des pilotes</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span>Vérification des sauvegardes</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="mt-4 mb-0">
                Un entretien tous les six à douze mois suffit dans la plupart
                des cas, selon l'environnement et l'usage.
              </p>
            </div>
          </div>

          <!-- Call to action -->
          <div class="text-center">
            <h2 class="mb-4">Une panne ou un besoin de machine ?</h2>
            <p class="mb-4">
              Décrivez-moi le symptôme ou l'usage prévu. Je suis joignable
              sept jours sur sept.
            </p>
            <router-link to="/contact" class="btn btn-primary-custom btn-lg">
              Me contacter
            </router-link>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Support et matériel | Loïc Barthoulot',
  'Assemblage de postes de travail, dépannage matériel et logiciel, récupération de données et entretien. Neuchâtel et Suisse romande.',
  { path: '/services/support-materiel', image: 'https://loicbarthoulot.ch/images/depannage.jpg' }
)
</script>

<style scoped>
/* Désactive le hover uniquement sur cette page */
.support-page .card-custom:hover {
  transform: none !important;
  box-shadow: none !important;
}
</style>
