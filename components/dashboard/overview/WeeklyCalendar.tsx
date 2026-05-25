'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

type SlotType = 'confirmed' | 'pending' | 'available' | 'closed' | 'empty'
type CalendarMode = 'Hafta' | 'Ay' | 'Gün'

interface Slot {
  type: SlotType
  name?: string
  time?: string
}

const slots: Record<string, Slot> = {
  '10:00-0': { type: 'confirmed', name: 'Selin D.',  time: '10:00' },
  '11:00-1': { type: 'confirmed', name: 'Ahmet K.',  time: '11:00' },
  '09:00-1': { type: 'available' },
  '10:00-2': { type: 'confirmed', name: 'Burak M.',  time: '10:00' },
  '12:00-3': { type: 'confirmed', name: 'Deniz A.',  time: '12:00' },
  '15:00-3': { type: 'available' },
  '14:00-1': { type: 'pending',   name: 'Yeni',      time: '14:00' },
  '18:00-3': { type: 'pending',   name: 'Yeni',      time: '18:00' },
  '10:00-4': { type: 'confirmed', name: 'Onur U.',   time: '10:00' },
  '13:00-4': { type: 'confirmed', name: 'Ayşe Ş.',   time: '13:00' },
  '16:00-4': { type: 'confirmed', name: 'Berk K.',   time: '16:00' },
  '18:00-4': { type: 'available' },
  '14:00-5': { type: 'confirmed', name: 'Cem O.',    time: '14:00' },
  '11:00-5': { type: 'available' },
  '12:00-0': { type: 'closed' },
  '13:00-2': { type: 'closed' },
  '09:00-6': { type: 'closed' },
  '10:00-6': { type: 'closed' },
  '11:00-6': { type: 'closed' },
  '12:00-6': { type: 'closed' },
  '13:00-6': { type: 'closed' },
  '14:00-6': { type: 'closed' },
  '15:00-0': { type: 'available' },
  '17:00-2': { type: 'available' },
}

// Dinamik hafta günleri
function getWeekDays(offsetWeeks = 0) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const currentDay = today.getDay()
  const monday = new Date(today)
  monday.setDate(today.getDate() - (currentDay === 0 ? 6 : currentDay - 1) + offsetWeeks * 7)
  const dayNames = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return {
      short: dayNames[i],
      date: d.getDate(),
      full: d,
      today: d.toDateString() === today.toDateString(),
      past: d < today,
    }
  })
}

// Dinamik ay günleri
function getMonthDays(offsetMonths = 0) {
  const today = new Date()
  const d = new Date(today.getFullYear(), today.getMonth() + offsetMonths, 1)
  const year = d.getFullYear()
  const month = d.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const offset = firstDay === 0 ? 6 : firstDay - 1
  return { year, month, daysInMonth, offset, today }
}

const monthNames = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık']

// --- Haftalık View ---
function WeekView({ offset, onOffset }: { offset: number; onOffset: (n: number) => void }) {
  const weekDays = getWeekDays(offset)

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[720px]">
        <div className="grid grid-cols-[60px_repeat(7,minmax(0,1fr))] border-b border-ink-100 bg-ink-50/60">
          <div className="border-r border-ink-100" />
          {weekDays.map((day, i) => (
            <div key={i} className={`px-3 py-2 text-xs font-semibold text-center border-r border-ink-100 last:border-r-0 ${day.today ? 'bg-brand-50' : day.past ? 'opacity-40' : ''}`}>
              <div className={day.today ? 'text-brand-600' : 'text-ink-500'}>{day.short}</div>
              <div className={`text-base ${day.today ? 'text-brand-800' : 'text-ink-800'}`}>{day.date}</div>
            </div>
          ))}
        </div>

        <div>
          {hours.map((hour) => (
            <div key={hour} className="grid grid-cols-[60px_repeat(7,minmax(0,1fr))] border-b border-ink-50">
              <div className="px-3 py-2 text-[11px] text-ink-400 font-medium border-r border-ink-100">{hour}</div>
              {weekDays.map((day, i) => {
                const key = `${hour}-${i}`
                const slot = slots[key]
                const type = slot?.type ?? 'empty'
                const isPast = day.past

                if (isPast) return (
                  <div key={i} className="p-1 border-r border-ink-50">
                    <div className="w-full h-full min-h-[52px] rounded-md bg-ink-50 opacity-40" />
                  </div>
                )

                if (type === 'confirmed') return (
                  <div key={i} className="p-1 border-r border-ink-50">
                    <div className="w-full h-full min-h-[52px] rounded-md bg-brand-100 border border-brand-200 text-brand-800 p-1.5 cursor-pointer hover:bg-brand-200 transition">
                      <div className="text-[11px] font-semibold truncate">{slot?.name}</div>
                      <div className="text-[10px] opacity-70">{slot?.time}</div>
                    </div>
                  </div>
                )

                if (type === 'pending') return (
                  <div key={i} className="p-1 border-r border-ink-50">
                    <div className="w-full h-full min-h-[52px] rounded-md bg-amber-100 border border-amber-200 text-amber-800 p-1.5 cursor-pointer hover:bg-amber-200 transition">
                      <div className="text-[11px] font-semibold truncate">{slot?.name}</div>
                      <div className="text-[10px] opacity-70">{slot?.time}</div>
                    </div>
                  </div>
                )

                if (type === 'available') return (
                  <div key={i} className="p-1 border-r border-ink-50">
                    <div className="w-full h-full min-h-[52px] rounded-md bg-emerald-50 border border-dashed border-emerald-300 text-emerald-600 flex items-center justify-center cursor-pointer hover:bg-emerald-100 transition">
                      <span className="text-[11px] font-semibold">+ Müsait</span>
                    </div>
                  </div>
                )

                if (type === 'closed') return (
                  <div key={i} className="p-1 border-r border-ink-50">
                    <div className="w-full h-full min-h-[52px] rounded-md border border-ink-200"
                      style={{ backgroundImage: 'repeating-linear-gradient(45deg,#f8fafc,#f8fafc 6px,#f1f5f9 6px,#f1f5f9 12px)' }} />
                  </div>
                )

                return (
                  <div key={i} className="p-1 border-r border-ink-50">
                    <div className="w-full h-full min-h-[52px] rounded-md hover:bg-ink-50 cursor-pointer transition" />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// --- Aylık View ---
function MonthView({ offset }: { offset: number }) {
  const { year, month, daysInMonth, offset: startOffset, today } = getMonthDays(offset)
  const dayNames = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']
  const cells = Array.from({ length: startOffset + daysInMonth }, (_, i) => i < startOffset ? null : i - startOffset + 1)

  // Randevu sayıları mock
  const appointmentCounts: Record<number, number> = { 3: 2, 5: 1, 8: 3, 10: 4, 12: 2, 15: 5, 17: 1, 19: 3, 22: 2 }

  return (
    <div className="p-4">
      <div className="grid grid-cols-7 mb-2">
        {dayNames.map((d) => (
          <div key={d} className="text-center text-[11px] font-semibold text-ink-500 py-1">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (!day) return <div key={i} />
          const isToday = today.getDate() === day && today.getMonth() === month && today.getFullYear() === year
          const isPast = new Date(year, month, day) < today
          const count = appointmentCounts[day]
          return (
            <div
              key={i}
              className={`aspect-square rounded-xl flex flex-col items-center justify-center cursor-pointer transition text-sm font-semibold ${
                isToday
                  ? 'bg-brand-600 text-white'
                  : isPast
                  ? 'text-ink-300 cursor-not-allowed'
                  : 'hover:bg-ink-50 text-ink-800'
              }`}
            >
              {day}
              {count && !isPast && (
                <span className={`w-1.5 h-1.5 rounded-full mt-0.5 ${isToday ? 'bg-white/70' : 'bg-brand-400'}`} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// --- Günlük View ---
function DayView() {
  const today = new Date()
  const dayNames = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi']
  const daySlots = hours.map((hour) => {
    const slot = slots[`${hour}-4`] // Bugün için index 4 (Cuma) statik, ileride dinamik
    return { hour, slot: slot ?? { type: 'empty' as SlotType } }
  })

  return (
    <div className="p-4">
      <div className="text-sm font-semibold text-ink-900 mb-4">
        {dayNames[today.getDay()]}, {today.getDate()} {monthNames[today.getMonth()]} {today.getFullYear()}
      </div>
      <div className="space-y-1">
        {daySlots.map(({ hour, slot }) => (
          <div key={hour} className="grid grid-cols-[60px_1fr] gap-2 items-center min-h-[48px]">
            <div className="text-[11px] text-ink-400 font-medium">{hour}</div>
            {slot.type === 'confirmed' ? (
              <div className="rounded-xl bg-brand-100 border border-brand-200 text-brand-800 px-3 py-2 cursor-pointer hover:bg-brand-200 transition">
                <div className="text-xs font-semibold">{slot.name}</div>
                <div className="text-[10px] opacity-70">{slot.time}</div>
              </div>
            ) : slot.type === 'pending' ? (
              <div className="rounded-xl bg-amber-100 border border-amber-200 text-amber-800 px-3 py-2 cursor-pointer hover:bg-amber-200 transition">
                <div className="text-xs font-semibold">{slot.name}</div>
                <div className="text-[10px] opacity-70">{slot.time}</div>
              </div>
            ) : slot.type === 'available' ? (
              <div className="rounded-xl bg-emerald-50 border border-dashed border-emerald-300 text-emerald-600 flex items-center justify-center py-2 cursor-pointer hover:bg-emerald-100 transition">
                <span className="text-xs font-semibold">+ Müsait</span>
              </div>
            ) : slot.type === 'closed' ? (
              <div className="rounded-xl border border-ink-200 h-10"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg,#f8fafc,#f8fafc 6px,#f1f5f9 6px,#f1f5f9 12px)' }} />
            ) : (
              <div className="rounded-xl border border-transparent hover:bg-ink-50 h-10 cursor-pointer transition" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// --- Ana Component ---
export default function WeeklyCalendar() {
  const [mode, setMode] = useState<CalendarMode>('Hafta')
  const [offset, setOffset] = useState(0)

  const getTitle = () => {
    if (mode === 'Hafta') {
      const days = getWeekDays(offset)
      return `${days[0].date} - ${days[6].date} ${monthNames[new Date().getMonth()]}`
    }
    if (mode === 'Ay') {
      const { year, month } = getMonthDays(offset)
      return `${monthNames[month]} ${year}`
    }
    const today = new Date()
    return `${today.getDate()} ${monthNames[today.getMonth()]}`
  }

  return (
    <div className="xl:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] overflow-hidden">
      <div className="flex items-center justify-between p-4 sm:p-5 border-b border-ink-100 flex-wrap gap-3">
        <div>
          <h3 className="font-semibold text-ink-900">
            {mode === 'Hafta' ? 'Haftalık Takvim' : mode === 'Ay' ? 'Aylık Takvim' : 'Günlük Takvim'}
          </h3>
          <p className="text-xs text-ink-500 mt-0.5">{getTitle()}</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex bg-ink-100 rounded-lg p-1 text-xs font-semibold">
            {(['Hafta', 'Ay', 'Gün'] as CalendarMode[]).map((v) => (
              <button
                key={v}
                onClick={() => { setMode(v); setOffset(0) }}
                className={`px-3 py-1 rounded-md transition cursor-pointer ${
                  mode === v ? 'bg-white shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] text-ink-900' : 'text-ink-500'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          {mode !== 'Gün' && (
            <>
              <button
                onClick={() => setOffset((p) => p - 1)}
                className="w-8 h-8 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={2} />
              </button>
              <button
                onClick={() => setOffset((p) => p + 1)}
                className="w-8 h-8 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition"
              >
                <ChevronRight className="w-4 h-4" strokeWidth={2} />
              </button>
            </>
          )}
        </div>
      </div>

      {mode === 'Hafta' && <WeekView offset={offset} onOffset={setOffset} />}
      {mode === 'Ay'    && <MonthView offset={offset} />}
      {mode === 'Gün'   && <DayView />}

      <div className="flex items-center gap-4 px-5 py-3 border-t border-ink-100 text-xs text-ink-500 flex-wrap">
        {[
          { color: 'bg-brand-400',    label: 'Onaylı randevu' },
          { color: 'bg-amber-300',    label: 'Onay bekleyen'  },
          { color: 'bg-emerald-100 border border-emerald-300', label: 'Müsait' },
          { color: '', label: 'Kapalı', striped: true },
        ].map((item) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <span
              className={`w-3 h-3 rounded border ${item.color}`}
              style={item.striped ? { backgroundImage: 'repeating-linear-gradient(45deg,#f8fafc,#f8fafc 4px,#f1f5f9 4px,#f1f5f9 8px)', borderColor: '#e2e8f0' } : {}}
            />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}