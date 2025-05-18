import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, Lock, Calendar, Book, ArrowRight } from 'lucide-react'

interface FeaturedMagazineProps {
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
}

const FeaturedMagazine = ({ magazine }: FeaturedMagazineProps) => {
  return (
    <div className='bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl overflow-hidden shadow-xl'>
      <div className='relative'>
        {/* Background pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_15%_50%,rgba(255,255,255,0.15)_0%,transparent_50%)]'></div>
          <div className='absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_85%_30%,rgba(255,255,255,0.13)_0%,transparent_50%)]'></div>
        </div>

        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 md:py-12 items-center'>
            {/* Text content */}
            <div className='text-white order-2 lg:order-1'>
              <div className='inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-4'>
                <Calendar className='h-4 w-4 mr-2' />
                <span>{magazine.date}</span>
                <span className='mx-2'>•</span>
                <span>{magazine.edition}</span>
              </div>

              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                {magazine.title}
              </h2>

              <p className='text-blue-100 mb-6'>{magazine.description}</p>

              <div className='flex items-center text-blue-100 mb-4'>
                <Book className='h-4 w-4 mr-2' />
                <span>Par {magazine.authors.join(', ')}</span>
                <span className='mx-2'>•</span>
                <span>{magazine.pages} pages</span>
              </div>

              <div className='flex flex-wrap gap-2 mb-6'>
                {magazine.topics.map((topic) => (
                  <span
                    key={topic}
                    className='inline-block px-2 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xs rounded-md transition-colors'
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className='flex flex-wrap gap-4'>
                {magazine.isFree ? (
                  <>
                    <Button className='bg-white text-blue-700 hover:bg-blue-50'>
                      <BookOpen className='mr-2 h-4 w-4' />
                      Lire maintenant
                    </Button>
                    <Button
                      variant='outline'
                      className='border-white text-black hover:bg-white/10'
                    >
                      En savoir plus
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className='bg-yellow-500 hover:bg-yellow-600 border-0'>
                      <Lock className='mr-2 h-4 w-4' />
                      Acheter pour {magazine.price}
                    </Button>
                    <Button
                      variant='outline'
                      className='border-white text-white hover:bg-white/10'
                    >
                      En savoir plus
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Magazine cover */}
            <div className='order-1 lg:order-2 flex justify-center lg:justify-end'>
              <div className='relative h-[400px] w-[280px] shadow-2xl transform rotate-3 transition-transform hover:rotate-0 duration-300'>
                <Image
                  src={magazine.coverImage}
                  alt={magazine.title}
                  fill
                  className='object-cover rounded-lg'
                />

                {/* Free/Premium badge */}
                <div className='absolute top-3 right-3'>
                  <span
                    className={`px-3 py-1 ${
                      magazine.isFree ? 'bg-green-500' : 'bg-yellow-500'
                    } text-white text-xs font-medium rounded-full flex items-center shadow-md`}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMagazine
