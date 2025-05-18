import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react'

const LocationSection = () => {
  return (
    <section className='py-20 bg-white dark:bg-gray-950'>
      <div className='container'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            Nous{' '}
            <span className='text-blue-600 dark:text-blue-400'>trouver</span>
          </h2>
          <p className='text-gray-600 dark:text-gray-400 text-lg'>
            Visitez notre siège ou contactez-nous pour en savoir plus sur nos
            programmes.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Contact Info */}
          <div className='lg:col-span-1 space-y-8'>
            <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-6'>
              <h3 className='text-xl font-bold mb-6 text-gray-900 dark:text-white'>
                Informations de contact
              </h3>

              <div className='space-y-6'>
                <div className='flex'>
                  <div className='flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                    <MapPin className='h-6 w-6' />
                  </div>
                  <div>
                    <h4 className='text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      Adresse
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300'>
                      123 Rue Principale
                      <br />
                      Bamenda, Cameroun
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                    <Clock className='h-6 w-6' />
                  </div>
                  <div>
                    <h4 className='text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      Heures d'ouverture
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300'>
                      Lundi - Vendredi: 8h - 18h
                      <br />
                      Samedi: 9h - 13h
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                    <Phone className='h-6 w-6' />
                  </div>
                  <div>
                    <h4 className='text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      Téléphone
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300'>
                      +237 123 456 789
                      <br />
                      +237 987 654 321
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                    <Mail className='h-6 w-6' />
                  </div>
                  <div>
                    <h4 className='text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      Email
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300'>
                      contact@skillmetoo.org
                      <br />
                      info@skillmetoo.org
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-8'>
                <Link href='/contact'>
                  <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white button-hover'>
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className='lg:col-span-2'>
            <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full'>
              <div className='relative w-full h-[400px] lg:h-full'>
                {/* For production, use this iframe instead */}

                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15231.30376806768!2d10.155086871580503!3d5.951976906573298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f12a7f9aa5267%3A0xeaaf27b5ecf41f2e!2sBamenda%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1716992487019!5m2!1sen!2sus'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
