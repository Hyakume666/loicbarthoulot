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
    title: 'Digitalisation de processus',
    description: "J'analyse ce qui se fait à la main dans votre entreprise, puis j'automatise ce qui est répétitif, sans changer vos outils.",
    image: '/images/automatisation-ia.jpg',
    icon: 'fas fa-diagram-project',
    link: '/services/automatisation-ia'
  },
  {
    id: 2,
    title: 'Création de site web',
    description: 'Site vitrine adapté au mobile, avec référencement de base, formulaire de contact et mise en ligne.',
    image: '/images/creation-site-web.jpg',
    icon: 'fas fa-code',
    link: '/services/creation-site-web'
  },
  {
    id: 3,
    title: 'Support et matériel',
    description: 'Assemblage de postes de travail, dépannage matériel et logiciel, récupération de données et entretien.',
    image: '/images/depannage.jpg',
    icon: 'fas fa-screwdriver-wrench',
    link: '/services/support-materiel'
  }
]
