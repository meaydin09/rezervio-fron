'use client'

import { useState } from 'react'

type Period = 'gunluk' | 'aylik' | 'yillik'

const periods: { key: Period; label: string }[] = [
  { key: 'gunluk', label: 'Günlük' },
  { key: 'aylik', label: 'Aylık' },
  { key: 'yillik', label: 'Yıllık' },
]

const data: Record<Period, {
  labels: string[]
  yLabels: string[]
  summary: { toplam: string; profesyonel: string; kurumsal: string }
  toplam: number[]
  profesyonel: number[]
  kurumsal: number[]
}> = {
  gunluk: {
    labels: ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'],
    yLabels: ['₺50k','₺40k','₺30k','₺20k','₺10k','₺0'],
    summary: { toplam: '₺48k', profesyonel: '₺32k', kurumsal: '₺16k' },
    toplam:       [12,18,22,15,28,35,30,42,38,45,40,48],
    profesyonel:  [8, 12,15,10,18,22,20,28,25,30,27,32],
    kurumsal:     [4, 6, 7, 5, 10,13,10,14,13,15,13,16],
  },
  aylik: {
    labels: ['Haz','Tem','Ağu','Eyl','Eki','Kas','Ara','Oca','Şub','Mar','Nis','May'],
    yLabels: ['₺800k','₺600k','₺400k','₺200k','₺0'],
    summary: { toplam: '₺624k', profesyonel: '₺478k', kurumsal: '₺146k' },
    toplam:       [320,380,360,430,450,520,510,580,600,650,680,720],
    profesyonel:  [210,250,240,285,300,345,340,385,400,430,450,480],
    kurumsal:     [110,130,120,145,150,175,170,195,200,220,230,240],
  },
  yillik: {
    labels: ['2020','2021','2022','2023','2024','2025','2026'],
    yLabels: ['₺8M','₺6M','₺4M','₺2M','₺0'],
    summary: { toplam: '₺8.1M', profesyonel: '₺5.3M', kurumsal: '₺2.8M' },
    toplam:       [1200,2100,3400,4800,6200,7500,8100],
    profesyonel:  [800, 1400,2200,3100,4000,4900,5300],
    kurumsal:     [400, 700, 1200,1700,2200,2600,2800],
  },
}

function buildPath(values: number[], W = 400, H = 220) {
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

export default function RevenueChart() {
  const [period, setPeriod] = useState<Period>('aylik')
  const { labels, yLabels, summary, toplam, profesyonel, kurumsal } = data[period]

  const t = buildPath(toplam)
  const p = buildPath(profesyonel)
  const k = buildPath(kurumsal)

  return (
    <div className="xl:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <h3 className="font-semibold text-ink-900">Gelir Trendi</h3>
          <p className="text-xs text-ink-500 mt-0.5">Toplam · Profesyonel · Kurumsal</p>
        </div>
        <div className="flex gap-1 text-xs font-semibold">
          {periods.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setPeriod(key)}
              className={`px-3 py-1.5 rounded-md transition cursor-pointer ${period === key ? 'bg-ink-900 text-white' : 'text-ink-500 hover:bg-ink-50'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-56 sm:h-64">
        <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-ink-400 pointer-events-none">
          {yLabels.map((l) => (
            <div key={l} className="border-b border-dashed border-ink-100"><span>{l}</span></div>
          ))}
        </div>
        <svg viewBox="0 0 400 220" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="adminTotalGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={t.area} fill="url(#adminTotalGrad)" />
          <path d={t.line} fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d={p.line} fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
          <path d={k.line} fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
          <circle cx={t.last.x} cy={t.last.y} r="5" fill="#4f46e5" />
          <circle cx={t.last.x} cy={t.last.y} r="9" fill="#4f46e5" fillOpacity="0.2" />
        </svg>
      </div>

      <div className="mt-3 grid text-[10px] text-ink-400 font-medium" style={{ gridTemplateColumns: `repeat(${labels.length}, 1fr)` }}>
        {labels.map((m, i) => <div key={i}>{m}</div>)}
      </div>

      <div className="mt-4 pt-4 border-t border-ink-100 flex items-center gap-4 text-xs flex-wrap">
        <div className="flex items-center gap-1.5"><span className="w-3 h-1 rounded bg-brand-600" /> Toplam <strong>{summary.toplam}</strong></div>
        <div className="flex items-center gap-1.5"><span className="w-3 border-t-2 border-dashed border-brand-300" /> Profesyonel <strong>{summary.profesyonel}</strong></div>
        <div className="flex items-center gap-1.5"><span className="w-3 border-t-2 border-dashed border-rose-400" /> Kurumsal <strong>{summary.kurumsal}</strong></div>
      </div>
    </div>
  )
}
