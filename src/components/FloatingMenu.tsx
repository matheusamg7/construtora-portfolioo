'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUp } from 'lucide-react'

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contato' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Floating Menu Button */}
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-40 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
      >
        <Menu size={20} className="text-[#1B4B73]" />
      </motion.button>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-[#1B4B73] rounded-full shadow-lg flex items-center justify-center hover:bg-[#2563EB] transition-colors duration-300"
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50"
            >
              <div className="p-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-8 right-8 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>

                <div className="mt-20">
                  <nav>
                    <ul className="space-y-6">
                      {menuItems.map((item, index) => (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <a
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-light text-gray-700 hover:text-[#1B4B73] transition-colors duration-300 block"
                          >
                            {item.name}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  <div className="mt-16 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      © 2024 Alicerce Construtora
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingMenu