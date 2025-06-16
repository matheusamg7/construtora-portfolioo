'use client'

import { motion } from 'framer-motion'
import { BedDouble, Home, MapPin, Calendar } from 'lucide-react'
import Button from './Button'

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Edifício Skyline Premium',
      type: 'Apartamentos de 180m² a 320m²',
      price: 'A partir de R$ 2.5mi',
      year: '2023',
      area: '25 andares',
      location: 'Vila Nova Conceição',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      features: ['4 Suítes', 'Varanda Gourmet', 'Spa', '4 vagas'],
    },
    {
      id: 2,
      title: 'Torre Infinity',
      type: 'Coberturas Duplex',
      price: 'A partir de R$ 4.8mi',
      year: '2024',
      area: '30 andares',
      location: 'Jardins',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
      features: ['5 Suítes', 'Piscina Privativa', 'Heliponto', '6 vagas'],
    },
    {
      id: 3,
      title: 'Residencial Park View',
      type: 'Apartamentos Garden',
      price: 'A partir de R$ 1.8mi',
      year: '2023',
      area: '22 andares',
      location: 'Moema',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      features: ['3 Suítes', 'Jardim Privativo', 'Lazer Completo', '3 vagas'],
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                
                {/* Year badge */}
                <div className="absolute top-4 right-4 bg-[#1B4B73] text-white px-4 py-2 rounded-full text-sm font-semibold transform group-hover:scale-110 transition-transform duration-300">
                  {project.year}
                </div>
                
                {/* View details text on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-lg font-medium bg-[#C5A572] px-6 py-3 rounded-full">
                    Ver Projeto
                  </p>
                </div>
              </div>

              <div className="p-6 group-hover:bg-gray-50 transition-colors duration-300">
                <h3 className="text-xl font-montserrat font-bold text-gray-800 mb-2 group-hover:text-[#1B4B73] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.type}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-[#1B4B73] group-hover:text-[#C5A572] transition-colors duration-300">
                    {project.price}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Home size={16} className="mr-1" />
                    {project.area}
                  </div>
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-4 group-hover:text-[#1B4B73] transition-colors duration-300">
                  <MapPin size={16} className="mr-2" />
                  {project.location}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <div
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-center group-hover:bg-[#1B4B73] group-hover:text-white transition-all duration-300"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.div
                  className="mt-6 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="secondary" className="w-full text-sm group-hover:bg-[#C5A572] group-hover:text-white group-hover:border-[#C5A572]">
                    Ver Detalhes
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mt-12"
        >
          <a href="/portfolio">
            <Button variant="primary">
              Ver Portfólio Completo
              <Home size={20} />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects