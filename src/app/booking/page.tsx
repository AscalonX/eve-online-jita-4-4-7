import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import getUserProfile from '@/libs/getUserProfile'
import BookingForm from './BookingForm'

export default async function BookingPage() {
  const session = await getServerSession(authOptions)

  let profile = null
  if (session) {
    profile = await getUserProfile(session.user.token)
  }

  return (
    <div className="min-h-screen bg-white">
      {profile && (
        <div className="w-full max-w-md mx-auto mt-8 p-4 bg-gray-50 rounded">
          <h2 className="text-xl font-bold mb-2">{profile.data.name}</h2>
          <p>Email: {profile.data.email}</p>
          <p>Tel. {profile.data.tel}</p>
          <p>Member Since {profile.data.createdAt}</p>
        </div>
      )}
      <main className="flex flex-col items-center py-16 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">Book a Venue</h1>
        <BookingForm />
      </main>
    </div>
  )
}
