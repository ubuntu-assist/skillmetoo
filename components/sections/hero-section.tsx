'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const animatedWords = ['Former.', 'Informer.', 'Transformer.']
  const wordColors = ['text-white', 'text-yellow-400', 'text-green-400']

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [animatedWords.length])

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
            {/* Animated Main Title */}
            <div className='font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-center'>
              <div className='relative h-20 md:h-24 lg:h-28 flex items-center justify-center overflow-hidden'>
                {animatedWords.map((word, index) => (
                  <h1
                    key={index}
                    className={`
                      absolute inset-0 flex items-center justify-center font-black
                      transition-all duration-700 ease-in-out transform
                      ${wordColors[index]}
                      ${
                        currentWordIndex === index
                          ? 'translate-y-0 opacity-100 scale-100'
                          : index < currentWordIndex
                          ? '-translate-y-full opacity-0 scale-95'
                          : 'translate-y-full opacity-0 scale-95'
                      }
                    `}
                  >
                    {word}
                  </h1>
                ))}
              </div>

              {/* Subtitle with typewriter effect */}
              <div className='mt-8 text-lg md:text-xl lg:text-2xl text-blue-100 font-light'>
                <span className='inline-block animate-typewriter overflow-hidden border-r-2 border-blue-300 whitespace-nowrap'>
                  Personalized Skilling for Optimum Success
                </span>
              </div>
            </div>

            {/* Animated description with staggered words */}
            <div className='text-xl md:text-2xl text-blue-100 font-light  max-w-xl'>
              <div className='space-y-2 text-justify'>
                Nous donnons aux jeunes compétences nécessaires pour comprendre
                les enjeux du monde de demain afin de les préparer à saisir les
                opportunités futures aussi bien sur le marché local que global.
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-wrap gap-4 pt-4'>
              {[
                {
                  text: 'Rejoindre Skillmetoo',
                  className:
                    'bg-yellow-500 hover:bg-yellow-600 text-white border-0',
                },
                {
                  text: 'Prendre rendez-vous',
                  className:
                    'bg-blue-600 hover:bg-blue-700 text-white border-0',
                },
              ].map((button, index) => (
                <Button
                  key={index}
                  variant='default'
                  className={`
                    h-12 px-6 text-base font-medium
                    transform transition-all duration-700 ease-out
                    ${button.className}
                    ${
                      isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                    }
                  `}
                  style={{
                    transitionDelay: `${1200 + index * 100}ms`,
                  }}
                >
                  {button.text}
                </Button>
              ))}
            </div>
          </div>

          {/* Image Section */}
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

      <style jsx>{`
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes float-show {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }

        .animate-typewriter {
          animation: typewriter 6s steps(50) infinite alternate;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-show {
          animation: float-show 1s ease-out forwards,
            float 4s ease-in-out infinite 1s;
        }

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection
