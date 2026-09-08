import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
// La police est déclarée dans main.scss, limitée au sous-ensemble latin :
// le paquet complet embarquait cyrillique, grec et vietnamien, jamais
// téléchargés pour du français mais toujours livrés.
import './styles/main.scss'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Services from './views/Services.vue'
import CreationSiteWeb from './views/CreationSiteWeb.vue'
import CV from './views/CV.vue'
import Contact from './views/Contact.vue'
import DigitalisationProcessus from './views/DigitalisationProcessus.vue'
import SupportMateriel from './views/SupportMateriel.vue'
import SecuriteSupervision from './views/SecuriteSupervision.vue'
import MentionsLegales from './views/MentionsLegales.vue'
import Confidentialite from './views/Confidentialite.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
  { path: '/services/digitalisation-processus', name: 'DigitalisationProcessus', component: DigitalisationProcessus },
  { path: '/services/creation-site-web', name: 'CreationSiteWeb', component: CreationSiteWeb },
  { path: '/services/securite-supervision', name: 'SecuriteSupervision', component: SecuriteSupervision },
  { path: '/services/support-materiel', name: 'SupportMateriel', component: SupportMateriel },

  // Anciennes URL, conservées pour ne pas casser les liens existants
  { path: '/services/automatisation-ia', redirect: '/services/digitalisation-processus' },
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
      // Collapse de la navbar. Seul composant JS de Bootstrap utilisé.
      import('bootstrap/js/dist/collapse')
      // Restauration du chemin mémorisé par public/404.html.
      // Le contrôle est refait ici : sessionStorage est modifiable depuis
      // la console, et un chemin protocole-relatif (« //ailleurs.example »)
      // ferait lever une SecurityError à replaceState.
      const redirect = sessionStorage.getItem('spa-redirect')
      if (redirect) {
        sessionStorage.removeItem('spa-redirect')
        const cheminInterne = /^\/($|[^/\\])/.test(redirect)
        const dejaSurPlace =
          redirect === window.location.pathname + window.location.search + window.location.hash
        if (cheminInterne && !dejaSurPlace) {
          window.history.replaceState(null, '', redirect)
        }
      }
    }
  }
)
