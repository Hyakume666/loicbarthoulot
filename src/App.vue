<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.18s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

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