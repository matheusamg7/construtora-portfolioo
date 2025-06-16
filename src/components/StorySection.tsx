'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import DiagonalTransition from './DiagonalTransition'

const StorySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  
  const [yearsCount, setYearsCount] = useState(0)
  const [worksCount, setWorksCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      // Animate years counter
      const yearsInterval = setInterval(() => {
        setYearsCount(prev => {
          if (prev >= 15) {
            clearInterval(yearsInterval)
            return 15
          }
          return prev + 1
        })
      }, 100)

      // Animate works counter with delay
      setTimeout(() => {
        const worksInterval = setInterval(() => {
          setWorksCount(prev => {
            if (prev >= 50) {
              clearInterval(worksInterval)
              return 50
            }
            return prev + 2
          })
        }, 50)
      }, 800)

      return () => {
        clearInterval(yearsInterval)
      }
    }
  }, [isInView])

  return (
    <section className="relative -mt-20 md:-mt-32">
      {/* Modern Transition */}
      <div className="relative h-24 md:h-32">
        <DiagonalTransition fromColor="white" toColor="#003366" />
      </div>
      
      {/* Content */}
      <div 
        ref={ref}
        className="bg-[#003366] text-white py-16 md:py-20 relative overflow-hidden"
      >
        {/* Architectural Grid Pattern */}
        <div className="absolute inset-0">
          {/* Main Grid */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="h-full w-full" style={{
              backgroundImage: `
                linear-gradient(to right, #C5A572 1px, transparent 1px),
                linear-gradient(to bottom, #C5A572 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }} />
          </div>
          
          {/* Secondary Grid - Larger squares */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="h-full w-full" style={{
              backgroundImage: `
                linear-gradient(to right, #C5A572 2px, transparent 2px),
                linear-gradient(to bottom, #C5A572 2px, transparent 2px)
              `,
              backgroundSize: '120px 120px'
            }} />
          </div>
          
          {/* Architectural accent lines */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full" style={{
              backgroundImage: `
                linear-gradient(to right, white 3px, transparent 3px),
                linear-gradient(to bottom, white 3px, transparent 3px)
              `,
              backgroundSize: '240px 240px',
              backgroundPosition: '60px 60px'
            }} />
          </div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
              Transformando sonhos em realidade há mais de{' '}
              <span className="text-[#C5A572]">
                {yearsCount} anos
              </span>
              , entregando mais de{' '}
              <span className="text-[#C5A572]">
                {worksCount} obras
              </span>
              {' '}sempre trabalhando com qualidade e segurança em nossas operações.
            </p>
            
            {/* Subtle accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '120px' } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-[#C5A572] mt-12"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StorySection