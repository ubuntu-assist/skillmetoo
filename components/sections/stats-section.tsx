'use client'

import { useState, useEffect, useRef } from 'react'
import { Users, Award, Calendar, Globe } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 1500,
    label: 'Jeunes formés',
    suffix: '+',
    color: 'blue',
  },
  {
    icon: Award,
    value: 50,
    label: 'Prix et distinctions',
    suffix: '',
    color: 'orange',
  },
  {
    icon: Calendar,
    value: 120,
    label: 'Événements réalisés',
    suffix: '+',
    color: 'indigo',
  },
  {
    icon: Globe,
    value: 15,
    label: 'Pays touchés',
    suffix: '+',
    color: 'emerald',
  },
]

const StatsSection = () => {
  return (
    <section className='py-20 bg-gradient-to-br from-blue-800 to-blue-600 text-white'>
      <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Notre <span className='text-yellow-400'>impact</span>
          </h2>
          <p className='text-blue-100 text-lg'>
            Depuis notre création, nous avons accompagné des milliers de jeunes
            africains dans leur parcours de développement.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const StatCard = ({
  icon: Icon,
  value,
  label,
  suffix,
  color,
}: {
  icon: any
  value: number
  label: string
  suffix: string
  color: string
}) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!inView) return

    let start = 0
    const end = value
    const duration = 2000 // 2 seconds
    const increment = end / (duration / 16) // 60 FPS

    const timer = setInterval(() => {
      start += increment
      if (start > end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => {
      clearInterval(timer)
    }
  }, [inView, value])

  const getIconColor = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500'
      case 'orange':
        return 'bg-yellow-500'
      case 'indigo':
        return 'bg-indigo-500'
      case 'emerald':
        return 'bg-emerald-500'
      default:
        return 'bg-blue-500'
    }
  }

  return (
    <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300'>
      <div className='flex justify-center mb-6'>
        <div
          className={`${getIconColor()} rounded-full p-3 w-16 h-16 flex items-center justify-center`}
        >
          <Icon className='h-8 w-8 text-white' />
        </div>
      </div>
      <div ref={counterRef} className='text-4xl md:text-5xl font-bold mb-2'>
        {count}
        {suffix}
      </div>
      <div className='text-blue-100'>{label}</div>
    </div>
  )
}

export default StatsSection
