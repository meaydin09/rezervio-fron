import { topPerformers } from '../data/specialists-data'

export default function TopPerformers() {
  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <h3 className="font-semibold text-ink-900">En Performanslı Uzmanlar</h3>
      <p className="text-xs text-ink-500 mt-0.5">Bu ay</p>
      <div className="mt-4 space-y-3">
        {topPerformers.map((p) => (
          <div key={p.initials} className="flex items-center gap-3">
            <div className="w-7 h-7 flex items-center justify-center text-xs rounded bg-ink-50">{p.rank}</div>
            <div className={`w-9 h-9 rounded-lg ${p.bgColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
              {p.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate text-ink-900">{p.name}</div>
              <div className="text-xs text-ink-500">{p.stats}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}