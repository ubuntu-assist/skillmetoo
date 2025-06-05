interface DonationHeaderProps {
  title: string
  subtitle: string
}

const DonationHeader = ({ title, subtitle }: DonationHeaderProps) => {
  return (
    <div className='relative overflow-hidden rounded-xl shadow-xl mb-8'>
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80'></div>
      </div>

      <div className='relative z-10 p-8 md:p-12'>
        <div className='max-w-3xl'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
            {title}
          </h2>
          <p className='text-xl text-blue-100'>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default DonationHeader
