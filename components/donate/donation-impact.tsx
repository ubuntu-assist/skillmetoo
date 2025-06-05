import { Check } from 'lucide-react'
import Image from 'next/image'

const impactItems = [
  {
    title: 'Formation Technique',
    description:
      'Financez des programmes de formation adaptés aux besoins du marché international pour les jeunes africains.',
    image: '/images/donate/impact-1.jpg',
  },
  {
    title: "Bourses d'Études",
    description:
      'Offrez des bourses à des jeunes talentueux mais disposant de ressources limitées pour participer à nos programmes.',
    image: '/images/donate/impact-2.jpg',
  },
  {
    title: 'Mentorat',
    description:
      'Soutenez nos programmes de mentorat qui connectent les jeunes avec des professionnels expérimentés.',
    image: '/images/donate/impact-3.jpg',
  },
  {
    title: 'Infrastructures',
    description:
      "Contribuez à l'amélioration de nos espaces d'apprentissage et à l'acquisition d'équipements technologiques.",
    image: '/images/donate/impact-4.jpg',
  },
]

const DonationImpact = () => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden'>
      <div className='p-6 md:p-8'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white'>
          L'impact de votre don
        </h3>

        <div className='space-y-6'>
          {impactItems.map((item, index) => (
            <div key={index} className='flex gap-4'>
              <div className='flex-shrink-0 relative h-20 w-20 rounded-lg overflow-hidden'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div>
                <h4 className='text-lg font-semibold mb-1 text-gray-900 dark:text-white'>
                  {item.title}
                </h4>
                <p className='text-gray-600 dark:text-gray-300'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-blue-50 dark:bg-blue-900/20 p-6 md:p-8'>
        <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
          Votre impact en chiffres
        </h3>

        <div className='space-y-3'>
          <div className='flex items-center'>
            <div className='flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3'>
              <Check className='h-4 w-4' />
            </div>
            <p className='text-gray-700 dark:text-gray-300'>
              <strong>25$</strong> permettent de fournir du matériel pédagogique
              à un étudiant
            </p>
          </div>

          <div className='flex items-center'>
            <div className='flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3'>
              <Check className='h-4 w-4' />
            </div>
            <p className='text-gray-700 dark:text-gray-300'>
              <strong>50$</strong> financent une journée de formation pour 5
              jeunes
            </p>
          </div>

          <div className='flex items-center'>
            <div className='flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3'>
              <Check className='h-4 w-4' />
            </div>
            <p className='text-gray-700 dark:text-gray-300'>
              <strong>100$</strong> permettent d'équiper un espace numérique de
              formation
            </p>
          </div>

          <div className='flex items-center'>
            <div className='flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3'>
              <Check className='h-4 w-4' />
            </div>
            <p className='text-gray-700 dark:text-gray-300'>
              <strong>250$</strong> offrent une bourse complète à un jeune
              pendant un mois
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationImpact
