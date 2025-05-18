'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { Mail, Send, Check } from 'lucide-react'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast('Veuillez entrer une adresse email valide.')
      return
    }

    // Simulate submission
    setIsSubmitting(true)

    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      toast('Vous êtes maintenant inscrit à notre newsletter.')

      // Reset form after 2 seconds
      setTimeout(() => {
        setEmail('')
        setIsSuccess(false)
      }, 2000)
    }, 1500)
  }

  return (
    <section className='py-16 bg-gradient-to-r from-yellow-500 to-amber-500 text-black'>
      <div className='container'>
        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            {/* Decorative elements */}
            <div className='absolute -top-10 -left-10 h-20 w-20 rounded-full bg-white/10'></div>
            <div className='absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-white/10'></div>

            {/* Content */}
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden'>
              {/* Top pattern */}
              <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600'></div>

              <div className='flex flex-col md:flex-row md:items-center gap-8'>
                <div className='md:w-2/3'>
                  <div className='flex items-center mb-6'>
                    <div className='bg-white/20 rounded-full p-3 mr-4'>
                      <Mail className='h-6 w-6' />
                    </div>
                    <h2 className='text-2xl md:text-3xl font-bold'>
                      Restez informé
                    </h2>
                  </div>
                  <p className='text-black/90 text-lg mb-6'>
                    Recevez nos actualités, opportunités de formation et
                    conseils exclusifs directement dans votre boîte mail.
                  </p>
                  <ul className='space-y-2 mb-6 text-black/80'>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 mr-2 mt-0.5 text-black' />
                      <span>Opportunités de formation et de financement</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 mr-2 mt-0.5 text-black' />
                      <span>Conseils pour le développement de carrière</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 mr-2 mt-0.5 text-black' />
                      <span>Invitations aux événements exclusifs</span>
                    </li>
                  </ul>
                </div>

                <div className='md:w-1/3'>
                  <form onSubmit={handleSubmit}>
                    <div className='bg-white/20 rounded-xl p-5 backdrop-blur-sm'>
                      <div className='mb-4'>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium mb-2'
                        >
                          Votre adresse email
                        </label>
                        <Input
                          id='email'
                          type='email'
                          placeholder='exemple@email.com'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className='bg-white/10 border-white/30 text-black placeholder:text-black/60 focus:border-white focus:ring-white/30'
                          required
                        />
                      </div>
                      <Button
                        type='submit'
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white border-0 h-10 button-hover'
                        disabled={isSubmitting || isSuccess}
                      >
                        {isSubmitting ? (
                          <span className='flex items-center'>
                            <svg
                              className='animate-spin -ml-1 mr-2 h-4 w-4 text-black'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                            >
                              <circle
                                className='opacity-25'
                                cx='12'
                                cy='12'
                                r='10'
                                stroke='currentColor'
                                strokeWidth='4'
                              ></circle>
                              <path
                                className='opacity-75'
                                fill='currentColor'
                                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                              ></path>
                            </svg>
                            Traitement...
                          </span>
                        ) : isSuccess ? (
                          <span className='flex items-center'>
                            <Check className='mr-2 h-4 w-4' />
                            Inscrit !
                          </span>
                        ) : (
                          <span className='flex items-center'>
                            <Send className='mr-2 h-4 w-4' />
                            S'abonner
                          </span>
                        )}
                      </Button>
                    </div>
                    <p className='text-sm text-black/70 mt-3 text-center px-2'>
                      Nous respectons votre vie privée. Désabonnez-vous à tout
                      moment.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
