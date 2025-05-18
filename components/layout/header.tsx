'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { MoonIcon, SunIcon, MenuIcon, X } from 'lucide-react'
import { useTheme } from 'next-themes'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between h-20'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/images/logo.png'
            alt='Skillmetoo'
            width={180}
            height={40}
            className='h-14 w-auto'
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className='hidden md:flex'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  'bg-transparent text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400',
                  isScrolled ? '' : 'text-white dark:text-white'
                )}
              >
                À propos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2 bg-white dark:bg-gray-900'>
                  <li className='row-span-3'>
                    <NavigationMenuLink asChild>
                      <Link
                        href='/apropos'
                        className='flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-blue-800 to-blue-600 text-white'
                      >
                        <div className='mt-4 mb-2 text-lg font-medium'>
                          Notre Vision
                        </div>
                        <p className='text-sm leading-tight text-white/90'>
                          Découvrez la mission et les valeurs qui animent
                          Skillmetoo.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href='/apropos/histoire' title='Notre Histoire'>
                    Parcourez les étapes marquantes de notre organisation.
                  </ListItem>
                  <ListItem href='/apropos/equipe' title="L'Équipe">
                    Rencontrez les personnes qui font vivre Skillmetoo.
                  </ListItem>
                  <ListItem href='/apropos/impact' title='Notre Impact'>
                    Découvrez comment nous transformons des vies.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  'bg-transparent text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400',
                  isScrolled ? '' : 'text-white dark:text-white'
                )}
              >
                Activités
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2 bg-white dark:bg-gray-900'>
                  <ListItem href='/activites/formation' title='Formations'>
                    Programmes de développement de compétences.
                  </ListItem>
                  <ListItem href='/activites/mentorat' title='Mentorat'>
                    Accompagnement personnalisé pour les jeunes.
                  </ListItem>
                  <ListItem href='/activites/reseautage' title='Réseautage'>
                    Connexions professionnelles et opportunités.
                  </ListItem>
                  <ListItem href='/activites/incubation' title='Incubation'>
                    Soutien aux projets innovants.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href='/ressources'
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white'
                  )}
                >
                  Ressources
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href='/blog'
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white'
                  )}
                >
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href='/magazine'
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white'
                  )}
                >
                  Magazine
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href='/contact'
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white'
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex items-center gap-2'>
          {/* Styled Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={cn(
              'relative w-12 h-12 overflow-hidden rounded-full transition-all duration-300 shadow-md',
              theme === 'dark'
                ? 'bg-gradient-to-br from-indigo-900 to-blue-900 hover:from-indigo-800 hover:to-blue-800'
                : 'bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400'
            )}
            aria-label='Toggle theme'
          >
            <div
              className={cn(
                'absolute inset-0 flex items-center justify-center transform transition-transform duration-500',
                theme === 'dark' ? 'rotate-0' : 'rotate-180 scale-0 opacity-0'
              )}
            >
              <MoonIcon className='h-6 w-6 text-white' />
            </div>
            <div
              className={cn(
                'absolute inset-0 flex items-center justify-center transform transition-transform duration-500',
                theme === 'dark' ? 'rotate-180 scale-0 opacity-0' : 'rotate-0'
              )}
            >
              <SunIcon className='h-6 w-6 text-white' />
            </div>
            <div
              className={cn(
                'absolute bottom-0 left-0 right-0 h-1/4 transform transition-all duration-500',
                theme === 'dark' ? 'bg-blue-500/30' : 'bg-yellow-300/30'
              )}
            />
          </button>

          <Button
            variant='default'
            className='hidden md:inline-flex gradient-secondary border-0 text-white hover:text-white dark:text-black'
          >
            Faire un don
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <MenuIcon className='h-6 w-6' />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-white dark:bg-gray-950 shadow-lg'>
          <nav className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6'>
            <ul className='flex flex-col space-y-4'>
              <li>
                <Link
                  href='/apropos'
                  className='block py-2 px-3 text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 rounded-md'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href='/activites'
                  className='block py-2 px-3 text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 rounded-md'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Activités
                </Link>
              </li>
              <li>
                <Link
                  href='/ressources'
                  className='block py-2 px-3 text-lg font-medium bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white rounded-md'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ressources
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='block py-2 px-3 text-lg font-medium bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white rounded-md'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/magazine'
                  className='block py-2 px-3 text-lg font-medium bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white rounded-md'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Magazine
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='block py-2 px-3 text-lg font-medium bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white rounded-md'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className='pt-2'>
                <Button className='w-full gradient-secondary border-0 text-white hover:text-white'>
                  Faire un don
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

const ListItem = ({
  className,
  title,
  children,
  href,
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 focus:bg-gray-100 dark:focus:bg-gray-800 focus:text-blue-600 dark:focus:text-blue-400',
            className
          )}
        >
          <div className='text-sm font-medium leading-none text-gray-900 dark:text-white'>
            {title}
          </div>
          <p className='line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default Header
