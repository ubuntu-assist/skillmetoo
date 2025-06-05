'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Pr. Hugues Kenfack',
    role: "Président de l'université de Toulouse 1 - Capitol",
    image: '/images/testimonial1.png',
    countryCode: 'fr',
    quote:
      "Peut-on construire avec les jeunes leur avenir en confiance ? Oui, c'est possible. Réunir toutes les compétences du monde entier pour les partager avec les jeunes, leur permettre de réussir leurs projets d'études et leur insertion professionnelle, voilà une grande innovation. Skillmetoo est au cœur de cette innovation, au cœur de cette démarche de qualité, au cœur de cette démarche positive pour l'avenir des jeunes. Je soutiens cette initiative...",
  },
  {
    id: 2,
    name: 'Serges Wamba Fosso',
    role: 'Ancien vice-président chez Schlumberger global',
    image: '/images/testimonial2.png',
    countryCode: 'fr',
    quote:
      "L'avenir en confiance ? Oui. La dynamique des marchés de l'emploi est en constante évolution et il faut être au courant des changements qu'ils imposent. Vos attitudes, vos soft skills, les conseils que vous allez recevoir vont être les clés qui vont définir votre évolution de carrière... Sans mentor, vous n'allez pas très loin. Donc, mettre en place un système de mentorat pour suivre les jeunes, c'est tout simplement génial. C'est la raison pour laquelle je soutiens cette initiative à 100 %.",
  },
  {
    id: 3,
    name: 'Dr. Ines Teuma',
    role: "Ancienne joueuse de l'équipe nationale de Basketball du Cameroun (Lionne indomptable)",
    image: '/images/testimonial3.png',
    countryCode: 'us',
    quote:
      "... C'est grâce à une bourse pour le sport que je me suis retrouvée aux États-Unis à l'âge de 20 ans pour continuer mes études supérieures... ayant moi-même retenu du mentoring dans la réalisation de mes ambitions professionnelles... Je ne sais pas comment le parcours pour arriver à la position où je suis aurait été accompli sans l'apport du mentoring... Bref, je suis une fervente supportrice du mentoring. À toi, jeune étudiant ou jeune élève qui désires réaliser le potentiel que tu as en toi, je te recommande vivement de participer et d'adhérer au programme SKILLMETOO...",
  },
  {
    id: 4,
    name: 'Stephane Mbiandzi',
    role: "Fondateur de Yoolearn | La plus importante plateforme africaine de retour d'experience",
    image: '/images/testimonial4.jpg',
    countryCode: 'fr',
    quote:
      "... J'apporte mon soutien total à SKILLMETOO, qui est une communauté de personnes expérimentées qui ont décidé de partager leurs retours d'expérience avec le plus grand nombre. J'y apporterai également ma contribution...",
  },
  {
    id: 5,
    name: 'Francis Mabou',
    role: 'Ancien directeur général de Legend Mining Cameroon | Projet minier Camerouno-Australien',
    image: '/images/testimonial5.png',
    countryCode: 'ca',
    quote:
      "... Je vous parle de l'avenir en confiance en me basant sur ma propre expérience. Quand on a travaillé dans différents pays du monde, on a été confronté à plusieurs cultures, quand on a exercé dans différents secteurs d'activités, quand on a dû aller d'un continent à un autre et à chaque fois devoir recommencer à zéro, alors on sait donner un sens à sa vie. SKILLMETOO est une initiative qui aide les jeunes à donner un sens noble à leur vie...",
  },
  {
    id: 6,
    name: 'Yves Martial Anango',
    role: "Etude au Cameroun. Entreprenariat au Cameroun et au Gabon puis route vers l'Europe passant par l'Algerie",
    image: '/images/testimonial6.png',
    countryCode: 'de',
    quote:
      "... Très rapidement, le Cameroun n'était plus assez grand pour mes ambitions. Il fallait aller à la conquête de l'Afrique. Ce parcours n'a pas été sans difficultés. Cela a été d'autant plus difficile que très souvent il fallait compter sur ses capacités personnelles. Aujourd'hui, conscient de toutes ces difficultés et conscient de tout ce temps perdu, je soutiens entièrement et de tout mon cœur l'initiative de Skillmetoo...",
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
            Avis des <span className='text-yellow-500'>experts</span>
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
                            src={testimonial.image!}
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
                        <div className='flex items-center justify-center md:justify-start gap-3 mb-2'>
                          <h3 className='font-bold text-xl text-gray-900 dark:text-white'>
                            {testimonial.name}
                          </h3>
                          <div className='relative h-6 w-8 rounded overflow-hidden shadow-sm'>
                            <Image
                              src={`https://flagcdn.com/w40/${testimonial.countryCode}.png`}
                              alt={`${testimonial.countryCode} flag`}
                              fill
                              className='object-cover'
                            />
                          </div>
                        </div>
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
