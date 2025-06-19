'use client'

import { useState, useEffect } from 'react'
import { X, Phone } from 'lucide-react'
import Image from 'next/image'

const WhatsAppFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Show button after a delay when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = '+33663603893'

  const defaultMessage =
    "Bonjour Skillmetoo! J'aimerais en savoir plus sur vos programmes de formation."

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      ''
    )}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/20 z-40 md:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Button Container */}
      <div className='fixed bottom-6 right-6 z-50'>
        {/* Expanded Card (Desktop and Mobile) */}
        {isOpen && (
          <div className='absolute bottom-16 right-0 mb-4 animate-in slide-in-from-bottom-4 duration-300'>
            <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 w-80 max-w-[calc(100vw-3rem)]'>
              {/* Header */}
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 bg-green-500 rounded-full flex items-center justify-center p-2'>
                    <Image
                      src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
                      alt='WhatsApp'
                      width={32}
                      height={32}
                      className='w-8 h-8'
                    />
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 dark:text-white text-lg'>
                      Skillmetoo
                    </h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      Équipe support
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors'
                >
                  <X className='w-5 h-5' />
                </button>
              </div>

              {/* Status */}
              <div className='flex items-center space-x-2 mb-4'>
                <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                <span className='text-sm text-gray-600 dark:text-gray-300'>
                  En ligne - Répond généralement en quelques minutes
                </span>
              </div>

              {/* Message */}
              <div className='bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4'>
                <p className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
                  👋 Bonjour ! Avez-vous des questions sur nos programmes de
                  formation ? Notre équipe est là pour vous aider !
                </p>
              </div>

              {/* Action Buttons */}
              <div className='space-y-3'>
                <button
                  onClick={handleWhatsAppClick}
                  className='w-full bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 py-3 font-medium transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2'
                >
                  <Image
                    src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
                    alt='WhatsApp'
                    width={20}
                    height={20}
                    className='w-5 h-5'
                  />
                  <span>Démarrer la conversation</span>
                </button>

                <button
                  onClick={() => {
                    window.location.href = `tel:${whatsappNumber}`
                    setIsOpen(false)
                  }}
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-3 font-medium transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2'
                >
                  <Phone className='w-5 h-5' />
                  <span>Appeler directement</span>
                </button>
              </div>

              {/* Quick Options */}
              <div className='mt-4 pt-4 border-t border-gray-200 dark:border-gray-600'>
                <p className='text-xs text-gray-500 dark:text-gray-400 mb-3'>
                  Questions fréquentes :
                </p>
                <div className='space-y-2'>
                  {[
                    'Informations sur les formations',
                    'Programme de mentorat',
                    'Demande de partenariat',
                  ].map((option, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const message = `Bonjour, j'aimerais avoir des informations sur : ${option}`
                        const encodedMsg = encodeURIComponent(message)
                        const url = `https://wa.me/${whatsappNumber.replace(
                          /[^0-9]/g,
                          ''
                        )}?text=${encodedMsg}`
                        window.open(url, '_blank')
                        setIsOpen(false)
                      }}
                      className='block w-full text-left text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1'
                    >
                      • {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            relative w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 
            ${
              isOpen
                ? 'bg-gray-600 hover:bg-gray-700'
                : 'bg-green-500 hover:bg-green-600'
            }
            animate-in zoom-in duration-500
          `}
        >
          {/* Pulsing ring animation when closed */}
          {!isOpen && (
            <div className='absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20'></div>
          )}

          {/* Icon */}
          <div className='relative z-10 flex items-center justify-center w-full h-full p-3'>
            {isOpen ? (
              <X className='w-6 h-6 text-white transition-transform duration-300' />
            ) : (
              <Image
                src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
                alt='WhatsApp'
                width={32}
                height={32}
                className='w-8 h-8 transition-transform duration-300'
              />
            )}
          </div>

          {/* Notification badge */}
          {!isOpen && (
            <div className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center'>
              <span className='text-xs text-white font-bold'>1</span>
            </div>
          )}
        </button>

        {/* Tooltip for desktop */}
        {!isOpen && (
          <div className='absolute right-16 top-1/2 transform -translate-y-1/2 hidden lg:block'>
            <div className='bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
              Besoin d'aide ? Contactez-nous !
              <div className='absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900'></div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default WhatsAppFloatingButton
