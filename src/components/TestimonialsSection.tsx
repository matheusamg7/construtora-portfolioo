'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Roberto Silva',
      role: 'Empresário',
      content: 'Superaram nossas expectativas em qualidade e prazo. A equipe da Alicerce transformou nosso projeto em uma casa incrível, com acabamento impecável e atenção aos mínimos detalhes.',
      rating: 5,
      image: 'https://via.placeholder.com/100x100/1B4B73/ffffff?text=RS',
      project: 'Residência Jardim América',
    },
    {
      id: 2,
      name: 'Marina Costa',
      role: 'Médica',
      content: 'Transparência total do início ao fim. O app de acompanhamento foi fundamental para vermos o progresso diário. Recomendo a Alicerce para quem busca seriedade e qualidade.',
      rating: 5,
      image: 'https://via.placeholder.com/100x100/5A6670/ffffff?text=MC',
      project: 'Casa Térrea Premium',
    },
    {
      id: 3,
      name: 'José Santos',
      role: 'Advogado',
      content: 'Nossa casa dos sonhos virou realidade. O prazo foi cumprido rigorosamente e a qualidade dos materiais é excepcional. A garantia de 5 anos nos dá total tranquilidade.',
      rating: 5,
      image: 'https://via.placeholder.com/100x100/C8A882/ffffff?text=JS',
      project: 'Sobrado Moderno',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1B4B73] mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <Quote size={48} className="text-[#C8A882] opacity-20 mb-6" />
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover shadow-lg"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-lg mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div>
                    <h4 className="font-montserrat font-bold text-gray-800 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].project}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} className="text-[#1B4B73]" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} className="text-[#1B4B73]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-[#1B4B73]' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection