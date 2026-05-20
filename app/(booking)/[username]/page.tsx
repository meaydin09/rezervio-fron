import BookingPage from '@/components/booking/BookingPage'
import CorporatePage from '@/components/sections/corparations/CorporatePage'

const isCorporate = true


export default function Page() {
  return isCorporate ? <CorporatePage /> : <BookingPage />
}