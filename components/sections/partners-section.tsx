'use client'

import Slider from 'react-slick'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const partners = [
  {
    id: 1,
    name: 'TechAfrica',
    logo: '/images/logo.png',
    website: 'https://techafrica.com',
  },
  {
    id: 2,
    name: 'Ministère de la Jeunesse',
    logo: '/images/logo.png',
    website: 'https://jeunesse.gov.org',
  },
  {
    id: 3,
    name: 'Digital Campus',
    logo: '/images/logo.png',
    website: 'https://digitalcampus.edu',
  },
  {
    id: 4,
    name: 'InnovHub',
    logo: '/images/logo.png',
    website: 'https://innovhub.org',
  },
  {
    id: 5,
    name: 'Global Talents',
    logo: '/images/logo.png',
    website: 'https://globaltalents.org',
  },
  {
    id: 6,
    name: 'AfricaGrowth',
    logo: '/images/logo.png',
    website: 'https://africagrowth.org',
  },
  {
    id: 7,
    name: 'TechStart Academy',
    logo: '/images/logo.png',
    website: 'https://techstart.edu',
  },
  {
    id: 8,
    name: 'FutureSkills',
    logo: '/images/logo.png',
    website: 'https://futureskills.org',
  },
]

const PartnersSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className='py-16 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            Nos{' '}
            <span className='text-blue-600 dark:text-blue-400'>
              partenaires
            </span>
          </h2>
          <p className='text-gray-600 dark:text-gray-400 text-lg'>
            Ils nous font confiance et soutiennent notre mission de
            transformation par la formation.
          </p>
        </div>

        {/* Partners slider */}
        <div className='max-w-7xl mx-auto'>
          <Slider {...settings}>
            {partners.map((partner) => (
              <div key={partner.id} className='px-4'>
                <a
                  href={partner.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6'
                >
                  <div className='relative h-32 w-full'>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className='object-contain grayscale hover:grayscale-0 transition-all duration-300'
                    />
                  </div>
                  <p className='mt-4 text-center text-gray-700 dark:text-gray-300 font-medium'>
                    {partner.name}
                  </p>
                </a>
              </div>
            ))}
          </Slider>
        </div>

        {/* Become a partner CTA */}
        <div className='mt-12 text-center'>
          <Link href='/contact'>
            <Button
              variant='outline'
              className='border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 h-12 px-6 button-hover'
            >
              Devenir partenaire
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
