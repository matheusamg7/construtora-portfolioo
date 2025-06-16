'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Home, Clock, Award, Shield } from 'lucide-react'

interface CounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '', prefix = '', duration = 2 }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = (currentTime - startTime) / (duration * 1000)

        if (progress < 1) {
          setCount(Math.floor(end * progress))
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [inView, end, duration])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-[#1B4B73]">
      {prefix}{count}{suffix}
    </div>
  )
}

const NumbersSection = () => {
  const stats = [
    {
      icon: Home,
      value: 50,
      suffix: '+',
      label: 'Obras Entregues',
      description: 'Residências de alto padrão',
    },
    {
      icon: Clock,
      value: 15,
      suffix: ' anos',
      label: 'No Mercado',
      description: 'Experiência consolidada',
    },
    {
      icon: Award,
      value: 98,
      suffix: '%',
      label: 'Satisfação dos Clientes',
      description: 'Avaliações positivas',
    },
    {
      icon: Shield,
      value: 0,
      prefix: '',
      suffix: '',
      label: 'Zero Acidentes',
      description: 'Nos últimos 5 anos',
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1B4B73] mb-4">
            Por que escolher a Alicerce?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Números que comprovam nossa excelência e compromisso com cada projeto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <stat.icon size={32} className="text-[#1B4B73]" />
                </div>
              </div>
              
              <div className="text-center">
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix}
                />
                <h3 className="text-xl font-montserrat font-semibold text-gray-800 mt-2 mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NumbersSection