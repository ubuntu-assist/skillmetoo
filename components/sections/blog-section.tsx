import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, User } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title:
      'Comment les compétences numériques transforment le marché du travail en Afrique',
    excerpt:
      'Découvrez comment la maîtrise des outils numériques ouvre de nouvelles opportunités professionnelles pour les jeunes africains.',
    image: '/images/training.png',
    category: 'Formation',
    date: '12 mai 2025',
    author: 'Marie Kouassi',
    readTime: '5 min',
    slug: 'competences-numeriques-marche-travail-afrique',
  },
  {
    id: 2,
    title: '5 conseils pour réussir son projet entrepreneurial en Afrique',
    excerpt:
      'Nos experts partagent leurs meilleures pratiques pour transformer une idée en entreprise prospère, adaptées au contexte africain.',
    image: '/images/networking.webp',
    category: 'Entrepreneuriat',
    date: '3 mai 2025',
    author: 'Jean Osei',
    readTime: '8 min',
    slug: 'conseils-reussir-projet-entrepreneurial-afrique',
  },
  {
    id: 3,
    title:
      'Les soft skills indispensables pour intégrer le marché international',
    excerpt:
      "Au-delà des compétences techniques, découvrez les qualités humaines qui font la différence pour travailler à l'international.",
    image: '/images/mentorship.webp',
    category: 'Développement personnel',
    date: '29 avril 2025',
    author: 'Fatima Diop',
    readTime: '6 min',
    slug: 'soft-skills-marche-international',
  },
]

const BlogSection = () => {
  return (
    <section className='py-20 bg-white dark:bg-gray-950'>
      <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
              Dernières{' '}
              <span className='text-blue-600 dark:text-blue-400'>
                actualités
              </span>
            </h2>
            <p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl'>
              Restez informés des dernières tendances et opportunités dans le
              domaine de la formation et de l'emploi.
            </p>
          </div>
          <div className='mt-6 md:mt-0'>
            <Link href='/blog'>
              <Button
                variant='outline'
                className='border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 button-hover'
              >
                Voir tous les articles
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

const BlogCard = ({ post }: { post: (typeof blogPosts)[0] }) => {
  return (
    <article className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover h-full flex flex-col'>
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
            <User className='h-4 w-4 mr-1' />
            {post.author}
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
        <div className='mt-auto pt-4'>
          <Link
            href={`/blog/${post.slug}`}
            className='text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors'
          >
            Lire l'article
            <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogSection
