'use client'

import React, { useRef, useState, FormEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useInView } from 'framer-motion'
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from '@tabler/icons-react'
import { Mail, MapPin, Phone, ArrowUp } from 'lucide-react'

const Footer = () => {
  const logoRef = useRef(null)
  const isLogoInView = useInView(logoRef)
  const [showThankYou, setShowThankYou] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    target.reset()
    setShowThankYou(true)
    setTimeout(() => {
      setShowThankYou(false)
    }, 3000)
  }

  // Animation variants for the SVG paths
  const pathVariants = {
    visible: (i: number) => ({
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: {
          type: 'spring',
          duration: 1.5,
          bounce: 0,
          delay: i * 0.05,
        },
        opacity: {
          duration: 0.2,
        },
      },
    }),
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
  }

  return (
    <footer className='bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden'>
      {/* Decorative background elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
        <div className='absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500 opacity-10 blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-60 h-60 rounded-full bg-yellow-500 opacity-10 blur-3xl'></div>
      </div>

      {/* Main footer content */}
      <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 relative z-10'>
        {/* Footer 4-column grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Column 1 - About */}
          <div>
            <Link href='/' className='inline-block mb-6'>
              <Image
                src='/images/logo.png'
                alt='Skillmetoo'
                width={180}
                height={40}
                className='h-14 w-auto'
              />
            </Link>
            <p className='text-gray-300 mb-6'>
              Association africaine qui motive et transforme la jeunesse en leur
              donnant des compétences pour comprendre le monde et saisir les
              opportunités du marché international.
            </p>
            <div className='flex space-x-3'>
              <SocialIcon
                Icon={IconBrandFacebook}
                href='https://facebook.com'
              />
              <SocialIcon Icon={IconBrandX} href='https://twitter.com' />
              <SocialIcon
                Icon={IconBrandInstagram}
                href='https://instagram.com'
              />
              <SocialIcon
                Icon={IconBrandLinkedin}
                href='https://linkedin.com'
              />
              <SocialIcon Icon={IconBrandYoutube} href='https://youtube.com' />
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-6 flex items-center'>
              <span className='w-6 h-1 bg-yellow-500 rounded-full mr-2'></span>
              Liens rapides
            </h3>
            <ul className='space-y-3'>
              <FooterLink href='/apropos'>À propos</FooterLink>
              <FooterLink href='/activites'>Nos activités</FooterLink>
              {/* <FooterLink href='/blog'>Blog</FooterLink> */}
              <FooterLink href='/magazine'>Magazine</FooterLink>
              <FooterLink href='/contact'>Contact</FooterLink>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className='text-xl font-bold mb-6 flex items-center'>
              <span className='w-6 h-1 bg-yellow-500 rounded-full mr-2'></span>
              Contact
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-start group'>
                <MapPin className='h-5 w-5 mr-3 mt-1 text-yellow-400 group-hover:text-yellow-300 transition-colors' />
                <span className='text-gray-300 group-hover:text-white transition-colors'>
                  123 Rue Principale, Bamenda, Cameroun
                </span>
              </li>
              <li className='flex items-center group'>
                <Phone className='h-5 w-5 mr-3 text-yellow-400 group-hover:text-yellow-300 transition-colors' />
                <span className='text-gray-300 group-hover:text-white transition-colors'>
                  +237 123 456 789
                </span>
              </li>
              <li className='flex items-center group'>
                <Mail className='h-5 w-5 mr-3 text-yellow-400 group-hover:text-yellow-300 transition-colors' />
                <span className='text-gray-300 group-hover:text-white transition-colors'>
                  contact@skillmetoo.org
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Call to Action */}
          <div>
            <h3 className='text-xl font-bold mb-6 flex items-center'>
              <span className='w-6 h-1 bg-yellow-500 rounded-full mr-2'></span>
              Soutenez notre mission
            </h3>
            <p className='text-gray-300 mb-6'>
              Votre soutien aide à former la prochaine génération de leaders
              africains et à créer un avenir meilleur.
            </p>
            {/* Donate Button - Now wrapped with Link */}
            <Link href='/donate'>
              <Button className='w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-medium border-0'>
                Faire un don
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='pt-6 flex flex-col md:flex-row justify-between items-center border-t'>
          <p className='text-gray-300 text-sm mb-4 md:mb-0'>
            © {new Date().getFullYear()} Skillmetoo. Tous droits réservés.
          </p>
          <div className='flex space-x-5 text-sm text-gray-300'>
            <Link
              href='/confidentialite'
              className='hover:text-white transition-colors'
            >
              Politique de confidentialité
            </Link>
            <Link
              href='/conditions'
              className='hover:text-white transition-colors'
            >
              Conditions d'utilisation
            </Link>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className='flex justify-center mt-8'>
          <Button
            onClick={scrollToTop}
            variant='outline'
            size='icon'
            className='rounded-full border-blue-600 bg-blue-800/60 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/40 hover:shadow-blue-800/50 hover:scale-105 transition-all duration-300'
          >
            <ArrowUp className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ Icon, href }: { Icon: any; href: string }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='bg-blue-800 hover:bg-yellow-500 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md'
  >
    <Icon className='h-5 w-5' />
  </a>
)

const FooterLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <li>
    <Link
      href={href}
      className='text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group'
    >
      <span className='w-0 h-0.5 bg-yellow-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300'></span>
      {children}
    </Link>
  </li>
)

export default Footer
