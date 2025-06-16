'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const HeroCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Vista Verde',
      subtitle: 'Residencial',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=1200&fit=crop',
    },
    {
      id: 2,
      title: 'Casa Premium',
      subtitle: 'Alphaville',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=1200&fit=crop',
    },
  ]

  return (
    <section id="home" className="relative h-auto md:h-screen bg-white p-4 lg:p-8">
      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8 h-full pt-28 md:pt-12 lg:pt-16 pb-8 md:pb-0">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative flex-1 md:flex-1 h-80 sm:h-96 md:h-auto overflow-hidden cursor-pointer rounded-xl border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-500 group"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            {/* Minimal Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Minimal Content */}
            <div className="relative h-full flex flex-col justify-end p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-white mb-1">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-200">
                  {project.subtitle}
                </p>
              </motion.div>

              {/* Hover Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: hoveredCard === project.id ? 1 : 0,
                  x: hoveredCard === project.id ? 0 : -20
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-8 right-8"
              >
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <ArrowRight size={24} className="text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HeroCards