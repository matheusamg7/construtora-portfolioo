'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import Button from './Button'

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B4B73' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-primary-blue mb-6"
          >
            Construindo Sonhos com Solidez Familiar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            15 anos transformando terrenos em lares únicos. 
            Qualidade garantida, prazo cumprido, relacionamento que dura para sempre.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contato">
              <Button variant="primary" className="text-base md:text-lg">
                <DocumentTextIcon className="w-5 h-5" />
                Solicite Seu Orçamento Gratuito
              </Button>
            </a>
            <a href="#portfolio">
              <Button variant="secondary" className="text-base md:text-lg">
                Conheça Nossas Obras
                <ArrowRightIcon className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold text-[#1B4B73]">50+</div>
              <div className="text-sm text-gray-600">Obras Entregues</div>
            </div>
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold text-[#1B4B73]">15</div>
              <div className="text-sm text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold text-[#1B4B73]">98%</div>
              <div className="text-sm text-gray-600">Satisfação</div>
            </div>
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold text-[#1B4B73]">Zero</div>
              <div className="text-sm text-gray-600">Acidentes</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10"
      >
        <div className="w-full h-full bg-gradient-to-tl from-[#1B4B73] to-transparent rounded-tl-[100px]" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-0 left-0 w-1/3 h-1/3 opacity-5"
      >
        <div className="w-full h-full bg-gradient-to-br from-[#C8A882] to-transparent rounded-br-[100px]" />
      </motion.div>
    </section>
  )
}

export default HeroSection