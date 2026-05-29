import { ChevronLeft, ChevronRight } from 'lucide-react'
import CalendarGrid from './CalendarGrid'
import TimeSlots from './TimeSlots'
import type { TimeSlot } from '../types'

interface Props {
  selectedDay: number
  slots: TimeSlot[]
  today: number
  firstDayCol: number
  daysInMonth: number
  avail: Set<number>
  full: Set<number>
  getFormattedDate: (day: number) => string
  onPickDate: (day: number) => void
  onPickSlot: (time: string) => void
}

export default function BookingCalendar({
  selectedDay, slots, today, firstDayCol, daysInMonth, avail, full,
  getFormattedDate, onPickDate, onPickSlot,
}: Props) {
  return (
    <div className="lg:col-span-7 bg-white rounded-2xl shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] border border-ink-100 p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-ink-900">Bir gün seçin</h2>
          <p className="text-xs text-ink-500 mt-0.5">Yeşil renkli günler müsait, gri olanlar dolu.</p>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-9 h-9 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition">
            <ChevronLeft className="w-4 h-4" strokeWidth={2} />
          </button>
          <div className="px-3 text-sm font-semibold text-ink-900">Mayıs 2026</div>
          <button className="w-9 h-9 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition">
            <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      <CalendarGrid
        selectedDay={selectedDay}
        today={today}
        firstDayCol={firstDayCol}
        daysInMonth={daysInMonth}
        avail={avail}
        full={full}
        onPick={onPickDate}
      />

      <div className="mt-6 pt-5 border-t border-ink-100">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-sm font-semibold text-ink-900">
            {getFormattedDate(selectedDay)} · Boş saatler
          </h3>
          <span className="text-xs text-ink-500">GMT+3 (İstanbul)</span>
        </div>
        <TimeSlots slots={slots} onPick={onPickSlot} />
      </div>
    </div>
  )
}