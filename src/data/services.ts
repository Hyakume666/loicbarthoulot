export interface Service {
  id: number
  title: string
  description: string
  price: string
  image: string
  link: string
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Montage de PC sur mesure',
    description: 'Assemblage complet de votre configuration personnalisée selon vos besoins et votre budget.',
    price: 'Sur devis',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/services/montage-pc'
  },
  {
    id: 2,
    title: 'Dépannage & réparation',
    description: 'Diagnostic et réparation de pannes matérielles et logicielles.',
    price: 'Sur devis',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/services/depannage-reparation'
  },
  {
    id: 3,
    title: 'Nettoyage et entretien',
    description: 'Nettoyage complet de votre ordinateur (poussière, ventilateurs), maintenance logicielle et optimisation des performances.',
    price: 'Sur devis',
    image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/services/nettoyage-entretien'
  },
  {
    id: 4,
    title: 'Création de site web',
    description: 'Site vitrine performant et responsive avec SEO de base, design moderne, intégration formulaire de contact et déploiement inclus.',
    price: 'Sur devis',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/services/creation-site-web'
  },
  {
    id: 5,
    title: 'Automatisation IA pour indépendants & PME',
    description: "Gagne des heures chaque semaine en automatisant tes tâches répétitives avec l'IA, sans devoir changer d'outils ni réinventer ton business.",
    price: 'Sur devis',
    image: 'https://images.pexels.com/photos/9028873/pexels-photo-9028873.jpeg',
    link: '/services/automatisation-ia'
  }
]
