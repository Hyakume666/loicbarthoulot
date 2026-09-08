export interface Service {
  id: number
  title: string
  description: string
  image: string
  icon: string
  link: string
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Montage de PC sur mesure',
    description: 'Assemblage complet de votre configuration personnalisée selon vos besoins et votre budget.',
    image: '/images/montage-pc.jpg',
    icon: 'fas fa-desktop',
    link: '/services/montage-pc'
  },
  {
    id: 2,
    title: 'Dépannage & réparation',
    description: 'Diagnostic et réparation de pannes matérielles et logicielles.',
    image: '/images/depannage.jpg',
    icon: 'fas fa-wrench',
    link: '/services/depannage-reparation'
  },
  {
    id: 3,
    title: 'Nettoyage et entretien',
    description: 'Nettoyage complet de votre ordinateur (poussière, ventilateurs), maintenance logicielle et optimisation des performances.',
    image: '/images/nettoyage.jpg',
    icon: 'fas fa-broom',
    link: '/services/nettoyage-entretien'
  },
  {
    id: 4,
    title: 'Création de site web',
    description: 'Site vitrine adapté au mobile, avec référencement de base, formulaire de contact et mise en ligne.',
    image: '/images/creation-site-web.jpg',
    icon: 'fas fa-code',
    link: '/services/creation-site-web'
  },
  {
    id: 5,
    title: 'Digitalisation de processus',
    description: "J'analyse ce qui se fait à la main dans votre entreprise, puis j'automatise ce qui est répétitif, sans changer vos outils.",
    image: '/images/automatisation-ia.jpg',
    icon: 'fas fa-robot',
    link: '/services/automatisation-ia'
  }
]
