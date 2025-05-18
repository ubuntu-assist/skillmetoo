export const magazines = [
  {
    id: 1,
    title: 'Compétences Numériques et Emploi en Afrique',
    description:
      "Découvrez comment les compétences numériques transforment le marché de l'emploi en Afrique et ouvrent de nouvelles opportunités pour la jeunesse.",
    image: '/images/magazine.jpg',
    coverImage: '/images/magazine.jpg',
    edition: 'Édition #1',
    date: 'Mai 2025',
    pdfUrl: '/competences-numeriques-emploi-afrique.pdf',
    isFree: true,
    pages: 45,
    authors: ['Jean Osei', 'Fatima Diop'],
    topics: [
      'Compétences numériques',
      'Emploi',
      'Marché du travail',
      'Formation',
    ],
    featured: true,
  },
  {
    id: 2,
    title: "L'Entrepreneuriat Digital en Afrique",
    description:
      "Un guide complet pour lancer et développer une entreprise numérique sur le continent africain, avec des témoignages inspirants d'entrepreneurs qui ont réussi.",
    image: '/images/magazine.jpg',
    coverImage: '/images/magazine.jpg',
    edition: 'Édition #2',
    date: 'Avril 2025',
    pdfUrl: '/entrepreneuriat-digital-afrique.pdf',
    isFree: false,
    price: '€9.99',
    pages: 52,
    authors: ['Thomas Adeyemi', 'Marie Kouassi'],
    topics: ['Entrepreneuriat', 'Business', 'Startup', 'Digital'],
    featured: false,
  },
  {
    id: 3,
    title: "Intelligence Artificielle : Opportunités et Défis pour l'Afrique",
    description:
      "Une analyse approfondie de l'impact de l'IA sur les économies africaines et des opportunités qu'elle présente pour les jeunes professionnels.",
    image: '/images/magazine.jpg',
    coverImage: '/images/magazine.jpg',
    edition: 'Édition #3',
    date: 'Mars 2025',
    pdfUrl: '/ia-opportunites-defis-afrique.pdf',
    isFree: false,
    price: '€9.99',
    pages: 48,
    authors: ['Ibrahim Sy', 'Aminata Diallo'],
    topics: [
      'Intelligence artificielle',
      'Innovation',
      'Technologie',
      'Avenir',
    ],
    featured: false,
  },
  {
    id: 4,
    title: 'Développement Web : Tendances et Carrières',
    description:
      'Explorer les dernières tendances en développement web et les opportunités de carrière pour les développeurs africains sur le marché international.',
    image: '/images/magazine.jpg',
    coverImage: '/images/magazine.jpg',
    edition: 'Édition #4',
    date: 'Février 2025',
    pdfUrl: '/developpement-web-tendances-carrieres.pdf',
    isFree: true,
    pages: 40,
    authors: ['Sophie Tanoh', 'Robert Mensah'],
    topics: ['Développement web', 'Carrière', 'Tendances', 'Technologies'],
    featured: true,
  },
  {
    id: 5,
    title: 'Marketing Digital pour les Créateurs Africains',
    description:
      'Stratégies et outils de marketing digital adaptés aux créateurs de contenu et artistes africains souhaitant développer leur audience.',
    image: '/images/magazine.jpg',
    coverImage: '/images/magazine.jpg',
    edition: 'Édition #5',
    date: 'Janvier 2025',
    pdfUrl: '/marketing-digital-createurs-africains.pdf',
    isFree: false,
    price: '€9.99',
    pages: 42,
    authors: ['Fatima Diop', 'Jean Osei'],
    topics: [
      'Marketing digital',
      'Réseaux sociaux',
      'Création de contenu',
      'Audience',
    ],
    featured: false,
  },
  {
    id: 6,
    title: 'Freelance et Travail à Distance : Guide Pratique',
    description:
      'Comment devenir freelance ou travailler à distance pour des clients internationaux tout en restant en Afrique.',
    image: '/images/magazine.jpg',
    coverImage: '/images/magazine.jpg',
    edition: 'Édition #6',
    date: 'Décembre 2024',
    pdfUrl: '/freelance-travail-distance-guide.pdf',
    isFree: false,
    price: '€9.99',
    pages: 50,
    authors: ['Marie Kouassi', 'Thomas Adeyemi'],
    topics: [
      'Freelance',
      'Travail à distance',
      'Clients internationaux',
      'Gestion de projet',
    ],
    featured: false,
  },
]

// Get all unique topics from magazines
export const getAllMagazineTopics = () => {
  return Array.from(
    new Set(magazines.flatMap((magazine) => magazine.topics))
  ).sort()
}

// Get featured magazines
export const getFeaturedMagazines = () => {
  return magazines.filter((magazine) => magazine.featured)
}

// Get free magazines
export const getFreeMagazines = () => {
  return magazines.filter((magazine) => magazine.isFree)
}

// Get premium magazines
export const getPremiumMagazines = () => {
  return magazines.filter((magazine) => !magazine.isFree)
}
