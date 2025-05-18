export const resources = [
  {
    id: 1,
    title: 'Guide complet du développement web pour débutants',
    description:
      'Ce guide vous accompagne dans vos premiers pas en développement web, en couvrant HTML, CSS et les bases de JavaScript.',
    image: '/images/resource.jpg',
    type: 'ebook',
    tags: ['Développement web', 'Débutant', 'HTML', 'CSS', 'JavaScript'],
    downloadable: true,
    premium: false,
    url: '/downloads/guide-developpement-web-debutants.pdf',
    date: '15 mai 2025',
    author: 'Skillmetoo',
    fileSize: '8.5 MB',
  },
  {
    id: 2,
    title: "Vidéo-cours : Les fondamentaux de l'UI/UX Design",
    description:
      "Apprenez les principes fondamentaux du design d'interface utilisateur et de l'expérience utilisateur dans cette série de vidéos.",
    image: '/images/resource.jpg',
    type: 'video',
    tags: ['Design', 'UI/UX', 'Figma', 'Principes de design'],
    downloadable: false,
    premium: true,
    url: '/videos/fondamentaux-ui-ux-design.mp4',
    duration: '3h 20min',
    date: '10 mai 2025',
    author: 'Marie Kouassi',
  },
  {
    id: 3,
    title: 'Podcast : Réussir dans le digital en Afrique',
    description:
      'Témoignages et conseils de professionnels africains qui ont réussi dans le domaine du numérique.',
    image: '/images/resource.jpg',
    type: 'podcast',
    tags: ['Carrière', 'Digital', 'Success stories', 'Afrique'],
    downloadable: true,
    premium: false,
    url: '/podcasts/reussir-digital-afrique.mp3',
    duration: '45min',
    date: '5 mai 2025',
    author: 'Jean Osei & Invités',
  },
  {
    id: 4,
    title: 'Template CV moderne pour développeurs',
    description:
      'Un modèle de CV professionnel optimisé pour les développeurs et les professionnels du numérique.',
    image: '/images/resource.jpg',
    type: 'document',
    tags: ['CV', 'Emploi', 'Template', 'Développeur'],
    downloadable: true,
    premium: false,
    url: '/documents/template-cv-developpeurs.docx',
    date: '28 avril 2025',
    author: 'Skillmetoo',
    fileSize: '2.3 MB',
  },
  {
    id: 5,
    title: 'Webinaire : Comment monétiser ses compétences en ligne',
    description:
      'Stratégies et plateformes pour vendre ses services numériques et générer des revenus grâce à ses compétences.',
    image: '/images/resource.jpg',
    type: 'video',
    tags: ['Freelance', 'Monétisation', 'Entreprenariat', 'Digital'],
    downloadable: false,
    premium: true,
    url: '/videos/monetiser-competences-en-ligne.mp4',
    duration: '1h 45min',
    date: '20 avril 2025',
    author: 'Fatima Diop',
  },
  {
    id: 6,
    title: 'Checklist : Lancer sa startup tech en Afrique',
    description:
      'Une liste exhaustive des étapes à suivre pour créer et développer une startup technologique dans le contexte africain.',
    image: '/images/resource.jpg',
    type: 'document',
    tags: ['Startup', 'Entreprenariat', 'Tech', 'Business plan'],
    downloadable: true,
    premium: false,
    url: '/documents/checklist-startup-tech-afrique.pdf',
    date: '15 avril 2025',
    author: 'Skillmetoo',
    fileSize: '1.2 MB',
  },
  {
    id: 7,
    title:
      "Podcast : L'intelligence artificielle et ses applications en Afrique",
    description:
      "Exploration des opportunités et défis liés à l'IA pour les entrepreneurs et professionnels africains.",
    image: '/images/resource.jpg',
    type: 'podcast',
    tags: ['IA', 'Innovation', 'Tech', 'Opportunités'],
    downloadable: true,
    premium: false,
    url: '/podcasts/ia-applications-afrique.mp3',
    duration: '52min',
    date: '10 avril 2025',
    author: 'Thomas Adeyemi & Invités',
  },
  {
    id: 8,
    title: 'E-book : 50 outils essentiels pour les professionnels du digital',
    description:
      "Une sélection d'outils et de ressources indispensables pour optimiser votre travail dans le domaine numérique.",
    image: '/images/resource.jpg',
    type: 'ebook',
    tags: ['Outils', 'Productivité', 'Digital', 'Ressources'],
    downloadable: true,
    premium: true,
    url: '/downloads/50-outils-professionnels-digital.pdf',
    date: '5 avril 2025',
    author: 'Skillmetoo',
    fileSize: '10.7 MB',
  },
]

// Helper function to get all unique tags
export const getAllTags = () => {
  return Array.from(
    new Set(resources.flatMap((resource) => resource.tags))
  ).sort()
}

// Helper function to get resource type icon name
export const getResourceTypeIconName = (type: string) => {
  switch (type) {
    case 'ebook':
      return 'book-open'
    case 'video':
      return 'video'
    case 'podcast':
      return 'headphones'
    case 'document':
      return 'file-text'
    default:
      return 'file-text'
  }
}

// Helper function to format resource type for display
export const formatResourceType = (type: string) => {
  switch (type) {
    case 'ebook':
      return 'E-book'
    case 'video':
      return 'Vidéo'
    case 'podcast':
      return 'Podcast'
    case 'document':
      return 'Document'
    default:
      return type
  }
}
