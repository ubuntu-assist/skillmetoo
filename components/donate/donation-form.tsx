'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { CreditCard, DollarSign, Calendar, Lock } from 'lucide-react'

type DonationType = 'one-time' | 'monthly'
type DonationAmount = 10 | 25 | 50 | 100 | 'custom'

interface DonationFormProps {
  onSuccess: () => void
}

const DonationForm = ({ onSuccess }: DonationFormProps) => {
  const [donationType, setDonationType] = useState<DonationType>('one-time')
  const [amount, setAmount] = useState<DonationAmount>(25)
  const [customAmount, setCustomAmount] = useState('')
  const [isRecurring, setIsRecurring] = useState(false)
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    name: '',
  })
  const [personalDetails, setPersonalDetails] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAmountClick = (value: DonationAmount) => {
    setAmount(value)
    if (value !== 'custom') {
      setCustomAmount('')
    }
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setAmount('custom')
  }

  const handleDonationTypeChange = (value: DonationType) => {
    setDonationType(value)
    if (value === 'monthly') {
      setIsRecurring(true)
    } else {
      setIsRecurring(false)
    }
  }

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handlePersonalDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setPersonalDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      onSuccess()
    }, 2000)
  }

  const displayAmount = amount === 'custom' ? customAmount : amount

  return (
    <form onSubmit={handleSubmit} className='space-y-8'>
      {/* Donation Type */}
      <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
        <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
          Type de don
        </h3>

        <RadioGroup
          value={donationType}
          onValueChange={handleDonationTypeChange}
          className='flex space-x-4'
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='one-time' id='one-time' />
            <Label htmlFor='one-time' className='cursor-pointer'>
              Don unique
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='monthly' id='monthly' />
            <Label htmlFor='monthly' className='cursor-pointer'>
              Don mensuel
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Donation Amount */}
      <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
        <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
          Montant du don
        </h3>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4'>
          {[10, 25, 50, 100].map((value) => (
            <Button
              key={value}
              type='button'
              variant={amount === value ? 'default' : 'outline'}
              className={`h-14 ${
                amount === value ? 'bg-blue-600 text-white' : ''
              }`}
              onClick={() => handleAmountClick(value as DonationAmount)}
            >
              <DollarSign className='h-5 w-5 mr-1' />
              {value}
            </Button>
          ))}
        </div>

        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <DollarSign className='h-5 w-5 text-gray-400' />
          </div>
          <Input
            type='number'
            placeholder='Autre montant'
            value={customAmount}
            onChange={handleCustomAmountChange}
            className={`pl-10 ${
              amount === 'custom' ? 'border-blue-600 ring-1 ring-blue-600' : ''
            }`}
            min='1'
          />
        </div>

        <div className='mt-4 flex items-center space-x-2'>
          <Switch
            id='recurring'
            checked={isRecurring}
            onCheckedChange={setIsRecurring}
            disabled={donationType === 'monthly'}
          />
          <Label htmlFor='recurring' className='cursor-pointer'>
            Faire un don récurrent mensuel
          </Label>
        </div>
      </div>

      {/* Personal Information */}
      <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
        <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
          Vos informations
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <Label htmlFor='fullName'>Nom complet</Label>
            <Input
              id='fullName'
              name='fullName'
              value={personalDetails.fullName}
              onChange={handlePersonalDetailsChange}
              required
            />
          </div>
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              value={personalDetails.email}
              onChange={handlePersonalDetailsChange}
              required
            />
          </div>
          <div className='md:col-span-2'>
            <Label htmlFor='address'>Adresse</Label>
            <Input
              id='address'
              name='address'
              value={personalDetails.address}
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <div>
            <Label htmlFor='city'>Ville</Label>
            <Input
              id='city'
              name='city'
              value={personalDetails.city}
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <div>
            <Label htmlFor='postalCode'>Code postal</Label>
            <Input
              id='postalCode'
              name='postalCode'
              value={personalDetails.postalCode}
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <div className='md:col-span-2'>
            <Label htmlFor='country'>Pays</Label>
            <Input
              id='country'
              name='country'
              value={personalDetails.country}
              onChange={handlePersonalDetailsChange}
            />
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
        <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
          Informations de paiement
        </h3>

        <div className='space-y-4'>
          <div>
            <Label htmlFor='cardName'>Nom sur la carte</Label>
            <Input
              id='cardName'
              name='name'
              value={cardDetails.name}
              onChange={handleCardDetailsChange}
              required
            />
          </div>
          <div>
            <Label htmlFor='cardNumber'>Numéro de carte</Label>
            <div className='relative'>
              <Input
                id='cardNumber'
                name='cardNumber'
                value={cardDetails.cardNumber}
                onChange={handleCardDetailsChange}
                placeholder='1234 5678 9012 3456'
                required
              />
              <div className='absolute inset-y-0 right-4 flex items-center'>
                <CreditCard className='h-5 w-5 text-gray-400' />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Label htmlFor='cardExpiry'>Date d'expiration</Label>
              <div className='relative'>
                <Input
                  id='cardExpiry'
                  name='expiry'
                  value={cardDetails.expiry}
                  onChange={handleCardDetailsChange}
                  placeholder='MM/YY'
                  required
                />
                <div className='absolute inset-y-0 right-4 flex items-center'>
                  <Calendar className='h-5 w-5 text-gray-400' />
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor='cardCvc'>Code de sécurité (CVC)</Label>
              <div className='relative'>
                <Input
                  id='cardCvc'
                  name='cvc'
                  value={cardDetails.cvc}
                  onChange={handleCardDetailsChange}
                  placeholder='123'
                  required
                />
                <div className='absolute inset-y-0 right-4 flex items-center'>
                  <Lock className='h-5 w-5 text-gray-400' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary & Submit */}
      <div className='bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 shadow-md'>
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
            Résumé
          </h3>
          <div className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
            ${displayAmount} {isRecurring ? '/ mois' : ''}
          </div>
        </div>

        <Button
          type='submit'
          className='w-full h-14 text-lg bg-blue-600 hover:bg-blue-700'
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg
                className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
              Traitement...
            </>
          ) : (
            <>
              Faire un don de ${displayAmount} {isRecurring ? 'par mois' : ''}
            </>
          )}
        </Button>

        <div className='mt-4 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400'>
          <Lock className='h-4 w-4 mr-2' />
          <p>Paiement sécurisé via Stripe</p>
        </div>
      </div>
    </form>
  )
}

export default DonationForm
