import { ChevronLeft, ChevronRight } from 'lucide-react'
import TeamHeatmap from './TeamHeatmap'

const weekDays = [
  { short: 'Pzt', date: 11, today: false },
  { short: 'Sal', date: 12, today: false },
  { short: 'Çar', date: 13, today: false },
  { short: 'Per', date: 14, today: false },
  { short: 'Cum', date: 15, today: true },
  { short: 'Cmt', date: 16, today: false },
  { short: 'Paz', date: 17, today: false },
]

const legend = [
  { className: 'bg-emerald-100 border border-emerald-300', label: 'Müsait' },
  { className: 'bg-brand-100 border border-brand-300',    label: 'Onaylı' },
  { className: 'bg-amber-100 border border-amber-300',    label: 'Az yer' },
  { className: 'bg-rose-100 border border-rose-300',      label: 'Dolu' },
  { className: 'bg-ink-100 border border-ink-200',        label: 'Kapalı' },
]

export default function TeamCalendar() {
  return (
    <div className="xl:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-ink-100 flex-wrap gap-3">
        <div>
          <h3 className="font-semibold text-ink-900">Ekip Takvimi</h3>
          <p className="text-xs text-ink-500 mt-0.5">Uzman seçerek o uzmanın takvimini görün</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer">
            <option>Tüm Uzmanlar (12)</option>
            <option>Psk. Onur Uzun</option>
            <option>Dr. Mert Doğan</option>
            <option>Psk. Selin Kaya</option>
            <option>Uzm. Can Özdemir</option>
          </select>
          <button className="w-8 h-8 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition">
            <ChevronLeft className="w-4 h-4" strokeWidth={2} />
          </button>
          <button className="w-8 h-8 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition">
            <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Takvim grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[640px]">

          {/* Gün başlıkları — heatmap ile aynı grid */}
          <div className="grid grid-cols-[140px_repeat(7,1fr)] border-b border-ink-100 bg-ink-50/60">
            <div className="border-r border-ink-100" />
            {weekDays.map((day, i) => (
              <div
                key={i}
                className={`py-2.5 text-center border-r border-ink-100 last:border-r-0 ${day.today ? 'bg-brand-50' : ''}`}
              >
                <div className={`text-[10px] font-semibold ${day.today ? 'text-brand-600' : 'text-ink-500'}`}>
                  {day.short}
                </div>
                <div className={`text-sm font-bold mt-0.5 ${day.today ? 'text-brand-800' : 'text-ink-800'}`}>
                  {day.date}
                </div>
              </div>
            ))}
          </div>

          {/* Heatmap satırları */}
          <TeamHeatmap />

        </div>
      </div>

      {/* Legend */}
      <div className="px-5 py-3 border-t border-ink-100 flex items-center gap-4 text-xs text-ink-500 flex-wrap">
        {legend.map((item) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded ${item.className}`} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}