'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  MapPinIcon,
  HomeIcon,
  Square2StackIcon,
  SparklesIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

interface Project {
  id: number
  name: string
  category: 'residencial' | 'alto-padrao' | 'em-construcao'
  location: string
  neighborhood: string
  units: string
  bedrooms: string
  area: string
  status: string
  price: string
  image: string
  highlights: string[]
  description: string
  amenities: string[]
}

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'residencial' | 'alto-padrao' | 'em-construcao'>('todos')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      name: "Edifício Alicerce Prime",
      category: "alto-padrao",
      location: "Passo Fundo - RS",
      neighborhood: "Centro",
      units: "24 apartamentos",
      bedrooms: "3 e 4 suítes",
      area: "180m² a 320m²",
      status: "Pronto para morar",
      price: "A partir de R$ 1.850.000",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      highlights: ["Vista panorâmica", "2 vagas de garagem", "Sacada gourmet"],
      description: "Luxo e sofisticação no coração da cidade. Apartamentos com acabamento premium, automação residencial e vista privilegiada.",
      amenities: ["Piscina aquecida", "Academia", "Salão de festas", "Playground", "Espaço gourmet", "Hall decorado"]
    },
    {
      id: 2,
      name: "Residencial Vista Verde",
      category: "residencial",
      location: "Passo Fundo - RS",
      neighborhood: "Vila Vergueiro",
      units: "48 apartamentos",
      bedrooms: "2 e 3 dormitórios",
      area: "65m² a 95m²",
      status: "Últimas unidades",
      price: "A partir de R$ 380.000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      highlights: ["Área verde preservada", "Pet friendly", "Energia solar"],
      description: "Qualidade de vida em harmonia com a natureza. Projeto sustentável com ampla área verde e infraestrutura completa.",
      amenities: ["Piscina", "Churrasqueira", "Parque infantil", "Quadra esportiva", "Salão de festas", "Portaria 24h"]
    },
    {
      id: 3,
      name: "Alicerce Business Tower",
      category: "em-construcao",
      location: "Passo Fundo - RS",
      neighborhood: "Setor Comercial",
      units: "120 salas comerciais",
      bedrooms: "Salas de 35m² a 200m²",
      area: "35m² a 200m²",
      status: "Em construção - 65% concluído",
      price: "Consulte condições",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      highlights: ["Localização estratégica", "Alta tecnologia", "Certificação LEED"],
      description: "O mais moderno complexo empresarial da região. Infraestrutura inteligente para o sucesso do seu negócio.",
      amenities: ["Auditório", "Coworking", "Restaurante", "Estacionamento rotativo", "Heliponto", "Gerador próprio"]
    },
    {
      id: 4,
      name: "Condomínio Jardim Europa",
      category: "alto-padrao",
      location: "Passo Fundo - RS", 
      neighborhood: "Boqueirão",
      units: "16 apartamentos garden",
      bedrooms: "4 suítes + DCE",
      area: "380m² privativos",
      status: "Lançamento",
      price: "A partir de R$ 2.500.000",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
      highlights: ["Garden privativo", "4 vagas de garagem", "Elevador privativo"],
      description: "Exclusividade e requinte em cada detalhe. Apenas 2 unidades por andar com vista permanente e acabamento europeu.",
      amenities: ["Piscina privativa", "SPA", "Adega climatizada", "Cinema", "Espaço fitness", "Segurança 24h"]
    },
    {
      id: 5,
      name: "Urban Life Residence",
      category: "residencial",
      location: "Passo Fundo - RS",
      neighborhood: "Petrópolis",
      units: "64 apartamentos",
      bedrooms: "1, 2 e 3 dormitórios",
      area: "45m² a 110m²",
      status: "Pré-lançamento",
      price: "Entrada facilitada em 48x",
      image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&h=600&fit=crop",
      highlights: ["Próximo a universidades", "Studios disponíveis", "Lazer completo"],
      description: "Praticidade e modernidade para jovens profissionais e famílias. Localização privilegiada com toda infraestrutura urbana.",
      amenities: ["Piscina", "Academia", "Lavanderia compartilhada", "Bicicletário", "Espaço pet", "Coworking"]
    },
    {
      id: 6,
      name: "Palazzo Alicerce",
      category: "em-construcao",
      location: "Passo Fundo - RS",
      neighborhood: "Lucas Araújo",
      units: "8 coberturas duplex",
      bedrooms: "5 suítes master",
      area: "450m² a 600m²",
      status: "Em construção - 40% concluído",
      price: "Sob consulta",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      highlights: ["Coberturas exclusivas", "Piscina privativa", "Vista 360°"],
      description: "O ápice do luxo residencial. Coberturas duplex com terraço privativo e vista deslumbrante da cidade.",
      amenities: ["Piscina infinita", "Terraço gourmet", "Home theater", "Spa privativo", "Cave climatizada", "6 vagas"]
    }
  ]

  const categories = [
    { id: 'todos', label: 'Todos', icon: Square2StackIcon },
    { id: 'residencial', label: 'Residencial', icon: HomeIcon },
    { id: 'alto-padrao', label: 'Alto Padrão', icon: SparklesIcon },
    { id: 'em-construcao', label: 'Em Construção', icon: BuildingOfficeIcon }
  ]

  const filteredProjects = selectedCategory === 'todos' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1B4B73] mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossos empreendimentos de alto padrão em Passo Fundo
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#1B4B73] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <cat.icon className="w-5 h-5" />
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${
                      project.status.includes('construção') ? 'bg-orange-500' :
                      project.status.includes('Últimas') ? 'bg-red-500' :
                      project.status.includes('Lançamento') ? 'bg-green-500' :
                      'bg-[#1B4B73]'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                    <div className="flex items-center gap-1 text-white/90 text-sm">
                      <MapPinIcon className="w-4 h-4" />
                      {project.neighborhood}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Área</p>
                      <p className="font-semibold text-[#1B4B73]">{project.area}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Dormitórios</p>
                      <p className="font-semibold text-[#1B4B73]">{project.bedrooms}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <p className="text-[#C5A572] font-bold text-lg">{project.price}</p>
                  </div>

                  <div className="flex gap-2 mb-4">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 bg-gray-100 text-[#1B4B73] px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                      Ver Detalhes
                    </button>
                    <a 
                      href="#contato"
                      className="flex-1 bg-[#C5A572] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#B39565] transition-colors flex items-center justify-center gap-2"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      Falar com Corretor
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative h-80 bg-gray-200">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <span className="text-2xl">&times;</span>
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h2>
                    <div className="flex items-center gap-4 text-white/90">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="w-5 h-5" />
                        {selectedProject.location}
                      </div>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                        {selectedProject.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-[#1B4B73] mb-4">Sobre o Empreendimento</h3>
                      <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                      
                      <h4 className="font-semibold text-[#1B4B73] mb-3">Características</h4>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="w-2 h-2 bg-[#C5A572] rounded-full" />
                          {selectedProject.units}
                        </li>
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="w-2 h-2 bg-[#C5A572] rounded-full" />
                          {selectedProject.bedrooms}
                        </li>
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="w-2 h-2 bg-[#C5A572] rounded-full" />
                          Área: {selectedProject.area}
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1B4B73] mb-3">Áreas de Lazer</h4>
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {selectedProject.amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-600">
                            <span className="w-2 h-2 bg-[#C5A572] rounded-full" />
                            {amenity}
                          </div>
                        ))}
                      </div>

                      <h4 className="font-semibold text-[#1B4B73] mb-3">Diferenciais</h4>
                      <div className="space-y-2">
                        {selectedProject.highlights.map((highlight, idx) => (
                          <div key={idx} className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700">
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1B4B73] rounded-xl p-6 text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <p className="text-2xl font-bold mb-1">{selectedProject.price}</p>
                        <p className="text-white/80">Condições especiais de pagamento</p>
                      </div>
                      <a
                        href="#contato"
                        className="bg-[#C5A572] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B39565] transition-all transform hover:scale-105 flex items-center gap-2"
                        onClick={() => setSelectedProject(null)}
                      >
                        <PhoneIcon className="w-5 h-5" />
                        Quero Agendar uma Visita
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default PortfolioSection