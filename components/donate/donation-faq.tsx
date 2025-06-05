import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqItems = [
  {
    question: 'Comment mon don sera-t-il utilisé ?',
    answer:
      "Vos dons sont directement utilisés pour financer nos programmes de formation, offrir des bourses d'études aux jeunes talents, fournir du matériel pédagogique, améliorer nos infrastructures d'apprentissage et soutenir nos programmes de mentorat. Nous nous engageons à une transparence totale sur l'utilisation des fonds.",
  },
  {
    question: "Puis-je faire un don depuis n'importe quel pays ?",
    answer:
      'Oui, nous acceptons les dons internationaux. Notre plateforme de paiement sécurisée permet de traiter des transactions depuis pratiquement tous les pays du monde et gère automatiquement les conversions de devises.',
  },
  {
    question: 'Mon don est-il déductible des impôts ?',
    answer:
      "Cela dépend de votre pays de résidence. Skillmetoo est une association à but non lucratif reconnue, ce qui permet dans de nombreux pays de bénéficier d'avantages fiscaux. Nous vous fournirons un reçu que vous pourrez présenter à votre administration fiscale. Nous vous recommandons de consulter un conseiller fiscal pour connaître précisément les avantages dont vous pouvez bénéficier.",
  },
  {
    question: 'Comment puis-je annuler ou modifier mon don mensuel ?',
    answer:
      'Vous pouvez annuler ou modifier votre don mensuel à tout moment en vous connectant à votre compte donateur sur notre site web ou en nous contactant directement par email à donateurs@skillmetoo.org. Nous traiterons votre demande dans les plus brefs délais.',
  },
  {
    question: 'Comment puis-je savoir quel impact a mon don ?',
    answer:
      "Nous envoyons à tous nos donateurs des rapports trimestriels détaillant l'impact des fonds collectés et les projets réalisés. De plus, vous pouvez suivre nos activités et les témoignages des bénéficiaires sur notre site web et nos réseaux sociaux. Pour les dons importants, nous proposons également des rapports personnalisés.",
  },
  {
    question: 'Puis-je faire un don anonyme ?',
    answer:
      "Absolument. Lors de votre don, vous pouvez choisir l'option 'Don anonyme'. Nous respecterons votre choix et votre nom n'apparaîtra pas dans nos communications publiques. Toutefois, pour des raisons légales et de transparence, nous devons conserver vos informations dans nos registres internes.",
  },
  {
    question: "Est-il possible de faire un don en l'honneur de quelqu'un ?",
    answer:
      "Oui, vous pouvez faire un don à la mémoire d'un être cher ou en l'honneur d'une personne spéciale. Il vous suffit de sélectionner cette option lors de votre don et de nous fournir les informations nécessaires. Nous pouvons envoyer une notification à la personne honorée ou à sa famille si vous le souhaitez.",
  },
]

const DonationFAQ = () => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden'>
      <div className='p-6 md:p-8'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white'>
          Questions fréquentes
        </h3>

        <Accordion type='single' collapsible className='space-y-4'>
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className='border border-gray-100 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm'
            >
              <AccordionTrigger className='px-4 py-3 hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-700'>
                <span className='text-left font-medium text-gray-900 dark:text-white'>
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className='px-4 pb-4 pt-2 text-gray-600 dark:text-gray-300'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default DonationFAQ
