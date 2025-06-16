'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  PaperAirplaneIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    projectType: '',
    budget: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const projectTypes = [
    'Edifício Residencial',
    'Apartamento Alto Padrão',
    'Empreendimento Comercial',
    'Residencial Multifamiliar',
    'Projeto Personalizado',
  ]

  const budgetRanges = [
    'Até R$ 500k',
    'R$ 500k - R$ 800k',
    'R$ 800k - R$ 1.2mi',
    'R$ 1.2mi - R$ 2mi',
    'Acima de R$ 2mi',
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }
    
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp é obrigatório'
    } else if (!/^\d{10,11}$/.test(formData.whatsapp.replace(/\D/g, ''))) {
      newErrors.whatsapp = 'WhatsApp inválido'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }
    
    if (!formData.projectType) {
      newErrors.projectType = 'Selecione o tipo de projeto'
    }
    
    if (!formData.budget) {
      newErrors.budget = 'Selecione o orçamento estimado'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({
      name: '',
      whatsapp: '',
      email: '',
      projectType: '',
      budget: '',
    })
    
    setTimeout(() => setIsSuccess(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-montserrat font-bold text-gray-800 mb-6">
              Vamos Conversar
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-[#1B4B73] focus:border-transparent transition-colors`}
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-[#1B4B73] focus:border-transparent transition-colors`}
                  placeholder="(54) 99999-9999"
                />
                {errors.whatsapp && (
                  <p className="mt-1 text-sm text-red-600">{errors.whatsapp}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-[#1B4B73] focus:border-transparent transition-colors`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de projeto
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.projectType ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-[#1B4B73] focus:border-transparent transition-colors`}
                >
                  <option value="">Selecione...</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Orçamento estimado
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.budget ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-[#1B4B73] focus:border-transparent transition-colors`}
                >
                  <option value="">Selecione...</option>
                  {budgetRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-600">{errors.budget}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#1B4B73] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#153a5c] transition-colors flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    Começar Agora
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </>
                )}
              </button>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 text-green-700 p-4 rounded-lg text-center"
                >
                  Orçamento solicitado com sucesso! Entraremos em contato em breve.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-montserrat font-bold text-gray-800 mb-6">
                Entre em Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-[#1B4B73]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telefone</h4>
                    <p className="text-gray-600">(54) 99999-8888</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-[#1B4B73]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">E-mail</h4>
                    <p className="text-gray-600">contato@alicerceconstrutora.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-[#1B4B73]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Endereço</h4>
                    <p className="text-gray-600">
                      Rua das Acácias, 123 - Centro<br />
                      Passo Fundo/RS - 99010-040
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-[#1B4B73]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1B4B73] text-white rounded-3xl p-8">
              <h4 className="text-xl font-montserrat font-bold mb-4">
                Por que escolher a Alicerce?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#C8A882] rounded-full" />
                  15 anos de experiência no mercado
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#C8A882] rounded-full" />
                  Mais de 50 obras entregues
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#C8A882] rounded-full" />
                  98% de satisfação dos clientes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#C8A882] rounded-full" />
                  Garantia de 5 anos em todas as obras
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection