'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  Book,
  Calendar,
  Download,
  Lock,
  Share2,
  BookOpen,
  Tags,
  Check,
  Globe,
  Mail,
  ArrowRight,
} from 'lucide-react'

import { magazines } from '@/lib/data/magazines'
import MagazineViewer from '@/components/magazines/magazine-viewer'
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
  IconCopy,
  IconMail,
  IconMailAi,
} from '@tabler/icons-react'

export default function MagazineDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [magazine, setMagazine] = useState<any>(null)
  const [relatedMagazines, setRelatedMagazines] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const id = parseInt(params.id as string)
      const foundMagazine = magazines.find((mag) => mag.id === id)

      if (foundMagazine) {
        setMagazine(foundMagazine)

        // Find related magazines based on topics
        const related = magazines
          .filter((mag) => mag.id !== id)
          .filter((mag) =>
            mag.topics.some((topic) => foundMagazine.topics.includes(topic))
          )
          .slice(0, 2)

        setRelatedMagazines(related)
      } else {
        router.push('/magazine')
      }

      setIsLoading(false)
    }
  }, [params.id, router])

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p className='text-gray-600 dark:text-gray-400'>
            Chargement du magazine...
          </p>
        </div>
      </div>
    )
  }

  if (!magazine) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950'>
        <div className='text-center'>
          <p className='text-gray-600 dark:text-gray-400'>
            Magazine non trouvé.
          </p>
          <Link href='/magazine'>
            <Button className='mt-4'>Retour aux magazines</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main>
      {/* Hero Section */}
      <section className='relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10'>
          <div className='animate-fade-in'>
            <Link href='/magazine'>
              <Button
                variant='link'
                className='inline-flex items-center text-blue-100 hover:text-white mb-6 p-0'
              >
                <ArrowLeft className='h-4 w-4 mr-2' />
                Retour aux magazines
              </Button>
            </Link>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div className='space-y-6'>
                <div className='inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm'>
                  <Calendar className='h-4 w-4 mr-2' />
                  <span>{magazine.date}</span>
                  <span className='mx-2'>•</span>
                  <span>{magazine.edition}</span>
                </div>

                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                  {magazine.title}
                </h1>

                <p className='text-xl text-blue-100'>{magazine.description}</p>

                <div className='flex items-center text-blue-100'>
                  <Book className='h-4 w-4 mr-2' />
                  <span>Par {magazine.authors.join(', ')}</span>
                  <span className='mx-2'>•</span>
                  <span>{magazine.pages} pages</span>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {magazine.topics.map((topic: string) => (
                    <Link
                      href={`/magazine?topic=${encodeURIComponent(topic)}`}
                      key={topic}
                      className='inline-block px-2 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xs rounded-md transition-colors'
                    >
                      {topic}
                    </Link>
                  ))}
                </div>

                <div className='flex flex-wrap gap-4'>
                  {magazine.isFree ? (
                    <>
                      <Button className='bg-white text-blue-700 hover:bg-blue-50 h-12 px-6'>
                        <Download className='mr-2 h-4 w-4' />
                        Télécharger le PDF
                      </Button>
                      <Button
                        variant='outline'
                        className='border-white text-black hover:bg-white/10 h-12 px-6'
                      >
                        <Share2 className='mr-2 h-4 w-4' />
                        Partager
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button className='bg-yellow-500 hover:bg-yellow-600 border-0 h-12 px-6'>
                        <Lock className='mr-2 h-4 w-4' />
                        Acheter pour {magazine.price}
                      </Button>
                      <Button
                        variant='outline'
                        className='border-white text-white hover:bg-white/10 h-12 px-6'
                      >
                        <Share2 className='mr-2 h-4 w-4' />
                        Partager
                      </Button>
                    </>
                  )}
                </div>
              </div>

              <div className='flex justify-center lg:justify-end'>
                <div className='relative h-[400px] w-[280px] rounded-lg shadow-xl'>
                  <Image
                    src={magazine.coverImage}
                    alt={magazine.title}
                    fill
                    className='object-cover rounded-lg'
                  />

                  {/* Free/Premium badge */}
                  <div className='absolute top-4 right-4'>
                    <span
                      className={`px-4 py-2 ${
                        magazine.isFree ? 'bg-green-500' : 'bg-yellow-500'
                      } text-white text-sm font-medium rounded-full flex items-center shadow-md`}
                    >
                      {magazine.isFree ? (
                        <>
                          <BookOpen className='h-4 w-4 mr-2' />
                          Gratuit
                        </>
                      ) : (
                        <>
                          <Lock className='h-4 w-4 mr-2' />
                          Premium
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Content Section */}
      <section className='py-16 bg-white dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            {/* Magazine Viewer */}
            <div className='lg:col-span-2'>
              {magazine.isFree ? (
                <MagazineViewer magazine={magazine} />
              ) : (
                <div className='bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md text-center'>
                  <div className='w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <Lock className='h-8 w-8 text-yellow-500' />
                  </div>
                  <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
                    Contenu Premium
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto'>
                    Ce magazine est disponible uniquement pour les membres
                    premium ou à l'achat.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Button className='bg-yellow-500 hover:bg-yellow-600'>
                      <Lock className='mr-2 h-4 w-4' />
                      Acheter pour {magazine.price}
                    </Button>
                    <Button variant='outline'>
                      En savoir plus sur l'abonnement
                    </Button>
                  </div>
                </div>
              )}

              {/* Topics */}
              <div className='mt-8'>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center'>
                  <Tags className='h-5 w-5 mr-2 text-blue-600 dark:text-blue-400' />
                  Thématiques abordées
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {magazine.topics.map((topic: string) => (
                    <Link
                      href={`/magazine?topic=${encodeURIComponent(topic)}`}
                      key={topic}
                      className='px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors'
                    >
                      {topic}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Authors */}
              <div className='mt-8'>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center'>
                  <Book className='h-5 w-5 mr-2 text-blue-600 dark:text-blue-400' />
                  À propos des auteurs
                </h3>
                <div className='bg-gray-50 dark:bg-gray-800 rounded-xl p-6'>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Ce magazine a été rédigé par {magazine.authors.join(' et ')}
                    , experts dans leurs domaines respectifs. Ils partagent leur
                    expérience et leurs connaissances pour vous aider à
                    développer vos compétences et à saisir les opportunités du
                    marché international.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='lg:col-span-1 space-y-8'>
              {/* Related Magazines */}
              <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
                  Magazines similaires
                </h3>

                {relatedMagazines.length > 0 ? (
                  <div className='space-y-4'>
                    {relatedMagazines.map((relatedMag) => (
                      <Link
                        href={`/magazine/${relatedMag.id}`}
                        key={relatedMag.id}
                        className='flex items-start p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors'
                      >
                        <div className='relative h-16 w-12 flex-shrink-0 overflow-hidden rounded'>
                          <Image
                            src={relatedMag.coverImage}
                            alt={relatedMag.title}
                            fill
                            className='object-cover'
                          />
                        </div>
                        <div className='ml-3'>
                          <h4 className='text-sm font-medium text-gray-900 dark:text-white line-clamp-2'>
                            {relatedMag.title}
                          </h4>
                          <div className='flex items-center mt-1'>
                            <span className='text-xs text-gray-500 dark:text-gray-400'>
                              {relatedMag.date}
                            </span>
                            <span className='mx-1 text-gray-300 dark:text-gray-600'>
                              •
                            </span>
                            <span
                              className={`text-xs ${
                                relatedMag.isFree
                                  ? 'text-green-500'
                                  : 'text-yellow-500'
                              }`}
                            >
                              {relatedMag.isFree ? 'Gratuit' : 'Premium'}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className='text-gray-600 dark:text-gray-400'>
                    Aucun magazine similaire trouvé.
                  </p>
                )}

                <div className='mt-4 pt-4 border-t border-gray-100 dark:border-gray-700'>
                  <Link href='/magazine'>
                    <Button
                      variant='link'
                      className='p-0 h-auto text-blue-600 dark:text-blue-400'
                    >
                      Voir tous les magazines
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Subscription CTA */}
              <div className='bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 shadow-md text-white'>
                <h3 className='text-xl font-bold mb-3'>Abonnement Premium</h3>
                <p className='text-blue-100 mb-4'>
                  Accédez à tous nos magazines premium et bien plus encore avec
                  notre abonnement.
                </p>

                <div className='space-y-3 mb-6'>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center text-white mr-3 mt-0.5'>
                      <Check className='h-3 w-3' />
                    </div>
                    <span className='text-sm text-white/90'>
                      Tous les magazines premium
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center text-white mr-3 mt-0.5'>
                      <Check className='h-3 w-3' />
                    </div>
                    <span className='text-sm text-white/90'>
                      Ressources exclusives
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center text-white mr-3 mt-0.5'>
                      <Check className='h-3 w-3' />
                    </div>
                    <span className='text-sm text-white/90'>
                      Événements prioritaires
                    </span>
                  </div>
                </div>

                <Button className='w-full bg-white text-blue-700 hover:bg-blue-50'>
                  S'abonner pour €19.99/mois
                </Button>
              </div>

              {/* Share */}
              <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
                  Partager ce magazine
                </h3>

                <div className='flex space-x-2'>
                  <Button
                    variant='outline'
                    size='icon'
                    className='h-10 w-10 rounded-full text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20'
                    onClick={() => {
                      window.open(
                        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          magazine.title
                        )}&url=${encodeURIComponent(window.location.href)}`,
                        '_blank'
                      )
                    }}
                  >
                    <IconBrandX />
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    className='h-10 w-10 rounded-full text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20'
                    onClick={() => {
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`,
                        '_blank'
                      )
                    }}
                  >
                    <IconBrandFacebook />
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    className='h-10 w-10 rounded-full text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20'
                    onClick={() => {
                      window.open(
                        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                          window.location.href
                        )}&title=${encodeURIComponent(magazine.title)}`,
                        '_blank'
                      )
                    }}
                  >
                    <IconBrandLinkedin />
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    className='h-10 w-10 rounded-full text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20'
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href)
                      alert('Lien copié dans le presse-papier')
                    }}
                  >
                    <IconCopy className='h-5 w-5' />
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    className='h-10 w-10 rounded-full text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20'
                    onClick={() => {
                      window.location.href = `mailto:?subject=${encodeURIComponent(
                        magazine.title
                      )}&body=${encodeURIComponent(
                        `Découvrez ce magazine intéressant : ${window.location.href}`
                      )}`
                    }}
                  >
                    <IconMailAi className='h-5 w-5' />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-gray-50 dark:bg-gray-900'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 shadow-xl text-white'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Vous aimez ce magazine ?
              </h2>
              <p className='text-xl text-blue-100 mb-8'>
                Explorez nos autres ressources et découvrez comment Skillmetoo
                peut vous aider à développer vos compétences et à réaliser vos
                ambitions professionnelles.
              </p>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <Link href='/ressources'>
                  <Button className='bg-white text-blue-700 hover:bg-blue-50 h-12 px-8 text-base'>
                    Découvrir nos ressources
                  </Button>
                </Link>
                <Link href='/magazine'>
                  <Button
                    variant='outline'
                    className='border-white text-black hover:bg-white/10 h-12 px-8 text-base'
                  >
                    Voir tous les magazines
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
