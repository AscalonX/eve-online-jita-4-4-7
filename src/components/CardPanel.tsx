'use client'

import { useReducer } from 'react'
import Card from './Card'

const venues = [
  { vid: '001', imgSrc: '/img/1.webp', venueName: 'The Bloom Pavilion' },
  { vid: '002', imgSrc: '/img/2.jpg', venueName: 'Spark Space' },
  { vid: '003', imgSrc: '/img/3.jpg', venueName: 'The Grand Table' },
]

type RatingState = Map<string, number>

type RatingAction =
  | { type: 'SET_RATING'; venueName: string; rating: number }
  | { type: 'REMOVE_VENUE'; venueName: string }

function reducer(state: RatingState, action: RatingAction): RatingState {
  const newMap = new Map(state)
  if (action.type === 'SET_RATING') {
    newMap.set(action.venueName, action.rating)
    return newMap
  }
  if (action.type === 'REMOVE_VENUE') {
    newMap.delete(action.venueName)
    return newMap
  }
  return state
}

const initialState: RatingState = new Map([
  ['The Bloom Pavilion', 0],
  ['Spark Space', 0],
  ['The Grand Table', 0],
])

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(reducer, initialState)

  const handleRatingChange = (venueName: string, rating: number) => {
    dispatch({ type: 'SET_RATING', venueName, rating })
  }

  const handleRemoveVenue = (venueName: string) => {
    dispatch({ type: 'REMOVE_VENUE', venueName })
  }

  return (
    <section className="w-full flex flex-col items-center py-16 px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Venues</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
        {venues.map((venue) => (
          <div key={venue.venueName} className="w-full">
            <Card
              vid={venue.vid}
              imgSrc={venue.imgSrc}
              venueName={venue.venueName}
              onRatingChange={(rating) => handleRatingChange(venue.venueName, rating)}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 w-full max-w-5xl">
        <h3 className="font-semibold text-black mb-2">
          Venue List with Ratings : {ratings.size}
        </h3>
        {Array.from(ratings.entries()).map(([venueName, rating]) => (
          <div
            key={venueName}
            data-testid={venueName}
            className="cursor-pointer hover:bg-gray-100 p-1 text-black"
            onClick={() => handleRemoveVenue(venueName)}
          >
            {venueName} : {rating}
          </div>
        ))}
      </div>
    </section>
  )
}
