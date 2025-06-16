'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import MinimalHeader from '@/components/MinimalHeader'
import MainLayout from '@/components/MainLayout'
import Footer from '@/components/Footer'
import { 
  CalendarDaysIcon,
  HomeModernIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  StarIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  HeartIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

// Counter Component
const AnimatedCounter = ({ end, suffix = '', prefix = '', duration = 2000, isInView }: { 
  end: number; 
  suffix?: string; 
  prefix?: string; 
  duration?: number;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const currentCount = Math.floor(progress * end)
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration, isInView])

  return <span>{prefix}{count}{suffix}</span>
}

export default function SobrePage() {
  const stats = [
    { number: 50, suffix: '+', label: 'Obras entregues', icon: BuildingOfficeIcon },
    { number: 80, prefix: 'R$ ', suffix: 'mi', label: 'Em vendas', icon: StarIcon },
    { number: 15, label: 'Anos de mercado', icon: CalendarDaysIcon },
    { number: 98, suffix: '%', label: 'Satisfação', icon: HeartIcon }
  ]

  const milestones = [
    { year: '2009', title: 'O início do sonho', description: 'Carlos e Ana Machado fundam a Alicerce' },
    { year: '2014', title: 'Expansão', description: 'Primeira obra de grande porte entregue' },
    { year: '2019', title: '10 anos', description: 'Marco de 30 obras entregues' },
    { year: '2024', title: 'Referência', description: 'Líder em qualidade na região' }
  ]

  return (
    <>
      <MinimalHeader />
      <MainLayout>
        <div className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B4B73' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-[#1B4B73] mb-6">
                  Nossa História
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Construindo sonhos desde 2009
                </p>
              </motion.div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
                        alt="Construtora Alicerce - Início"
                        className="rounded-2xl shadow-xl"
                      />
                      <div className="absolute -bottom-6 -right-6 bg-[#1B4B73] text-white p-6 rounded-2xl shadow-xl">
                        <p className="text-3xl font-bold">2009</p>
                        <p className="text-sm">Ano de fundação</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-montserrat font-bold text-[#1B4B73] mb-6">
                      Uma empresa familiar com visão profissional
                    </h2>
                    <p className="text-gray-600 mb-4">
                      A Construtora Alicerce nasceu em 2009 da união de duas paixões: a engenharia de Carlos Machado e a arquitetura de Ana Machado. Formados pela Universidade de Passo Fundo, o casal decidiu unir seus conhecimentos para criar uma construtora que fosse além de apenas edificar prédios - queriam construir lares e realizar sonhos.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Carlos, com sua experiência em estruturas e gestão de obras, e Ana, com seu olhar apurado para design e funcionalidade, complementavam-se perfeitamente. Começaram pequenos, com uma casa no bairro Jardim América, mas sempre com o compromisso de entregar qualidade superior e relacionamento próximo com cada cliente.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#C5A572]/20 rounded-full flex items-center justify-center">
                        <AcademicCapIcon className="w-8 h-8 text-[#C5A572]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1B4B73]">Fundadores</p>
                        <p className="text-sm text-gray-600">Carlos e Ana Machado</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  className="mb-20"
                >
                  <h3 className="text-2xl font-montserrat font-bold text-[#1B4B73] text-center mb-12">
                    Nossa Trajetória
                  </h3>
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2 hidden md:block" />
                    <div className="space-y-12">
                      {milestones.map((milestone, index) => (
                        <motion.div
                          key={milestone.year}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: index * 0.1 }}
                          className={`flex items-center gap-8 ${
                            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                          }`}
                        >
                          <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                            <div className={`bg-white p-6 rounded-xl shadow-lg ${
                              index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                            } max-w-md`}>
                              <span className="text-[#C5A572] font-bold text-xl">{milestone.year}</span>
                              <h4 className="font-semibold text-[#1B4B73] mt-2">{milestone.title}</h4>
                              <p className="text-gray-600 text-sm mt-1">{milestone.description}</p>
                            </div>
                          </div>
                          <div className="hidden md:flex w-12 h-12 bg-[#1B4B73] rounded-full items-center justify-center text-white font-bold relative z-10">
                            {index + 1}
                          </div>
                          <div className="flex-1" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  className="bg-gradient-to-r from-[#1B4B73] to-[#2563EB] rounded-3xl p-12 text-white mb-20"
                >
                  <h3 className="text-2xl font-montserrat font-bold text-center mb-12">
                    Números que inspiram confiança
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                      const ref = useRef(null)
                      const isInView = useInView(ref, { once: false })
                      
                      return (
                        <motion.div
                          ref={ref}
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: index * 0.1 }}
                          className="text-center"
                        >
                          <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#C5A572]" />
                          <p className="text-4xl font-bold mb-2">
                            <AnimatedCounter 
                              end={stat.number} 
                              prefix={stat.prefix} 
                              suffix={stat.suffix}
                              isInView={isInView}
                            />
                          </p>
                          <p className="text-sm text-white/80">{stat.label}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>

                {/* Values Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-montserrat font-bold text-[#1B4B73] mb-6">
                      Crescimento sólido e sustentável
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Ao longo dos 15 anos, a Alicerce cresceu de forma orgânica e responsável. Nossa equipe de 25 colaboradores foi cuidadosamente selecionada e treinada, mantendo sempre o espírito familiar que nos caracteriza.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-[#C5A572] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-[#1B4B73]">Equipe própria</p>
                          <p className="text-sm text-gray-600">Não terceirizamos etapas críticas</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-[#C5A572] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-[#1B4B73]">Qualidade garantida</p>
                          <p className="text-sm text-gray-600">5 anos de garantia em todas as obras</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-[#C5A572] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-[#1B4B73]">Zero acidentes</p>
                          <p className="text-sm text-gray-600">Nos últimos 5 anos de operação</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                      alt="Equipe Alicerce"
                      className="rounded-2xl shadow-xl"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                      <UserGroupIcon className="w-8 h-8 text-[#1B4B73] mb-2" />
                      <p className="text-2xl font-bold text-[#1B4B73]">25</p>
                      <p className="text-sm text-gray-600">Colaboradores</p>
                    </div>
                  </motion.div>
                </div>

                {/* Specialty Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  className="text-center mb-20"
                >
                  <h2 className="text-3xl font-montserrat font-bold text-[#1B4B73] mb-6">
                    Nossa Especialidade
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                    Focamos em empreendimentos residenciais de médio e alto padrão em Passo Fundo e região. Cada projeto é pensado para valorizar o investimento dos nossos clientes, combinando localização estratégica, acabamentos premium e infraestrutura completa.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <HomeModernIcon className="w-12 h-12 text-[#C5A572] mx-auto mb-4" />
                      <h4 className="font-semibold text-[#1B4B73] mb-2">Residencial</h4>
                      <p className="text-sm text-gray-600">Apartamentos de 2 a 4 suítes</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <MapPinIcon className="w-12 h-12 text-[#C5A572] mx-auto mb-4" />
                      <h4 className="font-semibold text-[#1B4B73] mb-2">Localização</h4>
                      <p className="text-sm text-gray-600">Bairros nobres de Passo Fundo</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <ShieldCheckIcon className="w-12 h-12 text-[#C5A572] mx-auto mb-4" />
                      <h4 className="font-semibold text-[#1B4B73] mb-2">Garantia</h4>
                      <p className="text-sm text-gray-600">5 anos de cobertura total</p>
                    </div>
                  </div>
                </motion.div>

                {/* Founders Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 text-center"
                >
                  <h2 className="text-3xl font-montserrat font-bold text-[#1B4B73] mb-6">
                    Compromisso com o futuro
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                    Hoje, Carlos e Ana continuam à frente da empresa, mantendo os valores familiares que sempre nos guiaram: transparência, qualidade e compromisso. Nossa garantia estendida de 5 anos não é apenas uma promessa técnica, mas um reflexo da confiança que temos no nosso trabalho.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                    <div>
                      <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                          alt="Carlos Machado"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-[#1B4B73]">Carlos Machado</h4>
                      <p className="text-sm text-gray-600">Engenheiro Civil, CREA/RS</p>
                    </div>
                    <div>
                      <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                          alt="Ana Machado"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-[#1B4B73]">Ana Machado</h4>
                      <p className="text-sm text-gray-600">Arquiteta e Urbanista, CAU/RS</p>
                    </div>
                  </div>
                  <div className="mt-12 p-8 bg-[#1B4B73] rounded-2xl text-white">
                    <p className="text-2xl font-montserrat font-bold mb-4">
                      Alicerce: onde sonhos ganham endereço
                    </p>
                    <p className="text-white/90 max-w-2xl mx-auto">
                      Cada empreendimento da Alicerce carrega nossa história de dedicação e excelência. Não construímos apenas apartamentos - construímos o futuro das famílias que confiam em nós. E essa é a nossa maior conquista.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </MainLayout>
    </>
  )
}