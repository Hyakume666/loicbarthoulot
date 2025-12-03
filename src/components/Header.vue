<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-dark-custom fixed-top mobile-push-menu" style="margin: 0; padding-top: 0; padding-bottom: 0;">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img :src="logoUrl" alt="Logo" height="60" class="me-2">
      </router-link>
      
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">ACCUEIL</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link">SERVICES</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cv" class="nav-link">MON CV</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const logoUrl = import.meta.env.BASE_URL + 'LogoTest.png'
</script>

<style scoped>
/* Comportement du menu mobile */
@media (max-width: 991.98px) {
  /* Changer la navbar de fixed à static en mobile */
  .mobile-push-menu {
    position: static !important;
  }
  
  .mobile-push-menu .navbar-collapse {
    background-color: rgba(11, 13, 16, 0.98);
    backdrop-filter: blur(10px);
    margin-top: 10px;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .mobile-push-menu .navbar-nav {
    gap: 10px;
  }
  
  .mobile-push-menu .navbar-nav .nav-link {
    padding: 12px 16px;
    border-radius: 6px;
    transition: all 0.3s ease;
    text-align: center;
    font-weight: 500;
  }
  
  .mobile-push-menu .navbar-nav .nav-link:hover {
    background-color: rgba(11, 94, 215, 0.2);
    transform: translateX(5px);
  }
  
  .mobile-push-menu .navbar-nav .nav-link.router-link-active {
    background-color: rgba(11, 94, 215, 0.3);
    color: var(--primary) !important;
  }
}
</style>