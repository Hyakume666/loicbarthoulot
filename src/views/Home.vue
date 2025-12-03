<template>
  <div class="home-wrapper">
    <!-- Hero Section -->
    <section class="hero-section">
      <!-- Particules d'arrière-plan -->
      <div class="particles-bg">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <!-- Nom principal avec effet néon -->
            <div class="hero-name-container fade-in-up">
              <h1 class="hero-name">LOÏC BARTHOULOT</h1>
              <div class="hero-name-glow"></div>
            </div>

            <!-- Titre professionnel avec animation -->
            <div class="hero-title-container fade-in-up delay-1">
              <h2 class="hero-title">
                <span class="title-line">Futur informaticien de gestion</span>
                <span class="title-separator">•</span>
                <span class="title-line">Passionné d'hardware</span>
              </h2>
            </div>


            <p class="hero-description fade-in-up delay-2">
              Étudiant en Informatique de Gestion, passionné d'IT.<br><br>
              Je donne un coup de main aux particuliers et aux petites structures pour monter, dépanner et optimiser leurs PC, automatiser leurs tâches du quotidien, et je conçois aussi des sites web modernes, rapides et parfaitement adaptés à leurs besoins, le tout à des tarifs très accessibles.
            </p>

            <div class="hero-cta fade-in-up delay-3">
              <router-link to="/services" class="btn btn-primary-custom">
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
      radial-gradient(circle at 20% 80%, rgba(11, 94, 215, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.15) 0%, transparent 50%),
      linear-gradient(135deg, #0b0d10 0%, #151a1f 100%);
  padding: 180px 0 100px 0;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* Particules animées */
.particles-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.particle {
  position: absolute;
  background: rgba(11, 94, 215, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.particle:nth-child(1) {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.particle:nth-child(2) {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.particle:nth-child(3) {
  width: 60px;
  height: 60px;
  top: 80%;
  left: 20%;
  animation-delay: 4s;
}

.particle:nth-child(4) {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 30%;
  animation-delay: 1s;
}

.particle:nth-child(5) {
  width: 40px;
  height: 40px;
  top: 10%;
  right: 20%;
  animation-delay: 3s;
}

.particle:nth-child(6) {
  width: 90px;
  height: 90px;
  top: 70%;
  left: 60%;
  animation-delay: 5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.1;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.3;
  }
}

/* Container avec z-index pour passer au-dessus des particules */
.hero-section .container {
  position: relative;
  z-index: 2;
}

/* Nom principal avec effet néon */
.hero-name-container {
  position: relative;
  margin-bottom: 1.5rem;
}

.hero-name {
  font-size: 4.5rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
  position: relative;
  z-index: 2;
  text-shadow:
      0 0 10px rgba(11, 94, 215, 0.5),
      0 0 20px rgba(11, 94, 215, 0.3),
      0 0 30px rgba(11, 94, 215, 0.2);
  background: linear-gradient(135deg, #e6e9ef 0%, #ffffff 50%, #e6e9ef 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-name-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(11, 94, 215, 0.3) 0%, rgba(79, 70, 229, 0.3) 100%);
  filter: blur(20px);
  z-index: 1;
  opacity: 0.6;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.4;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translateX(-50%) scale(1.05);
  }
}

/* Titre professionnel avec design moderne */
.hero-title-container {
  margin-bottom: 2.5rem;
  position: relative;
}

.hero-title {
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.title-line {
  color: var(--text);
  font-weight: 400;
  font-size: 1.6rem;
  position: relative;
  padding: 0 20px;
}

.title-line::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), #4f46e5);
  border-radius: 2px;
  opacity: 0.8;
}

.title-line:first-child::after {
  background: linear-gradient(90deg, var(--primary), #06b6d4);
}

.title-line:last-child::after {
  background: linear-gradient(90deg, #4f46e5, #8b5cf6);
}

/* Animation pour les lignes */
.title-line {
  animation: fadeInSlide 0.8s ease forwards;
}

.title-line:first-child {
  animation-delay: 0.3s;
}

.title-line:last-child {
  animation-delay: 0.5s;
}

@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.title-separator {
  color: var(--muted);
  font-weight: 300;
  font-size: 1.2rem;
  opacity: 0.6;
  margin: 0 10px;
}

/* Description avec meilleur espacement */
.hero-description {
  font-size: 1.2rem;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 400;
}

/* Boutons CTA améliorés */
.hero-cta {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.hero-cta .btn {
  font-size: 1.1rem;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-cta .btn:hover {
  transform: translateY(-4px) scale(1.05);
}

/* Suppression de l'ancien style hero-title */
.hero-title-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(11, 94, 215, 0.15) 0%, transparent 50%);
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

.fade-in-up.delay-2 {
  animation-delay: 0.4s;
}

.fade-in-up.delay-3 {
  animation-delay: 0.6s;
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
    padding: 100px 0 60px 0;
    text-align: center;
  }

  .hero-name {
    font-size: 2.2rem;
  }

  .hero-title {
    flex-direction: column;
    gap: 0.5rem;
  }

  .title-separator {
    display: none;
  }

  .title-line {
    display: block;
    padding: 0;
    font-size: 1.3rem;
  }

  .hero-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    padding: 0 15px;
  }

  .hero-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 0 20px;
  }

  .hero-cta .btn {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
    display: block;
    text-align: center;
  }

  .final-cta-section {
    padding: 60px 0;
    margin-bottom: 60px;
  }

  .cta-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    padding: 0 15px;
  }
}

@media (max-width: 576px) {
  .hero-name {
    font-size: 1.8rem;
  }

  .title-line {
    font-size: 1.1rem;
  }

  .cta-title {
    font-size: 1.75rem;
  }

  .hero-cta .btn {
    width: 100%;
    max-width: 260px;
    padding: 12px 20px;
    font-size: 1rem;
  }
}

/* Media queries spécifiques pour iPhone, Galaxy, Pixel */
@media (max-width: 430px) {
  .hero-section {
    padding: 80px 0 50px 0;
  }

  .hero-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0 15px;
  }

  .hero-cta .btn {
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
    display: block;
    text-align: center;
  }

  .final-cta-section {
    margin-bottom: 60px;
  }
}

/* Media query ultra-spécifique pour les très petits écrans */
@media (max-width: 390px) {
  .hero-name {
    font-size: 1.6rem;
  }

  .title-line {
    font-size: 1rem;
  }

  .hero-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    padding: 0 10px;
  }

  .hero-cta .btn {
    width: 100%;
    max-width: 240px;
    margin: 0 auto;
    display: block;
    text-align: center;
    padding: 12px 16px;
    font-size: 0.95rem;
  }

  .final-cta-section {
    margin-bottom: 60px;
  }
}
</style>