'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="w-full bg-white shadow-sm py-4 px-8 flex items-center justify-between">
      <div>
        {session ? (
          <Link
            href="/api/auth/signout"
            style={{ color: '#000000' }}
            className="font-medium hover:opacity-60 transition-opacity"
          >
            Sign-Out
          </Link>
        ) : (
          <Link
            href="/api/auth/signin"
            style={{ color: '#000000' }}
            className="font-medium hover:opacity-60 transition-opacity"
          >
            Sign-In
          </Link>
        )}
      </div>
      <div className="flex items-center gap-6">
        <Link
          href="/booking"
          style={{ color: '#000000' }}
          className="font-medium hover:opacity-60 transition-opacity"
        >
          Booking
        </Link>
        <span className="text-xl font-bold text-gray-800 tracking-tight">
          Venue<span className="text-amber-600">Explorer</span>
        </span>
        <img src='/img/logo.png' className="w-9 h-9 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-sm"></img>
      </div>
    </nav>
  )
}
