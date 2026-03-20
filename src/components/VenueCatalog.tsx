import Card from './Card'

export default async function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
  const venueJsonReady = await venuesJson

  return (
    <section className="w-full flex flex-col items-center py-16 px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Select your venue</h2>
      <p className="text-gray-500 mb-10">Explore {venueJsonReady.count} fabulous venues in our venue catalog</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
        {venueJsonReady.data.map((venue: VenueItem) => (
          <div key={venue.id} className="w-full">
            <Card
              vid={venue.id}
              imgSrc={venue.picture}
              venueName={venue.name}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
