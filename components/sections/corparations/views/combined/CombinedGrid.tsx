import { ChevronLeft, ChevronRight } from 'lucide-react'
import { combinedRows, weekDays } from '../../data/combined-data'

const cellStyle = (status: number, isToday: boolean): string => {
  const todayRing = isToday ? 'ring-2 ring-brand-200' : ''
  if (status === 0) return `bg-emerald-100 border border-emerald-300 text-emerald-700 ${todayRing}`
  if (status === 1) return `bg-amber-100 border border-amber-300 text-amber-700 ${todayRing}`
  if (status === 2) return `bg-ink-100 border border-ink-200 text-ink-500 ${todayRing}`
  return 'border border-ink-200 text-ink-300'
}

const cellLabel = (status: number) => {
  if (status === 0) return <><div className="text-[11px] font-semibold">Boş</div><div className="text-[10px] opacity-80">4 saat</div></>
  if (status === 1) return <><div className="text-[11px] font-semibold">Az</div><div className="text-[10px] opacity-80">1 saat</div></>
  if (status === 2) return <div className="text-[11px] font-semibold">Dolu</div>
  return <div className="text-[11px]">—</div>
}

const cellBg = (status: number) => {
  if (status === 3) return { backgroundImage: 'repeating-linear-gradient(45deg,#f8fafc,#f8fafc 6px,#f1f5f9 6px,#f1f5f9 12px)' }
  return {}
}

export default function CombinedGrid() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] border border-ink-100 overflow-hidden">
      <div className="p-5 border-b border-ink-100 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h3 className="font-semibold text-ink-900">Tüm Uzmanların Müsaitliği</h3>
          <p className="text-xs text-ink-500 mt-0.5">12 uzmanın haftalık müsait saatleri bir arada</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <select className="text-xs border border-ink-200 rounded-lg px-2 py-1.5 bg-white cursor-pointer">
            <option>Tüm uzmanlık alanları</option>
            <option>Klinik Psikolog</option>
            <option>Psikiyatrist</option>
            <option>Çocuk & Ergen</option>
          </select>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition">
              <ChevronLeft className="w-4 h-4" strokeWidth={2} />
            </button>
            <span className="text-xs font-semibold px-2">11 - 17 May</span>
            <button className="w-8 h-8 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition">
              <ChevronRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[680px]">
          <div className="grid grid-cols-[160px_repeat(7,minmax(0,1fr))] bg-ink-50/60 border-b border-ink-100">
            <div className="px-4 py-3 text-xs font-semibold text-ink-600">Uzman</div>
            {weekDays.map((day, i) => (
              <div key={day.date} className={`px-2 py-3 text-xs font-semibold text-center ${i === 4 ? 'bg-brand-50' : ''}`}>
                <div className={i === 4 ? 'text-brand-600' : 'text-ink-500'}>{day.short}</div>
                <div className={`text-sm ${i === 4 ? 'text-brand-800' : 'text-ink-800'}`}>{day.date}</div>
              </div>
            ))}
          </div>

          {combinedRows.map((row) => (
            <div key={row.specialist.initials} className="grid grid-cols-[160px_repeat(7,minmax(0,1fr))] border-b border-ink-50 hover:bg-ink-50/40 transition">
              <div className="px-3 py-3 flex items-center gap-2.5 border-r border-ink-50">
                <div className={`w-9 h-9 rounded-lg ${row.specialist.bgColor} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                  {row.specialist.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold truncate text-ink-900">
                    {row.specialist.name.replace('Psk. ', '').replace('Dr. ', '').replace('Uzm. ', '')}
                  </div>
                  <div className="text-[10px] text-ink-500 truncate">{row.specialist.title}</div>
                </div>
              </div>
              {row.slots.map((status, i) => (
                <div key={i} className="p-1.5">
                  <div
                    className={`rounded-md h-full min-h-[52px] flex flex-col items-center justify-center text-center ${status !== 3 && status !== 2 ? 'cursor-pointer hover:opacity-80' : ''} ${cellStyle(status, i === 4)}`}
                    style={cellBg(status)}
                  >
                    {cellLabel(status)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 py-3 border-t border-ink-100 flex items-center gap-4 text-xs text-ink-500 flex-wrap">
        {[
          { color: 'bg-emerald-100 border-emerald-300', label: 'Boş saat var' },
          { color: 'bg-amber-100 border-amber-300', label: 'Az saat kaldı' },
          { color: 'bg-ink-100 border-ink-200', label: 'Dolu' },
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