<template>
  <div class="section-padding" style="min-height: 100vh;">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold" style="color: var(--text) !important;">Mon CV</h1>
            <p class="lead" style="color: var(--muted) !important;">Découvrez mon parcours professionnel</p>
          </div>
          
          <div class="text-center mb-5">
            <a href="/cv/BARTHOULOT_CV.pdf" class="btn btn-primary-custom" download>
              <i class="fas fa-download me-2"></i>Télécharger mon CV (PDF)
            </a>
          </div>

          <!-- Profil -->
          <section class="mb-5">
            <div class="card card-custom">
              <div class="card-body p-4">
                <h3 class="text-primary-custom mb-3">Profil</h3>
                <p style="color: var(--text) !important;">
                  Passionné d'informatique depuis plus de 10 ans, je mets mon expertise technique 
                  au service des particuliers et des entreprises. Spécialisé dans le montage, 
                  la réparation et l'optimisation de PC, j'accompagne mes clients avec un 
                  service personnalisé et des conseils adaptés à leurs besoins.
                </p>
              </div>
            </div>
          </section>

          <!-- Coordonnées -->
          <section class="mb-5">
            <div class="card card-custom">
              <div class="card-body p-4">
                <h3 class="text-primary-custom mb-3">Coordonnées</h3>
                <div class="row">
                  <div class="col-md-6">
                    <p style="color: var(--text) !important;"><i class="fas fa-envelope me-2" style="color: var(--primary);"></i> barthoulot12@gmail.com</p>
                    <p style="color: var(--text) !important;"><i class="fas fa-phone me-2" style="color: var(--primary);"></i> À obtenir après un premier contact</p>
                  </div>
                  <div class="col-md-6">
                    <p style="color: var(--text) !important;"><i class="fas fa-map-marker-alt me-2" style="color: var(--primary);"></i> La Chaux-de-Fonds, Suisse</p>
                    <p style="color: var(--text) !important;"><i class="fab fa-linkedin me-2" style="color: var(--primary);"></i> LinkedIn Profile</p>
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
                <div class="row g-4">
                  <div class="col-md-6">
                    <h5 class="mb-3" style="color: var(--text) !important;">Matériel</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2" style="color: var(--text) !important;"><i class="fas fa-check text-primary-custom me-2"></i>Assemblage PC</li>
                      <li class="mb-2" style="color: var(--text) !important;"><i class="fas fa-check text-primary-custom me-2"></i>Diagnostic pannes</li>
                      <li class="mb-2" style="color: var(--text) !important;"><i class="fas fa-check text-primary-custom me-2"></i>Réparation composants</li>
                      <li class="mb-2" style="color: var(--text) !important;"><i class="fas fa-check text-primary-custom me-2"></i>Overclocking</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h5 class="mb-3" style="color: var(--text) !important;">Logiciel</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2" style="color: var(--text) !important;"><i class="fas fa-check text-primary-custom me-2"></i>Windows 10/11</li>
                      <li class="mb-2" style="color: var(--text) !important;"><i class="fas fa-check text-primary-custom me-2"></i>Installation logiciels</li>
                      <li class="mb-2" style="color: var(--text) !important;"><i class="fas fa-check text-primary-custom me-2"></i>Antivirus / Sécurité</li>
                      <li class="mb-2" style="color: var(--text) !important;"><i class="fas fa-check text-primary-custom me-2"></i>Récupération données</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Expériences -->
          <section class="mb-5">
            <div class="card card-custom">
              <div class="card-body p-4">
                <h3 class="text-primary-custom mb-4">Expériences</h3>
                <div class="timeline">
                  <div class="timeline-item">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="mb-0" style="color: var(--text) !important;">Technicien PC Freelance</h5>
                      <span class="badge bg-primary">2020 - Présent</span>
                    </div>
                    <p class="mb-2" style="color: var(--text) !important;">Services informatiques à domicile</p>
                    <ul style="color: var(--text) !important;">
                      <li>Montage et dépannage PC pour particuliers</li>
                      <li>Conseil en achat de matériel informatique</li>
                      <li>Formation clients sur l'utilisation</li>
                    </ul>
                  </div>
                  <div class="timeline-item">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="mb-0" style="color: var(--text) !important;">Technicien Informatique</h5>
                      <span class="badge bg-secondary">2018 - 2020</span>
                    </div>
                    <p class="mb-2" style="color: var(--text) !important;">Société de services informatiques</p>
                    <ul style="color: var(--text) !important;">
                      <li>Maintenance parc informatique entreprise</li>
                      <li>Support utilisateur niveau 1 et 2</li>
                      <li>Gestion des incidents</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Formation -->
          <section class="mb-5">
            <div class="card card-custom">
              <div class="card-body p-4">
                <h3 class="text-primary-custom mb-3">Formation</h3>
                <div class="mb-3">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <h5 class="mb-0" style="color: var(--text) !important;">BTS Systèmes Informatiques aux Organisations</h5>
                    <span class="badge bg-primary">2016 - 2018</span>
                  </div>
                  <p style="color: var(--text) !important;">Lycée Technique - Mention Bien</p>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <h5 class="mb-0" style="color: var(--text) !important;">Bac Professionnel Systèmes Électroniques Numériques</h5>
                    <span class="badge bg-secondary">2014 - 2016</span>
                  </div>
                  <p style="color: var(--text) !important;">Lycée Professionnel</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Langues -->
          <section class="mb-5">
            <div class="card card-custom">
              <div class="card-body p-4">
                <h3 class="text-primary-custom mb-3">Langues</h3>
                <div class="row">
                  <div class="col-md-6">
                    <p style="color: var(--text) !important;"><strong>Français :</strong> <span style="color: var(--text) !important;">Natif</span></p>
                  </div>
                  <div class="col-md-6">
                    <p style="color: var(--text) !important;"><strong>Anglais :</strong> <span style="color: var(--text) !important;">Technique (B1)</span></p>
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
// Component logic here if needed
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

.sub-service-card {
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  transition: all 0.3s ease;
}

.sub-service-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  border-color: var(--primary);
}

.hero-section h1 {
  color: var(--text) !important;
}

.hero-section .lead {
  color: var(--muted) !important;
}

.section-title {
  color: var(--text) !important;
}

.section-subtitle {
  color: var(--muted) !important;
}

.form-control::placeholder {
  color: var(--muted) !important;
}

/* Désactiver l'effet hover sur le formulaire de contact */
.contact-form-card:hover {
  transform: none !important;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
  border-color: var(--border) !important;
}

.contact-form-card::before {
  opacity: 0 !important;
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

/* Timeline responsive pour mobiles spécifiques */
@media (max-width: 430px) {
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
    font-size: 0.75rem;
    padding: 4px 8px;
  }
  
  .timeline-item h5 {
    font-size: 1.1rem;
    margin-bottom: 4px;
  }
  
  .timeline-item p {
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
  
  .timeline-item ul {
    font-size: 0.85rem;
    padding-left: 16px;
  }
  
  .timeline-item ul li {
    margin-bottom: 4px;
  }
}

@media (max-width: 390px) {
  .timeline-item {
    padding: 12px;
    margin-bottom: 16px;
  }
  
  .timeline-item h5 {
    font-size: 1rem;
  }
  
  .timeline-item p {
    font-size: 0.85rem;
  }
  
  .timeline-item ul {
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .home-wrapper {
    padding-top: 70px;
  }
  
  .section-padding {
    padding: 60px 0;
  }
  
  .navbar-nav .nav-link {
    margin: 5px 0;
  }
  
  /* Timeline responsive pour mode Responsive */
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
  
  .timeline-item h5 {
    font-size: 1.1rem;
    margin-bottom: 4px;
  }
  
  .timeline-item p {
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
  
  .timeline-item ul {
    font-size: 0.85rem;
    padding-left: 16px;
  }
  
  .timeline-item ul li {
    margin-bottom: 4px;
  }
}
</style>