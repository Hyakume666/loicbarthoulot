<template>
  <div class="home-wrapper">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h1 class="hero-title fade-in-up">
              Loïc Barthoulot – Spécialiste PC & Développeur Web junior
            </h1>
            <!-- Variantes d'accroches pour A/B testing :
            <h1 class="hero-title fade-in-up">
              Des PC optimisés, des sites performants, une expertise à votre service
            </h1>
            <h1 class="hero-title fade-in-up">
              Montage, dépannage et création web – l'informatique sur mesure
            </h1>
            <h1 class="hero-title fade-in-up">
              Allier passion du hardware et savoir-faire digital
            </h1>
            <h1 class="hero-title fade-in-up">
              Votre partenaire IT : du PC au Web
            </h1>
            -->
            
            <p class="hero-description fade-in-up delay-1">
              Étudiant en Informatique de Gestion, passionné d'IT.<br>
              J'aide particuliers et petites structures à monter, dépanner et optimiser leurs PC 
              et je crée des sites web modernes et performants adaptés à leurs besoins.
            </p>
            
            <div class="hero-cta fade-in-up delay-2">
              <router-link to="/services" class="btn btn-primary-custom me-3">
                <i class="fas fa-cogs me-2"></i>
                Voir mes services
              </router-link>
              <router-link to="/cv" class="btn btn-outline-primary-custom">
                <i class="fas fa-file-alt me-2"></i>
                Mon CV
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="final-cta-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="cta-title fade-in-up">
              Un projet, une panne ou une idée ? Discutons-en !
            </h2>
            <div class="fade-in-up delay-1">
              <router-link to="/contact" class="btn btn-primary-custom btn-lg">
                Me contacter
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Page d'accueil sobre et professionnelle
</script>

<style scoped>
.home-wrapper {
  background-color: var(--bg);
  min-height: 100vh;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}

/* Hero Section */
.hero-section {
  background: 
    linear-gradient(135deg, rgba(11, 13, 16, 0.85) 0%, rgba(21, 26, 31, 0.9) 100%),
    url('https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=1920') center/cover;
  padding: 200px 0 120px 0;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(11, 94, 215, 0.15) 0%, transparent 50%);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 2rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-description {
  font-size: 1.25rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.hero-cta {
  margin-top: 2rem;
}

/* Final CTA Section */
.final-cta-section {
  padding: 100px 0;
  background-color: var(--bg);
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 2rem;
  line-height: 1.3;
}

/* Animations */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
}

.fade-in-up.delay-1 {
  animation-delay: 0.2s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .home-wrapper {
    padding-top: 70px;
  }
  
  .hero-section {
    padding: 80px 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .skills-section {
    padding: 60px 0;
  }
  
  .cta-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-cta .btn {
    display: block;
    margin: 0 0 1rem 0;
    width: 100%;
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-cta .me-3 {
    margin-right: 0 !important;
    margin-bottom: 1rem;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .cta-title {
    font-size: 1.75rem;
  }
  
  .hero-cta .btn {
    width: 100%;
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  
  .hero-cta .me-3 {
    margin-right: 0 !important;
    margin-bottom: 1rem;
  }
}

/* Media queries spécifiques pour iPhone 16, Galaxy S24, Pixel 9 */
@media (max-width: 430px) {
  .hero-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .hero-cta .btn {
    width: 100% !important;
    max-width: 280px !important;
    margin: 0 !important;
    display: block !important;
  }
  
  .hero-cta .me-3 {
    margin-right: 0 !important;
    margin-bottom: 0 !important;
  }
  
  .final-cta-section {
    margin-bottom: 60px;
  }
}

/* Media query ultra-spécifique pour les très petits écrans */
@media (max-width: 390px) {
  .hero-cta {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    width: 100% !important;
  }
  
  .hero-cta .btn {
    width: 90% !important;
    max-width: 260px !important;
    margin: 0 auto !important;
    display: block !important;
    text-align: center !important;
  }
  
  .final-cta-section {
    margin-bottom: 60px;
  }
}
</style>