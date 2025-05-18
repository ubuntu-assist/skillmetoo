import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  BookOpen,
  Award,
  Users,
  Briefcase,
  Target,
  Heart,
  Globe,
  Star,
} from 'lucide-react'

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className='relative py-32 bg-gradient-to-br from-blue-900 to-blue-700 text-white'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10'>
          <div className='max-w-3xl mx-auto text-center space-y-6 animate-fade-in'>
            <h1 className='text-4xl md:text-5xl font-bold'>
              À propos de Skillmetoo
            </h1>
            <p className='text-xl text-blue-100'>
              Nous sommes une association africaine dédiée à transformer le
              potentiel des jeunes en succès tangible à travers la formation et
              le mentorat.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Button
                asChild
                className='bg-white text-blue-700 hover:bg-blue-50 h-12 px-8 text-base'
              >
                <Link href='/contact'>Rejoindre Skillmetoo</Link>
              </Button>
              <Button
                asChild
                variant='outline'
                className='border-white text-black hover:bg-white/10 h-12 px-8 text-base'
              >
                <Link href='/programs'>Nos programmes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className='py-16 bg-white dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium text-sm mb-4'>
                Notre mission
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
                Former, informer et{' '}
                <span className='text-blue-600 dark:text-blue-400'>
                  transformer
                </span>{' '}
                la jeunesse africaine
              </h2>
              <p className='text-gray-600 dark:text-gray-300 text-lg mb-6'>
                Notre mission est de donner aux jeunes africains les compétences
                nécessaires pour comprendre le monde global et saisir les
                opportunités du marché international.
              </p>
              <p className='text-gray-600 dark:text-gray-300 mb-8'>
                À travers nos programmes de formation, de mentorat et de
                réseautage, nous créons un écosystème qui permet aux jeunes
                talents de développer leur potentiel et de contribuer activement
                à l'économie mondiale tout en restant ancrés dans leurs valeurs
                africaines.
              </p>
              <div className='space-y-4'>
                <div className='flex'>
                  <div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                    <Target className='h-5 w-5' />
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      Notre vision
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300'>
                      Une Afrique dont la jeunesse est qualifiée, connectée et
                      prête à relever les défis globaux.
                    </p>
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mr-4'>
                    <Target className='h-5 w-5' />
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      Notre ambition
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300'>
                      Devenir la référence en matière de développement de
                      compétences et d'accompagnement professionnel des jeunes
                      en Afrique.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='rounded-2xl overflow-hidden shadow-xl'>
                <Image
                  src='/images/mission.webp'
                  alt='Notre mission'
                  width={600}
                  height={700}
                  className='w-full h-auto'
                />
              </div>

              {/* Floating stats card */}
              <div className='absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-xs'>
                <div className='flex items-center mb-4'>
                  <div className='h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                    <Star className='h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                      10+
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400'>
                      Années d'expérience
                    </p>
                  </div>
                </div>
                <div className='w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full mb-2'>
                  <div
                    className='h-1 bg-blue-600 dark:bg-blue-400 rounded-full'
                    style={{ width: '85%' }}
                  ></div>
                </div>
                <p className='text-gray-500 dark:text-gray-400 text-sm'>
                  Plus d'une décennie à transformer des vies à travers l'Afrique
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-16 bg-gray-50 dark:bg-gray-900'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <div className='inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium text-sm mb-4'>
              Nos valeurs
            </div>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
              Les principes qui guident{' '}
              <span className='text-yellow-500'>notre action</span>
            </h2>
            <p className='text-gray-600 dark:text-gray-300 text-lg'>
              Nos valeurs sont au cœur de tout ce que nous faisons et
              définissent notre approche pour transformer la jeunesse africaine.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <ValueCard
              icon={BookOpen}
              title='Excellence'
              description="Nous nous engageons à offrir des formations de qualité exceptionnelle et à encourager la poursuite de l'excellence dans tous les aspects de notre travail."
              color='blue'
            />
            <ValueCard
              icon={Heart}
              title='Intégrité'
              description='Nous agissons avec honnêteté, transparence et respect dans toutes nos interactions, en maintenant les plus hauts standards éthiques.'
              color='red'
            />
            <ValueCard
              icon={Users}
              title='Inclusivité'
              description="Nous valorisons la diversité et créons un environnement où chaque jeune, indépendamment de son origine, peut s'épanouir et réaliser son plein potentiel."
              color='purple'
            />
            <ValueCard
              icon={Globe}
              title='Innovation'
              description="Nous encourageons la créativité et l'innovation, en adaptant constamment nos approches pour répondre aux défis d'un monde en rapide évolution."
              color='green'
            />
            <ValueCard
              icon={Award}
              title='Impact durable'
              description='Nous nous concentrons sur des solutions qui créent un impact positif et durable, transformant non seulement des individus mais aussi des communautés entières.'
              color='amber'
            />
            <ValueCard
              icon={Briefcase}
              title='Professionnalisme'
              description="Nous maintenons les plus hauts standards de professionnalisme dans notre travail, en respectant nos engagements et en visant l'excellence dans tout ce que nous faisons."
              color='indigo'
            />
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className='py-16 bg-white dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <div className='inline-block px-4 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 font-medium text-sm mb-4'>
              Notre histoire
            </div>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
              Le parcours de{' '}
              <span className='text-blue-600 dark:text-blue-400'>
                Skillmetoo
              </span>
            </h2>
            <p className='text-gray-600 dark:text-gray-300 text-lg'>
              Découvrez les moments clés qui ont façonné notre association et
              son impact croissant à travers l'Afrique.
            </p>
          </div>

          <div className='relative max-w-4xl mx-auto'>
            {/* Timeline line */}
            <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/50'></div>

            {/* Timeline events */}
            <div className='space-y-20'>
              <TimelineEvent
                year='2015'
                title='Création de Skillmetoo'
                description="Fondation de l'association par Jean-Paul Kamdem avec une vision claire : former les jeunes africains aux compétences du futur."
                image='/images/about/timeline-1.jpg'
                position='left'
              />
              <TimelineEvent
                year='2017'
                title='Premier programme de formation'
                description='Lancement de notre premier programme de formation en développement web qui a accompagné 50 jeunes talents camerounais.'
                image='/images/about/timeline-2.jpg'
                position='right'
              />
              <TimelineEvent
                year='2019'
                title='Expansion régionale'
                description="Ouverture de programmes dans 5 pays d'Afrique de l'Ouest et signature de partenariats stratégiques avec des entreprises tech."
                image='/images/about/timeline-3.jpg'
                position='left'
              />
              <TimelineEvent
                year='2021'
                title='Lancement de la plateforme en ligne'
                description="Création de notre plateforme d'apprentissage en ligne pour rendre nos formations accessibles à tous les jeunes africains."
                image='/images/about/timeline-4.jpg'
                position='right'
              />
              <TimelineEvent
                year='2023'
                title="Prix de l'innovation éducative"
                description='Récompense internationale pour notre approche innovante de formation et notre impact sur la jeunesse africaine.'
                image='/images/about/timeline-5.jpg'
                position='left'
              />
              <TimelineEvent
                year='2025'
                title='Objectif 10 000 jeunes formés'
                description="Nous continuons notre expansion avec l'ambition d'atteindre et transformer 10 000 jeunes à travers le continent africain."
                image='/images/about/timeline-6.jpg'
                position='right'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-16 bg-gray-50 dark:bg-gray-900'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <div className='inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium text-sm mb-4'>
              Notre équipe
            </div>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
              Les visages derrière{' '}
              <span className='text-yellow-500'>Skillmetoo</span>
            </h2>
            <p className='text-gray-600 dark:text-gray-300 text-lg'>
              Une équipe passionnée et diversifiée dédiée à transformer le
              potentiel des jeunes africains.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <TeamMember
              name='Jean-Paul Kamdem'
              role='Fondateur & Président'
              image='/images/team/team-1.jpg'
              bio="Entrepreneur et visionnaire avec plus de 15 ans d'expérience dans l'éducation et le développement de compétences en Afrique."
            />
            <TeamMember
              name='Aïcha Diallo'
              role='Directrice des Programmes'
              image='/images/team/team-2.jpg'
              bio='Experte en conception pédagogique avec un parcours dans des organisations internationales de développement.'
            />
            <TeamMember
              name='Emmanuel Osei'
              role='Responsable Technique'
              image='/images/team/team-3.jpg'
              bio="Ingénieur et formateur spécialisé dans les technologies web et mobiles, passionné par l'innovation éducative."
            />
          </div>

          <div className='text-center mt-12'>
            <Link href='/contact'>
              <Button
                variant='outline'
                className='border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950'
              >
                Rejoignez notre équipe
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Prêt à faire partie de l'aventure ?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Rejoignez Skillmetoo aujourd'hui et faites partie d'une communauté
              dédiée à la transformation de la jeunesse africaine.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Button className='bg-white text-blue-700 hover:bg-blue-50 h-12 px-8 text-base'>
                Rejoindre Skillmetoo
              </Button>
              <Button
                variant='outline'
                className='border-white text-black hover:bg-white/10 h-12 px-8 text-base'
              >
                Nos programmes
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Components
const ValueCard = ({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: any
  title: string
  description: string
  color: 'blue' | 'red' | 'green' | 'purple' | 'amber' | 'indigo'
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
      case 'red':
        return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
      case 'green':
        return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
      case 'purple':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
      case 'amber':
        return 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
      case 'indigo':
        return 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
      default:
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    }
  }

  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <div
        className={`rounded-full w-14 h-14 flex items-center justify-center mb-6 ${getColorClass()}`}
      >
        <Icon className='h-7 w-7' />
      </div>
      <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
        {title}
      </h3>
      <p className='text-gray-600 dark:text-gray-300'>{description}</p>
    </div>
  )
}

const TimelineEvent = ({
  year,
  title,
  description,
  image,
  position,
}: {
  year: string
  title: string
  description: string
  image: string
  position: 'left' | 'right'
}) => {
  return (
    <div
      className={`relative flex items-center justify-between ${
        position === 'left' ? 'flex-row' : 'flex-row-reverse'
      } px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto`}
    >
      {/* Content */}
      <div className='w-5/12'>
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
          <div className='inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium text-sm mb-3'>
            {year}
          </div>
          <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
            {title}
          </h3>
          <p className='text-gray-600 dark:text-gray-300'>{description}</p>
        </div>
      </div>

      {/* Center dot */}
      <div className='absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 z-10 border-4 border-white dark:border-gray-950'></div>

      {/* Image */}
      <div className='w-5/12'>
        <div className='rounded-xl overflow-hidden shadow-md aspect-video'>
          <Image
            src={image}
            alt={title}
            width={400}
            height={225}
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

const TeamMember = ({
  name,
  role,
  image,
  bio,
}: {
  name: string
  role: string
  image: string
  bio: string
}) => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <div className='relative h-60 overflow-hidden'>
        <Image src={image} alt={name} fill className='object-cover' />
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-bold mb-1 text-gray-900 dark:text-white'>
          {name}
        </h3>
        <p className='text-blue-600 dark:text-blue-400 mb-4'>{role}</p>
        <p className='text-gray-600 dark:text-gray-300 text-sm'>{bio}</p>
      </div>
    </div>
  )
}
