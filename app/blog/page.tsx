'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  ArrowRight,
  Clock,
  User,
  Calendar,
  Search,
  Tag,
  BookOpen,
  Briefcase,
  Monitor,
  Zap,
  GraduationCap,
  Globe,
} from 'lucide-react'

// Sample blog posts data
const allPosts = [
  {
    id: 1,
    title:
      'Comment les compétences numériques transforment le marché du travail en Afrique',
    excerpt:
      'Découvrez comment la maîtrise des outils numériques ouvre de nouvelles opportunités professionnelles pour les jeunes africains.',
    image: '/images/training.png',
    category: 'Technologie',
    tags: ['Compétences numériques', 'Marché du travail', 'Formation'],
    date: '12 mai 2025',
    author: {
      name: 'Marie Kouassi',
      avatar: '/images/user.webp',
      role: 'Responsable Formation',
    },
    readTime: '5 min',
    slug: 'competences-numeriques-marche-travail-afrique',
    featured: true,
  },
  {
    id: 2,
    title: '5 conseils pour réussir son projet entrepreneurial en Afrique',
    excerpt:
      'Nos experts partagent leurs meilleures pratiques pour transformer une idée en entreprise prospère, adaptées au contexte africain.',
    image: '/images/mentorship.webp',
    category: 'Entrepreneuriat',
    tags: ['Business', 'Startup', 'Conseils'],
    date: '3 mai 2025',
    author: {
      name: 'Jean Osei',
      avatar: '/images/user.webp',
      role: 'Mentor Entrepreneuriat',
    },
    readTime: '8 min',
    slug: 'conseils-reussir-projet-entrepreneurial-afrique',
    featured: false,
  },
  {
    id: 3,
    title:
      'Les soft skills indispensables pour intégrer le marché international',
    excerpt:
      "Au-delà des compétences techniques, découvrez les qualités humaines qui font la différence pour travailler à l'international.",
    image: '/images/mentorship.webp',
    category: 'Développement personnel',
    tags: ['Soft skills', 'Carrière internationale', 'Communication'],
    date: '29 avril 2025',
    author: {
      name: 'Fatima Diop',
      avatar: '/images/user.webp',
      role: 'Coach professionnel',
    },
    readTime: '6 min',
    slug: 'soft-skills-marche-international',
    featured: false,
  },
  {
    id: 4,
    title:
      "L'intelligence artificielle : nouvelle compétence clé pour les professionnels africains",
    excerpt:
      "Pourquoi et comment les jeunes africains devraient s'approprier les technologies d'IA pour rester compétitifs sur le marché global.",
    image: '/images/mentorship.webp',
    category: 'Technologie',
    tags: ['Intelligence artificielle', 'Formation', 'Avenir du travail'],
    date: '20 avril 2025',
    author: {
      name: 'Ibrahim Sy',
      avatar: '/images/user.webp',
      role: 'Expert IA',
    },
    readTime: '7 min',
    slug: 'intelligence-artificielle-competence-cle-professionnels-africains',
    featured: false,
  },
  {
    id: 5,
    title:
      'Comment financer sa formation professionnelle : guide complet des bourses et options',
    excerpt:
      "Découvrez les différentes options de financement disponibles pour les jeunes africains souhaitant se former aux métiers d'avenir.",
    image: '/images/mentorship.webp',
    category: 'Financement',
    tags: ['Bourses', 'Financement', 'Formation', 'Éducation'],
    date: '15 avril 2025',
    author: {
      name: 'Aminata Diallo',
      avatar: '/images/user.webp',
      role: 'Conseillère financière',
    },
    readTime: '10 min',
    slug: 'financer-formation-professionnelle-guide-bourses-options',
    featured: false,
  },
  {
    id: 6,
    title:
      'Réussir son intégration dans une entreprise internationale : témoignages',
    excerpt:
      "Des anciens participants à nos programmes partagent leur expérience et leurs conseils pour s'adapter à un environnement de travail multiculturel.",
    image: '/images/mentorship.webp',
    category: 'Carrière',
    tags: [
      'Témoignages',
      'Entreprises internationales',
      'Adaptation culturelle',
    ],
    date: '10 avril 2025',
    author: {
      name: 'Thomas Adeyemi',
      avatar: '/images/user.webp',
      role: 'Responsable Communication',
    },
    readTime: '9 min',
    slug: 'reussir-integration-entreprise-internationale-temoignages',
    featured: false,
  },
  {
    id: 7,
    title:
      'Le mentorat comme accélérateur de carrière : résultats de notre étude',
    excerpt:
      "Les résultats de notre étude sur l'impact du mentorat dans le développement professionnel des jeunes talents africains.",
    image: '/images/mentorship.webp',
    category: 'Mentorat',
    tags: ['Études', 'Développement professionnel', 'Mentorat'],
    date: '5 avril 2025',
    author: {
      name: 'Marie Kouassi',
      avatar: '/images/user.webp',
      role: 'Responsable Formation',
    },
    readTime: '8 min',
    slug: 'mentorat-accelerateur-carriere-resultats-etude',
    featured: false,
  },
  {
    id: 8,
    title: 'Comment le storytelling peut transformer votre marque personnelle',
    excerpt:
      "L'art de raconter votre histoire de manière convaincante peut ouvrir des portes professionnelles insoupçonnées. Voici comment s'y prendre.",
    image: '/images/mentorship.webp',
    category: 'Développement personnel',
    tags: ['Storytelling', 'Marque personnelle', 'Communication'],
    date: '28 mars 2025',
    author: {
      name: 'Sophie Tanoh',
      avatar: '/images/user.webp',
      role: 'Spécialiste en communication',
    },
    readTime: '6 min',
    slug: 'storytelling-transformer-marque-personnelle',
    featured: false,
  },
  {
    id: 9,
    title: 'Les métiers du futur en Afrique : préparez-vous dès maintenant',
    excerpt:
      'Analyse des secteurs en croissance et des compétences qui seront les plus demandées dans les 10 prochaines années sur le continent.',
    image: '/images/mentorship.webp',
    category: 'Carrière',
    tags: ["Métiers d'avenir", 'Tendances', 'Prospective'],
    date: '20 mars 2025',
    author: {
      name: 'Robert Mensah',
      avatar: '/images/user.webp',
      role: 'Analyste marché du travail',
    },
    readTime: '12 min',
    slug: 'metiers-futur-afrique-preparez-vous',
    featured: false,
  },
]

// Categories with icons
const categories = [
  { name: 'Tous', icon: BookOpen, count: allPosts.length },
  { name: 'Technologie', icon: Monitor, count: 2 },
  { name: 'Entrepreneuriat', icon: Briefcase, count: 1 },
  { name: 'Développement personnel', icon: Zap, count: 2 },
  { name: 'Carrière', icon: GraduationCap, count: 2 },
  { name: 'Financement', icon: Globe, count: 1 },
  { name: 'Mentorat', icon: User, count: 1 },
]

// All tags
const allTags = [
  'Compétences numériques',
  'Marché du travail',
  'Formation',
  'Business',
  'Startup',
  'Conseils',
  'Soft skills',
  'Carrière internationale',
  'Communication',
  'Intelligence artificielle',
  'Avenir du travail',
  'Bourses',
  'Financement',
  'Éducation',
  'Témoignages',
  'Entreprises internationales',
  'Adaptation culturelle',
  'Développement professionnel',
  'Mentorat',
  'Storytelling',
  'Marque personnelle',
  "Métiers d'avenir",
  'Tendances',
  'Prospective',
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Filter posts based on search, category and tags
  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === 'Tous' || post.category === selectedCategory

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => post.tags.includes(tag))

    return matchesSearch && matchesCategory && matchesTags
  })

  // Featured post (the first one marked as featured)
  const featuredPost = allPosts.find((post) => post.featured)

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className='pt-20 pb-12 bg-gradient-to-br from-blue-900 to-blue-700 text-white'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12 pb-6'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              Blog Skillmetoo
            </h1>
            <p className='text-xl text-blue-100'>
              Explorez nos derniers articles, conseils et actualités sur la
              formation, l'entrepreneuriat et le développement professionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className='bg-white dark:bg-gray-900 py-8 border-b border-gray-200 dark:border-gray-800 sticky top-20 z-30'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            {/* Search bar */}
            <div className='relative w-full md:w-auto md:min-w-[300px]'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
              <Input
                type='text'
                placeholder='Rechercher un article...'
                className='pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-full'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className='flex items-center overflow-x-auto py-2 w-full md:w-auto gap-2'>
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <category.icon className='h-4 w-4 mr-2' />
                  {category.name}
                  <span className='ml-2 bg-white/20 dark:bg-black/20 px-2 py-0.5 rounded-full text-xs'>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-12 bg-gray-50 dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Main Content */}
            <div className='lg:col-span-2'>
              {/* Featured Post */}
              {featuredPost && (
                <div className='mb-12'>
                  <h2 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center'>
                    <Zap className='h-5 w-5 mr-2 text-yellow-500' />
                    Article à la une
                  </h2>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <div className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'>
                      <div className='relative h-72 sm:h-80 md:h-96'>
                        <Image
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          fill
                          className='object-cover'
                        />
                        <div className='absolute top-4 left-4'>
                          <span className='px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full'>
                            {featuredPost.category}
                          </span>
                        </div>
                      </div>
                      <div className='p-6'>
                        <h3 className='text-2xl font-bold mb-3 text-gray-900 dark:text-white'>
                          {featuredPost.title}
                        </h3>
                        <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4'>
                          <div className='flex items-center mr-4'>
                            <div className='relative h-8 w-8 rounded-full overflow-hidden mr-2'>
                              <Image
                                src={featuredPost.author.avatar}
                                alt={featuredPost.author.name}
                                fill
                                className='object-cover'
                              />
                            </div>
                            {featuredPost.author.name}
                          </div>
                          <div className='flex items-center mr-4'>
                            <Calendar className='h-4 w-4 mr-1' />
                            {featuredPost.date}
                          </div>
                          <div className='flex items-center'>
                            <Clock className='h-4 w-4 mr-1' />
                            {featuredPost.readTime}
                          </div>
                        </div>
                        <p className='text-gray-600 dark:text-gray-300 mb-6'>
                          {featuredPost.excerpt}
                        </p>
                        <Button className='bg-blue-600 hover:bg-blue-700'>
                          Lire l'article complet
                          <ArrowRight className='ml-2 h-4 w-4' />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Filter results info */}
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-bold text-gray-900 dark:text-white'>
                  {filteredPosts.length} article
                  {filteredPosts.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'Tous' && ` dans ${selectedCategory}`}
                  {selectedTags.length > 0 &&
                    ` avec ${
                      selectedTags.length > 1 ? 'les tags' : 'le tag'
                    } ${selectedTags.join(', ')}`}
                </h2>

                {(selectedCategory !== 'Tous' ||
                  selectedTags.length > 0 ||
                  searchTerm) && (
                  <Button
                    variant='outline'
                    className='text-sm'
                    onClick={() => {
                      setSelectedCategory('Tous')
                      setSelectedTags([])
                      setSearchTerm('')
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                )}
              </div>

              {/* Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className='text-center py-12 bg-white dark:bg-gray-800 rounded-xl'>
                  <div className='mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4'>
                    <Search className='h-8 w-8 text-gray-400' />
                  </div>
                  <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                    Aucun article trouvé
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-6'>
                    Essayez d'ajuster vos critères de recherche ou de
                    réinitialiser les filtres.
                  </p>
                  <Button
                    variant='outline'
                    onClick={() => {
                      setSelectedCategory('Tous')
                      setSelectedTags([])
                      setSearchTerm('')
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}

              {/* Pagination (if needed) */}
              {filteredPosts.length > 0 && (
                <div className='flex justify-center mt-12'>
                  <Button variant='outline' className='mr-2' disabled>
                    Précédent
                  </Button>
                  <Button
                    variant='outline'
                    className='bg-blue-600 text-white hover:bg-blue-700 border-blue-600'
                  >
                    1
                  </Button>
                  <Button variant='outline' className='mx-2'>
                    2
                  </Button>
                  <Button variant='outline' className='mr-2'>
                    3
                  </Button>
                  <Button variant='outline'>Suivant</Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className='space-y-8'>
              {/* Tags Cloud */}
              <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center'>
                  <Tag className='h-5 w-5 mr-2 text-blue-600 dark:text-blue-400' />
                  Tags populaires
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        selectedTags.includes(tag)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center'>
                  <Clock className='h-5 w-5 mr-2 text-blue-600 dark:text-blue-400' />
                  Articles récents
                </h3>
                <div className='space-y-4'>
                  {allPosts.slice(0, 5).map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.id}>
                      <div className='flex items-start hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors'>
                        <div className='relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0'>
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className='object-cover'
                          />
                        </div>
                        <div className='ml-4'>
                          <h4 className='text-sm font-medium text-gray-900 dark:text-white line-clamp-2'>
                            {post.title}
                          </h4>
                          <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                            {post.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className='mt-4 pt-4 border-t border-gray-100 dark:border-gray-700'>
                  <Link
                    href='/blog'
                    className='text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline'
                  >
                    Voir tous les articles
                  </Link>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className='bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 shadow-md text-white'>
                <h3 className='text-xl font-bold mb-3'>Restez informé</h3>
                <p className='text-blue-100 mb-4'>
                  Abonnez-vous à notre newsletter pour recevoir nos derniers
                  articles et actualités.
                </p>
                <div className='space-y-3'>
                  <Input
                    type='email'
                    placeholder='Votre adresse email'
                    className='bg-white/20 placeholder:text-white/70 border-white/30 text-white'
                  />
                  <Button className='w-full bg-white text-blue-700 hover:bg-blue-50'>
                    S'abonner
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-white dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl p-8 md:p-12 shadow-xl'>
            <div className='max-w-3xl mx-auto text-center text-white'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Transformez vos connaissances en compétences
              </h2>
              <p className='text-xl text-white/90 mb-8'>
                Rejoignez l'un de nos programmes de formation et faites passer
                votre carrière au niveau supérieur.
              </p>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <Button className='bg-white text-yellow-600 hover:bg-yellow-50 h-12 px-8 text-base'>
                  Découvrir nos formations
                </Button>
                <Button
                  variant='outline'
                  className='border-white text-black hover:bg-white/10 h-12 px-8 text-base'
                >
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Blog Card Component
const BlogCard = ({ post }: { post: any }) => {
  return (
    <article className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <Link
        href={`/blog/${post.slug}`}
        className='block relative aspect-[16/9] overflow-hidden'
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className='object-cover transition-transform duration-300 hover:scale-105'
        />
        <div className='absolute top-4 left-4'>
          <span className='px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full'>
            {post.category}
          </span>
        </div>
      </Link>
      <div className='p-6 flex flex-col flex-grow'>
        <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4'>
          <div className='flex items-center mr-4'>
            <div className='relative h-6 w-6 rounded-full overflow-hidden mr-2'>
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className='object-cover'
              />
            </div>
            {post.author.name}
          </div>
          <div className='flex items-center'>
            <Clock className='h-4 w-4 mr-1' />
            {post.readTime}
          </div>
        </div>
        <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
          <Link
            href={`/blog/${post.slug}`}
            className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
          >
            {post.title}
          </Link>
        </h3>
        <p className='text-gray-600 dark:text-gray-300 mb-4 flex-grow'>
          {post.excerpt}
        </p>
        <div className='flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700'>
          <div className='text-sm text-gray-500 dark:text-gray-400'>
            <Calendar className='h-4 w-4 inline mr-1' />
            {post.date}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className='text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors'
          >
            Lire
            <ArrowRight className='ml-1 h-4 w-4' />
          </Link>
        </div>
      </div>
    </article>
  )
}
