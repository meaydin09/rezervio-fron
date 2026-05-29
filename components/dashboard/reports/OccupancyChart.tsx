'use client'

import { useState } from 'react'

type Period = '12ay' | '6ay' | '30gun'

const data: Record<Period, { label: string; values: number[]; labels: string[] }> = {
  '12ay': {
    label: 'Son 12 ay · % bazında',
    values: [42, 48, 44, 58, 62, 72, 68, 78, 80, 85, 88, 92],
    labels: ['Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara', 'Oca', 'Şub', 'Mar', 'Nis', 'May'],
  },
  '6ay': {
    label: 'Son 6 ay · % bazında',
    values: [68, 78, 80, 85, 88, 92],
    labels: ['Ara', 'Oca', 'Şub', 'Mar', 'Nis', 'May'],
  },
  '30gun': {
    label: 'Son 30 gün · % bazında',
    values: [70,65,80,75,90,85,78,88,92,86,94,89,76,82,91,87,93,88,79,85,90,84,96,91,88,94,89,92,95,97],
    labels: Array.from({ length: 30 }, (_, i) => String(i + 1)),
  },
}

const periods: { key: Period; label: string }[] = [
  { key: '12ay', label: '12 Ay' },
  { key: '6ay', label: '6 Ay' },
  { key: '30gun', label: '30 Gün' },
]

function buildPath(values: number[], W = 400, H = 200) {
  const n = values.length
  const pts = values.map((v, i) => ({
    x: n === 1 ? W / 2 : (i / (n - 1)) * W,
    y: H - (v / 100) * H * 0.9 - H * 0.05,
  }))
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
  const area = `${line} L${W},${H} L0,${H} Z`
  return { line, area, last: pts[pts.length - 1] }
}

export default function OccupancyChart() {
  const [period, setPeriod] = useState<Period>('12ay')
  const { label, values, labels } = data[period]
  const { line, area, last } = buildPath(values)
  const showEvery = period === '30gun' ? 5 : 1

  return (
    <div className="xl:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <h3 className="font-semibold text-ink-900">Aylık Doluluk Oranı</h3>
          <p className="text-xs text-ink-500 mt-0.5">{label}</p>
        </div>
        <div className="flex gap-1 text-xs font-semibold">
          {periods.map(({ key, label: l }) => (
            <button
              key={key}
              onClick={() => setPeriod(key)}
              className={`px-3 py-1.5 rounded-md transition cursor-pointer ${period === key ? 'bg-ink-900 text-white' : 'text-ink-500 hover:bg-ink-50'}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-48 sm:h-56">
        <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-ink-400 pointer-events-none">
          {['100%', '75%', '50%', '25%', '0%'].map((lbl) => (
            <div key={lbl} className="border-b border-dashed border-ink-100"><span>{lbl}</span></div>
          ))}
        </div>
        <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="fillGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#fillGrad)" />
          <path d={line} fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx={last.x} cy={last.y} r="5" fill="#4f46e5" />
          <circle cx={last.x} cy={last.y} r="9" fill="#4f46e5" fillOpacity="0.2" />
        </svg>
      </div>

      <div className="mt-3 grid text-[10px] text-ink-400 font-medium" style={{ gridTemplateColumns: `repeat(${labels.length}, 1fr)` }}>
        {labels.map((m, i) => (
          <div key={i}>{i % showEvery === 0 ? m : ''}</div>
        ))}
      </div>
    </div>
  )
}
