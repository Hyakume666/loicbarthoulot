import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import '@fontsource-variable/archivo/wdth.css'
import './style.css'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Services from './views/Services.vue'
import CreationSiteWeb from './views/CreationSiteWeb.vue'
import CV from './views/CV.vue'
import Contact from './views/Contact.vue'
import AutomatisationIa from './views/AutomatisationIa.vue'
import SupportMateriel from './views/SupportMateriel.vue'
import MentionsLegales from './views/MentionsLegales.vue'
import Confidentialite from './views/Confidentialite.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
  { path: '/services/automatisation-ia', name: 'AutomatisationIa', component: AutomatisationIa },
  { path: '/services/creation-site-web', name: 'CreationSiteWeb', component: CreationSiteWeb },
  { path: '/services/support-materiel', name: 'SupportMateriel', component: SupportMateriel },

  // Anciennes URL, conservées pour ne pas casser les liens existants
  { path: '/services/montage-pc', redirect: '/services/support-materiel' },
  { path: '/services/depannage-reparation', redirect: '/services/support-materiel' },
  { path: '/services/nettoyage-entretien', redirect: '/services/support-materiel' },

  { path: '/cv', name: 'CV', component: CV },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/mentions-legales', name: 'MentionsLegales', component: MentionsLegales },
  { path: '/confidentialite', name: 'Confidentialite', component: Confidentialite },
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
