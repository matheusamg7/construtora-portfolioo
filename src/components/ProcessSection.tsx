'use client'

import { motion } from 'framer-motion'
import { 
  DocumentTextIcon,
  CalendarIcon,
  WrenchIcon,
  BuildingOfficeIcon,
  KeyIcon 
} from '@heroicons/react/24/outline'

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      icon: DocumentTextIcon,
      title: 'Projeto',
      description: 'Personalização total',
      details: 'Desenvolvemos o projeto dos seus sonhos com total personalização',
    },
    {
      id: 2,
      icon: CalendarIcon,
      title: 'Planejamento',
      description: 'Cronograma detalhado',
      details: 'Cronograma preciso com todas as etapas e prazos definidos',
    },
    {
      id: 3,
      icon: WrenchIcon,
      title: 'Fundação',
      description: 'Base sólida certificada',
      details: 'Fundação executada com rigor técnico e certificação de qualidade',
    },
    {
      id: 4,
      icon: BuildingOfficeIcon,
      title: 'Construção',
      description: 'Acompanhamento diário',
      details: 'Execução com equipe própria e acompanhamento em tempo real',
    },
    {
      id: 5,
      icon: KeyIcon,
      title: 'Entrega',
      description: 'Garantia de 5 anos',
      details: 'Entrega das chaves com garantia estendida e assistência pós-obra',
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1B4B73] mb-4">
            Nosso Processo Transparente
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acompanhe cada etapa da construção do seu sonho com total transparência
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2" />
          
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center relative"
              >
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 relative z-10 border-4 border-[#1B4B73]">
                  <step.icon size={32} className="text-[#1B4B73]" />
                </div>
                
                <div className="text-center max-w-[200px]">
                  <h3 className="text-lg font-montserrat font-bold text-gray-800 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#1B4B73] font-semibold mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-gray-600">
                    {step.details}
                  </p>
                </div>

                {/* Step Number */}
                <div className="absolute -top-8 text-3xl font-bold text-[#C8A882] opacity-50">
                  0{step.id}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-[#1B4B73]">
                  <step.icon size={24} className="text-[#1B4B73]" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-20 bg-gray-300 mt-2" />
                )}
              </div>
              
              <div className="flex-1 pb-8">
                <div className="text-2xl font-bold text-[#C8A882] opacity-50 mb-2">
                  0{step.id}
                </div>
                <h3 className="text-lg font-montserrat font-bold text-gray-800 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-[#1B4B73] font-semibold mb-2">
                  {step.description}
                </p>
                <p className="text-sm text-gray-600">
                  {step.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection