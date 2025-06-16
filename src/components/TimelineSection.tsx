'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  SwatchIcon,
  ClipboardDocumentListIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import Button from './Button'

// Progress Bar Component
const ProgressBar = ({ percentage, isInView, index }: { percentage: number; isInView: boolean; index: number }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentPercentage(prev => {
            if (prev >= percentage) {
              clearInterval(interval)
              return percentage
            }
            return prev + 1
          })
        }, 20)
      }, index * 200)

      return () => clearTimeout(timer)
    } else {
      setCurrentPercentage(0)
    }
  }, [isInView, percentage, index])

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-500">Progresso da obra</span>
        <motion.span 
          className="text-lg font-bold text-[#C5A572]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
        >
          {currentPercentage}%
        </motion.span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#C5A572] rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: isInView ? `${currentPercentage}%` : '0%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

const TimelineSection = () => {

  const steps = [
    {
      id: 1,
      number: '01',
      icon: SwatchIcon,
      title: 'Projeto Personalizado',
      description: 'Desenvolvemos seu projeto arquitetônico sob medida, com plantas detalhadas, fachada moderna e todos os projetos complementares aprovados.',
      timeframe: '7-15 dias',
      percentage: 20,
      details: [
        'Projeto arquitetônico completo',
        'Projetos estrutural e complementares',
        'Aprovações legais',
        'Orçamento detalhado'
      ]
    },
    {
      id: 2,
      number: '02',
      icon: ClipboardDocumentListIcon,
      title: 'Planejamento Estratégico',
      description: 'Elaboramos cronograma executivo detalhado, definindo prazos, materiais certificados e equipe técnica especializada.',
      timeframe: '2-3 semanas',
      percentage: 35,
      details: [
        'Cronograma executivo',
        'Seleção de materiais premium',
        'Definição da equipe técnica',
        'Logística da obra'
      ]
    },
    {
      id: 3,
      number: '03',
      icon: BuildingOfficeIcon,
      title: 'Fundação & Estrutura',
      description: 'Executamos fundação e estrutura de concreto armado com tecnologia de ponta, garantindo solidez e durabilidade para seu empreendimento.',
      timeframe: '3-4 meses',
      percentage: 50,
      details: [
        'Fundação profunda certificada',
        'Estrutura de concreto armado',
        'Lajes e pilares dimensionados',
        'Controle tecnológico do concreto'
      ]
    },
    {
      id: 4,
      number: '04',
      icon: WrenchScrewdriverIcon,
      title: 'Instalações & Vedações',
      description: 'Realizamos todas as instalações prediais e vedações com equipe especializada, utilizando materiais certificados e tecnologia BIM para precisão absoluta.',
      timeframe: '4-6 meses',
      percentage: 75,
      details: [
        'Instalações elétricas completas',
        'Sistema hidráulico certificado',
        'Alvenaria de alta qualidade',
        'Isolamento térmico e acústico'
      ]
    },
    {
      id: 5,
      number: '05',
      icon: CheckCircleIcon,
      title: 'Acabamentos & Entrega',
      description: 'Finalizamos com acabamentos premium e entregamos seu imóvel pronto para morar, com vistoria detalhada e garantia estendida de 5 anos.',
      timeframe: '2-3 meses',
      percentage: 100,
      details: [
        'Revestimentos de alto padrão',
        'Pintura e acabamentos finos',
        'Vistoria técnica completa',
        'Garantia e manual do proprietário'
      ]
    }
  ]

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: false, margin: '-100px' })

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1B4B73] mb-4">
            Perfeição em cada etapa da obra
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acompanhe nosso processo rigoroso, do projeto à entrega
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2" />

          {/* Steps */}
          {steps.map((step, index) => {
            const stepRef = useRef(null)
            const stepInView = useInView(stepRef, { once: false, margin: '-100px' })
            
            return (
              <motion.div
                ref={stepRef}
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={stepInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center mb-12 lg:mb-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
              {/* Card */}
              <div className={`w-full lg:w-5/12 ${
                index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'
              }`}>
                <motion.div 
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 group"
                  whileHover={{ y: -5 }}
                >
                  {/* Number Badge */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1B4B73] text-white font-bold mb-4 ${
                    index % 2 === 0 ? 'lg:ml-auto' : ''
                  }`}>
                    {step.number}
                  </div>

                  <h3 className="text-xl font-montserrat font-bold text-[#1B4B73] mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Time badge */}
                  <div className={`inline-flex items-center gap-2 mb-3 ${
                    index % 2 === 0 ? 'lg:ml-auto' : ''
                  }`}>
                    <div className="bg-[#C5A572]/10 text-[#C5A572] px-3 py-1 rounded-full text-sm font-medium">
                      ⏱️ {step.timeframe}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>

                  {/* Progress Bar */}
                  <ProgressBar percentage={step.percentage} isInView={stepInView} index={index} />

                  {/* Details */}
                  <ul className={`space-y-1 text-sm text-gray-500 ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}>
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        {index % 2 === 0 && <span className="hidden lg:block ml-auto">•</span>}
                        <span>{detail}</span>
                        {index % 2 !== 0 && <span className="hidden lg:block">•</span>}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Icon Circle - Desktop */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 items-center justify-center">
                <div
                  className="w-full h-full rounded-full bg-[#1B4B73] flex items-center justify-center shadow-lg"
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Mobile Icon */}
              <div className="lg:hidden absolute -left-4 top-6 w-12 h-12 rounded-full bg-[#1B4B73] flex items-center justify-center shadow-lg">
                <step.icon className="w-5 h-5 text-white" />
              </div>

              {/* Connector Line - Mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden absolute left-2 top-20 bottom-0 w-0.5 bg-gray-300" />
              )}
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default TimelineSection