import Image from 'next/image'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Marie Koffi',
    role: 'Donatrice régulière depuis 2023',
    quote:
      'Contribuer à Skillmetoo est ma façon de participer au développement de la jeunesse africaine. Voir les résultats concrets et les témoignages des bénéficiaires me donne la certitude que mon don fait vraiment la différence.',
    image: '/images/testimonials/donor-1.jpg',
  },
  {
    id: 2,
    name: 'Olivier Dieng',
    role: 'Entrepreneur et donateur',
    quote:
      "En tant qu'entrepreneur africain qui a réussi, je considère qu'il est de mon devoir de soutenir la prochaine génération. Les formations offertes par Skillmetoo sont exactement ce dont nos jeunes ont besoin pour s'intégrer au marché mondial.",
    image: '/images/testimonials/donor-2.jpg',
  },
  {
    id: 3,
    name: 'Société TechInnovate',
    role: 'Partenaire financier depuis 2024',
    quote:
      'Notre entreprise soutient Skillmetoo car nous croyons en leur approche pratique de la formation. Nous avons déjà recruté plusieurs de leurs diplômés, et leur niveau de compétence témoigne de la qualité des programmes financés par les dons.',
    image: '/images/testimonials/donor-3.jpg',
  },
]

const DonationTestimonials = () => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden'>
      <div className='p-6 md:p-8'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center'>
          <Quote className='h-5 w-5 mr-2 text-blue-600 dark:text-blue-400' />
          Témoignages de donateurs
        </h3>

        <div className='space-y-6'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='bg-gray-50 dark:bg-gray-700 rounded-xl p-4 md:p-6'
            >
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 relative h-12 w-12 rounded-full overflow-hidden'>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h4 className='text-lg font-semibold mb-1 text-gray-900 dark:text-white'>
                    {testimonial.name}
                  </h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-3'>
                    {testimonial.role}
                  </p>
                  <p className='text-gray-600 dark:text-gray-300 italic'>
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DonationTestimonials
