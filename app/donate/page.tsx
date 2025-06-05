'use client'

import { useState } from 'react'
import DonationSuccess from '@/components/donate/donation-success'
import DonationHeader from '@/components/donate/donation-header'
import DonationForm from '@/components/donate/donation-form'
import OtherWaysToDonate from '@/components/donate/other-ways-to-donate'

export default function DonatePage() {
  const [donationComplete, setDonationComplete] = useState(false)

  // Données simulées pour la page de succès
  const successData = {
    amount: '50',
    isRecurring: true,
    donorName: 'Jean Dupont',
    donationId: 'DON-2025-1234',
    donationDate: '15 mai 2025',
  }

  const handleDonationSuccess = () => {
    setDonationComplete(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center pt-20 overflow-hidden'>
        {/* Background with geometric shapes */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden'>
          {/* Animated geometric shapes */}
          <div className='absolute inset-0'>
            <div className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600/20 animate-pulse'></div>
            <div className='absolute top-3/4 left-1/3 w-96 h-96 rounded-full bg-blue-500/10 animate-pulse delay-200'></div>
            <div className='absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-yellow-500/10 animate-pulse delay-700'></div>
          </div>
        </div>

        <div className='container relative z-10 py-20 px-8 sm:px-12 lg:px-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='text-white space-y-6 fade-in'>
              <div className='inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4'>
                Soutenez notre mission
              </div>

              <h1 className='font-bold text-5xl md:text-6xl lg:text-7xl leading-tight'>
                Transformer <span className='text-yellow-400'>des vies</span>{' '}
                grâce à votre don
              </h1>

              <p className='text-xl md:text-2xl text-blue-100 font-light max-w-xl'>
                Votre générosité permet de former la prochaine génération de
                talents africains et de créer des opportunités durables pour
                leur avenir.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <button
                  onClick={() =>
                    document
                      .getElementById('donation-form')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className='bg-yellow-500 hover:bg-yellow-600 text-white border-0 h-12 px-8 text-base font-medium rounded-md transition-all duration-200 hover:brightness-110 active:brightness-90 active:scale-95'
                >
                  Faire un don maintenant
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById('donation-form')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className='border-white text-white hover:bg-white/10 h-12 px-8 text-base font-medium rounded-md border transition-all duration-200'
                >
                  En savoir plus
                </button>
              </div>

              {/* Quick stats */}
              <div className='grid grid-cols-3 gap-6 pt-8'>
                <div className='text-center'>
                  <div className='text-2xl md:text-3xl font-bold text-yellow-400'>
                    1,500+
                  </div>
                  <div className='text-sm text-blue-100'>Jeunes formés</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl md:text-3xl font-bold text-yellow-400'>
                    78%
                  </div>
                  <div className='text-sm text-blue-100'>Taux d'insertion</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl md:text-3xl font-bold text-yellow-400'>
                    15
                  </div>
                  <div className='text-sm text-blue-100'>Pays touchés</div>
                </div>
              </div>
            </div>

            <div className='slide-in-right'>
              <div className='relative'>
                {/* Main donation visual */}
                <div className='bg-gradient-to-br from-yellow-500 to-amber-500 p-1 rounded-2xl shadow-xl'>
                  <div className='bg-white rounded-xl p-8 md:p-12'>
                    <div className='text-center'>
                      <div className='w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                        <svg
                          className='w-10 h-10 text-yellow-500'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                          />
                        </svg>
                      </div>
                      <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                        Votre don en action
                      </h3>
                      <p className='text-gray-600 mb-8'>
                        Chaque euro contribue directement à nos programmes de
                        formation et de mentorat
                      </p>

                      <div className='space-y-4'>
                        <div className='flex justify-between items-center bg-gray-50 rounded-lg p-4'>
                          <span className='text-gray-700'>25€</span>
                          <span className='text-sm text-gray-600'>
                            Matériel pédagogique
                          </span>
                        </div>
                        <div className='flex justify-between items-center bg-gray-50 rounded-lg p-4'>
                          <span className='text-gray-700'>50€</span>
                          <span className='text-sm text-gray-600'>
                            Formation d'un jour
                          </span>
                        </div>
                        <div className='flex justify-between items-center bg-yellow-50 rounded-lg p-4 border border-yellow-200'>
                          <span className='text-yellow-700 font-semibold'>
                            100€
                          </span>
                          <span className='text-sm text-yellow-600 font-medium'>
                            Espace numérique
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className='absolute -bottom-6 -left-6 bg-green-500 text-white p-4 rounded-lg shadow-lg'>
                  <div className='text-sm font-medium'>Impact direct</div>
                  <div className='text-lg font-bold'>100% des dons</div>
                </div>

                <div className='absolute -top-6 -right-6 bg-white text-blue-800 p-4 rounded-lg shadow-lg'>
                  <div className='text-sm font-medium'>Déduction fiscale</div>
                  <div className='text-lg font-bold'>Jusqu'à 66%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className='absolute bottom-0 left-0 right-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 100'
            className='w-full h-auto'
          >
            <path
              fill='white'
              fillOpacity='1'
              d='M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,58.7C1120,53,1280,43,1360,37.3L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z'
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content - Donation Form */}
      <section className='py-12 bg-white dark:bg-gray-950'>
        <div className='container max-w-4xl mx-auto'>
          {donationComplete ? (
            <div className='px-4 sm:px-8 lg:px-12'>
              <DonationSuccess {...successData} />
            </div>
          ) : (
            <div id='donation-form' className='px-4 sm:px-8 lg:px-12'>
              <DonationHeader
                title='Soutenez notre mission'
                subtitle='Votre don contribue directement à former, informer et transformer la jeunesse africaine.'
              />

              <div className='mt-8'>
                <DonationForm onSuccess={handleDonationSuccess} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Other Ways to Donate */}
      {!donationComplete && (
        <section className='py-12 bg-gray-50 dark:bg-gray-900'>
          <div className='container max-w-4xl mx-auto'>
            <div className='max-w-3xl mx-auto text-center mb-8 px-4 sm:px-8 lg:px-12'>
              <h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>
                Autres façons de nous soutenir
              </h2>
              <p className='text-gray-600 dark:text-gray-400'>
                En plus des dons en ligne, voici d'autres moyens de contribuer à
                notre mission.
              </p>
            </div>

            <div className='px-4 sm:px-8 lg:px-12'>
              <OtherWaysToDonate />
            </div>
          </div>
        </section>
      )}

      {/* Thank You Section */}
      <section className='py-16 bg-gradient-to-br from-blue-800 to-blue-600 text-white'>
        <div className='container max-w-4xl mx-auto'>
          <div className='max-w-3xl mx-auto text-center px-8 sm:px-12 lg:px-16'>
            <h2 className='text-3xl font-bold mb-6'>
              {donationComplete
                ? 'Merci pour votre générosité!'
                : 'Chaque don compte'}
            </h2>
            <p className='text-xl text-blue-100 mb-8'>
              {donationComplete
                ? 'Votre contribution nous aide à poursuivre notre mission de transformation par la formation de la jeunesse africaine.'
                : 'Quelle que soit la façon dont vous choisissez de nous soutenir, votre générosité fait une réelle différence dans la vie des jeunes africains.'}
            </p>
            {!donationComplete && (
              <p className='text-blue-100'>
                Pour toute question concernant les dons ou les partenariats,
                n'hésitez pas à nous contacter à{' '}
                <strong>donations@skillmetoo.org</strong>
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
