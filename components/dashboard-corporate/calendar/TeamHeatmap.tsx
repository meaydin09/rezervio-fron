import { heatmapRows } from '../data/specialists-data'

const cellStyles: Record<number, { className: string; style?: React.CSSProperties }> = {
  0: { className: 'bg-emerald-100 border border-emerald-300 cursor-pointer hover:opacity-80' },
  1: { className: 'bg-brand-100 border border-brand-300 cursor-pointer hover:opacity-80' },
  2: { className: 'bg-amber-100 border border-amber-300 cursor-pointer hover:opacity-80' },
  3: { className: 'bg-rose-100 border border-rose-300 cursor-pointer hover:opacity-80' },
  4: {
    className: 'border border-ink-200',
    style: { backgroundImage: 'repeating-linear-gradient(45deg,#f8fafc,#f8fafc 4px,#f1f5f9 4px,#f1f5f9 8px)' },
  },
}

export default function TeamHeatmap() {
  return (
    <div className="divide-y divide-ink-50">
      {heatmapRows.map((row) => (
        <div key={row.specialist.initials} className="grid grid-cols-[140px_repeat(7,1fr)] items-center min-h-[48px]">
          {/* Uzman ismi */}
          <div className="flex items-center gap-2 pr-3 py-2 border-r border-ink-100">
            <div className={`w-7 h-7 ml-1 rounded-lg ${row.specialist.bgColor} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
              {row.specialist.initials}
            </div>
            <span className="text-xs font-medium truncate text-ink-700">
            {row.specialist.name
                .replace('Psk. ', '')
                .replace('Dr. ', '')
                .replace('Uzm. ', '')
                .split(' ')
                .map((w, i) => i === 0 ? w : w[0] + '.')
                .join(' ')}
            </span>
          </div>

          {/* Slot hücreleri */}
          {row.slots.map((status, i) => {
            const isToday = i === 4
            const cell = cellStyles[status]
            return (
              <div
                key={i}
                className={`h-full min-h-[48px] border-r border-ink-50 last:border-r-0 p-1 ${isToday ? 'bg-brand-50/40' : ''}`}
              >
                <div
                  className={`w-full h-full rounded-md transition ${cell.className}`}
                  style={cell.style}
                />
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}