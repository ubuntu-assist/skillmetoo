import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

type Activity = {
  title: string
  description: string
  link: string
  color: 'blue' | 'purple' | 'green' | 'orange'
  image: string
}

const activities: Activity[] = [
  {
    title: 'Formation',
    description:
      'Programmes de développement de compétences techniques et soft skills adaptés au marché international.',
    link: '/activites/#formation',
    color: 'blue',
    image: '/images/training.png',
  },
  {
    title: 'Mentorat',
    description:
      'Accompagnement personnalisé par des professionnels expérimentés pour guider les jeunes talents.',
    link: '/activites/#mentorat',
    color: 'purple',
    image: '/images/mentorship.webp',
  },
  {
    title: 'Réseautage',
    description:
      "Connexions avec des opportunités professionnelles et création d'un réseau solide.",
    link: '/activites/#reseautage',
    color: 'green',
    image: '/images/networking.webp',
  },
  {
    title: 'Incubation',
    description:
      'Soutien aux projets innovants pour transformer les idées en entreprises viables.',
    link: '/activites/#incubation',
    color: 'orange',
    image: '/images/incubation.webp',
  },
]

const ActivitiesSection = () => {
  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            Nos{' '}
            <span className='text-blue-600 dark:text-blue-400'>activités</span>
          </h2>
          <p className='text-gray-600 dark:text-gray-400 text-lg'>
            Découvrez les différentes façons dont nous accompagnons les jeunes
            dans leur développement professionnel et personnel.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              description={activity.description}
              link={activity.link}
              color={activity.color}
              image={activity.image}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className='mt-16 text-center'>
          <Link href='/activites'>
            <Button className='bg-blue-600 hover:bg-blue-700 h-12 px-6 button-hover'>
              Voir toutes nos activités
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

const ActivityCard = ({
  title,
  description,
  link,
  color,
  image,
  delay,
}: {
  title: string
  description: string
  link: string
  color: 'blue' | 'purple' | 'green' | 'orange'
  image: string
  delay: number
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'blue':
        return {
          gradient: 'from-blue-600 to-blue-400',
          badge: 'bg-blue-500/90',
          text: 'text-blue-400',
          border: 'border-blue-600',
          shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.5)]',
        }
      case 'purple':
        return {
          gradient: 'from-purple-600 to-purple-400',
          badge: 'bg-purple-500/90',
          text: 'text-purple-400',
          border: 'border-purple-600',
          shadow: 'shadow-[0_0_15px_rgba(147,51,234,0.5)]',
        }
      case 'green':
        return {
          gradient: 'from-emerald-600 to-emerald-400',
          badge: 'bg-emerald-500/90',
          text: 'text-emerald-400',
          border: 'border-emerald-600',
          shadow: 'shadow-[0_0_15px_rgba(5,150,105,0.5)]',
        }
      case 'orange':
        return {
          gradient: 'from-yellow-600 to-yellow-400',
          badge: 'bg-yellow-500/90',
          text: 'text-yellow-400',
          border: 'border-yellow-600',
          shadow: 'shadow-[0_0_15px_rgba(234,179,8,0.5)]',
        }
      default:
        return {
          gradient: 'from-blue-600 to-blue-400',
          badge: 'bg-blue-500/90',
          text: 'text-blue-400',
          border: 'border-blue-600',
          shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.5)]',
        }
    }
  }

  const colors = getColorClass()

  return (
    <div
      className='relative group bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl flex flex-col'
      style={{
        animationDelay: `${delay}s`,
        animation: 'fadeInUp 0.6s ease-out forwards',
      }}
    >
      {/* Image with gradient overlay */}
      <div className='relative h-56'>
        <Image
          src={image}
          alt={`${title} illustration`}
          fill
          className='object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-30`}
        />
      </div>

      {/* Content */}
      <div className='relative z-20 p-6 flex flex-col flex-grow'>
        {/* Title badge */}
        <div className='absolute -top-4 left-6'>
          <span
            className={`${colors.badge} text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg transform transition-transform duration-300 group-hover:-translate-y-1`}
          >
            {title}
          </span>
        </div>

        {/* Description */}
        <p
          className='text-gray-600 dark:text-gray-300 mt-12 mb-6 leading-relaxed flex-grow opacity-0 transition-opacity duration-500'
          style={{ animation: `fadeIn 0.5s ease-out ${delay + 0.2}s forwards` }}
        >
          {description}
        </p>

        {/* Link */}
        <Link
          href={link}
          className={`inline-flex items-center ${colors.text} font-semibold hover:underline underline-offset-4 transition-all duration-300 self-start opacity-0`}
          style={{ animation: `fadeIn 0.5s ease-out ${delay + 0.3}s forwards` }}
        >
          En savoir plus
          <ArrowRight className='ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
        </Link>
      </div>

      {/* Hover border effect */}
      <div
        className={`absolute inset-0 border-4 ${colors.border} ${colors.shadow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`}
      />
    </div>
  )
}

export default ActivitiesSection
