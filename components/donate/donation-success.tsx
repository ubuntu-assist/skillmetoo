import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CheckCircle, Download, Share2 } from 'lucide-react'
import Link from 'next/link'

interface DonationSuccessProps {
  amount: string
  isRecurring: boolean
  donorName: string
  donationId: string
  donationDate: string
}

const DonationSuccess = ({
  amount,
  isRecurring,
  donorName,
  donationId,
  donationDate,
}: DonationSuccessProps) => {
  return (
    <div className='max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden'>
      <div className='bg-green-500 text-white p-8 text-center'>
        <CheckCircle className='h-16 w-16 mx-auto mb-4' />
        <h2 className='text-2xl font-bold mb-2'>Merci pour votre don !</h2>
        <p className='text-green-100'>
          Votre générosité contribue à transformer des vies à travers l'Afrique.
        </p>
      </div>

      <div className='p-8'>
        <div className='bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-6'>
          <h3 className='text-xl font-semibold mb-4 text-gray-900 dark:text-white'>
            Détails de votre don
          </h3>

          <div className='space-y-3'>
            <div className='flex justify-between'>
              <span className='text-gray-600 dark:text-gray-300'>Montant</span>
              <span className='font-semibold text-gray-900 dark:text-white'>
                ${amount} {isRecurring ? '/ mois' : ''}
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600 dark:text-gray-300'>
                Fréquence
              </span>
              <span className='font-semibold text-gray-900 dark:text-white'>
                {isRecurring ? 'Mensuel' : 'Unique'}
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600 dark:text-gray-300'>
                Nom du donateur
              </span>
              <span className='font-semibold text-gray-900 dark:text-white'>
                {donorName}
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600 dark:text-gray-300'>
                Référence du don
              </span>
              <span className='font-semibold text-gray-900 dark:text-white'>
                {donationId}
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600 dark:text-gray-300'>Date</span>
              <span className='font-semibold text-gray-900 dark:text-white'>
                {donationDate}
              </span>
            </div>
          </div>
        </div>

        <p className='text-gray-600 dark:text-gray-300 mb-6'>
          Un reçu de confirmation a été envoyé à votre adresse email. Si vous ne
          le recevez pas dans les prochaines minutes, veuillez vérifier votre
          dossier de spam ou nous contacter.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 mb-8'>
          <Button className='flex-1 bg-blue-600 hover:bg-blue-700'>
            <Download className='mr-2 h-4 w-4' />
            Télécharger le reçu
          </Button>
          <Button variant='outline' className='flex-1'>
            <Share2 className='mr-2 h-4 w-4' />
            Partager
          </Button>
        </div>

        <div className='bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center'>
          <div className='relative h-40 w-40 mx-auto mb-4'>
            <Image
              src='/images/donate/impact-illustration.svg'
              alt='Impact illustration'
              fill
              className='object-contain'
            />
          </div>
          <h3 className='text-xl font-semibold mb-2 text-gray-900 dark:text-white'>
            Votre impact
          </h3>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            Grâce à votre don de ${amount}, nous pourrons{' '}
            {isRecurring ? 'chaque mois ' : ''}aider des jeunes africains à
            développer leurs compétences et à transformer leur avenir.
          </p>
          <Link href='/impact'>
            <Button variant='link' className='text-blue-600 dark:text-blue-400'>
              En savoir plus sur notre impact
            </Button>
          </Link>
        </div>
      </div>

      <div className='bg-gray-50 dark:bg-gray-700 p-6 text-center'>
        <Link href='/'>
          <Button variant='ghost'>Retour à l'accueil</Button>
        </Link>
      </div>
    </div>
  )
}

export default DonationSuccess
