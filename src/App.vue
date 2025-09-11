<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
#app {
  background-color: var(--bg);
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  min-height: 100vh;
}

.main-content {
  min-height: calc(100vh - 80px);
  background-color: var(--bg);
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}
</style>