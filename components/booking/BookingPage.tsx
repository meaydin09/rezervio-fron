'use client'

import Link from 'next/link'
import ProfileHeader from './profile/ProfileHeader'
import BookingCalendar from './calendar/BookingCalendar'
import BookingForm from './form/BookingForm'
import AboutSection from './about/AboutSection'
import { useCalendar } from './calendar/hooks/useCalendar'

export default function BookingPage() {
  const {
    selectedDay, selectedTime, slots, pickDate, pickSlot, markTaken,
    getFormattedDate, FIRST_DAY_COL, DAYS_IN_MONTH, TODAY, AVAIL, FULL,
  } = useCalendar()

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-12">
        <ProfileHeader />

        <div className="mt-6 grid lg:grid-cols-12 gap-6">
          <BookingCalendar
            selectedDay={selectedDay}
            slots={slots}
            today={TODAY}
            firstDayCol={FIRST_DAY_COL}
            daysInMonth={DAYS_IN_MONTH}
            avail={AVAIL}
            full={FULL}
            getFormattedDate={getFormattedDate}
            onPickDate={pickDate}
            onPickSlot={pickSlot}
          />
          <div className="lg:col-span-5">
            <BookingForm
              date={getFormattedDate(selectedDay)}
              time={selectedTime}
              onBooked={markTaken}
            />
          </div>
        </div>
        <AboutSection />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <div className="mt-10 pt-6 border-t border-ink-100 text-center">
          <p className="text-xs text-ink-500">
            Bu sayfa, gücünü{' '}
            <Link href="https://rezervio.co" target="_blank" rel="noopener" className="font-bold text-brand-600 hover:text-brand-700 transition inline-flex items-center gap-1">
              Rezervio
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9z"/>
              </svg>
            </Link>
            'dan alıyor!
          </p>
        </div>
      </div>
    </>
  )
}