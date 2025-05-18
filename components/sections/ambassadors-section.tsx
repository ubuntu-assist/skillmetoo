'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'

const ambassadors = [
  {
    id: 1,
    name: 'Dr. Olivier Mukwege',
    role: 'CEO, TechInnovate Africa',
    bio: "Expert en innovation technologique avec plus de 15 ans d'expérience dans le conseil aux entreprises africaines en transformation numérique.",
    image: '/images/promotor.jpeg',
    socials: {
      linkedin: 'https://linkedin.com/in/oliviermukwege',
      twitter: 'https://twitter.com/omukwege',
    },
  },
  {
    id: 2,
    name: "Sarah N'Guessan",
    role: 'Fondatrice, EduFuture',
    bio: "Pionnière dans l'éducation en ligne en Afrique de l'Ouest, Sarah a développé des plateformes d'apprentissage accessibles pour plus de 50 000 jeunes.",
    image: '/images/promotor.jpeg',
    socials: {
      linkedin: 'https://linkedin.com/in/sarahnguessan',
      twitter: 'https://twitter.com/snguessan',
    },
  },
  {
    id: 3,
    name: 'Amadou Diallo',
    role: 'Investisseur & Business Angel',
    bio: 'Fort de son expérience dans la finance internationale, Amadou accompagne les startups africaines prometteuses et investit dans des solutions locales innovantes.',
    image: '/images/promotor.jpeg',
    socials: {
      linkedin: 'https://linkedin.com/in/amadoudiallo',
      website: 'https://amadoudiallo.com',
    },
  },
  {
    id: 4,
    name: 'Nadia Kamara',
    role: 'Experte en Marketing Digital',
    bio: "Consultante internationale en stratégies digitales qui a travaillé avec de grandes entreprises sur 3 continents. Elle forme aujourd'hui la prochaine génération de marketeurs.",
    image: '/images/promotor.jpeg',
    socials: {
      linkedin: 'https://linkedin.com/in/nadiakamara',
      twitter: 'https://twitter.com/nkamara',
      website: 'https://nadiakamara.com',
    },
  },
  {
    id: 5,
    name: 'Prof. Daniel Osei',
    role: 'Chercheur & Académicien',
    bio: "Professeur en sciences de l'éducation spécialisé dans les méthodes d'apprentissage innovantes adaptées aux réalités africaines.",
    image: '/images/promotor.jpeg',
    socials: {
      linkedin: 'https://linkedin.com/in/danielosei',
      website: 'https://danielosei.edu',
    },
  },
]

const AmbassadorsSection = () => {
  const [startIndex, setStartIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Number of ambassadors to show at once, responsive
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1
      if (window.innerWidth < 1024) return 2
      return 3
    }
    return 3 // Default for SSR
  }

  const visibleCount = getVisibleCount()

  const goToNext = () => {
    if (startIndex + visibleCount < ambassadors.length) {
      setStartIndex(startIndex + 1)
    } else {
      setStartIndex(0) // Loop back to the start
    }
  }

  const goToPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    } else {
      setStartIndex(ambassadors.length - visibleCount) // Go to the end
    }
  }

  // Get current visible ambassadors
  const visibleAmbassadors = ambassadors.slice(
    startIndex,
    startIndex + visibleCount
  )
  if (visibleAmbassadors.length < visibleCount) {
    const neededFromStart = visibleCount - visibleAmbassadors.length
    visibleAmbassadors.push(...ambassadors.slice(0, neededFromStart))
  }

  return (
    <section className='py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900'>
      <div className='px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
            Nos <span className='text-blue-500'>ambassadeurs</span>
          </h2>
          <p className='text-gray-600 dark:text-gray-400 text-lg'>
            Des personnalités inspirantes qui soutiennent notre mission et
            partagent notre vision d'une jeunesse africaine compétente et
            connectée.
          </p>
        </div>

        <div className='relative'>
          {/* Slider container */}
          <div ref={sliderRef} className='relative overflow-hidden px-4 pt-4'>
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
              }}
            >
              {ambassadors.map((ambassador) => (
                <div
                  key={ambassador.id}
                  className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4`}
                >
                  <AmbassadorCard ambassador={ambassador} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            variant='ghost'
            size='icon'
            className='absolute top-1/2 -left-6 sm:-left-8 -translate-y-1/2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 z-10'
            onClick={goToPrevious}
            aria-label='Précédent'
          >
            <ChevronLeft className='h-6 w-6' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='absolute top-1/2 -right-6 sm:-right-8 -translate-y-1/2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 z-10'
            onClick={goToNext}
            aria-label='Suivant'
          >
            <ChevronRight className='h-6 w-6' />
          </Button>

          {/* Dots indicator */}
          <div className='flex justify-center mt-10 space-x-3'>
            {Array.from({ length: ambassadors.length - visibleCount + 1 }).map(
              (_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    startIndex === index
                      ? 'bg-blue-500'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  onClick={() => setStartIndex(index)}
                  aria-label={`Aller à la diapositive ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const AmbassadorCard = ({
  ambassador,
}: {
  ambassador: (typeof ambassadors)[0]
}) => {
  return (
    <div className='backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-md h-full'>
      <div className='flex flex-col p-6 text-center'>
        <div className='relative h-28 w-28 mx-auto mt-4'>
          <Image
            src={ambassador.image}
            alt={ambassador.name}
            fill
            className='object-cover rounded-full ring-4 ring-blue-500/50'
          />
        </div>
        <h3 className='font-bold text-2xl mt-4 text-gray-900 dark:text-white'>
          {ambassador.name}
        </h3>
        <p className='text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-700 font-medium mb-3'>
          {ambassador.role}
        </p>
        <p className='prose text-sm text-gray-600 dark:text-gray-300 mx-auto max-w-xs'>
          {ambassador.bio}
        </p>
        <div className='flex justify-center space-x-4 mt-4'>
          {ambassador.socials.linkedin && (
            <SocialIcon
              icon={IconBrandLinkedin}
              href={ambassador.socials.linkedin}
              label='LinkedIn'
            />
          )}
          {ambassador.socials.twitter && (
            <SocialIcon
              icon={IconBrandX}
              href={ambassador.socials.twitter}
              label='Twitter'
            />
          )}
          {ambassador.socials.website && (
            <SocialIcon
              icon={IconBrandX} // Placeholder; replace with a website icon if available
              href={ambassador.socials.website}
              label='Site Web'
            />
          )}
        </div>
      </div>
    </div>
  )
}

const SocialIcon = ({
  icon: Icon,
  href,
  label,
}: {
  icon: any
  href: string
  label: string
}) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={label}
      className='h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200'
    >
      <Icon className='h-5 w-5' />
    </a>
  )
}

export default AmbassadorsSection
