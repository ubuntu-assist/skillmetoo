'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Aminata Diallo',
    role: 'Entrepreneuse Tech, Promo 2023',
    image: '/images/user.webp',
    quote:
      "Skillmetoo a complètement changé ma vision de l'entrepreneuriat. La formation m'a donné les compétences techniques et la confiance nécessaires pour lancer ma startup. Aujourd'hui, j'emploie 5 personnes et nous avons des clients internationaux.",
  },
  {
    id: 2,
    name: 'Kouadio Konan',
    role: 'Développeur Web, Promo 2022',
    image: '/images/user.webp',
    quote:
      "Avant Skillmetoo, j'étais perdu dans mon parcours professionnel. Le programme de mentorat m'a guidé vers le développement web et m'a permis d'acquérir des compétences très recherchées. J'ai maintenant un emploi à distance pour une entreprise européenne.",
  },
  {
    id: 3,
    name: 'Fatou Ndiaye',
    role: 'Gestionnaire de projet, Promo 2021',
    image: '/images/user.webp',
    quote:
      "Les ateliers de leadership de Skillmetoo m'ont transformée professionnellement. J'ai appris à gérer des équipes multiculturelles et à piloter des projets complexes. Cette formation a été un véritable tremplin pour ma carrière internationale.",
  },
  {
    id: 4,
    name: 'Emmanuel Okoro',
    role: 'Designer UX/UI, Promo 2023',
    image: '/images/user.webp',
    quote:
      "Grâce à Skillmetoo, j'ai pu me reconvertir dans le design numérique. Leur approche pédagogique unique m'a permis d'apprendre rapidement et d'intégrer un réseau professionnel de qualité. Je recommande cette formation à tous les créatifs qui veulent se lancer dans le digital.",
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden'>
      <div className='container'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            Ce qu'ils <span className='text-yellow-500'>disent de nous</span>
          </h2>
          <p className='text-gray-600 dark:text-gray-400 text-lg'>
            Découvrez l'impact de nos programmes à travers les témoignages de
            nos bénéficiaires.
          </p>
        </div>

        <div className='relative max-w-5xl mx-auto'>
          {/* Decorative elements */}
          <div className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2'>
            <div className='text-blue-200 dark:text-blue-900/50'>
              <Quote className='h-24 w-24' />
            </div>
          </div>
          <div className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2'>
            <div className='text-yellow-200 dark:text-yellow-900/50'>
              <Quote className='h-24 w-24' />
            </div>
          </div>

          {/* Testimonial slider */}
          <div
            ref={sliderRef}
            className='relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden'
          >
            <div
              className='transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className='flex'>
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className='w-full flex-shrink-0 p-8 md:p-12'
                  >
                    <div className='flex flex-col md:flex-row gap-8 items-center'>
                      <div className='flex-shrink-0'>
                        <div className='relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900/30'>
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className='object-cover'
                          />
                        </div>
                      </div>
                      <div className='flex-grow text-center md:text-left'>
                        <p className='italic text-gray-700 dark:text-gray-300 text-lg mb-6'>
                          "{testimonial.quote}"
                        </p>
                        <h3 className='font-bold text-xl text-gray-900 dark:text-white'>
                          {testimonial.name}
                        </h3>
                        <p className='text-blue-600 dark:text-blue-400'>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <Button
              variant='ghost'
              size='icon'
              className='absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700'
              onClick={goToPrevious}
            >
              <ChevronLeft className='h-5 w-5' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700'
              onClick={goToNext}
            >
              <ChevronRight className='h-5 w-5' />
            </Button>

            {/* Dots indicator */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? 'w-6 bg-blue-600 dark:bg-blue-400'
                      : 'w-2 bg-gray-300 dark:bg-gray-600'
                  }`}
                  onClick={() => {
                    setIsAnimating(true)
                    setCurrentIndex(index)
                    setTimeout(() => setIsAnimating(false), 500)
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
