'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { X } from 'lucide-react'

const galleryCategories = [
  { id: 'all', label: 'Tous' },
  { id: 'formations', label: 'Formations' },
  { id: 'evenements', label: 'Événements' },
  { id: 'realisations', label: 'Réalisations' },
]

const galleryItems = [
  {
    id: 1,
    image: '/images/gallery-img1.jpg',
    title: 'Formation Tech Leaders 2024',
    category: 'formations',
    size: 'large',
  },
  {
    id: 2,
    image: '/images/gallery-img2.png',
    title: "Hackathon d'innovation sociale",
    category: 'evenements',
    size: 'medium',
  },
  {
    id: 3,
    image: '/images/gallery-img3.jpg',
    title: 'Programme de mentorat',
    category: 'formations',
    size: 'small',
  },
  {
    id: 4,
    image: '/images/gallery-img4.jpg',
    title: "Conférence sur l'entrepreneuriat",
    category: 'evenements',
    size: 'medium',
  },
  {
    id: 5,
    image: '/images/gallery-img5.png',
    title: 'Remise des certificats',
    category: 'realisations',
    size: 'small',
  },
  {
    id: 6,
    image: '/images/gallery-img6.jpg',
    title: 'Atelier de développement web',
    category: 'formations',
    size: 'medium',
  },
]

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section className='py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-950'>
      <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='text-center max-w-3xl mx-auto mb-8 sm:mb-12'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white'>
            Notre{' '}
            <span className='text-blue-600 dark:text-blue-400'>galerie</span>
          </h2>
          <p className='text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed px-4'>
            Découvrez en images les moments forts de nos activités et les
            réalisations de nos bénéficiaires.
          </p>
        </div>

        <Tabs
          defaultValue='all'
          onValueChange={setActiveCategory}
          className='w-full'
        >
          {/* Mobile-first responsive tabs */}
          <div className='flex justify-center mb-6 sm:mb-8'>
            <div className='w-full sm:w-auto'>
              <TabsList className='bg-gray-100 dark:bg-gray-800/50 p-1 rounded-full w-full sm:w-auto grid grid-cols-2 sm:flex sm:inline-flex gap-1 sm:gap-0'>
                {galleryCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className='rounded-full px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-200 whitespace-nowrap'
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          <TabsContent value={activeCategory} className='mt-0'>
            {/* Responsive grid with better mobile handling */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5'>
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`
                    relative overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group
                    ${
                      item.size === 'large'
                        ? 'sm:col-span-2 lg:col-span-2 xl:col-span-2 sm:row-span-2'
                        : ''
                    }
                    ${
                      item.size === 'medium'
                        ? 'lg:col-span-1 xl:col-span-1'
                        : ''
                    }
                  `}
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div
                    className={`
                    relative 
                    ${
                      item.size === 'large'
                        ? 'aspect-[4/3] sm:aspect-[3/2]'
                        : 'aspect-[4/3]'
                    }
                  `}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
                      className='object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    {/* Responsive overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                      <div className='p-3 sm:p-4 text-white w-full'>
                        <h3 className='font-bold text-sm sm:text-base line-clamp-2'>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Responsive modal */}
        {selectedImage && (
          <ImageModal
            image={galleryItems.find((item) => item.id === selectedImage)!}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </section>
  )
}

const ImageModal = ({
  image,
  onClose,
}: {
  image: (typeof galleryItems)[0]
  onClose: () => void
}) => {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className='max-w-7xl w-[98vw] sm:w-[95vw] max-h-[98vh] sm:max-h-[95vh] p-0 overflow-hidden bg-black/95 border-0'>
        <VisuallyHidden>
          <DialogTitle>{image.title}</DialogTitle>
        </VisuallyHidden>

        {/* Responsive close button */}
        <Button
          variant='ghost'
          size='icon'
          onClick={onClose}
          className='absolute top-2 sm:top-4 right-2 sm:right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full w-8 h-8 sm:w-10 sm:h-10'
        >
          <X className='h-4 w-4 sm:h-5 sm:w-5' />
        </Button>

        {/* Responsive image container */}
        <div className='relative w-full h-[98vh] sm:h-[95vh] flex flex-col'>
          <div className='flex-1 relative'>
            <Image
              src={image.image}
              alt={image.title}
              fill
              sizes='98vw'
              className='object-contain'
              priority
            />
          </div>

          {/* Responsive caption */}
          <div className='bg-black/70 p-3 sm:p-4 lg:p-6 text-white border-t border-white/10'>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-bold leading-tight'>
              {image.title}
            </h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default GallerySection
