'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden' // Import VisuallyHidden
import { X } from 'lucide-react'

// Gallery data remains unchanged
const galleryCategories = [
  { id: 'all', label: 'Tous' },
  { id: 'formations', label: 'Formations' },
  { id: 'evenements', label: 'Événements' },
  { id: 'realisations', label: 'Réalisations' },
]

const galleryItems = [
  {
    id: 1,
    image: '/images/professional-dev.webp',
    title: 'Formation Tech Leaders 2024',
    category: 'formations',
    size: 'large',
  },
  {
    id: 2,
    image: '/images/hackathon.jpg',
    title: "Hackathon d'innovation sociale",
    category: 'evenements',
    size: 'medium',
  },
  {
    id: 3,
    image: '/images/gallery.webp',
    title: 'Programme de mentorat',
    category: 'formations',
    size: 'small',
  },
  {
    id: 4,
    image: '/images/gallery.webp',
    title: "Conférence sur l'entrepreneuriat",
    category: 'evenements',
    size: 'medium',
  },
  {
    id: 5,
    image: '/images/gallery.webp',
    title: 'Remise des certificats',
    category: 'realisations',
    size: 'small',
  },
  {
    id: 6,
    image: '/images/gallery.webp',
    title: 'Atelier de développement web',
    category: 'formations',
    size: 'medium',
  },
  {
    id: 7,
    image: '/images/gallery-2.webp',
    title: 'Projet communautaire',
    category: 'realisations',
    size: 'large',
  },
  {
    id: 8,
    image: '/images/gallery.webp',
    title: 'Séminaire sur le leadership',
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
    <section className='py-20 bg-white dark:bg-gray-950'>
      <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            Notre{' '}
            <span className='text-blue-600 dark:text-blue-400'>galerie</span>
          </h2>
          <p className='text-gray-600 dark:text-gray-400 text-lg'>
            Découvrez en images les moments forts de nos activités et les
            réalisations de nos bénéficiaires.
          </p>
        </div>

        <Tabs
          defaultValue='all'
          onValueChange={setActiveCategory}
          className='w-full'
        >
          <div className='flex justify-center mb-8'>
            <TabsList className='bg-gray-100 dark:bg-gray-800/50 p-1 rounded-full'>
              {galleryCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className='rounded-full px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white'
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className='mt-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`
                    relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group
                    ${item.size === 'large' ? 'md:col-span-2 row-span-2' : ''}
                    ${item.size === 'medium' ? 'row-span-1' : ''}
                  `}
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className='relative aspect-[4/3]'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                      <div className='p-4 text-white'>
                        <h3 className='font-bold'>{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className='mt-12 flex justify-center'>
          <Button className='bg-blue-600 hover:bg-blue-700 h-12 px-6 button-hover'>
            Voir toute la galerie
          </Button>
        </div>

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
      <DialogContent className='max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-black/95'>
        <VisuallyHidden>
          <DialogTitle>{image.title}</DialogTitle>
        </VisuallyHidden>
        <Button
          variant='ghost'
          size='icon'
          onClick={onClose}
          className='absolute top-2 right-2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full'
        >
          <X className='h-5 w-5' />
        </Button>
        <div className='relative w-full h-[95vh]'>
          <Image
            src={image.image}
            alt={image.title}
            fill
            className='object-contain'
          />
          <div className='absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white'>
            <h3 className='text-xl font-bold'>{image.title}</h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default GallerySection
