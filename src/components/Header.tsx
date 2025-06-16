'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <h1 className="text-2xl md:text-3xl font-montserrat font-bold text-[#1B4B73]">
              ALICERCE
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:flex items-center space-x-8"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-[#1B4B73] transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-[#1B4B73] to-[#153a5c] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-[#153a5c] hover:to-[#0f2940] hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Phone size={18} />
              Solicitar Orçamento
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#1B4B73] transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-[#1B4B73] transition-colors duration-300 font-medium py-2"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-[#1B4B73] to-[#153a5c] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-[#153a5c] hover:to-[#0f2940] hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center gap-2 mt-4"
            >
              <Phone size={18} />
              Solicitar Orçamento
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header