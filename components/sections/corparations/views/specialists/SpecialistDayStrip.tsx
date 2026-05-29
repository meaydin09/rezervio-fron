'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface DayItem {
  shortName: string
  date: number
  fullDate: Date
  statusText: string
  statusColor: string
  isClosed: boolean
  isFull: boolean
  isPast: boolean
  isToday: boolean
}

function getWeekDays(offsetWeeks = 0): DayItem[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const currentDay = today.getDay()
  const monday = new Date(today)
  monday.setDate(today.getDate() - (currentDay === 0 ? 6 : currentDay - 1) + offsetWeeks * 7)

  const dayNames = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']

  // Statik slot verileri — ileride API'den gelecek
  const slotData = [
    { statusText: 'Dolu',   statusColor: 'text-ink-400',     isClosed: false, isFull: true  },
    { statusText: '3 boş',  statusColor: 'text-emerald-300', isClosed: false, isFull: false },
    { statusText: '5 boş',  statusColor: 'text-emerald-600', isClosed: false, isFull: false },
    { statusText: '2 boş',  statusColor: 'text-emerald-600', isClosed: false, isFull: false },
    { statusText: '4 boş',  statusColor: 'text-emerald-600', isClosed: false, isFull: false },
    { statusText: '6 boş',  statusColor: 'text-emerald-600', isClosed: false, isFull: false },
    { statusText: 'Kapalı', statusColor: 'text-ink-400',     isClosed: true,  isFull: false },
  ]

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    const isPast = d < today
    const isToday = d.toDateString() === today.toDateString()
    const slot = slotData[i]

    return {
      shortName: dayNames[i],
      date: d.getDate(),
      fullDate: d,
      isPast,
      isToday,
      ...slot,
    }
  })
}

interface Props {
  selectedDay: number
  onPickDay: (date: number, isClosed: boolean, isFull: boolean) => void
}

export default function SpecialistDayStrip({ selectedDay, onPickDay }: Props) {
  const [weekOffset, setWeekOffset] = useState(0)
  const days = getWeekDays(weekOffset)

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={() => setWeekOffset((p) => p - 1)}
          className="w-7 h-7 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition"
        >
          <ChevronLeft className="w-3.5 h-3.5" strokeWidth={2} />
        </button>
        <button
          onClick={() => setWeekOffset((p) => p + 1)}
          className="w-7 h-7 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition"
        >
          <ChevronRight className="w-3.5 h-3.5" strokeWidth={2} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
        {days.map((day) => {
          const isSelected = day.date === selectedDay
          const isDisabled = day.isClosed || day.isFull || day.isPast

          return (
            <div
              key={day.date}
              onClick={() => !isDisabled && onPickDay(day.date, day.isClosed, day.isFull)}
              className={`text-center p-1 sm:p-2 rounded-lg transition ${
                isDisabled
                  ? 'opacity-40 cursor-not-allowed'
                  : isSelected
                  ? 'bg-brand-600 text-white cursor-pointer'
                  : day.isToday
                  ? 'bg-brand-50 border border-brand-200 cursor-pointer'
                  : 'hover:bg-ink-50 cursor-pointer'
              }`}
            >
              <div className={`text-[9px] sm:text-[10px] ${isSelected ? 'opacity-80' : day.isToday ? 'text-brand-600' : 'text-ink-500'}`}>
                {day.shortName}
              </div>
              <div className={`text-xs sm:text-sm font-bold mt-0.5 ${day.isToday && !isSelected ? 'text-brand-700' : ''}`}>
                {day.date}
              </div>
              <div className={`text-[9px] sm:text-[10px] mt-0.5 sm:mt-1 font-semibold ${isSelected ? 'opacity-80' : day.statusColor}`}>
                {day.isPast ? '—' : day.statusText}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}