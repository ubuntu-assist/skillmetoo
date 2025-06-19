'use client'

import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const faqs = [
  {
    question: 'Qui peut participer aux programmes de Skillmetoo ?',
    answer:
      "Nos programmes sont ouverts à tous les jeunes africains âgés de 18 à 35 ans, passionnés par l'acquisition de nouvelles compétences et désireux de s'intégrer au marché international. Certains programmes peuvent avoir des critères spécifiques, mais notre objectif est de rester aussi inclusifs que possible.",
  },
  {
    question: 'Les formations sont-elles gratuites ?',
    answer:
      "Skillmetoo propose une combinaison de formations gratuites et payantes. Nos ateliers d'initiation et webinaires sont généralement gratuits, tandis que nos programmes intensifs et certifiants peuvent être payants. Cependant, nous offrons des bourses et des options de financement pour les candidats méritants qui rencontrent des difficultés financières.",
  },
  {
    question: 'Comment puis-je devenir mentor chez Skillmetoo ?',
    answer:
      "Pour devenir mentor, vous devez avoir une expertise reconnue dans votre domaine et au moins 5 ans d'expérience professionnelle. Envoyez-nous votre CV et une lettre de motivation à mentors@skillmetoo.org, et notre équipe vous contactera pour discuter des possibilités de collaboration.",
  },
  {
    question: 'Proposez-vous des formations à distance ?',
    answer:
      "Oui, la majorité de nos formations sont disponibles en ligne pour permettre l'accès à un maximum de jeunes africains, quel que soit leur emplacement géographique. Nous proposons également des sessions présentielles dans certaines villes africaines pour les ateliers pratiques et les événements de réseautage.",
  },
  {
    question: 'Comment obtenir un certificat après une formation ?',
    answer:
      "Pour obtenir un certificat, vous devez compléter tous les modules de la formation, réussir l'évaluation finale avec un score minimum de 70%, et soumettre le projet final si applicable. Les certificats sont délivrés sous format numérique et peuvent être partagés directement sur votre profil LinkedIn.",
  },
  {
    question: 'Skillmetoo aide-t-il à trouver un emploi après la formation ?',
    answer:
      "Oui, nous proposons un accompagnement à l'insertion professionnelle à travers notre réseau de partenaires et employeurs. Cela inclut des ateliers de préparation aux entretiens, l'optimisation de CV, et des événements de mise en relation avec des recruteurs. Notre taux de placement est actuellement de 68% dans les six mois suivant la fin d'une formation.",
  },
]

const FaqSection = () => {
  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            Questions{' '}
            <span className='text-blue-600 dark:text-blue-400'>fréquentes</span>
          </h2>
          <p className='text-gray-600 dark:text-gray-400 text-lg'>
            Vous avez des questions sur nos programmes ? Consultez notre FAQ
            pour trouver rapidement des réponses.
          </p>
        </div>

        <div className='max-w-3xl mx-auto'>
          <Accordion type='single' collapsible className='space-y-4'>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden'
              >
                <AccordionTrigger className='px-6 py-4 text-left font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:no-underline'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4 text-gray-600 dark:text-gray-300'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {/* 
          <div className='mt-8 text-center'>
            <Link href='/faq'>
              <Button
                variant='ghost'
                className='text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
              >
                Voir toutes les questions
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
