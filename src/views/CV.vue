<template>
  <div class="section-padding" style="min-height: 100vh;">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold">Mon Profil Professionnel</h1>
            <p class="lead">Découvrez mon parcours et mes compétences</p>
          </div>

          <!-- Profil -->
          <section class="mb-5">
            <div class="card card-custom">
              <div class="card-body p-4">
                <h3 class="text-primary-custom mb-3">À propos de moi</h3>
                <p>
                  Étudiant en Informatique de Gestion et passionné d'informatique depuis plus de 10 ans, 
                  je mets mes compétences techniques au service des particuliers et des entreprises. 
                  Spécialisé dans le montage, la réparation et l'optimisation de PC, ainsi que dans 
                  la création de sites web modernes, j'accompagne mes clients avec un service 
                  personnalisé et des conseils adaptés à leurs besoins.
                </p>
                <p>
                  Ma formation actuelle en Informatique de Gestion me permet d'apporter une véritable 
                  plus-value : une approche qui allie expertise technique, compréhension des enjeux 
                  métiers et vision stratégique des systèmes d'information.
                </p>
                <p>
                  Mon approche combine passion du hardware, savoir-faire technique et vision moderne 
                  du développement web pour offrir des solutions complètes et performantes.
                </p>
              </div>
            </div>
          </section>


          <!-- Compétences -->
          <section class="mb-5">
            <div class="card card-custom">
              <div class="card-body p-4">
                <h3 class="text-primary-custom mb-4">Compétences Techniques</h3>
                
                <!-- Langages & Web -->
                <div class="mb-4">
                  <h5 class="mb-3">
                    <i class="fas fa-code me-2 text-primary-custom"></i>Langages & Web
                  </h5>
                  <div class="row g-2">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Java
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>JavaScript (ES6+)
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>HTML / CSS
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>SQL
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Python
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Programmation -->
                <div class="mb-4">
                  <h5 class="mb-3">
                    <i class="fas fa-laptop-code me-2 text-primary-custom"></i>Programmation
                  </h5>
                  <div class="row g-2">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>OOP
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Développement structuré & modulaire
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Hibernate 6 + JDBC
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Design patterns
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Architecture logicielle
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Bases de données -->
                <div class="mb-4">
                  <h5 class="mb-3">
                    <i class="fas fa-database me-2 text-primary-custom"></i>Bases de données
                  </h5>
                  <div class="row g-2">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>SQL
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>SGBDR typé Oracle
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>MERISE
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>UML, BPMN
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Conteneurisation-->
                <div class="mb-4">
                  <h5 class="mb-3">
                    <i class="fas fa-docker me-2 text-primary-custom"></i>Conteneurisation
                  </h5>
                  <div class="row g-2">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Docker (images, volumes, réseaux, multi-stage builds)
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Kubernetes / K3s
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Analyse & Gestion -->
                <div class="mb-4">
                  <h5 class="mb-3">
                    <i class="fas fa-chart-line me-2 text-primary-custom"></i>Analyse & Gestion
                  </h5>
                  <div class="row g-2">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Analyse des besoins
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Analyse des processus
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Modélisation MER/MR
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>MCD / MLD / MPD
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- Hardware & Systèmes -->
          <section class="mb-5">
            <div class="card card-custom">
              <div class="card-body p-4">
                <h3 class="text-primary-custom mb-4">Hardware & Systèmes</h3>
                
                <!-- Hardware -->
                <div class="mb-4">
                  <div class="row g-2">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Assemblage PC sur mesure
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Diagnostics et réparation
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Windows 10/11 + Linux
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Réseau + Infrastructure
                        </li>
                        <li class="mb-2">
                          <i class="fas fa-check text-primary-custom me-2"></i>Virtualisation (VirtualBox/VMWare)
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
                      <h5 class="mb-0">Bachelor of Science HES-SO en Informatique de gestion</h5>
                      <span class="badge bg-primary">2024 - 2027</span>
                    </div>
                    <p class="mb-2">Business Information Technology</p>
                    <p class="mb-2">
                      <strong>Actuellement en 3ème année sur 4</strong> - Formation axée sur l'alliance entre technologies de l'information et gestion d'entreprise.
                    </p>
                    <div class="row g-3 mt-2">
                      <div class="col-md-6">
                        <p class="small mb-1"><strong>Domaines d'études :</strong></p>
                        <ul class="small">
                          <li>Développement logiciel</li>
                          <li>Gestion de projets IT</li>
                          <li>Bases de données</li>
                        </ul>
                      </div>
                      <div class="col-md-6">
                        <p class="small mb-1"><strong>Spécialisations :</strong></p>
                        <ul class="small">
                          <li>Systèmes d'information</li>
                          <li>Analyse métier</li>
                          <li>Technologies web</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Expériences -->
          <section class="mb-5">
            <div class="card card-custom">
              <div class="card-body p-4">
                <h3 class="text-primary-custom mb-4">Expérience Professionnelle</h3>
                <div class="timeline">
                  <div class="timeline-item">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="mb-0">Services Informatiques Freelance</h5>
                      <span class="badge bg-primary">2020 - Présent</span>
                    </div>
                    <p class="mb-2">Entrepreneur indépendant</p>
                    <ul>
                      <li>Montage et dépannage PC pour particuliers et petites entreprises</li>
                      <li>Création de sites web vitrine modernes et performants</li>
                      <li>Conseil en achat de matériel informatique</li>
                      <li>Formation clients sur l'utilisation et la maintenance</li>
                      <li>Support technique et accompagnement personnalisé</li>
                    </ul>
                  </div>
                  <div class="timeline-item">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="mb-0">Technicien Informatique</h5>
                      <span class="badge bg-secondary">2018 - 2020</span>
                    </div>
                    <p class="mb-2">Société de services informatiques</p>
                    <ul>
                      <li>Maintenance du parc informatique d'entreprise</li>
                      <li>Support utilisateur niveau 1 et 2</li>
                      <li>Gestion des incidents et résolution de problèmes</li>
                      <li>Installation et configuration de postes de travail</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Call to action pour CV complet -->
          <section class="mb-5">
            <div class="card card-custom highlight-card">
              <div class="card-body p-4 text-center">
                <div class="icon-feature">📄</div>
                <h3 class="text-primary-custom mb-3">CV Complet Disponible</h3>
                <p class="mb-4">
                  Vous êtes un employeur ou un potentiel partenaire d'affaires ? 
                  Mon CV détaillé avec formations, certifications et références 
                  est disponible sur demande.
                </p>
                <div class="row g-3 justify-content-center">
                  <div class="col-auto">
                    <router-link to="/contact" class="btn btn-primary-custom">
                      <i class="fas fa-envelope me-2"></i>
                      Demander mon CV complet
                    </router-link>
                  </div>
                  <div class="col-auto">
                    <a 
                      href="https://linkedin.com/in/loic-barthoulot" 
                      class="btn btn-outline-primary-custom"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fab fa-linkedin me-2"></i>
                      Voir mon LinkedIn
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
  'Parcours, compétences et expériences de Loïc Barthoulot, étudiant en informatique de gestion passionné d\'IT et de hardware.',
  { path: '/cv', type: 'profile' }
)
</script>

<style scoped>
.achievement-item {
  padding: 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.achievement-item:hover {
  background: rgba(11, 94, 215, 0.05);
  border-color: rgba(11, 94, 215, 0.2);
  transform: translateY(-2px);
}

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

/* Exception pour la card highlight qui peut garder un léger effet */
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
</style>