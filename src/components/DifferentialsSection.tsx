'use client'

import { motion } from 'framer-motion'
import { 
  ArrowTrendingUpIcon,
  BuildingOffice2Icon,
  BanknotesIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: ArrowTrendingUpIcon,
      title: 'Valorização Garantida',
      description: 'Seu imóvel valorizando desde o primeiro dia',
      details: 'Localização estratégica e acabamento premium que garantem retorno do investimento',
      color: 'bg-green-100',
    },
    {
      icon: BuildingOffice2Icon,
      title: 'Infraestrutura Completa',
      description: 'Tudo pronto para você viver bem',
      details: 'Área de lazer, segurança 24h, garagem privativa e acabamentos de alto padrão',
      color: 'bg-blue-100',
    },
    {
      icon: BanknotesIcon,
      title: 'Financiamento Facilitado',
      description: 'Entrada parcelada e condições especiais',
      details: 'Parceria com os principais bancos e até 100% do valor financiado',
      color: 'bg-purple-100',
    },
    {
      icon: ClockIcon,
      title: 'Prazo Garantido',
      description: 'Atraso = multa para você',
      details: 'Compromisso real com o cronograma estabelecido',
      color: 'bg-orange-100',
    },
  ]

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1B4B73] mb-4">
            Seu investimento, nossa responsabilidade
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Garantias que só a Alicerce oferece
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className={`${item.color} w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-[#1B4B73]" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-montserrat font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#1B4B73] font-semibold mb-2">
                    {item.description}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {item.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mt-16 relative overflow-hidden rounded-3xl"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[#1B4B73]">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, #C5A572 0, #C5A572 1px, transparent 1px, transparent 15px)`
              }} />
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left Side - Text */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <span>✨</span>
                    <span>Oportunidade Exclusiva</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-4">
                    Seu próximo endereço está esperando por você
                  </h3>
                  <p className="text-lg text-gray-200 mb-6">
                    Conheça nossos empreendimentos em <span className="text-[#C5A572] font-semibold">localizações nobres</span>, 
                    com <span className="text-[#C5A572] font-semibold">acabamento de alto padrão</span> e 
                    toda a <span className="text-[#C5A572] font-semibold">segurança</span> que sua família merece.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a href="#contato" className="bg-[#C5A572] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B39565] transition-all transform hover:scale-105 inline-block shadow-lg">
                      Agendar Visita Exclusiva
                    </a>
                    <a href="#portfolio" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1B4B73] transition-all inline-block">
                      Ver Empreendimentos
                    </a>
                  </div>
                </div>
                
                {/* Right Side - Features */}
                <div className="flex-shrink-0">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-[#C5A572]">24h</div>
                      <div className="text-sm text-gray-200">Resposta ao contato</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-[#C5A572]">100%</div>
                      <div className="text-sm text-gray-200">Financiável</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-[#C5A572]">5 anos</div>
                      <div className="text-sm text-gray-200">De garantia</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-[#C5A572]">A+</div>
                      <div className="text-sm text-gray-200">Localização</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DifferentialsSection