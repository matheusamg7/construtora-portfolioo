import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#1B4B73] to-[#153a5c] text-white hover:from-[#153a5c] hover:to-[#0f2940] hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'border-2 border-[#1B4B73] text-[#1B4B73] hover:bg-[#1B4B73] hover:text-white'
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button