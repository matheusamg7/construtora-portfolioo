'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Calculator, X, ChevronDown, ChevronUp, Star, Check, Clock } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Cleave from 'cleave.js/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const EnhancedFinancingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [formData, setFormData] = useState({
    propertyValue: '',
    downPayment: '',
    financingYears: '30',
    monthlyIncome: ''
  })
  const [result, setResult] = useState({
    monthlyPayment: 0,
    totalAmount: 0,
    totalInterest: 0
  })

  // Ref para animação de contagem
  const { ref: metricsRef, inView: metricsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })


  const calculateFinancing = () => {
    const value = parseFloat(formData.propertyValue) || 0
    const down = parseFloat(formData.downPayment) || 0
    const years = parseInt(formData.financingYears) || 30
    
    const financedAmount = value - down
    const monthlyRate = 0.0099
    const months = years * 12
    
    const monthlyPayment = financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    const totalAmount = monthlyPayment * months
    const totalInterest = totalAmount - financedAmount
    
    setResult({
      monthlyPayment: monthlyPayment || 0,
      totalAmount: totalAmount || 0,
      totalInterest: totalInterest || 0
    })
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const mcmvBenefits = [
    { title: 'Subsídio Governo', value: 'Até R$ 55.000', description: 'Desconto direto no valor do imóvel' },
    { title: 'Use seu FGTS', value: '100% Entrada', description: 'Como entrada ou amortização' },
    { title: 'Juros Reduzidos', value: 'A partir de 4% a.a.', description: 'As menores taxas do mercado' },
    { title: 'Renda Mínima', value: 'R$ 2.000', description: 'Acesso facilitado ao crédito' }
  ]

  const bankLogos = [
    { name: 'Caixa', logo: '/bank-logos/caixa.png' },
    { name: 'Banco do Brasil', logo: '/bank-logos/bb.png' },
    { name: 'Bradesco', logo: '/bank-logos/bradesco.png' },
    { name: 'Itaú', logo: '/bank-logos/itau.png' },
    { name: 'Santander', logo: '/bank-logos/santander.png' }
  ]

  const faqItems = [
    {
      question: 'Quem tem direito ao Minha Casa Minha Vida?',
      answer: 'Famílias com renda mensal de até R$ 8.000, que não possuam imóvel próprio e não tenham sido beneficiadas anteriormente pelo programa.'
    },
    {
      question: 'Posso usar o FGTS como entrada?',
      answer: 'Sim! Você pode usar todo o saldo do FGTS como entrada, reduzindo o valor financiado e as parcelas mensais.'
    },
    {
      question: 'Qual o prazo máximo de financiamento?',
      answer: 'O prazo máximo é de 30 anos (360 meses), mas você pode escolher prazos menores de acordo com sua capacidade de pagamento.'
    },
    {
      question: 'Quanto tempo demora a aprovação?',
      answer: 'Com nossa assessoria especializada, a pré-aprovação sai em 30 segundos e a aprovação final em até 48 horas úteis.'
    },
    {
      question: 'Preciso comprovar renda formal?',
      answer: 'Aceitamos renda formal e informal. Autônomos e profissionais liberais também podem comprovar renda através de extratos bancários.'
    }
  ]

  // Controlar scroll quando modal abre/fecha
  useEffect(() => {
    if (isModalOpen) {
      // Salvar a posição atual do scroll antes de abrir o modal
      const currentScrollY = window.scrollY
      setScrollPosition(currentScrollY)
      
      // Fixar o body
      document.body.style.position = 'fixed'
      document.body.style.top = `-${currentScrollY}px`
      document.body.style.width = '100%'
      document.body.setAttribute('data-lenis-prevent', 'true')
    } else {
      // Remover os estilos do body
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.removeAttribute('data-lenis-prevent')
      
      // Restaurar a posição do scroll usando setTimeout para garantir que o DOM esteja pronto
      if (scrollPosition > 0) {
        setTimeout(() => {
          window.scrollTo(0, scrollPosition)
        }, 0)
      }
    }
  }, [isModalOpen, scrollPosition])

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        {/* Imagem de fundo desvanecida */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/claude images/Image_fx (3).jpg")',
            transform: 'scaleX(-1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/80" style={{ transform: 'scaleX(-1)' }}></div>
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-white"
            >
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                Realize o Sonho da Casa Própria
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Simule seu financiamento e descubra como é fácil conquistar o imóvel dos seus sonhos com as melhores condições do mercado.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#C8A882] rounded-full"></span>
                  <span>Parceria com os principais bancos</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#C8A882] rounded-full"></span>
                  <span>Taxas competitivas e condições especiais</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#C8A882] rounded-full"></span>
                  <span>Assessoria completa em todo o processo</span>
                </li>
              </ul>
              
              <div className="relative inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsModalOpen(true)
                    // Google Analytics Event
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'click', {
                        event_category: 'Financiamento',
                        event_label: 'Abrir Simulador'
                      })
                    }
                  }}
                  className="bg-[#C8A882] hover:bg-[#b89a76] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg relative overflow-hidden group"
                >
                  <Calculator size={24} />
                  Simular Financiamento
                  <div className="absolute inset-0 -left-full group-hover:left-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000"></div>
                </motion.button>
                <p className="text-xs text-white/70 mt-2 flex items-center gap-1">
                  <Clock size={14} />
                  Resposta em 30 segundos
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Casal feliz com as chaves da casa nova"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl">
                  <p className="text-sm text-gray-600 mb-1">Financiamento em até</p>
                  <p className="text-3xl font-bold text-[#1B4B73]">360 meses</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de Bancos Parceiros */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-2xl font-montserrat font-bold text-gray-800 mb-8">
            Trabalhamos com os principais bancos
          </h3>
          
          {/* Desktop - Grid */}
          <div className="hidden md:grid grid-cols-5 gap-8 items-center">
            {bankLogos.map((bank) => (
              <motion.div
                key={bank.name}
                whileHover={{ scale: 1.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <div className="h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">{bank.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile - Carrossel */}
          <div className="md:hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {bankLogos.map((bank) => (
                <SwiperSlide key={bank.name}>
                  <div className="grayscale h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm">{bank.name}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>


      {/* Métricas e Prova Social */}
      <section className="py-16 bg-gray-50" ref={metricsRef}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-[#1B4B73] mb-2">
                {metricsInView && <CountUp end={500} duration={2.5} suffix="+" />}
              </h3>
              <p className="text-gray-600">Famílias Atendidas</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-[#1B4B73] mb-2">
                {metricsInView && <CountUp end={98} duration={2.5} suffix="%" />}
              </h3>
              <p className="text-gray-600">Taxa de Aprovação</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-[#1B4B73] mb-2 flex items-center justify-center gap-2">
                {metricsInView && <CountUp end={4.9} decimals={1} duration={2.5} />}
                <Star className="text-[#C8A882] fill-current" size={32} />
              </h3>
              <p className="text-gray-600">Avaliação dos Clientes</p>
            </motion.div>
          </div>

          {/* Depoimento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              </div>
              <div>
                <p className="text-gray-600 italic mb-4">
                  "A equipe da Alicerce tornou possível o sonho da nossa casa própria. Em menos de 30 dias já estávamos com as chaves em mãos. O processo foi super tranquilo e transparente!"
                </p>
                <p className="font-semibold text-gray-800">Maria Silva</p>
                <p className="text-sm text-gray-500">Cliente desde 2023</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-montserrat font-bold text-center text-gray-800 mb-12"
          >
            Perguntas Frequentes
          </motion.h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{item.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="text-gray-600" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-600" size={20} />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0
                  }}
                  transition={{
                    height: {
                      duration: 0.4,
                      ease: "easeInOut"
                    },
                    opacity: {
                      duration: 0.3,
                      ease: "easeInOut"
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Simulação Completa */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
          >
            <div className="flex-shrink-0 p-6 lg:p-8 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-montserrat font-bold text-[#1B4B73]">
                  Simulador de Financiamento
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 lg:p-8" data-lenis-prevent>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Valor do Imóvel
                  </label>
                  <input
                    type="number"
                    name="propertyValue"
                    value={formData.propertyValue}
                    onChange={(e) => setFormData({ ...formData, propertyValue: e.target.value })}
                    placeholder="Ex: 500000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B73] focus:border-transparent outline-none transition text-lg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Entrada
                  </label>
                  <input
                    type="number"
                    name="downPayment"
                    value={formData.downPayment}
                    onChange={(e) => setFormData({ ...formData, downPayment: e.target.value })}
                    placeholder="Ex: 100000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B73] focus:border-transparent outline-none transition text-lg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Prazo (anos)
                  </label>
                  <select
                    name="financingYears"
                    value={formData.financingYears}
                    onChange={(e) => setFormData({ ...formData, financingYears: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B73] focus:border-transparent outline-none transition text-lg"
                  >
                    <option value="10">10 anos</option>
                    <option value="15">15 anos</option>
                    <option value="20">20 anos</option>
                    <option value="25">25 anos</option>
                    <option value="30">30 anos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Renda Mensal
                  </label>
                  <input
                    type="number"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                    placeholder="Ex: 10000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B73] focus:border-transparent outline-none transition text-lg"
                  />
                </div>

                <button
                  onClick={() => {
                    calculateFinancing()
                    // Google Analytics Event
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'calculate', {
                        event_category: 'Financiamento',
                        event_label: 'Calcular Simulação',
                        value: parseFloat(formData.propertyValue) || 0
                      })
                    }
                  }}
                  className="w-full bg-[#1B4B73] hover:bg-[#153a5c] text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Calcular Financiamento
                </button>

                {result.monthlyPayment > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-50 p-6 rounded-xl space-y-4"
                  >
                    <h4 className="font-montserrat font-bold text-xl text-[#1B4B73] mb-4">
                      Resultado da Simulação
                    </h4>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Valor da Parcela:</span>
                      <span className="text-2xl font-bold text-[#1B4B73]">
                        {formatCurrency(result.monthlyPayment)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Valor Total:</span>
                      <span className="font-semibold">
                        {formatCurrency(result.totalAmount)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total de Juros:</span>
                      <span className="font-semibold">
                        {formatCurrency(result.totalInterest)}
                      </span>
                    </div>

                    {formData.monthlyIncome && (
                      <div className="mt-4 p-4 bg-white rounded-lg">
                        <p className="text-sm text-gray-600">
                          Comprometimento de renda: 
                          <span className={`font-bold ml-2 ${
                            (result.monthlyPayment / parseFloat(formData.monthlyIncome)) > 0.3 
                              ? 'text-red-600' 
                              : 'text-green-600'
                          }`}>
                            {((result.monthlyPayment / parseFloat(formData.monthlyIncome)) * 100).toFixed(1)}%
                          </span>
                        </p>
                        {(result.monthlyPayment / parseFloat(formData.monthlyIncome)) > 0.3 && (
                          <p className="text-xs text-red-600 mt-2">
                            ⚠️ Recomenda-se que a parcela não ultrapasse 30% da renda mensal
                          </p>
                        )}
                      </div>
                    )}

                    <div className="mt-6 pt-6 border-t">
                      <p className="text-sm text-gray-600 mb-4">
                        Gostou da simulação? Entre em contato conosco para realizar seu sonho!
                      </p>
                      <a 
                        href="#contato"
                        onClick={() => {
                          setIsModalOpen(false)
                          // Google Analytics Event
                          if (typeof window !== 'undefined' && (window as any).gtag) {
                            (window as any).gtag('event', 'contact', {
                              event_category: 'Financiamento',
                              event_label: 'Falar com Consultor'
                            })
                          }
                        }}
                        className="block w-full bg-[#C8A882] hover:bg-[#b89a76] text-white py-3 rounded-lg font-semibold text-center transition-all duration-300"
                      >
                        Falar com um Consultor
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default EnhancedFinancingSection