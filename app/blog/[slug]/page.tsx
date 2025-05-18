'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Link2,
  Bookmark,
  ThumbsUp,
  MessageSquare,
  ChevronRight,
  Tag,
} from 'lucide-react'

const allPosts = [
  {
    id: 1,
    title:
      'Comment les compétences numériques transforment le marché du travail en Afrique',
    excerpt:
      'Découvrez comment la maîtrise des outils numériques ouvre de nouvelles opportunités professionnelles pour les jeunes africains.',
    content: `
      <p>Dans un monde de plus en plus connecté, les compétences numériques sont devenues essentielles pour accéder au marché du travail international. Pour les jeunes africains, la maîtrise de ces outils représente une opportunité sans précédent de participer à l'économie mondiale tout en restant sur leur continent.</p>
      
      <h2>L'essor du numérique en Afrique</h2>
      
      <p>Avec plus de 60% de sa population âgée de moins de 25 ans, l'Afrique possède la main-d'œuvre la plus jeune du monde. Cette jeunesse, naturellement encline à adopter les nouvelles technologies, représente un atout majeur dans l'ère numérique.</p>
      
      <p>Le continent connaît une croissance rapide dans le domaine des technologies de l'information :</p>
      
      <ul>
        <li>Augmentation de 20% par an du nombre d'utilisateurs d'Internet</li>
        <li>Développement de hubs technologiques dans plusieurs capitales africaines</li>
        <li>Adoption rapide des solutions de paiement mobile</li>
        <li>Croissance des startups technologiques locales</li>
      </ul>
      
      <h2>Les compétences numériques les plus demandées</h2>
      
      <p>Plusieurs domaines offrent des opportunités particulièrement prometteuses pour les jeunes talents africains :</p>
      
      <h3>1. Le développement web et mobile</h3>
      
      <p>La demande pour des développeurs qualifiés ne cesse de croître, tant au niveau local qu'international. Les entreprises du monde entier recherchent des talents capables de créer des applications web et mobiles innovantes.</p>
      
      <h3>2. L'analyse de données</h3>
      
      <p>Avec l'explosion des données générées par les entreprises, les spécialistes capables d'analyser et d'interpréter ces informations sont très recherchés. Cette compétence ouvre des portes dans de nombreux secteurs, de la finance à la santé.</p>
      
      <h3>3. Le marketing digital</h3>
      
      <p>Les experts en marketing numérique, capables de créer et de gérer des campagnes en ligne efficaces, sont devenus essentiels pour toute entreprise souhaitant se développer.</p>
      
      <h2>Le travail à distance : une opportunité pour l'Afrique</h2>
      
      <p>La pandémie de COVID-19 a accéléré l'adoption du travail à distance à l'échelle mondiale. Cette tendance représente une chance unique pour les professionnels africains du numérique, qui peuvent désormais travailler pour des entreprises internationales sans quitter leur pays.</p>
      
      <p>Les avantages sont multiples :</p>
      
      <ul>
        <li>Accès à des salaires plus élevés que ceux proposés localement</li>
        <li>Acquisition d'une expérience internationale valorisante</li>
        <li>Contribution au développement économique local</li>
        <li>Réduction de la fuite des cerveaux</li>
      </ul>
      
      <h2>Comment acquérir ces compétences numériques?</h2>
      
      <p>Différentes options s'offrent aux jeunes africains souhaitant développer leurs compétences numériques :</p>
      
      <h3>Formations en ligne</h3>
      
      <p>De nombreuses plateformes proposent des cours de qualité, souvent à des tarifs accessibles, voire gratuits. Ces formations permettent d'apprendre à son rythme et d'acquérir des compétences recherchées sur le marché.</p>
      
      <h3>Bootcamps et programmes intensifs</h3>
      
      <p>Des programmes de formation intensive, comme ceux proposés par Skillmetoo, permettent d'acquérir rapidement des compétences pratiques et de bénéficier d'un accompagnement personnalisé.</p>
      
      <h3>Communautés d'apprentissage</h3>
      
      <p>Rejoindre des communautés de développeurs et de professionnels du numérique peut accélérer l'apprentissage et offrir des opportunités de réseautage précieuses.</p>
      
      <h2>Conclusion</h2>
      
      <p>Le développement des compétences numériques représente une opportunité unique pour la jeunesse africaine. En investissant dans ces compétences, les jeunes du continent peuvent non seulement améliorer leur propre avenir, mais aussi contribuer activement à la transformation numérique de l'Afrique.</p>
      
      <p>Chez Skillmetoo, nous sommes convaincus que l'avenir de l'Afrique passe par le développement du capital humain et l'acquisition de compétences adaptées aux besoins du marché mondial. C'est pourquoi nous nous engageons à former la prochaine génération de talents numériques africains.</p>
    `,
    image: '/images/training.png',
    category: 'Technologie',
    tags: ['Compétences numériques', 'Marché du travail', 'Formation'],
    date: '12 mai 2025',
    author: {
      name: 'Marie Kouassi',
      avatar: '/images/user.webp',
      role: 'Responsable Formation',
      bio: "Experte en conception pédagogique avec plus de 10 ans d'expérience dans le développement de programmes de formation adaptés aux besoins du marché africain.",
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
    content: "Contenu détaillé de l'article sur l'entrepreneuriat...",
    image: '/images/blog/blog-2.jpg',
    category: 'Entrepreneuriat',
    tags: ['Business', 'Startup', 'Conseils'],
    date: '3 mai 2025',
    author: {
      name: 'Jean Osei',
      avatar: '/images/team/avatar-2.jpg',
      role: 'Mentor Entrepreneuriat',
      bio: 'Entrepreneur à succès ayant fondé trois startups et accompagné plus de 50 jeunes entrepreneurs dans le lancement de leur entreprise.',
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
    content: "Contenu détaillé de l'article sur les soft skills...",
    image: '/images/blog/blog-3.jpg',
    category: 'Développement personnel',
    tags: ['Soft skills', 'Carrière internationale', 'Communication'],
    date: '29 avril 2025',
    author: {
      name: 'Fatima Diop',
      avatar: '/images/team/avatar-3.jpg',
      role: 'Coach professionnel',
      bio: "Coach certifiée spécialisée dans le développement des compétences non techniques et l'accompagnement des transitions de carrière.",
    },
    readTime: '6 min',
    slug: 'soft-skills-marche-international',
    featured: false,
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<any>(null)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likeCount, setLikeCount] = useState(42)
  const [hasLiked, setHasLiked] = useState(false)
  const [showShareOptions, setShowShareOptions] = useState(false)

  // Find the post based on the slug from URL params
  useEffect(() => {
    if (params.slug) {
      const foundPost = allPosts.find((post) => post.slug === params.slug)
      if (foundPost) {
        setPost(foundPost)
      } else {
        router.push('/blog')
      }
    }
  }, [params.slug, router])

  // Handle like action
  const handleLike = () => {
    if (hasLiked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setHasLiked(!hasLiked)
  }

  // Copy link to clipboard
  const copyToClipboard = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    alert('Lien copié dans le presse-papier !')
    setShowShareOptions(false)
  }

  // If post is not found or still loading
  if (!post) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p className='text-gray-600 dark:text-gray-400'>
            Chargement de l'article...
          </p>
        </div>
      </div>
    )
  }

  // Function to render HTML content safely
  const renderHTML = (htmlContent: string) => {
    return { __html: htmlContent }
  }

  // Get related posts (excluding current post)
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id)
    .filter(
      (p) =>
        p.category === post.category ||
        p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 2)

  return (
    <main>
      {/* Hero Section */}
      <section className='pt-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white'>
        <div className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12 pb-8'>
          <div className='max-w-4xl mx-auto'>
            <Link
              href='/blog'
              className='inline-flex items-center text-blue-100 hover:text-white mb-6'
            >
              <ArrowLeft className='h-4 w-4 mr-2' />
              Retour aux articles
            </Link>
            <div className='space-y-4'>
              <div className='flex flex-wrap gap-2'>
                <span className='px-3 py-1 bg-blue-800/50 text-white text-sm font-medium rounded-full'>
                  {post.category}
                </span>
                {post.tags.map((tag: string) => (
                  <Link
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    key={tag}
                    className='px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-colors'
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                {post.title}
              </h1>
              <p className='text-xl text-blue-100'>{post.excerpt}</p>
              <div className='flex items-center justify-between flex-wrap gap-4 pt-2'>
                <div className='flex items-center'>
                  <div className='relative h-12 w-12 rounded-full overflow-hidden mr-4'>
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <div className='font-medium'>{post.author.name}</div>
                    <div className='text-sm text-blue-100'>
                      {post.author.role}
                    </div>
                  </div>
                </div>
                <div className='flex items-center space-x-4 text-sm text-blue-100'>
                  <div className='flex items-center'>
                    <Calendar className='h-4 w-4 mr-1' />
                    {post.date}
                  </div>
                  <div className='flex items-center'>
                    <Clock className='h-4 w-4 mr-1' />
                    {post.readTime} de lecture
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className='relative mt-8'>
          <div className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
            <div className='max-w-4xl mx-auto'>
              <div className='relative aspect-[21/9] rounded-t-2xl overflow-hidden'>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
          {/* Curve overlay */}
          <div className='absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-gray-950'></div>
        </div>
      </section>

      {/* Article Content */}
      <section className='py-12 bg-white dark:bg-gray-950'>
        <div className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='flex flex-col lg:flex-row gap-12'>
            {/* Main Content */}
            <div className='lg:w-2/3'>
              <div className='prose prose-lg dark:prose-invert max-w-none'>
                <div dangerouslySetInnerHTML={renderHTML(post.content)} />
              </div>

              {/* Tags */}
              <div className='mt-8 pt-6 border-t border-gray-200 dark:border-gray-800'>
                <div className='flex items-center flex-wrap gap-2'>
                  <Tag className='h-4 w-4 mr-1 text-gray-500 dark:text-gray-400' />
                  {post.tags.map((tag: string) => (
                    <Link
                      href={`/blog?tag=${encodeURIComponent(tag)}`}
                      key={tag}
                      className='px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Article Actions */}
              <div className='mt-8 flex items-center justify-between border-y border-gray-200 dark:border-gray-800 py-4'>
                <div className='flex items-center space-x-4'>
                  <Button
                    variant='ghost'
                    size='sm'
                    className={`flex items-center ${
                      hasLiked
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                    onClick={handleLike}
                  >
                    <ThumbsUp className='h-4 w-4 mr-1' />
                    <span>{likeCount}</span>
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='flex items-center text-gray-600 dark:text-gray-400'
                  >
                    <MessageSquare className='h-4 w-4 mr-1' />
                    <span>12 commentaires</span>
                  </Button>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className='relative'>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='flex items-center text-gray-600 dark:text-gray-400'
                      onClick={() => setShowShareOptions(!showShareOptions)}
                    >
                      <Share2 className='h-4 w-4 mr-1' />
                      <span>Partager</span>
                    </Button>
                    {showShareOptions && (
                      <div className='absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 z-10 w-40'>
                        <button
                          className='flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md'
                          onClick={() =>
                            window.open(
                              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                window.location.href
                              )}`,
                              '_blank'
                            )
                          }
                        >
                          <IconBrandFacebook className='h-4 w-4 mr-2' />
                          Facebook
                        </button>
                        <button
                          className='flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md'
                          onClick={() =>
                            window.open(
                              `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                                post.title
                              )}&url=${encodeURIComponent(
                                window.location.href
                              )}`,
                              '_blank'
                            )
                          }
                        >
                          <IconBrandX className='h-4 w-4 mr-2' />
                          Twitter
                        </button>
                        <button
                          className='flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md'
                          onClick={() =>
                            window.open(
                              `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                                window.location.href
                              )}&title=${encodeURIComponent(post.title)}`,
                              '_blank'
                            )
                          }
                        >
                          <IconBrandLinkedin className='h-4 w-4 mr-2' />
                          LinkedIn
                        </button>
                        <button
                          className='flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md'
                          onClick={copyToClipboard}
                        >
                          <Link2 className='h-4 w-4 mr-2' />
                          Copier le lien
                        </button>
                      </div>
                    )}
                  </div>
                  <Button
                    variant='ghost'
                    size='sm'
                    className={`flex items-center ${
                      isBookmarked
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    <Bookmark className='h-4 w-4 mr-1' />
                    <span>Sauvegarder</span>
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className='mt-8 bg-gray-50 dark:bg-gray-900 rounded-xl p-6'>
                <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6'>
                  <div className='relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0'>
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                      À propos de l'auteur
                    </h3>
                    <h4 className='text-lg font-medium mb-1 text-gray-900 dark:text-white'>
                      {post.author.name}
                    </h4>
                    <p className='text-gray-500 dark:text-gray-400 mb-3'>
                      {post.author.role}
                    </p>
                    <p className='text-gray-700 dark:text-gray-300'>
                      {post.author.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Comments section would go here */}
            </div>

            {/* Sidebar */}
            <div className='lg:w-1/3 space-y-8'>
              {/* Related Posts */}
              <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
                  Articles connexes
                </h3>
                {relatedPosts.length > 0 ? (
                  <div className='space-y-4'>
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        key={relatedPost.id}
                      >
                        <div className='flex items-start hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors'>
                          <div className='relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0'>
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className='object-cover'
                            />
                          </div>
                          <div className='ml-4'>
                            <h4 className='text-sm font-medium text-gray-900 dark:text-white line-clamp-2'>
                              {relatedPost.title}
                            </h4>
                            <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                              {relatedPost.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className='text-gray-600 dark:text-gray-400'>
                    Aucun article connexe trouvé.
                  </p>
                )}
              </div>

              {/* Categories */}
              <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
                  Catégories
                </h3>
                <ul className='space-y-2'>
                  <li>
                    <Link
                      href='/blog?category=Technologie'
                      className='flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    >
                      <span className='flex items-center'>
                        <ChevronRight className='h-4 w-4 mr-2' />
                        Technologie
                      </span>
                      <span className='bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full px-2 py-1'>
                        2
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/blog?category=Entrepreneuriat'
                      className='flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    >
                      <span className='flex items-center'>
                        <ChevronRight className='h-4 w-4 mr-2' />
                        Entrepreneuriat
                      </span>
                      <span className='bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full px-2 py-1'>
                        1
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/blog?category=Développement personnel'
                      className='flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    >
                      <span className='flex items-center'>
                        <ChevronRight className='h-4 w-4 mr-2' />
                        Développement personnel
                      </span>
                      <span className='bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full px-2 py-1'>
                        2
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/blog?category=Carrière'
                      className='flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    >
                      <span className='flex items-center'>
                        <ChevronRight className='h-4 w-4 mr-2' />
                        Carrière
                      </span>
                      <span className='bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full px-2 py-1'>
                        2
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className='bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 shadow-md text-white'>
                <h3 className='text-xl font-bold mb-3'>Restez informé</h3>
                <p className='text-blue-100 mb-4'>
                  Abonnez-vous à notre newsletter pour recevoir nos derniers
                  articles et actualités.
                </p>
                <div className='space-y-3'>
                  <input
                    type='email'
                    placeholder='Votre adresse email'
                    className='w-full px-4 py-2 rounded-md bg-white/20 placeholder:text-white/70 border border-white/30 text-white'
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
      <section className='py-16 bg-gray-50 dark:bg-gray-900'>
        <div className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl p-8 md:p-12 shadow-xl'>
            <div className='max-w-3xl mx-auto text-center text-white'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Prêt à développer vos compétences numériques ?
              </h2>
              <p className='text-xl text-white/90 mb-8'>
                Rejoignez notre programme de formation et transformez votre
                carrière.
              </p>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <Button className='bg-white text-yellow-600 hover:bg-yellow-50 h-12 px-8 text-base'>
                  Découvrir nos formations
                </Button>
                <Button
                  variant='outline'
                  className='border-white text-black hover:bg-white/10 h-12 px-8 text-base'
                >
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
