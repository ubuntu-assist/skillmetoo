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
                      5+
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
                  5 années à transformer des vies à travers l'Afrique
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

          <div className='space-y-20'>
            {/* Timeline 1 - Foundation 2020 */}
            <div className='bg-gray-50 dark:bg-gray-900 rounded-2xl p-8'>
              <div className='inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium text-sm mb-6'>
                2020
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
                Les débuts de Skillmetoo -{' '}
                <span className='text-yellow-500'>"L'Avenir En Confiance"</span>
              </h3>
              <p className='text-gray-600 dark:text-gray-300 text-lg mb-8'>
                Skillmetoo a commencé ses activités dans la ville de Douala le
                1er novembre 2020 avec pour leitmotif{' '}
                <strong>"L'Avenir En Confiance"</strong>. Sa première mission
                est d'orienter les jeunes en fin d'études secondaires et en
                début des études universitaires de mieux définir leurs projets
                d'études et professionnels. Le bureau de Douala basé au quartier
                Bali (capitale économique du Cameroun) est animé par
                l'ingénieure polytechnicienne Mme Laurie Aban et la chargée
                d'affaires Mme Julienne Ayienna.
              </p>

              {/* 3 images for 2020 */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-start'>
                <div className='rounded-xl overflow-hidden shadow-md'>
                  <Image
                    src='/images/story1.png'
                    alt='Début de Skillmetoo à Douala'
                    width={400}
                    height={300}
                    className='w-full h-auto'
                  />
                </div>
                <div className='rounded-xl overflow-hidden shadow-md'>
                  <Image
                    src='/images/story2.jpg'
                    alt='Bureau de Bali'
                    width={400}
                    height={300}
                    className='w-full h-auto'
                  />
                </div>
                <div className='rounded-xl overflow-hidden shadow-md'>
                  <Image
                    src='/images/story3.png'
                    alt='Équipe fondatrice'
                    width={400}
                    height={300}
                    className='w-full h-auto'
                  />
                </div>
              </div>
            </div>

            {/* Timeline 2 - Relocation 2021 */}
            <div className='bg-green-50 dark:bg-green-900/10 rounded-2xl p-8'>
              <div className='inline-block px-4 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 font-medium text-sm mb-6'>
                2021
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
                Relocalisation stratégique à Dschang
              </h3>
              <p className='text-gray-600 dark:text-gray-300 text-lg mb-8'>
                En 2021, pour des raisons stratégiques, toutes les activités
                sont relocalisées dans la ville universitaire de Dschang.
                Skillmetoo veut désormais se déployer hors de ses locaux et
                faire des descentes dans les établissements d'enseignement
                secondaire et dans les universités et instituts supérieurs.
              </p>
              <p className='text-gray-600 dark:text-gray-300 text-lg mb-8'>
                L'office de Dschang est dirigé par Mr. Barry Berry Smith
                accompagné d'une équipe très soudée avec des figures dirigeantes
                comme Martial Makawa, Aude Koagne, Leonel Kelias Tuegno, Bayard
                Bilim, Leatitia Ndjie, Ulrich Tano, Mbuh Ernest, Marceline
                Ongongono, Nguimdo Curtis, JP Kenfack, Thomy Kenzo et bien
                d'autres.
              </p>

              {/* 1 image for 2021 */}
              <div className='max-w-2xl mx-auto'>
                <div className='rounded-xl overflow-hidden shadow-md'>
                  <Image
                    src='/images/gallery-img2.png'
                    alt='Équipe de Dschang dirigée par Barry Berry Smith'
                    width={600}
                    height={400}
                    className='w-full h-auto'
                  />
                </div>
              </div>
            </div>

            {/* Timeline 3 - Growth 2022-2024 */}
            <div className='bg-yellow-50 dark:bg-yellow-900/10 rounded-2xl p-8'>
              <div className='inline-block px-4 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 font-medium text-sm mb-6'>
                2022-2024
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
                Expansion et reconnaissance
              </h3>
              <p className='text-gray-600 dark:text-gray-300 text-lg mb-8'>
                En 2022, la première édition du magazine de Skillmetoo est
                éditée et distribuée dans les établissements secondaires dans
                les régions de l'Ouest, du Centre, du Littoral et du Nord
                Cameroun. Skillmetoo est invité à participer à plusieurs
                séminaires et conférences entre 2023 et 2024.
              </p>

              {/* 2 images for 2022-2024 */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='rounded-xl overflow-hidden shadow-md'>
                  <Image
                    src='/images/story4.jpg'
                    alt='Premier magazine Skillmetoo'
                    width={500}
                    height={300}
                    className='w-full h-auto'
                  />
                </div>
                <div className='rounded-xl overflow-hidden shadow-md'>
                  <Image
                    src='/images/story5.jpg'
                    alt='Participation aux conférences'
                    width={500}
                    height={300}
                    className='w-full h-auto'
                  />
                </div>
              </div>
            </div>

            {/* Timeline 4 - Current 2025 */}
            <div className='bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-8'>
              <div className='inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium text-sm mb-6'>
                2025
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
                Innovation et croissance
              </h3>
              <p className='text-gray-600 dark:text-gray-300 text-lg mb-8'>
                En 2025, Skillmetoo active son redéploiement et s'associe avec
                la société de média digital Moock pour offrir des formations et
                un meilleur suivi personnalisé. Skillmetoo lance son incubateur
                d'entreprise.
              </p>

              {/* 4 images for 2025 */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='rounded-xl overflow-hidden shadow-md'>
                  <Image
                    src='/images/story6.jpg'
                    alt='Partenariat avec Moock'
                    width={300}
                    height={250}
                    className='w-full h-auto'
                  />
                </div>
                <div className='rounded-xl overflow-hidden shadow-md'>
                  <Image
                    src='/images/story7.jpg'
                    alt='Nouvelles formations'
                    width={300}
                    height={250}
                    className='w-full h-auto'
                  />
                </div>
                <div className='rounded-xl overflow-hidden shadow-md'>
                  <Image
                    src='/images/story9.jpg'
                    alt='Lancement incubateur'
                    width={300}
                    height={250}
                    className='w-full h-auto'
                  />
                </div>
                <div className='rounded-xl overflow-hidden shadow-md'>
                  <Image
                    src='/images/story8.jpg'
                    alt='Croissance 2025'
                    width={300}
                    height={250}
                    className='w-full h-auto'
                  />
                </div>
              </div>
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

          {/* Team Group Photo */}
          <div className='max-w-4xl mx-auto mb-12'>
            <div className='rounded-2xl overflow-hidden shadow-xl'>
              <Image
                src='/images/gallery-img2.png'
                alt='Équipe Skillmetoo'
                width={800}
                height={500}
                className='w-full h-auto'
              />
            </div>
          </div>

          {/* Team Members List */}
          <div className='bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg'>
            <h3 className='text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white'>
              Membres de l'équipe
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='text-center'>
                <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  Dr.-Ing. Fabrice Teuma
                </h4>
                <p className='text-blue-600 dark:text-blue-400 font-medium'>
                  Fondateur & Président
                </p>
              </div>

              <div className='text-center'>
                <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  Leonel Kilias Tuegno
                </h4>
                <p className='text-blue-600 dark:text-blue-400 font-medium'>
                  Membre de l'équipe
                </p>
              </div>

              <div className='text-center'>
                <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  Barry Berry Smith
                </h4>
                <p className='text-blue-600 dark:text-blue-400 font-medium'>
                  Membre de l'équipe
                </p>
              </div>

              <div className='text-center'>
                <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  Aude Koagne
                </h4>
                <p className='text-blue-600 dark:text-blue-400 font-medium'>
                  Membre de l'équipe
                </p>
              </div>

              <div className='text-center'>
                <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  Martial Makawa
                </h4>
                <p className='text-blue-600 dark:text-blue-400 font-medium'>
                  Membre de l'équipe
                </p>
              </div>

              <div className='text-center'>
                <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  Et bien d'autres...
                </h4>
                <p className='text-gray-600 dark:text-gray-400 font-medium'>
                  Équipe élargie
                </p>
              </div>
            </div>
          </div>

          {/* <div className='text-center mt-12'>
            <Link href='/contact'>
              <Button
                variant='outline'
                className='border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950'
              >
                Rejoignez notre équipe
              </Button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className='py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
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
      </section> */}
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
    <div className='bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300'>
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
