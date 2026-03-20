import VenueCatalog from '@/components/VenueCatalog'
import getVenues from '@/libs/getVenues'

export default async function VenuePage() {
  const venues = getVenues()

  return (
    <div className="min-h-screen bg-white">
      <VenueCatalog venuesJson={venues} />
    </div>
  )
}
