'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TransitionSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  return (
    <section ref={ref} className="relative py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Minimal Logo */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-montserrat font-thin text-[#1B4B73] mb-12"
          >
            ALICERCE
          </motion.h1>
          
          <h2 className="text-3xl md:text-4xl font-montserrat font-light mb-6 text-gray-800">
            Transformamos <span className="font-normal">sonhos</span> em <span className="font-normal">realidade</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            15 anos. 50+ obras. Zero acidentes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TransitionSection