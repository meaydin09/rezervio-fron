import BookingPage from '@/components/booking/BookingPage'
import CorporatePage from '@/components/sections/corparations/CorporatePage'

const corporateUsers = ['klinik']

export default async function Page({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params
  const isCorporate = corporateUsers.includes(username)
  return isCorporate ? <CorporatePage /> : <BookingPage />
}
