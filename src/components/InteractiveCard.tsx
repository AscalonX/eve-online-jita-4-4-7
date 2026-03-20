'use client'

import { ReactNode, useState } from 'react'

export default function InteractiveCard({ children }: { children: ReactNode }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`rounded-lg transition-all duration-200 w-full h-full ${
        isHovered
          ? 'shadow-2xl bg-neutral-200'
          : 'shadow-lg bg-white'
      }`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}
