'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu, ArrowUp } from 'lucide-react'

const MinimalHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showFloatingMenu, setShowFloatingMenu] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)

  const menuItemsLeft = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
  ]

  const menuItemsRight = [
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Contato', href: '/#contato' },
  ]

  const allMenuItems = [...menuItemsLeft, ...menuItemsRight]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show floating menu after scrolling 100px
      setShowFloatingMenu(currentScrollY > 100)
      
      // Show scroll to top button after 300px
      setShowScrollButton(currentScrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Minimal Header - Only visible at top */}
      <AnimatePresence>
        {!showFloatingMenu && (
          <motion.header
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 bg-transparent pt-8"
          >
        <div className="container mx-auto px-8 py-8">
          <div className="flex items-center justify-center">
            {/* Desktop Menu */}
            <nav className="hidden lg:block">
              <ul className="flex items-center">
                {/* Left menu items */}
                {menuItemsLeft.map((item, index) => (
                  <li key={item.name} className="flex items-center">
                    <a
                      href={item.href}
                      className="text-sm font-light text-gray-600 hover:text-[#1B4B73] transition-colors duration-300 px-8"
                    >
                      {item.name}
                    </a>
                    <div className="h-4 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                  </li>
                ))}
                
                {/* Logo */}
                <li className="px-12">
                  <a href="/" className="text-2xl font-montserrat font-bold text-[#1B4B73] hover:text-[#2563EB] transition-colors duration-300">
                    ALICERCE
                  </a>
                </li>
                
                {/* Right menu items */}
                {menuItemsRight.map((item, index) => (
                  <li key={item.name} className="flex items-center">
                    {index === 0 && (
                      <div className="h-4 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                    )}
                    <a
                      href={item.href}
                      className="text-sm font-light text-gray-600 hover:text-[#1B4B73] transition-colors duration-300 px-8"
                    >
                      {item.name}
                    </a>
                    {index < menuItemsRight.length - 1 && (
                      <div className="h-4 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Logo */}
            <div className="lg:hidden">
              <a href="/" className="text-xl font-montserrat font-bold text-[#1B4B73] hover:text-[#2563EB] transition-colors duration-300">
                ALICERCE
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden absolute right-8"
            >
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-gray-600" />
                <div className="w-6 h-0.5 bg-gray-600" />
                <div className="w-6 h-0.5 bg-gray-600" />
              </div>
            </button>
          </div>
        </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Floating Menu Button - Appears after scroll */}
      <AnimatePresence>
        {showFloatingMenu && (
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(true)}
            className="fixed top-8 right-8 z-40 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
          >
            <Menu size={20} className="text-[#1B4B73]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-[#1B4B73] rounded-full shadow-lg flex items-center justify-center hover:bg-[#2563EB] transition-colors duration-300"
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Fullscreen Menu */}
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
                      {allMenuItems.map((item, index) => (
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

export default MinimalHeader