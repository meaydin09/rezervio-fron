'use client'

import type { BillingPeriod } from './types'

interface Props {
  billing: BillingPeriod
  onChange: (billing: BillingPeriod) => void
}

export default function BillingToggle({ billing, onChange }: Props) {
  return (
    <div className="inline-flex bg-ink-100 rounded-full p-1 text-sm font-semibold">
      <button
        onClick={() => onChange('monthly')}
        className={`px-5 py-2 rounded-full transition cursor-pointer ${
          billing === 'monthly'
            ? 'bg-white shadow-[0_2px_8px_-2px_rgba(15,23,42,0.08)] text-ink-900'
            : 'text-ink-600'
        }`}
      >
        Aylık
      </button>
      <button
        onClick={() => onChange('yearly')}
        className={`px-5 py-2 rounded-full transition flex items-center gap-2 cursor-pointer ${
          billing === 'yearly'
            ? 'bg-white shadow-[0_2px_8px_-2px_rgba(15,23,42,0.08)] text-ink-900'
            : 'text-ink-600'
        }`}
      >
        Yıllık
        <span className="bg-emerald-100 text-emerald-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
          2 ay bedava
        </span>
      </button>
    </div>
  )
}