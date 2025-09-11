import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import components
import Home from './views/Home.vue'
import Services from './views/Services.vue'
import MontagePC from './views/MontagePC.vue'
import CreationSiteWeb from './views/CreationSiteWeb.vue'
import CV from './views/CV.vue'
import Contact from './views/Contact.vue'

// Import service detail pages
import DepannageReparation from './views/services/DepannageReparation.vue'
import NettoyageEntretien from './views/services/NettoyageEntretien.vue'
import InstallationLogiciels from './views/services/InstallationLogiciels.vue'
import OptimisationPerformance from './views/services/OptimisationPerformance.vue'
import ConseilMateriel from './views/services/ConseilMateriel.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
  { path: '/services/montage-pc', name: 'MontagePC', component: MontagePC },
  { path: '/services/depannage-reparation', name: 'DepannageReparation', component: DepannageReparation },
  { path: '/services/nettoyage-entretien', name: 'NettoyageEntretien', component: NettoyageEntretien },
  { path: '/services/creation-site-web', name: 'CreationSiteWeb', component: CreationSiteWeb },
  { path: '/cv', name: 'CV', component: CV },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')