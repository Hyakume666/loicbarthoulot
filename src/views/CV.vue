<template>
  <div class="section-padding" style="min-height: 100vh;">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold">Mon parcours</h1>
            <p class="lead">
              Applications métier, sites web et infrastructure pour PME romandes
            </p>
          </div>

          <!-- Profil -->
          <section class="mb-5">
            <div class="card card-custom">
              <div class="card-body p-4">
                <h3 class="text-primary-custom mb-3">À propos</h3>
                <p>
                  Je suis en dernière année de Bachelor HES-SO en informatique de gestion
                  à la HE-Arc, à Neuchâtel. Mon travail consiste à comprendre comment une
                  entreprise fonctionne, puis à construire l'outil qui lui fait gagner du
                  temps : application métier, automatisation d'un processus, site web ou
                  reprise d'une infrastructure existante.
                </p>
                <p>
                  Mon parcours est passé par un CFC d'employé de commerce avant l'informatique.
                  C'est ce qui me permet de parler comptabilité, processus et contraintes
                  d'organisation avec un client, pas seulement technique.
                </p>
                <p>
                  En parallèle de mes études, j'interviens en prestation indépendante pour
                  PC-Shop Informatique sur la sécurité opérationnelle de leur parc client,
                  et je réalise des mandats de développement web pour mes propres clients.
                </p>
              </div>
            </div>
          </section>

          <!-- Expériences -->
          <section class="mb-5">
            <div class="card card-custom">
              <div class="card-body p-4">
                <h3 class="text-primary-custom mb-4">Expérience</h3>
                <div class="timeline">

                  <div class="timeline-item">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="mb-0">Développement web &amp; prestations informatiques</h5>
                      <span class="badge bg-primary">2023 – aujourd'hui</span>
                    </div>
                    <p class="mb-2">Activité indépendante — loicbarthoulot.ch</p>
                    <ul>
                      <li>Conception et développement de sites web sur mesure (Vue 3 / TypeScript, WordPress)</li>
                      <li>Analyse du besoin client et cadrage avant développement</li>
                      <li>Assemblage, diagnostic et remise en état de postes de travail</li>
                      <li>Conseil en choix de matériel et accompagnement des utilisateurs</li>
                    </ul>
                  </div>

                  <div class="timeline-item">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="mb-0">Prestataire IT — sécurité opérationnelle</h5>
                      <span class="badge bg-primary">07/2023 – aujourd'hui</span>
                    </div>
                    <p class="mb-2">PC-Shop Informatique, Corcelles-Cormondrèche — mandat indépendant</p>
                    <ul>
                      <li>Administration de la console XDR (Trend Micro) sur le parc client de l'entreprise</li>
                      <li>Surveillance des détections, qualification et traitement des alertes</li>
                      <li>Suivi de l'état de protection des postes et remontée des cas nécessitant une intervention</li>
                    </ul>
                  </div>

                  <div class="timeline-item">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="mb-0">Hotline — service informatique</h5>
                      <span class="badge bg-primary">2026 – 2027</span>
                    </div>
                    <p class="mb-0">
                      HE-Arc, Neuchâtel — support de premier niveau aux étudiants et au personnel,
                      en parallèle du cursus.
                    </p>
                  </div>

                  <div class="timeline-item">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="mb-0">Stagiaire en informatique</h5>
                      <span class="badge bg-secondary">08/2020 – 08/2021</span>
                    </div>
                    <p class="mb-2">PC-Shop Informatique, Corcelles-Cormondrèche</p>
                    <ul>
                      <li>Installation et configuration de postes de travail</li>
                      <li>Diagnostic et réparation matérielle et logicielle</li>
                      <li>Support utilisateur et suivi des interventions</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <!-- Compétences -->
          <section class="mb-5">
            <div class="card card-custom">
              <div class="card-body p-4">
                <h3 class="text-primary-custom mb-4">Compétences</h3>

                <!-- Analyse & processus métier -->
                <div class="mb-4">
                  <h5 class="mb-2">
                    <i class="fas fa-chart-line me-2 text-primary-custom"></i>Analyse et processus métier
                  </h5>
                  <p class="text-muted small mb-3">
                    Traduire un fonctionnement d'entreprise en système utilisable.
                  </p>
                  <div class="row g-2">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Analyse des besoins et des processus métiers
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Modélisation BPMN et UML
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Gestion documentaire (GED)
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Conception de données : MERISE, MCD / MLD / MPD
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Progiciels de gestion intégrés (ERP)
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Conduite de projet et méthodes agiles
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Développement -->
                <div class="mb-4">
                  <h5 class="mb-2">
                    <i class="fas fa-code me-2 text-primary-custom"></i>Développement
                  </h5>
                  <p class="text-muted small mb-3">
                    Applications métier, interfaces web et bases de données.
                  </p>
                  <div class="row g-2">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Java — POO, Hibernate 6, JDBC
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>JavaScript / TypeScript, Vue 3
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>HTML / CSS, intégration responsive
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>SQL et Oracle — requêtes avancées, PL/SQL, XML
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Architecture logicielle et design patterns
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Conception d'interface et expérience utilisateur
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Infrastructure & sécurité -->
                <div class="mb-4">
                  <h5 class="mb-2">
                    <i class="fas fa-shield-halved me-2 text-primary-custom"></i>Infrastructure et sécurité
                  </h5>
                  <p class="text-muted small mb-3">
                    Déployer, faire tourner et protéger ce qui est en production.
                  </p>
                  <div class="row g-2">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Détection et réponse (XDR / EDR) en environnement client
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Gouvernance de la sécurité des SI
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Docker — images, volumes, réseaux, multi-stage builds
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Windows 10 / 11 et Linux
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Réseaux locaux et infrastructure
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Virtualisation (VMware, VirtualBox), notions Kubernetes / K3s
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Conformité -->
                <div>
                  <h5 class="mb-2">
                    <i class="fas fa-scale-balanced me-2 text-primary-custom"></i>Conformité et cadre légal
                  </h5>
                  <p class="text-muted small mb-3">
                    Utile dès qu'un site ou une application traite des données de clients.
                  </p>
                  <div class="row g-2">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Protection des données : nLPD et RGPD
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Numérique responsable et éthique des technologies
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- Formation -->
          <section class="mb-5">
            <div class="card card-custom">
              <div class="card-body p-4">
                <h3 class="text-primary-custom mb-4">Formation</h3>
                <div class="timeline">

                  <div class="timeline-item">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="mb-0">Bachelor of Science HES-SO en informatique de gestion</h5>
                      <span class="badge bg-primary">2023 – 2027</span>
                    </div>
                    <p class="mb-2">HE-Arc Gestion, Neuchâtel — cursus à temps partiel, dernière année en cours</p>
                    <div class="row g-3 mt-2">
                      <div class="col-md-6">
                        <p class="small mb-1"><strong>Axes principaux</strong></p>
                        <ul class="small">
                          <li>Développement logiciel et technologies web</li>
                          <li>Bases de données et modélisation</li>
                          <li>Analyse métier et urbanisation des SI</li>
                        </ul>
                      </div>
                      <div class="col-md-6">
                        <p class="small mb-1"><strong>Également étudiés</strong></p>
                        <ul class="small">
                          <li>Sécurité informatique et gouvernance des SI</li>
                          <li>Gestion de projet et conduite d'équipe</li>
                          <li>Comptabilité, marketing et organisation d'entreprise</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="timeline-item">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="mb-0">Bachelor HES-SO en ingénierie logicielle</h5>
                      <span class="badge bg-secondary">2021 – 2023</span>
                    </div>
                    <p class="mb-0">
                      HE-Arc, Neuchâtel — deux ans validés, puis réorientation vers l'informatique
                      de gestion pour rapprocher la technique des enjeux d'entreprise.
                    </p>
                  </div>

                  <div class="timeline-item">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="mb-0">CFC d'employé de commerce et maturité professionnelle</h5>
                      <span class="badge bg-secondary">2012 – 2015</span>
                    </div>
                    <p class="mb-0">CIFOM ESTER, La Chaux-de-Fonds</p>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <!-- Call to action -->
          <section class="mb-5">
            <div class="card card-custom highlight-card">
              <div class="card-body p-4 text-center">
                <h3 class="text-primary-custom mb-3">Aller plus loin</h3>
                <p class="mb-4">
                  Pour une version détaillée avec références et coordonnées
                  complètes, écrivez-moi.
                </p>
                <div class="row g-3 justify-content-center">
                  <div class="col-auto">
                    <router-link to="/contact" class="btn btn-primary-custom">
                      <i class="fas fa-envelope me-2"></i>
                      Me contacter
                    </router-link>
                  </div>
                  <div class="col-auto">
                    <a
                      href="https://www.linkedin.com/in/loic-barthoulot/"
                      class="btn btn-outline-primary-custom"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fab fa-linkedin me-2"></i>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Mon CV | Loïc Barthoulot',
  'Parcours, compétences et expériences de Loïc Barthoulot : applications métier, développement web et sécurité opérationnelle pour PME romandes.',
  { path: '/cv', type: 'profile' }
)
</script>

<style scoped>
.timeline-item .badge.bg-secondary {
  background-color: var(--muted) !important;
  color: var(--bg) !important;
}

.highlight-card {
  background: linear-gradient(135deg, var(--surface) 0%, rgba(11, 94, 215, 0.1) 100%);
  border: 1px solid var(--primary);
}

/* Désactiver l'effet hover sur toutes les cards de la page CV */
.card-custom:hover {
  transform: none !important;
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
  border-color: var(--border) !important;
}

.card-custom::before {
  opacity: 0 !important;
}

/* Exception pour la card highlight qui garde un léger effet */
.highlight-card:hover {
  transform: translateY(-2px) !important;
  box-shadow:
    0 8px 25px rgba(11, 94, 215, 0.2),
    0 4px 8px rgba(0, 0, 0, 0.3) !important;
}

/* Timeline responsive pour mobiles */
@media (max-width: 768px) {
  .timeline {
    padding-left: 0;
  }

  .timeline::before {
    display: none;
  }

  .timeline-item {
    margin-bottom: 20px;
    padding: 16px;
    border-left: 3px solid var(--primary);
    border-radius: 6px;
  }

  .timeline-item::before {
    display: none;
  }

  .timeline-item .d-flex {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 8px;
  }

  .timeline-item .badge {
    align-self: flex-start;
    font-size: 0.8rem;
    padding: 4px 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .highlight-card:hover {
    transform: none !important;
  }
}
</style>