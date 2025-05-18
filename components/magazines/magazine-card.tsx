import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Book, BookOpen, Lock } from 'lucide-react'

interface MagazineCardProps {
  magazine: {
    id: number
    title: string
    description: string
    image: string
    coverImage: string
    edition: string
    date: string
    pdfUrl: string
    isFree: boolean
    price?: string
    pages: number
    authors: string[]
    topics: string[]
    featured: boolean
  }
  variant?: 'default' | 'featured'
}

const MagazineCard = ({ magazine, variant = 'default' }: MagazineCardProps) => {
  const isFeatured = variant === 'featured'

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex ${
        isFeatured ? 'flex-col md:flex-row' : 'flex-col'
      }`}
    >
      <div
        className={`relative ${
          isFeatured ? 'aspect-[4/3] md:aspect-square md:w-2/5' : 'aspect-[4/3]'
        }`}
      >
        <Image
          src={magazine.coverImage}
          alt={magazine.title}
          fill
          className='object-cover transition-transform duration-300 hover:scale-105'
        />

        {/* Edition badge */}
        <div className='absolute top-3 left-3'>
          <span className='px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full'>
            {magazine.edition}
          </span>
        </div>

        {/* Free/Premium badge */}
        <div className='absolute top-3 right-3'>
          <span
            className={`px-3 py-1 ${
              magazine.isFree ? 'bg-green-500' : 'bg-yellow-500'
            } text-white text-xs font-medium rounded-full flex items-center`}
          >
            {magazine.isFree ? (
              <>
                <BookOpen className='h-3 w-3 mr-1' />
                Gratuit
              </>
            ) : (
              <>
                <Lock className='h-3 w-3 mr-1' />
                Premium
              </>
            )}
          </span>
        </div>
      </div>

      <div className={`p-6 flex flex-col ${isFeatured ? 'md:w-3/5' : ''}`}>
        <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
          {magazine.date} • {magazine.pages} pages
        </div>

        <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
          {magazine.title}
        </h3>

        <p
          className={`text-gray-600 dark:text-gray-300 flex-grow ${
            isFeatured ? 'mb-4' : 'mb-4 line-clamp-3'
          }`}
        >
          {magazine.description}
        </p>

        <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4'>
          <Book className='h-4 w-4 mr-2' />
          <span>Par {magazine.authors.join(', ')}</span>
        </div>

        <div className='flex flex-wrap gap-2 mb-6'>
          {magazine.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className='inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md'
            >
              {topic}
            </span>
          ))}
          {magazine.topics.length > 3 && (
            <span className='inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md'>
              +{magazine.topics.length - 3}
            </span>
          )}
        </div>

        <div className='flex items-center justify-between'>
          {magazine.isFree ? (
            <Link href={`/magazine/${magazine.id}`} className='w-full'>
              <Button className='w-full bg-blue-600 hover:bg-blue-700'>
                Lire maintenant
              </Button>
            </Link>
          ) : (
            <div className='w-full flex flex-col sm:flex-row sm:items-center gap-3'>
              <div className='text-lg font-bold text-yellow-500 dark:text-yellow-400'>
                {magazine.price}
              </div>
              <Link href={`/magazine/${magazine.id}`} className='sm:flex-grow'>
                <Button className='w-full bg-yellow-500 hover:bg-yellow-600'>
                  Acheter
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MagazineCard
