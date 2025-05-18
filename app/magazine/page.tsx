'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  BookOpen,
  Lock,
  Filter,
  Search,
  Tags,
  PlusCircle,
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
  magazines,
  getAllMagazineTopics,
  getFeaturedMagazines,
  getFreeMagazines,
  getPremiumMagazines,
} from '@/lib/data/magazines'

import MagazineCard from '@/components/magazines/magazine-card'
import FeaturedMagazine from '@/components/magazines/featured-magazine'

export default function MagazinePage() {
  // Get featured magazines
  const featuredMagazines = getFeaturedMagazines()
  const featuredMagazine = featuredMagazines[0]

  // Get free and premium magazines
  const freeMagazines = getFreeMagazines()
  const premiumMagazines = getPremiumMagazines()

  // Get all unique topics
  const allTopics = getAllMagazineTopics()

  return (
    <main>
      <section className='relative py-32 bg-gradient-to-br from-blue-900 to-blue-700 text-white'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10'>
          <div className='max-w-3xl mx-auto text-center space-y-6 animate-fade-in'>
            <h1 className='text-4xl md:text-5xl font-bold'>
              Découvrez le Magazine Skillmetoo
            </h1>
            <p className='text-xl text-blue-100'>
              Votre source d'inspiration pour le développement des compétences,
              l'entrepreneuriat et les tendances en Afrique.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Button
                asChild
                className='bg-white text-blue-700 hover:bg-blue-50 h-12 px-8 text-base'
              >
                <Link href='#magazines'>Parcourir les Magazines Gratuits</Link>
              </Button>
              <Button
                asChild
                variant='outline'
                className='border-white text-black hover:bg-white/10 h-12 px-8 text-base'
              >
                <Link href='#subscription'>S'abonner au Premium</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Magazine Section */}
      <section className='py-12 bg-white dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          {featuredMagazine && <FeaturedMagazine magazine={featuredMagazine} />}
        </div>
      </section>

      {/* Magazines Tabs Section */}
      <section id='magazines' className='py-12 bg-gray-50 dark:bg-gray-900'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
            <div>
              <h2 className='text-3xl font-bold mb-2 text-gray-900 dark:text-white'>
                Tous nos magazines
              </h2>
              <p className='text-gray-600 dark:text-gray-400 max-w-2xl'>
                Parcourez notre collection de magazines sur le développement
                professionnel, la technologie et l'entrepreneuriat.
              </p>
            </div>

            <div className='mt-4 md:mt-0'>
              <div className='flex gap-2'>
                <Button variant='outline' className='flex items-center'>
                  <Filter className='h-4 w-4 mr-2' />
                  Filtrer
                </Button>
                <Button variant='outline' className='flex items-center'>
                  <Search className='h-4 w-4 mr-2' />
                  Rechercher
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs for magazines */}
          <Tabs defaultValue='all'>
            <TabsList className='bg-white dark:bg-gray-800 p-1 rounded-full w-auto inline-flex mb-8'>
              <TabsTrigger
                value='all'
                className='rounded-full px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white'
              >
                Tous
              </TabsTrigger>
              <TabsTrigger
                value='free'
                className='rounded-full px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white'
              >
                <BookOpen className='h-4 w-4 mr-2' />
                Gratuits
              </TabsTrigger>
              <TabsTrigger
                value='premium'
                className='rounded-full px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white'
              >
                <Lock className='h-4 w-4 mr-2' />
                Premium
              </TabsTrigger>
            </TabsList>

            {/* All magazines */}
            <TabsContent value='all' className='mt-0'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {magazines.map((magazine) => (
                  <MagazineCard key={magazine.id} magazine={magazine} />
                ))}
              </div>
            </TabsContent>

            {/* Free magazines */}
            <TabsContent value='free' className='mt-0'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {freeMagazines.map((magazine) => (
                  <MagazineCard key={magazine.id} magazine={magazine} />
                ))}
              </div>
            </TabsContent>

            {/* Premium magazines */}
            <TabsContent value='premium' className='mt-0'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {premiumMagazines.map((magazine) => (
                  <MagazineCard key={magazine.id} magazine={magazine} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Topics Section */}
      <section className='py-12 bg-white dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>
              Explorer par thématique
            </h2>
            <p className='text-gray-600 dark:text-gray-400'>
              Trouvez des magazines qui correspondent à vos centres d'intérêt ou
              aux compétences que vous souhaitez développer.
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-3 max-w-4xl mx-auto'>
            {allTopics.map((topic) => (
              <Link
                href={`/magazine?topic=${encodeURIComponent(topic)}`}
                key={topic}
                className='px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-900 dark:text-gray-100 rounded-full text-sm font-medium transition-colors flex items-center'
              >
                <Tags className='h-4 w-4 mr-2 text-blue-600 dark:text-blue-400' />
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Magazine Subscription Section */}
      <section
        id='subscription'
        className='py-16 bg-gradient-to-br from-yellow-500 to-amber-500 text-white'
      >
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Abonnez-vous à notre magazine
              </h2>
              <p className='text-xl text-white/90 mb-6'>
                Recevez tous nos magazines premium dès leur publication et
                accédez à notre bibliothèque complète d'éditions passées.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white mr-3 mt-0.5'>
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
                  <p className='text-white/90'>
                    <strong className='text-white'>Accès illimité</strong> à
                    tous les magazines premium, actuels et passés
                  </p>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white mr-3 mt-0.5'>
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
                  <p className='text-white/90'>
                    <strong className='text-white'>Nouvelles éditions</strong>{' '}
                    envoyées directement dans votre boîte mail
                  </p>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white mr-3 mt-0.5'>
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
                  <p className='text-white/90'>
                    <strong className='text-white'>Accès prioritaire</strong>{' '}
                    aux événements et webinaires Skillmetoo
                  </p>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Button className='bg-white text-yellow-600 hover:bg-yellow-50 h-12 px-8 text-base'>
                  S'abonner pour €19.99/mois
                </Button>
                <Button
                  variant='outline'
                  className='border-white text-black hover:bg-white/10 h-12 px-8 text-base'
                >
                  En savoir plus
                </Button>
              </div>
            </div>

            <div className='relative'>
              <div className='relative h-[500px] w-full'>
                <div className='absolute top-[5%] left-[10%] w-[80%] h-[90%] bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-lg shadow-xl transform -rotate-6'></div>
                <div className='absolute top-[10%] left-[15%] w-[70%] h-[80%] bg-white rounded-lg shadow-2xl transform rotate-3'>
                  <div className='h-full w-full p-6 flex flex-col'>
                    <div className='text-yellow-500 font-bold text-2xl mb-2'>
                      Skillmetoo+
                    </div>
                    <div className='text-gray-900 font-bold text-4xl mb-4'>
                      Abonnement Premium
                    </div>
                    <div className='text-gray-700 mb-6'>
                      Accédez à tout le contenu premium de Skillmetoo
                    </div>

                    <div className='bg-gray-100 rounded-lg p-4 mb-6'>
                      <div className='text-gray-900 font-bold text-2xl mb-1'>
                        €19.99<span className='text-sm font-normal'>/mois</span>
                      </div>
                      <div className='text-gray-600 text-sm'>
                        Annulation possible à tout moment
                      </div>
                    </div>

                    <div className='space-y-3 flex-grow'>
                      <div className='flex items-center'>
                        <PlusCircle className='h-5 w-5 text-green-500 mr-3' />
                        <span className='text-gray-700'>
                          Tous les magazines
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <PlusCircle className='h-5 w-5 text-green-500 mr-3' />
                        <span className='text-gray-700'>
                          Ressources premium
                        </span>
                      </div>
                    </div>

                    <Button className='w-full bg-yellow-500 hover:bg-yellow-600 text-white border-0'>
                      S'abonner maintenant
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Articles Section */}
      <section className='py-16 bg-gray-50 dark:bg-gray-900'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12'>
            <div className='max-w-3xl mx-auto'>
              <div className='text-center mb-8'>
                <h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>
                  Vous souhaitez contribuer ?
                </h2>
                <p className='text-gray-600 dark:text-gray-400'>
                  Partagez votre expertise et vos connaissances en proposant un
                  article pour notre magazine.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                <div className='bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center'>
                  <div className='h-12 w-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <span className='text-xl font-bold'>1</span>
                  </div>
                  <h3 className='text-lg font-bold mb-2 text-gray-900 dark:text-white'>
                    Soumettez votre idée
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400'>
                    Partagez votre concept d'article et pourquoi il serait
                    pertinent pour notre audience.
                  </p>
                </div>

                <div className='bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center'>
                  <div className='h-12 w-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <span className='text-xl font-bold'>2</span>
                  </div>
                  <h3 className='text-lg font-bold mb-2 text-gray-900 dark:text-white'>
                    Collaboration éditoriale
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400'>
                    Notre équipe travaillera avec vous pour affiner et
                    structurer votre contenu.
                  </p>
                </div>

                <div className='bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center'>
                  <div className='h-12 w-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <span className='text-xl font-bold'>3</span>
                  </div>
                  <h3 className='text-lg font-bold mb-2 text-gray-900 dark:text-white'>
                    Publication
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400'>
                    Votre article sera publié dans notre magazine et partagé
                    avec notre communauté.
                  </p>
                </div>
              </div>

              <div className='text-center'>
                <Button className='bg-blue-600 hover:bg-blue-700'>
                  Proposer un article
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
