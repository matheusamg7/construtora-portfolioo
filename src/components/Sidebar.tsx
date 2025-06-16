'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Processo', href: '#processo' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <>
      {/* Minimal Sidebar Strip */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 w-16 h-32 bg-black/90 backdrop-blur-sm rounded-l-2xl shadow-2xl z-40 flex items-center justify-center cursor-pointer hover:w-20 transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        {/* Three Lines */}
        <div className="space-y-2">
          <motion.div 
            className="w-6 h-0.5 bg-white"
            whileHover={{ width: 32 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div 
            className="w-6 h-0.5 bg-white"
            whileHover={{ width: 32 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          />
          <motion.div 
            className="w-6 h-0.5 bg-white"
            whileHover={{ width: 32 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          />
        </div>
      </motion.div>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              {/* Navigation */}
              <nav>
                <ul className="space-y-8 text-center">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-4xl md:text-5xl font-montserrat font-light text-white hover:text-[#C8A882] transition-colors duration-300"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar