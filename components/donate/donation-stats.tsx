import { BarChart4, Users, Award, GraduationCap } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '1,500+',
    label: 'Jeunes formés',
    description: 'Grâce aux dons reçus',
  },
  {
    icon: BarChart4,
    value: '78%',
    label: "D'insertion professionnelle",
    description: 'Pour nos bénéficiaires',
  },
  {
    icon: Award,
    value: '94%',
    label: 'De satisfaction',
    description: 'Parmi nos donateurs',
  },
  {
    icon: GraduationCap,
    value: '250+',
    label: 'Bourses accordées',
    description: 'À des jeunes talentueux',
  },
]

const DonationStats = () => {
  return (
    <div className='bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-xl text-white overflow-hidden'>
      <div className='p-6 md:p-8'>
        <h3 className='text-2xl font-bold mb-8 text-center'>
          Notre impact en chiffres
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors'
            >
              <div className='bg-white/20 rounded-full p-3 mb-4'>
                <stat.icon className='h-6 w-6' />
              </div>
              <div className='text-3xl font-bold mb-1'>{stat.value}</div>
              <div className='font-medium mb-1'>{stat.label}</div>
              <div className='text-sm text-blue-100'>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DonationStats
