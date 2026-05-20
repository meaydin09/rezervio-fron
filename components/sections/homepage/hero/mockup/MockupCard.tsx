import MockupProfile from './MockupProfile'
import MockupCalendar from './MockupCalendar'
import MockupTimeSlots from './MockupTimeSlots'

export default function MockupCard() {
  return (
    <div className="relative bg-white rounded-2xl shadow-[0_4px_16px_-4px_rgba(15,23,42,0.12)] border border-ink-100 p-5">
      <MockupProfile />
      <MockupCalendar />
      <MockupTimeSlots />
      <button className="mt-4 w-full bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold py-2.5 rounded-lg transition">
        Randevu Al
      </button>
    </div>
  )
}