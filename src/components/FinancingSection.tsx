'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, X } from 'lucide-react'

const FinancingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  const calculateFinancing = () => {
    const value = parseFloat(formData.propertyValue) || 0
    const down = parseFloat(formData.downPayment) || 0
    const years = parseInt(formData.financingYears) || 30
    const income = parseFloat(formData.monthlyIncome) || 0
    
    const financedAmount = value - down
    const monthlyRate = 0.0099 // Taxa de juros mensal aproximada (11.88% ao ano)
    const months = years * 12
    
    // Cálculo da parcela usando a fórmula da Tabela Price
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-[#1B4B73] to-[#153a5c] relative overflow-hidden">
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-[#C8A882] hover:bg-[#b89a76] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg"
              >
                <Calculator size={24} />
                Simular Financiamento
              </motion.button>
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

      {/* Modal de Simulação */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 lg:p-8">
              <div className="flex justify-between items-center mb-6">
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

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Valor do Imóvel
                  </label>
                  <input
                    type="number"
                    name="propertyValue"
                    value={formData.propertyValue}
                    onChange={handleInputChange}
                    placeholder="Ex: 500000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B73] focus:border-transparent outline-none transition"
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
                    onChange={handleInputChange}
                    placeholder="Ex: 100000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B73] focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Prazo (anos)
                  </label>
                  <select
                    name="financingYears"
                    value={formData.financingYears}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B73] focus:border-transparent outline-none transition"
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
                    onChange={handleInputChange}
                    placeholder="Ex: 10000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B73] focus:border-transparent outline-none transition"
                  />
                </div>

                <button
                  onClick={calculateFinancing}
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
                        onClick={() => setIsModalOpen(false)}
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

export default FinancingSection