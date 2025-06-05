'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
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

      <div className='container relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div
            className={`text-white space-y-6 ${
              isVisible ? 'fade-in' : 'opacity-0'
            }`}
          >
            <div className='font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-center'>
              <h1>Former.</h1>
              <div className='text-2xl my-2'>↓</div>
              <h1>
                <span className='text-yellow-400'>Informer.</span>
              </h1>
              <div className='text-2xl my-2'>↓</div>
              <h1>Transformer.</h1>
            </div>
            <p className='text-xl md:text-2xl text-blue-100 font-light max-w-xl'>
              Nous donnons aux jeunes les compétences nécessaires pour
              comprendre les enjeux du monde de demain afin de les préparer à
              saisir les opportunités futures aussi bien sur le marché local que
              global.
            </p>
            <div className='flex flex-wrap gap-4 pt-4'>
              <Button className='bg-yellow-500 hover:bg-yellow-600 text-white border-0 h-12 px-6 text-base button-hover'>
                Faire un don
              </Button>
              <Button className='bg-blue-600 hover:bg-blue-700 text-white border-0 h-12 px-6 text-base button-hover'>
                Rejoindre Skillmetoo
              </Button>
              <Button
                variant='outline'
                className='border-white text-black hover:bg-white/10 h-12 px-6 text-base button-hover'
              >
                Prendre rendez-vous
              </Button>
            </div>
          </div>

          <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <div className='relative'>
              {/* Main hero image */}
              <div className='bg-gradient-to-br from-blue-600 to-blue-400 p-1 rounded-2xl shadow-xl'>
                <Image
                  src='/images/hero-img.png'
                  alt='Jeunes africains en formation'
                  width={600}
                  height={450}
                  className='rounded-xl'
                />
              </div>

              {/* Floating elements */}
              <div className='absolute -bottom-6 -left-6 bg-yellow-500 text-white p-4 rounded-lg shadow-lg'>
                <div className='text-3xl font-bold'>500+</div>
                <div className='text-sm'>Jeunes formés</div>
              </div>

              <div className='absolute -top-6 -right-6 bg-white text-blue-800 p-4 rounded-lg shadow-lg'>
                <div className='text-3xl font-bold'>15+</div>
                <div className='text-sm'>Pays touchés</div>
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
  )
}

export default HeroSection
