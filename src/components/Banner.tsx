'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']

export default function Banner() {
  const [imgIndex, setImgIndex] = useState(0)
  const router = useRouter()
  const { data: session } = useSession()

  const handleImageClick = () => {
    setImgIndex((prev) => (prev + 1) % covers.length)
  }

  return (
    <section className="relative w-full">
      <div className="relative w-full h-[420px]">
        <Image
          src={covers[imgIndex]}
          alt="Banner"
          fill
          className="object-cover cursor-pointer"
          onClick={handleImageClick}
        />
        {session && (
          <div className="absolute top-4 right-4 bg-white/80 text-gray-800 px-4 py-2 font-semibold z-10 rounded">
            Welcome {session.user.name}
          </div>
        )}
        <button
          className="absolute bottom-4 right-4 bg-black text-white px-6 py-3 font-semibold hover:opacity-80 z-10"
          onClick={() => router.push('/venue')}
        >
          Select Venue
        </button>
      </div>
    </section>
  )
}
