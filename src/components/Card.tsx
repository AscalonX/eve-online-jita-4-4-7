'use client'

import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import Link from 'next/link'
import { useState } from 'react'
import Rating from '@mui/material/Rating'

interface CardProps {
  imgSrc: string
  venueName: string
  vid?: string
  onRatingChange?: (rating: number) => void
}

export default function Card({ imgSrc, venueName, vid, onRatingChange }: CardProps) {
  const [rating, setRating] = useState<number>(0)

  const handleRatingChange = (_: React.SyntheticEvent, value: number | null) => {
    const newRating = value ?? 0
    setRating(newRating)
    onRatingChange?.(newRating)
  }

  return (
    <InteractiveCard>
      <div className="overflow-hidden rounded-lg w-full h-full flex flex-col">
        <Link href={`/venue/${vid}`}>
          <div className="relative w-full h-52">
            <Image
              src={imgSrc}
              alt={venueName}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <div className="p-6 pb-2 text-center">
            <h3 className="text-lg font-bold text-black">{venueName}</h3>
          </div>
        </Link>
        {onRatingChange && (
          <div className="pb-6 flex justify-center">
            <Rating
              id={venueName}
              name={venueName}
              data-testid={`${venueName} Rating`}
              value={rating}
              onChange={handleRatingChange}
            />
          </div>
        )}
      </div>
    </InteractiveCard>
  )
}
