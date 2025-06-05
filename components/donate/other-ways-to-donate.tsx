import { Button } from '@/components/ui/button'
import { Copy, CreditCard, Building, Gift, MailOpen } from 'lucide-react'

const OtherWaysToDonate = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Copié dans le presse-papier !')
  }

  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden'>
      <div className='p-6 md:p-8'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white'>
          Autres façons de nous soutenir
        </h3>

        <div className='space-y-6'>
          {/* Bank Transfer */}
          <div className='bg-gray-50 dark:bg-gray-700 rounded-xl p-4 md:p-6'>
            <div className='flex items-start'>
              <div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                <Building className='h-5 w-5' />
              </div>
              <div className='flex-grow'>
                <h4 className='text-lg font-semibold mb-2 text-gray-900 dark:text-white'>
                  Virement bancaire
                </h4>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  Pour les dons importants ou les virements internationaux, vous
                  pouvez utiliser nos coordonnées bancaires.
                </p>
                <div className='space-y-2 bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600 dark:text-gray-400'>
                      Bénéficiaire:
                    </span>
                    <div className='flex items-center'>
                      <span className='font-medium text-gray-900 dark:text-white'>
                        Association Skillmetoo
                      </span>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='h-8 w-8 ml-2'
                        onClick={() =>
                          copyToClipboard('Association Skillmetoo')
                        }
                      >
                        <Copy className='h-4 w-4' />
                      </Button>
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600 dark:text-gray-400'>
                      IBAN:
                    </span>
                    <div className='flex items-center'>
                      <span className='font-medium text-gray-900 dark:text-white'>
                        FR76 1234 5678 9101 1213 1415 1617
                      </span>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='h-8 w-8 ml-2'
                        onClick={() =>
                          copyToClipboard('FR76 1234 5678 9101 1213 1415 1617')
                        }
                      >
                        <Copy className='h-4 w-4' />
                      </Button>
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600 dark:text-gray-400'>
                      BIC/SWIFT:
                    </span>
                    <div className='flex items-center'>
                      <span className='font-medium text-gray-900 dark:text-white'>
                        BNPAFRPPXXX
                      </span>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='h-8 w-8 ml-2'
                        onClick={() => copyToClipboard('BNPAFRPPXXX')}
                      >
                        <Copy className='h-4 w-4' />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Donations */}
          <div className='bg-gray-50 dark:bg-gray-700 rounded-xl p-4 md:p-6'>
            <div className='flex items-start'>
              <div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                <CreditCard className='h-5 w-5' />
              </div>
              <div>
                <h4 className='text-lg font-semibold mb-2 text-gray-900 dark:text-white'>
                  Dons d'entreprises
                </h4>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  Votre entreprise peut devenir partenaire de Skillmetoo. Nous
                  proposons différentes formules de partenariat adaptées à vos
                  objectifs de RSE.
                </p>
                <Button className='bg-blue-600 hover:bg-blue-700'>
                  Contact entreprises
                </Button>
              </div>
            </div>
          </div>

          {/* Legacy Gifts */}
          <div className='bg-gray-50 dark:bg-gray-700 rounded-xl p-4 md:p-6'>
            <div className='flex items-start'>
              <div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                <Gift className='h-5 w-5' />
              </div>
              <div>
                <h4 className='text-lg font-semibold mb-2 text-gray-900 dark:text-white'>
                  Legs et donations
                </h4>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  Vous pouvez soutenir notre mission sur le long terme en
                  incluant Skillmetoo dans votre succession. Contactez-nous pour
                  plus d'informations.
                </p>
                <Button variant='outline'>En savoir plus</Button>
              </div>
            </div>
          </div>

          {/* By Mail */}
          <div className='bg-gray-50 dark:bg-gray-700 rounded-xl p-4 md:p-6'>
            <div className='flex items-start'>
              <div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                <MailOpen className='h-5 w-5' />
              </div>
              <div>
                <h4 className='text-lg font-semibold mb-2 text-gray-900 dark:text-white'>
                  Par courrier
                </h4>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  Vous pouvez également nous envoyer un chèque à l'ordre de
                  "Association Skillmetoo" à l'adresse suivante:
                </p>
                <div className='bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600'>
                  <p className='text-gray-900 dark:text-white'>
                    Association Skillmetoo
                    <br />
                    123 Rue Principale
                    <br />
                    Bamenda, Cameroun
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherWaysToDonate
