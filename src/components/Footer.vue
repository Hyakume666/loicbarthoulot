<template>
  <footer class="footer-custom">
    <div class="container">
      <div class="row align-items-center">
        <!-- Copyright à gauche -->
        <div class="col-md-6 col-12 mb-2 mb-md-0">
          <p class="footer-copyright mb-0">
            &copy; {{ currentYear }} Loïc Barthoulot. Tous droits réservés.
          </p>
        </div>
        
        <!-- Navigation et liens à droite -->
        <div class="col-md-6 col-12">
          <div class="footer-right">
            <!-- Mini menu -->
            <nav class="footer-nav">
              <router-link to="/" class="footer-link">Accueil</router-link>
              <span class="footer-separator">·</span>
              <router-link to="/services" class="footer-link">Services</router-link>
              <span class="footer-separator">·</span>
              <router-link to="/cv" class="footer-link">Mon CV</router-link>
              <span class="footer-separator">·</span>
              <router-link to="/contact" class="footer-link">Contact</router-link>
            </nav>
            
            <!-- LinkedIn et bouton scroll top -->
            <div class="footer-actions">
              <a 
                href="https://linkedin.com/in/loic-barthoulot" 
                class="footer-link linkedin-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn de Loïc Barthoulot"
              >
                <i class="fab fa-linkedin-in me-1"></i>
                LinkedIn
              </a>
              
              <!-- Bouton scroll to top (desktop uniquement) -->
              <button 
                @click="scrollToTop"
                class="scroll-top-btn d-none d-md-inline-flex"
                aria-label="Remonter en haut de la page"
                title="Remonter en haut"
              >
                <i class="fas fa-arrow-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Année dynamique
const currentYear = ref(new Date().getFullYear())

// Fonction scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Mettre à jour l'année si nécessaire
onMounted(() => {
  currentYear.value = new Date().getFullYear()
})
</script>

<style scoped>
.footer-custom {
  background-color: #0f1419;
  border-top: none;
  padding: 24px 0;
  margin-top: auto;
  margin-bottom: 0;
  min-height: 80px;
  display: flex;
  align-items: center;
}

.footer-copyright {
  color: #9aa4b2;
  font-size: 0.9rem;
}

.footer-right {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

.footer-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.footer-link {
  color: #9aa4b2;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.footer-link:hover {
  color: #e6e9ef;
  text-decoration: none;
}

.footer-separator {
  color: #9aa4b2;
  font-size: 0.9rem;
  user-select: none;
}

.footer-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.linkedin-link {
  font-weight: 500;
}

.linkedin-link i {
  font-size: 1rem;
}

.scroll-top-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #9aa4b2;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.scroll-top-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #e6e9ef;
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.scroll-top-btn:active {
  transform: translateY(0);
}

/* Responsive */
@media (min-width: 768px) {
  .footer-right {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
  }
  
  .footer-nav {
    gap: 12px;
  }
}

@media (max-width: 767px) {
  .footer-custom {
    text-align: center;
  }
  
  .footer-right {
    align-items: center;
  }
  
  .footer-nav {
    justify-content: center;
  }
  
  .footer-actions {
    justify-content: center;
  }
}
</style>