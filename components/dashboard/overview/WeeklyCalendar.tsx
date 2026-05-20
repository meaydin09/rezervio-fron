import { ChevronLeft, ChevronRight } from 'lucide-react'

const weekDays = [
  { short: 'Pzt', date: 11, today: false },
  { short: 'Sal', date: 12, today: false },
  { short: 'Çar', date: 13, today: false },
  { short: 'Per', date: 14, today: false },
  { short: 'Cum', date: 15, today: true },
  { short: 'Cmt', date: 16, today: false },
  { short: 'Paz', date: 17, today: false },
]

const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

type SlotType = 'confirmed' | 'pending' | 'available' | 'closed' | 'empty'

interface Slot {
  type: SlotType
  name?: string
  time?: string
}

const slots: Record<string, Slot> = {
  '10:00-0': { type: 'confirmed', name: 'Selin D.', time: '10:00' },
  '11:00-1': { type: 'confirmed', name: 'Ahmet K.', time: '11:00' },
  '09:00-1': { type: 'available' },
  '10:00-2': { type: 'confirmed', name: 'Burak M.', time: '10:00' },
  '12:00-3': { type: 'confirmed', name: 'Deniz A.', time: '12:00' },
  '15:00-3': { type: 'available' },
  '14:00-1': { type: 'pending', name: 'Yeni', time: '14:00' },
  '18:00-3': { type: 'pending', name: 'Yeni', time: '18:00' },
  '10:00-4': { type: 'confirmed', name: 'Onur U.', time: '10:00' },
  '13:00-4': { type: 'confirmed', name: 'Ayşe Ş.', time: '13:00' },
  '16:00-4': { type: 'confirmed', name: 'Berk K.', time: '16:00' },
  '18:00-4': { type: 'available' },
  '14:00-5': { type: 'confirmed', name: 'Cem O.', time: '14:00' },
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

export default function WeeklyCalendar() {
  return (
    <div className="xl:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] overflow-hidden">
      <div className="flex items-center justify-between p-4 sm:p-5 border-b border-ink-100 flex-wrap gap-3">
        <div>
          <h3 className="font-semibold text-ink-900">Haftalık Takvim</h3>
          <p className="text-xs text-ink-500 mt-0.5">Boş bir saate tıklayıp müsait olarak işaretle</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex bg-ink-100 rounded-lg p-1 text-xs font-semibold">
            {['Hafta', 'Ay', 'Gün'].map((v, i) => (
              <button key={v} className={`px-3 py-1 rounded-md transition cursor-pointer ${i === 0 ? 'bg-white shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] text-ink-900' : 'text-ink-500'}`}>{v}</button>
            ))}
          </div>
          <button className="w-8 h-8 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition">
            <ChevronLeft className="w-4 h-4" strokeWidth={2} />
          </button>
          <button className="w-8 h-8 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition">
            <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[720px]">
          <div className="grid grid-cols-[60px_repeat(7,minmax(0,1fr))] border-b border-ink-100 bg-ink-50/60">
            <div />
            {weekDays.map((day, i) => (
              <div key={i} className={`px-3 py-2 text-xs font-semibold text-center ${day.today ? 'bg-brand-50' : ''}`}>
                <div className={day.today ? 'text-brand-600' : 'text-ink-500'}>{day.short}</div>
                <div className={`text-base ${day.today ? 'text-brand-800' : 'text-ink-800'}`}>{day.date}</div>
              </div>
            ))}
          </div>

          <div>
            {hours.map((hour) => (
              <div key={hour} className="grid grid-cols-[60px_repeat(7,minmax(0,1fr))] border-b border-ink-50">
                <div className="px-3 py-2 text-[11px] text-ink-400 font-medium pt-2">{hour}</div>
                {weekDays.map((_, i) => {
                  const key = `${hour}-${i}`
                  const slot = slots[key]
                  const type = slot?.type ?? 'empty'

                  if (type === 'confirmed') return (
                    <div key={i} className="p-1 border-r border-ink-50" >
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
                      <div
                        className="w-full h-full min-h-[52px] rounded-md border border-ink-200"
                        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #f8fafc, #f8fafc 6px, #f1f5f9 6px, #f1f5f9 12px)' }}
                      />
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

      <div className="flex items-center gap-4 px-5 py-3 border-t border-ink-100 text-xs text-ink-500 flex-wrap">
        {[
          { color: 'bg-brand-400', label: 'Onaylı randevu' },
          { color: 'bg-amber-300', label: 'Onay bekleyen' },
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