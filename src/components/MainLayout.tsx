'use client'

import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full">
      <main className="w-full">
        {children}
      </main>
    </div>
  )
}

export default MainLayout