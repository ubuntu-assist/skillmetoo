import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  BookOpen,
  Network,
  Lightbulb,
  Target,
} from 'lucide-react'

const activities = [
  {
    id: 'formation',
    title: 'Formations',
    icon: BookOpen,
    shortDescription:
      'Programmes de développement de compétences techniques et soft skills.',
    description:
      'Nos formations couvrent un large éventail de compétences techniques et douces, conçues pour préparer les jeunes africains au marché du travail international. De la programmation au marketing digital, en passant par le design et la gestion de projet, nos programmes sont élaborés par des experts du domaine.',
    image: '/images/org-training.jpg',
    programs: [
      {
        id: 'web-dev',
        title: 'Développement Web Full-Stack',
        duration: '12 semaines',
        format: 'Hybride (présentiel et en ligne)',
        nextSession: '15 juin 2025',
        image: '/images/training-1.jpg',
        slug: 'developpement-web-full-stack',
      },
      {
        id: 'data-science',
        title: 'Data Science & Intelligence Artificielle',
        duration: '16 semaines',
        format: '100% en ligne',
        nextSession: '1 juillet 2025',
        image: '/images/training-2.jpg',
        slug: 'data-science-intelligence-artificielle',
      },
      {
        id: 'ui-ux',
        title: 'Design UI/UX',
        duration: '8 semaines',
        format: 'Hybride (présentiel et en ligne)',
        nextSession: '20 juin 2025',
        image: '/images/training-3.jpg',
        slug: 'design-ui-ux',
      },
    ],
  },
  {
    id: 'mentorat',
    title: 'Mentorat',
    icon: Users,
    shortDescription:
      'Accompagnement personnalisé par des professionnels expérimentés.',
    description:
      'Notre programme de mentorat met en relation les jeunes talents avec des professionnels expérimentés qui les guident dans leur parcours de développement personnel et professionnel. Les mentors partagent leur expertise, leur réseau et leurs conseils personnalisés pour aider les mentorés à atteindre leurs objectifs.',
    image: '/images/mentorship.webp',
    programs: [
      {
        id: 'career-guidance',
        title: 'Orientation de carrière',
        duration: '6 mois',
        format: 'Sessions individuelles bi-mensuelles',
        nextSession: 'Inscriptions permanentes',
        image: '/images/mentorship-1.jpg',
        slug: 'orientation-carriere',
      },
      {
        id: 'entrepreneurship',
        title: 'Mentorat Entrepreneurial',
        duration: '12 mois',
        format: 'Sessions individuelles mensuelles + ateliers de groupe',
        nextSession: '30 juin 2025',
        image: '/images/mentorship-2.jpg',
        slug: 'mentorat-entrepreneurial',
      },
      {
        id: 'leadership',
        title: 'Développement du Leadership',
        duration: '9 mois',
        format: 'Sessions individuelles + travaux pratiques',
        nextSession: '15 juin 2025',
        image: '/images/mentorship-3.jpg',
        slug: 'developpement-leadership',
      },
    ],
  },
  {
    id: 'reseautage',
    title: 'Réseautage',
    icon: Network,
    shortDescription:
      "Connexions avec des opportunités professionnelles et création d'un réseau solide.",
    description:
      "Nos événements de réseautage créent des opportunités pour les jeunes africains de se connecter avec des employeurs potentiels, des investisseurs et d'autres professionnels. Ces événements favorisent l'échange d'idées, la découverte d'opportunités et la création de collaborations fructueuses.",
    image: '/images/networking.webp',
    programs: [
      {
        id: 'tech-meetups',
        title: 'Tech Meetups',
        duration: 'Événements mensuels',
        format: 'Présentiel dans différentes villes africaines',
        nextSession: '25 juin 2025 - Dakar',
        image: '/images/networking-1.jpg',
        slug: 'tech-meetups',
      },
      {
        id: 'job-fair',
        title: "Salon de l'emploi virtuel",
        duration: '3 jours',
        format: '100% en ligne',
        nextSession: '15-17 juillet 2025',
        image: '/images/networking-2.jpg',
        slug: 'salon-emploi-virtuel',
      },
      {
        id: 'industry-connect',
        title: 'Industry Connect',
        duration: 'Événements trimestriels',
        format: 'Hybride (présentiel et en ligne)',
        nextSession: '5 août 2025',
        image: '/images/networking-3.jpg',
        slug: 'industry-connect',
      },
    ],
  },
  {
    id: 'incubation',
    title: 'Incubation',
    icon: Lightbulb,
    shortDescription:
      'Soutien aux projets innovants pour transformer les idées en entreprises viables.',
    description:
      "Notre programme d'incubation offre aux entrepreneurs en herbe les ressources, le mentorat et l'accès au financement nécessaires pour transformer leurs idées innovantes en entreprises viables. Nous accompagnons les startups du concept initial jusqu'au lancement et à la croissance.",
    image: '/images/incubation.webp',
    programs: [
      {
        id: 'idea-accelerator',
        title: "Accélérateur d'idées",
        duration: '8 semaines',
        format: 'Programme intensif en présentiel',
        nextSession: '1 août 2025',
        image: '/images/incubation-1.jpg',
        slug: 'accelerateur-idees',
      },
      {
        id: 'startup-incubator',
        title: 'Incubateur de startups',
        duration: '12 mois',
        format: "Programme complet d'accompagnement",
        nextSession: '15 septembre 2025',
        image: '/images/incubation-2.jpg',
        slug: 'incubateur-startups',
      },
      {
        id: 'funding-readiness',
        title: 'Préparation au financement',
        duration: '4 mois',
        format: 'Ateliers + mentorat individuel',
        nextSession: '1 juillet 2025',
        image: '/images/incubation-3.jpg',
        slug: 'preparation-financement',
      },
    ],
  },
]

// Upcoming events (unchanged)
const upcomingEvents = [
  {
    id: 1,
    title: 'Atelier sur les compétences du 21e siècle',
    date: '25 mai 2025',
    time: '14:00 - 17:00',
    location: 'Campus Skillmetoo, Bamenda',
    category: 'Formation',
    image: '/images/training.png',
  },
  {
    id: 2,
    title: 'Hackathon Innovation Tech',
    date: '10-12 juin 2025',
    time: 'Événement sur 3 jours',
    location: "En ligne + Hub d'innovation, Douala",
    category: 'Événement',
    image: '/images/training.png',
  },
  {
    id: 3,
    title: 'Rencontre avec les investisseurs',
    date: '20 juin 2025',
    time: '9:00 - 18:00',
    location: 'Hôtel Azalaï, Abidjan',
    category: 'Réseautage',
    image: '/images/training.png',
  },
]

export default function ActivitiesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className='relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10'>
          <div className='animate-fade-in max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-sm'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
              Activités
            </h1>
            <p className='text-lg md:text-xl text-blue-100'>
              Transformez votre avenir avec nos programmes innovants pour la
              jeunesse africaine.
            </p>
          </div>
        </div>
      </section>
      {/* Activities Overview Section */}
      <section className='py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16'>
            {activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                icon={activity.icon}
                title={activity.title}
                description={activity.shortDescription}
                link={`#${activity.id}`}
              />
            ))}
          </div>

          <div className='text-center max-w-3xl mx-auto mb-12 sm:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white'>
              Comment nous <span className='text-yellow-500'>transformons</span>{' '}
              la jeunesse
            </h2>
            <p className='text-base sm:text-lg text-gray-600 dark:text-gray-300'>
              Notre approche holistique combine formation technique,
              développement personnel, mentorat et mise en réseau pour maximiser
              l'impact et les opportunités.
            </p>
          </div>

          <div className='relative max-w-4xl mx-auto'>
            <div className='rounded-xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9'>
              <Image
                src='/images/org-approach.jpg'
                alt='Notre approche'
                width={1200}
                height={675}
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px'
                className='w-full h-full object-cover'
              />
            </div>

            {/* Overlapping Stats */}
            <div className='absolute bottom-4 sm:bottom-0 right-4 sm:-right-4 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg max-w-[90%] sm:max-w-xs'>
              <div className='flex items-center mb-4'>
                <div className='h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                  <Target className='h-5 w-5 sm:h-6 sm:w-6' />
                </div>
                <div>
                  <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-white'>
                    89%
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Taux d'insertion professionnelle
                  </p>
                </div>
              </div>
              <p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
                De nos bénéficiaires trouvent un emploi ou créent leur
                entreprise dans les 6 mois
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Detailed Activities Section */}
      <section className='py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <Tabs defaultValue='formation' className='w-full'>
            <TabsList className='flex justify-start sm:justify-center mb-12 sm:mb-16 bg-white dark:bg-gray-800 p-1 rounded-full w-full sm:w-auto mx-auto overflow-x-auto'>
              {activities.map((activity) => (
                <TabsTrigger
                  key={activity.id}
                  value={activity.id}
                  className='rounded-full px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base whitespace-nowrap data-[state=active]:bg-blue-600 data-[state=active]:text-white'
                >
                  {activity.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {activities.map((activity) => (
              <TabsContent
                key={activity.id}
                value={activity.id}
                id={activity.id}
              >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16'>
                  <div>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
                      {activity.title}
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8'>
                      {activity.description}
                    </p>
                    <div className='bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-md'>
                      <h3 className='text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white'>
                        Pourquoi choisir nos {activity.title.toLowerCase()} ?
                      </h3>
                      <ul className='space-y-4 sm:space-y-6'>
                        <li className='flex'>
                          <div className='flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3'>
                            <svg
                              className='h-4 w-4'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </div>
                          <span className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>
                            Élaborés par des experts du secteur avec une
                            expérience internationale
                          </span>
                        </li>
                        <li className='flex'>
                          <div className='flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3'>
                            <svg
                              className='h-4 w-4'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </div>
                          <span className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>
                            Approche pratique et orientée résultats
                          </span>
                        </li>
                        <li className='flex'>
                          <div className='flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3'>
                            <svg
                              className='h-4 w-4'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </div>
                          <span className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>
                            Adapté aux besoins du marché international
                          </span>
                        </li>
                        <li className='flex'>
                          <div className='flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3'>
                            <svg
                              className='h-4 w-4'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </div>
                          <span className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>
                            Suivi personnalisé et accès à la communauté
                            Skillmetoo
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='relative aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9'>
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px'
                      className='object-cover rounded-xl'
                    />
                  </div>
                </div>

                <h3 className='text-xl sm:text-2xl md:text-3xl font-bold mb-8 mt-12 text-center text-gray-900 dark:text-white'>
                  Explorez nos programmes
                </h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
                  {activity.programs.map((program) => (
                    <ProgramCard
                      key={program.id}
                      program={program}
                      category={activity.id}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      {/* Upcoming Events Section */}
      <section className='py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='text-center max-w-3xl mx-auto mb-12 sm:mb-16'>
            <div className='inline-block px-4 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 font-medium text-sm mb-4'>
              Calendrier
            </div>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white'>
              Événements à{' '}
              <span className='text-blue-600 dark:text-blue-400'>venir</span>
            </h2>
            <p className='text-base sm:text-lg text-gray-600 dark:text-gray-300'>
              Rejoignez nos prochains événements pour développer vos compétences
              et élargir votre réseau.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8'>
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className='text-center mt-8 sm:mt-12'>
            <Link href='/evenements'>
              <Button className='bg-blue-600 hover:bg-blue-700 px-6 py-3 text-base sm:text-lg'>
                Voir tous les événements
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl'>
            <div className='max-w-3xl mx-auto text-center text-white'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
                Prêt à <span className='text-white'>transformer</span> votre
                potentiel ?
              </h2>
              <p className='text-base sm:text-lg md:text-xl text-white/90 mb-8'>
                Inscrivez-vous dès aujourd'hui à l'un de nos programmes et
                commencez votre parcours de transformation.
              </p>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <Button className='bg-white text-yellow-600 hover:bg-yellow-50 h-12 px-6 sm:px-8 text-base sm:text-lg'>
                  S'inscrire maintenant
                </Button>
                <Button
                  variant='outline'
                  className='border-white text-black hover:text-white hover:bg-white/10 h-12 px-6 sm:px-8 text-base sm:text-lg'
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

// Components
const ActivityCard = ({
  icon: Icon,
  title,
  description,
  link,
}: {
  icon: any
  title: string
  description: string
  link: string
}) => {
  return (
    <Link href={link}>
      <div className='bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 h-full cursor-pointer'>
        <div className='rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'>
          <Icon className='h-6 w-6 sm:h-7 sm:w-7' />
        </div>
        <h3 className='text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
          {title}
        </h3>
        <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>
          {description}
        </p>
      </div>
    </Link>
  )
}

const ProgramCard = ({
  program,
  category,
}: {
  program: any
  category: string
}) => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'>
      <div className='relative h-48 sm:h-56'>
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='object-cover'
        />
        <div className='absolute top-0 left-0 bg-blue-600 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-br-lg'>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      </div>
      <div className='p-6 sm:p-8'>
        <h3 className='text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-white'>
          {program.title}
        </h3>

        <div className='space-y-4 mb-6'>
          <div className='flex items-center text-gray-600 dark:text-gray-300 text-sm sm:text-base'>
            <Clock className='h-4 w-4 mr-2 text-blue-600 dark:text-blue-400' />
            <span>{program.duration}</span>
          </div>
          <div className='flex items-center text-gray-600 dark:text-gray-300 text-sm sm:text-base'>
            <Calendar className='h-4 w-4 mr-2 text-blue-600 dark:text-blue-400' />
            <span>Prochaine session: {program.nextSession}</span>
          </div>
          <div className='flex items-center text-gray-600 dark:text-gray-300 text-sm sm:text-base'>
            <MapPin className='h-4 w-4 mr-2 text-blue-600 dark:text-blue-400' />
            <span>{program.format}</span>
          </div>
        </div>

        <Link href={`/activites/${category}/${program.slug}`}>
          <Button className='w-full bg-blue-600 hover:bg-blue-700 text-base sm:text-lg'>
            Découvrir ce programme
          </Button>
        </Link>
      </div>
    </div>
  )
}

const EventCard = ({ event }: { event: any }) => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'>
      <div className='relative h-48 sm:h-56'>
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='object-cover'
        />
        <div className='absolute top-0 left-0 bg-yellow-500 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-br-lg'>
          {event.category}
        </div>
      </div>
      <div className='p-6 sm:p-8'>
        <h3 className='text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-white'>
          {event.title}
        </h3>

        <div className='space-y-4 mb-6'>
          <div className='flex items-center text-gray-600 dark:text-gray-300 text-sm sm:text-base'>
            <Calendar className='h-4 w-4 mr-2 text-yellow-500' />
            <span>{event.date}</span>
          </div>
          <div className='flex items-center text-gray-600 dark:text-gray-300 text-sm sm:text-base'>
            <Clock className='h-4 w-4 mr-2 text-yellow-500' />
            <span>{event.time}</span>
          </div>
          <div className='flex items-center text-gray-600 dark:text-gray-300 text-sm sm:text-base'>
            <MapPin className='h-4 w-4 mr-2 text-yellow-500' />
            <span>{event.location}</span>
          </div>
        </div>

        <Button className='w-full bg-yellow-500 hover:bg-yellow-600 text-base sm:text-lg'>
          S'inscrire à l'événement
        </Button>
      </div>
    </div>
  )
}
