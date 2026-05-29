'use client'

import { useState } from 'react'

type Period = 'gunluk' | 'haftalik' | 'aylik' | 'yillik'

const periods: { key: Period; label: string }[] = [
  { key: 'gunluk', label: 'Günlük' },
  { key: 'haftalik', label: 'Haftalık' },
  { key: 'aylik', label: 'Aylık' },
  { key: 'yillik', label: 'Yıllık' },
]

type SeriesKey = 'toplam' | 'profesyonel' | 'kurumsal'

const data: Record<Period, {
  labels: string[]
  yLabels: string[]
  series: Record<SeriesKey, number[]>
}> = {
  gunluk: {
    labels: ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'],
    yLabels: ['₺50k','₺40k','₺30k','₺20k','₺10k','₺0'],
    series: {
      toplam:       [12,18,22,15,28,35,30,42,38,45,40,48],
      profesyonel:  [8, 12,15,10,18,22,20,28,25,30,27,32],
      kurumsal:     [4, 6, 7, 5, 10,13,10,14,13,15,13,16],
    },
  },
  haftalik: {
    labels: ['Hf1','Hf2','Hf3','Hf4','Hf5','Hf6','Hf7','Hf8','Hf9','Hf10','Hf11','Hf12'],
    yLabels: ['₺200k','₺150k','₺100k','₺50k','₺0'],
    series: {
      toplam:       [60,75,80,90,95,110,105,120,115,130,125,140],
      profesyonel:  [40,50,55,60,65,75, 70, 80, 78, 88, 85, 95],
      kurumsal:     [20,25,25,30,30,35, 35, 40, 37, 42, 40, 45],
    },
  },
  aylik: {
    labels: ['Haz','Tem','Ağu','Eyl','Eki','Kas','Ara','Oca','Şub','Mar','Nis','May'],
    yLabels: ['₺800k','₺600k','₺400k','₺200k','₺0'],
    series: {
      toplam:       [320,380,360,430,450,520,510,580,600,650,680,720],
      profesyonel:  [210,250,240,285,300,345,340,385,400,430,450,480],
      kurumsal:     [110,130,120,145,150,175,170,195,200,220,230,240],
    },
  },
  yillik: {
    labels: ['2020','2021','2022','2023','2024','2025','2026'],
    yLabels: ['₺8M','₺6M','₺4M','₺2M','₺0'],
    series: {
      toplam:       [1200,2100,3400,4800,6200,7500,8100],
      profesyonel:  [800, 1400,2200,3100,4000,4900,5300],
      kurumsal:     [400, 700, 1200,1700,2200,2600,2800],
    },
  },
}

const seriesConfig: { key: SeriesKey; label: string; color: string; gradId: string }[] = [
  { key: 'toplam',      label: 'Toplam',       color: '#10b981', gradId: 'gToplam' },
  { key: 'profesyonel', label: 'Profesyonel',  color: '#6366f1', gradId: 'gPro' },
  { key: 'kurumsal',    label: 'Kurumsal',     color: '#f59e0b', gradId: 'gKur' },
]

function buildPath(values: number[], W = 400, H = 280) {
  const n = values.length
  const max = Math.max(...values) * 1.1
  const pts = values.map((v, i) => ({
    x: n === 1 ? W / 2 : (i / (n - 1)) * W,
    y: H - (v / max) * H * 0.85 - H * 0.05,
  }))
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
  const area = `${line} L${W},${H} L0,${H} Z`
  return { line, area, last: pts[pts.length - 1] }
}

export default function AdminRevenueChart() {
  const [period, setPeriod] = useState<Period>('aylik')
  const [activeSeries, setActiveSeries] = useState<Set<SeriesKey>>(new Set(['toplam', 'profesyonel', 'kurumsal']))

  const { labels, yLabels, series } = data[period]
  const showEvery = labels.length > 8 ? 2 : 1

  const toggleSeries = (key: SeriesKey) => {
    setActiveSeries((prev) => {
      const next = new Set(prev)
      if (next.has(key) && next.size === 1) return prev
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  return (
    <div className="lg:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <h3 className="font-semibold text-ink-900">Gelir Trendi</h3>
          <div className="flex items-center gap-3 mt-1.5">
            {seriesConfig.map(({ key, label, color }) => (
              <button
                key={key}
                onClick={() => toggleSeries(key)}
                className={`flex items-center gap-1.5 text-xs font-medium transition cursor-pointer ${activeSeries.has(key) ? 'opacity-100' : 'opacity-30'}`}
              >
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-1 text-xs font-semibold">
          {periods.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setPeriod(key)}
              className={`px-3 py-1.5 rounded-md cursor-pointer transition ${period === key ? 'bg-ink-900 text-white' : 'text-ink-500 hover:bg-ink-50'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-72">
        <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-ink-400 pointer-events-none">
          {yLabels.map((l) => (
            <div key={l} className="border-b border-dashed border-ink-100"><span>{l}</span></div>
          ))}
        </div>
        <svg viewBox="0 0 400 280" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            {seriesConfig.map(({ gradId, color }) => (
              <linearGradient key={gradId} id={gradId} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>
          {seriesConfig.map(({ key, color, gradId }) => {
            if (!activeSeries.has(key)) return null
            const { line, area, last } = buildPath(series[key])
            return (
              <g key={key}>
                <path d={area} fill={`url(#${gradId})`} />
                <path d={line} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx={last.x} cy={last.y} r="5" fill={color} />
                <circle cx={last.x} cy={last.y} r="9" fill={color} fillOpacity="0.2" />
              </g>
            )
          })}
        </svg>
      </div>

      <div className="mt-3 grid text-[10px] text-ink-400 font-medium" style={{ gridTemplateColumns: `repeat(${labels.length}, 1fr)` }}>
        {labels.map((l, i) => (
          <div key={i}>{i % showEvery === 0 ? l : ''}</div>
        ))}
      </div>
    </div>
  )
}
