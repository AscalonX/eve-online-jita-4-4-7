'use client'

import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="w-full bg-white shadow-sm py-4 px-8 flex items-center justify-between">
      <div>
        {session ? (
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors text-sm"
          >
            Sign-Out
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className="px-4 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-500 transition-colors text-sm"
          >
            Sign-In
          </button>
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
