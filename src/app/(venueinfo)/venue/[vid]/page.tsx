import Image from 'next/image'
import getVenue from '@/libs/getVenue'

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>
}) {
  const { vid } = await params
  const venueJson = await getVenue(vid)
  const venue: VenueItem = venueJson.data

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{venue.name}</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <div className="relative w-full md:w-1/2 h-96">
          <Image
            src={venue.picture}
            alt={venue.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center text-black">
          <p>Name: {venue.name}</p>
          <p>Address: {venue.address}</p>
          <p>District: {venue.district}</p>
          <p>Postal Code: {venue.postalcode}</p>
          <p>Tel: {venue.tel}</p>
          <p>Daily Rate: {venue.dailyrate}</p>
        </div>
      </div>
    </div>
  )
}
