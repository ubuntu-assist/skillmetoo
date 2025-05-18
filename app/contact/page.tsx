'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from '@tabler/icons-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'
import { MapPin, Phone, Mail, Clock, Check, Loader2 } from 'lucide-react'

// Sample FAQ data
const faqs = [
  {
    question: "Comment puis-je m'inscrire à un programme de formation ?",
    answer:
      "Pour vous inscrire à l'un de nos programmes, vous pouvez utiliser le formulaire de contact sur cette page ou vous rendre directement sur la page du programme qui vous intéresse et cliquer sur le bouton d'inscription. Vous recevrez ensuite un email de confirmation avec les étapes suivantes.",
  },
  {
    question: 'Les formations sont-elles disponibles en ligne ?',
    answer:
      "Oui, la plupart de nos formations sont disponibles en format hybride (présentiel et en ligne) ou 100% en ligne, ce qui vous permet de suivre les cours depuis n'importe où. Nous utilisons des plateformes d'apprentissage interactives pour assurer une expérience pédagogique optimale.",
  },
  {
    question: 'Comment puis-je bénéficier du programme de mentorat ?',
    answer:
      "Pour rejoindre notre programme de mentorat, vous devez d'abord remplir un formulaire de candidature disponible sur notre site. Après évaluation de votre profil et de vos objectifs, nous vous mettrons en relation avec un mentor dont l'expertise correspond à vos besoins.",
  },
  {
    question: 'Proposez-vous des bourses ou des options de financement ?',
    answer:
      "Oui, nous proposons des bourses partielles pour les candidats talentueux qui rencontrent des difficultés financières. Nous offrons également des options de paiement échelonné pour certains programmes. Contactez-nous pour discuter des possibilités qui s'offrent à vous.",
  },
  {
    question: 'Comment puis-je devenir partenaire de Skillmetoo ?',
    answer:
      'Nous sommes toujours à la recherche de partenaires partageant notre vision. Si vous êtes une entreprise, une institution éducative ou une organisation qui souhaite collaborer avec nous, veuillez nous contacter via le formulaire dédié aux partenariats sur cette page ou envoyez-nous un email à partenariats@skillmetoo.org.',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    reason: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      reason: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Form validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message ||
      !formData.reason
    ) {
      toast('Veuillez remplir tous les champs obligatoires.')
      return
    }

    // Simulate form submission
    setIsSubmitting(true)

    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      toast('Nous vous répondrons dans les plus brefs délais.')

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          reason: '',
        })
        setIsSuccess(false)
      }, 2000)
    }, 1500)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className='py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* Text Side */}
            <div className='space-y-6'>
              <h1 className='text-4xl md:text-5xl font-bold'>
                Connectez avec Skillmetoo
              </h1>
              <p className='text-xl text-blue-100'>
                Posez vos questions, explorez nos programmes, ou proposez un
                partenariat. Notre équipe est là pour vous accompagner.
              </p>
              <div>
                <Button
                  asChild
                  className='bg-white text-blue-700 hover:bg-blue-50 h-12 px-8 text-base'
                >
                  <Link href='#contact-form'>Envoyez un Message</Link>
                </Button>
              </div>
            </div>
            {/* Image Side */}
            <div className='relative'>
              <div className='relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl'>
                <Image
                  src='/images/community.webp'
                  alt='Skillmetoo Community'
                  fill
                  className='object-cover transition-transform duration-300 hover:scale-105'
                />
                <div className='absolute inset-0 bg-black/20' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section id='contact-form' className='py-16 bg-white dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div>
              <h2 className='text-3xl font-bold mb-6 text-gray-900 dark:text-white'>
                Informations de contact
              </h2>
              <p className='text-gray-600 dark:text-gray-300 mb-8'>
                N'hésitez pas à nous contacter pour toute question ou demande
                d'information. Notre équipe est disponible pour vous répondre
                dans les plus brefs délais.
              </p>

              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                    <MapPin className='h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      Adresse
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300'>
                      123 Rue Principale
                      <br />
                      Bamenda, Cameroun
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                    <Phone className='h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      Téléphone
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300'>
                      +237 123 456 789
                      <br />
                      +237 987 654 321
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                    <Mail className='h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      Email
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300'>
                      contact@skillmetoo.org
                      <br />
                      info@skillmetoo.org
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4'>
                    <Clock className='h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-1'>
                      Heures d'ouverture
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300'>
                      Lundi - Vendredi: 8h - 18h
                      <br />
                      Samedi: 9h - 13h
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className='mt-8'>
                <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-4'>
                  Suivez-nous
                </h3>
                <div className='flex space-x-4'>
                  <a
                    href='https://facebook.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors'
                  >
                    <IconBrandFacebook className='h-5 w-5' />
                  </a>
                  <a
                    href='https://twitter.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors'
                  >
                    <IconBrandX className='h-5 w-5' />
                  </a>
                  <a
                    href='https://instagram.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors'
                  >
                    <IconBrandInstagram className='h-5 w-5' />
                  </a>
                  <a
                    href='https://linkedin.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors'
                  >
                    <IconBrandLinkedin className='h-5 w-5' />
                  </a>
                  <a
                    href='https://youtube.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors'
                  >
                    <IconBrandYoutube className='h-5 w-5' />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8'>
                <h2 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white'>
                  Envoyez-nous un message
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                    <div>
                      <label
                        htmlFor='firstName'
                        className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                      >
                        Prénom *
                      </label>
                      <Input
                        id='firstName'
                        name='firstName'
                        type='text'
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className='w-full'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='lastName'
                        className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                      >
                        Nom *
                      </label>
                      <Input
                        id='lastName'
                        name='lastName'
                        type='text'
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className='w-full'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                      >
                        Email *
                      </label>
                      <Input
                        id='email'
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                      >
                        Téléphone
                      </label>
                      <Input
                        id='phone'
                        name='phone'
                        type='tel'
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full'
                      />
                    </div>
                  </div>

                  <div className='mb-6'>
                    <label
                      htmlFor='reason'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                    >
                      Raison du contact *
                    </label>
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.reason}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Sélectionnez une raison' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='information'>
                          Demande d'information
                        </SelectItem>
                        <SelectItem value='inscription'>
                          Inscription à une formation
                        </SelectItem>
                        <SelectItem value='partenariat'>
                          Proposition de partenariat
                        </SelectItem>
                        <SelectItem value='mentorat'>
                          Programme de mentorat
                        </SelectItem>
                        <SelectItem value='presse'>Contact presse</SelectItem>
                        <SelectItem value='autre'>Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className='mb-6'>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                    >
                      Sujet
                    </label>
                    <Input
                      id='subject'
                      name='subject'
                      type='text'
                      value={formData.subject}
                      onChange={handleChange}
                      className='w-full'
                    />
                  </div>

                  <div className='mb-6'>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                    >
                      Message *
                    </label>
                    <Textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className='w-full min-h-[150px]'
                    />
                  </div>

                  <Button
                    type='submit'
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white'
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                        Envoi en cours...
                      </>
                    ) : isSuccess ? (
                      <>
                        <Check className='mr-2 h-4 w-4' />
                        Message envoyé !
                      </>
                    ) : (
                      'Envoyer le message'
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-16 bg-gray-50 dark:bg-gray-900'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <h2 className='text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white'>
            Notre emplacement
          </h2>

          <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden'>
            <div className='relative w-full h-[400px]'>
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
      </section>

      {/* FAQ Section */}
      <section className='py-16 bg-white dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white'>
              Questions fréquemment posées
            </h2>

            <div className='space-y-6'>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className='bg-gray-50 dark:bg-gray-800 rounded-xl p-6'
                >
                  <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
                    {faq.question}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className='mt-8 text-center'>
              <p className='text-gray-600 dark:text-gray-300 mb-4'>
                Vous n'avez pas trouvé de réponse à votre question ?
              </p>
              <Link href='/faq'>
                <Button
                  variant='outline'
                  className='border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950'
                >
                  Voir toutes les FAQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Prêt à commencer votre transformation ?
            </h2>
            <p className='text-xl text-blue-100 mb-8'>
              Rejoignez Skillmetoo aujourd'hui et faites partie d'une communauté
              dédiée au développement des compétences et à la réussite
              professionnelle.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Button className='bg-white text-blue-700 hover:bg-blue-50 h-12 px-8 text-base'>
                Rejoindre Skillmetoo
              </Button>
              <Button
                variant='outline'
                className='border-white text-black hover:bg-white/10 h-12 px-8 text-base'
              >
                Nos programmes
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
