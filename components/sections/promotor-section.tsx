import Image from 'next/image'

const PromotorSection = () => {
  return (
    <section className='py-20 bg-white dark:bg-gray-950'>
      <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Image side */}
          <div className='relative'>
            <div className='relative z-10'>
              <div className='relative bg-gradient-to-br from-blue-600 to-blue-400 p-1.5 rounded-2xl shadow-xl max-w-md mx-auto md:mx-0'>
                <Image
                  src='/images/promotor.jpeg'
                  alt='Promoteur de Skillmetoo'
                  width={500}
                  height={600}
                  className='rounded-xl'
                />

                {/* Signature overlay */}
                <div className='absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 px-4 py-2 rounded-lg shadow-lg'>
                  <Image
                    src='/images/signature.webp'
                    alt='Signature'
                    width={120}
                    height={60}
                  />
                </div>
              </div>
            </div>

            {/* Geometric decorations */}
            <div className='absolute top-1/4 right-1/4 w-24 h-24 bg-yellow-100 dark:bg-yellow-900/20 rounded-full -z-10'></div>
            <div className='absolute bottom-1/4 left-1/4 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full -z-10'></div>
          </div>

          {/* Text side */}
          <div className='space-y-6'>
            <div className='inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium text-sm'>
              Mot du promoteur
            </div>

            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
              Transformer le potentiel{' '}
              <span className='text-yellow-500'>en succès tangible</span>
            </h2>

            <div className='relative pl-6 border-l-2 border-blue-500 italic text-gray-700 dark:text-gray-300 text-lg'>
              <p className='mb-4'>
                "Notre mission est de donner aux jeunes africains les moyens de
                comprendre ce monde en constante évolution et d'y trouver leur
                place. Chez Skillmetoo, nous croyons fermement que chaque jeune
                possède un potentiel extraordinaire qui peut être transformé en
                succès tangible."
              </p>
              <p>
                "Notre approche combine formation technique, mentorat
                personnalisé et mise en réseau. Nous ne formons pas simplement
                des compétences, nous transformons des vies."
              </p>
            </div>

            <div className='pt-4'>
              <h3 className='font-bold text-xl text-gray-900 dark:text-white'>
                Jean-Paul Kamdem
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Fondateur & Président, Skillmetoo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromotorSection
