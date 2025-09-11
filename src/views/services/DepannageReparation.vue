<template>
  <div class="section-padding" style="background-color: var(--bg) !important; min-height: 100vh;">
    <div class="container">
      <!-- Bouton retour -->
      <div class="mb-4">
        <router-link to="/services" class="btn btn-primary-custom">
          <i class="fas fa-arrow-left me-2"></i>Retour aux services
        </router-link>
      </div>
      
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold" style="color: var(--text) !important;">Dépannage & Réparation</h1>
        <p class="lead" style="color: var(--muted) !important;">
          Diagnostic et réparation de tous types de pannes informatiques
        </p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <!-- Description principale -->
          <div class="card card-custom mb-5">
            <div class="card-body p-4">
              <div class="text-center mb-4">
                <div class="icon-feature">🔧</div>
              </div>
              <h3 class="text-primary-custom text-center mb-4">Expertise en dépannage informatique</h3>
              <p style="color: var(--text) !important;" class="mb-4">
                Votre ordinateur ne démarre plus ? Il est lent ou présente des dysfonctionnements ? 
                Je diagnostique et répare tous types de pannes matérielles et logicielles avec 
                efficacité et transparence.
              </p>
              <p style="color: var(--text) !important;">
                <strong>Intervention rapide :</strong> Disponible 7j/7 pour vos urgences informatiques.
              </p>
            </div>
          </div>

          <!-- Types de pannes -->
          <div class="row g-4 mb-5">
            <div class="col-md-6" v-for="panne in typesPannes" :key="panne.id">
              <div class="card card-custom h-100">
                <div class="card-body p-4 text-center">
                  <div class="icon-feature">{{ panne.icon }}</div>
                  <h5 class="card-title">{{ panne.title }}</h5>
                  <p class="card-text text-muted">{{ panne.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Prestations incluses -->
          <div class="card card-custom mb-5">
            <div class="card-body p-4">
              <h3 class="text-primary-custom mb-4">Prestations incluses</h3>
              <div class="row g-3">
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span style="color: var(--text) !important;">Diagnostic complet gratuit</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span style="color: var(--text) !important;">Réparation sur place ou en atelier</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span style="color: var(--text) !important;">Récupération de données</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span style="color: var(--text) !important;">Remplacement de composants</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span style="color: var(--text) !important;">Tests de stabilité</span>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-check text-primary-custom me-2"></i><span style="color: var(--text) !important;">Garantie sur les réparations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <!-- Call to action -->
          <div class="text-center">
            <h3 class="mb-4" style="color: var(--text) !important;">Votre PC a un problème ?</h3>
            <p class="mb-4" style="color: var(--muted) !important;">
              Contactez-moi pour un diagnostic gratuit et une réparation rapide
            </p>
            <router-link to="/contact" class="btn btn-primary-custom btn-lg">
              Demander un diagnostic gratuit
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const typesPannes = ref([
  {
    id: 1,
    icon: '💻',
    title: 'Pannes matérielles',
    description: 'Composants défaillants, surchauffe, problèmes d\'alimentation'
  },
  {
    id: 2,
    icon: '🖥️',
    title: 'Problèmes d\'affichage',
    description: 'Écran noir, artefacts graphiques, résolution incorrecte'
  },
  {
    id: 3,
    icon: '🔄',
    title: 'Problèmes de démarrage',
    description: 'PC qui ne démarre pas, écrans bleus, redémarrages'
  },
  {
    id: 4,
    icon: '🐌',
    title: 'Lenteurs système',
    description: 'PC lent, programmes qui plantent, performances dégradées'
  }
])
</script>