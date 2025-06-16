'use client'

interface DiagonalTransitionProps {
  fromColor?: string
  toColor?: string
  className?: string
}

const DiagonalTransition = ({ 
  fromColor = 'white', 
  toColor = '#003366',
  className = '' 
}: DiagonalTransitionProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Pattern */}
        <div className="absolute -left-10 top-0 w-40 h-40 bg-[#C5A572] opacity-10 rotate-45 transform translate-y-20" />
        <div className="absolute right-20 top-10 w-32 h-32 bg-[#C5A572] opacity-5 rotate-12" />
        
        {/* Main Diagonal Split */}
        <svg
          viewBox="0 0 1440 200"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#003366" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#003366" stopOpacity="1" />
            </linearGradient>
          </defs>
          
          {/* White background */}
          <rect x="0" y="0" width="1440" height="200" fill={fromColor} />
          
          {/* Modern diagonal with subtle curve */}
          <path
            d="M0,120 Q720,100 1440,40 L1440,200 L0,200 Z"
            fill="url(#blueGradient)"
          />
          
          {/* Accent line */}
          <path
            d="M0,120 Q720,100 1440,40"
            fill="none"
            stroke="#C5A572"
            strokeWidth="2"
            opacity="0.3"
          />
        </svg>
      </div>
    </div>
  )
}

export default DiagonalTransition