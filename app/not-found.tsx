import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search, Globe } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950'>
      {/* Main 404 Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8'>
        <div className='container max-w-7xl mx-auto'>
          <div className='max-w-4xl mx-auto text-center'>
            {/* 404 Illustration */}
            <div className='relative mb-12'>
              <div className='relative mx-auto w-80 h-80 md:w-96 md:h-96'>
                {/* Background decorative elements */}
                <div className='absolute top-0 left-0 w-20 h-20 bg-blue-200 dark:bg-blue-900/30 rounded-full animate-pulse'></div>
                <div className='absolute top-10 right-0 w-16 h-16 bg-yellow-200 dark:bg-yellow-900/30 rounded-full animate-pulse delay-75'></div>
                <div className='absolute bottom-0 left-10 w-12 h-12 bg-purple-200 dark:bg-purple-900/30 rounded-full animate-pulse delay-150'></div>

                {/* Main 404 text */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <h1 className='text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 bg-clip-text'>
                    404
                  </h1>
                </div>

                {/* Floating icons */}
                <div className='absolute top-16 left-16 animate-bounce'>
                  <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400'>
                    <Search className='h-6 w-6' />
                  </div>
                </div>
                <div className='absolute bottom-16 right-16 animate-bounce delay-300'>
                  <div className='w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400'>
                    <Globe className='h-6 w-6' />
                  </div>
                </div>
              </div>
            </div>

            {/* Error message */}
            <div className='space-y-6 mb-12'>
              <div className='inline-block px-4 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 font-medium text-sm'>
                Page introuvable
              </div>

              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
                Oops ! Cette page n'existe pas
              </h2>

              <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                Il semble que la page que vous recherchez ait été déplacée,
                supprimée ou n'existe tout simplement pas. Mais ne vous
                inquiétez pas, nous sommes là pour vous aider à trouver ce que
                vous cherchez !
              </p>
            </div>

            {/* Action buttons */}
            <div className='flex flex-col sm:flex-row justify-center gap-4 mb-16'>
              <Button
                asChild
                className='bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 text-base'
              >
                <Link href='/'>
                  <Home className='h-5 w-5 mr-2' />
                  Retour à l'accueil
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Quick Navigation Card Component
const QuickNavCard = ({
  icon: Icon,
  title,
  description,
  href,
  color,
}: {
  icon: any
  title: string
  description: string
  href: string
  color: 'blue' | 'green' | 'purple' | 'yellow' | 'indigo' | 'red'
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50'
      case 'green':
        return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50'
      case 'purple':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50'
      case 'yellow':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/50'
      case 'indigo':
        return 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50'
      case 'red':
        return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 group-hover:bg-red-200 dark:group-hover:bg-red-900/50'
      default:
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50'
    }
  }

  return (
    <Link href={href} className='group'>
      <div className='bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:bg-white dark:group-hover:bg-gray-600 h-full'>
        <div
          className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 transition-colors ${getColorClass()}`}
        >
          <Icon className='h-6 w-6' />
        </div>
        <h4 className='text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
          {title}
        </h4>
        <p className='text-gray-600 dark:text-gray-300 text-sm'>
          {description}
        </p>
      </div>
    </Link>
  )
}
