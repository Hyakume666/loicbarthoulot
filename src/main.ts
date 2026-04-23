import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import '@fontsource-variable/inter'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Services from './views/Services.vue'
import MontagePC from './views/MontagePC.vue'
import CreationSiteWeb from './views/CreationSiteWeb.vue'
import CV from './views/CV.vue'
import Contact from './views/Contact.vue'
import AutomatisationIa from './views/AutomatisationIa.vue'
import DepannageReparation from './views/DepannageReparation.vue'
import NettoyageEntretien from './views/NettoyageEntretien.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
  { path: '/services/montage-pc', name: 'MontagePC', component: MontagePC },
  { path: '/services/depannage-reparation', name: 'DepannageReparation', component: DepannageReparation },
  { path: '/services/nettoyage-entretien', name: 'NettoyageEntretien', component: NettoyageEntretien },
  { path: '/services/creation-site-web', name: 'CreationSiteWeb', component: CreationSiteWeb },
  { path: '/services/automatisation-ia', name: 'AutomatisationIa', component: AutomatisationIa },
  { path: '/cv', name: 'CV', component: CV },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: '/',
    scrollBehavior() {
      return { top: 0 }
    }
  },
  ({ isClient }) => {
    if (isClient) {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
      const redirect = sessionStorage.getItem('spa-redirect')
      if (redirect) {
        sessionStorage.removeItem('spa-redirect')
        if (redirect !== window.location.pathname + window.location.search + window.location.hash) {
          window.history.replaceState(null, '', redirect)
        }
      }
    }
  }
)
