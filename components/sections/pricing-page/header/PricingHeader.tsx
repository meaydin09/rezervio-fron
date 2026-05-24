'use client'

import type { PlanType } from '../types'

interface Props {
  plan: PlanType
  onChange: (plan: PlanType) => void
}

export default function PricingHeader({ plan, onChange }: Props) {
  return (
    <div className="text-center mb-16">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold mb-6">
        <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
        Sizin İçin En İyi Planı Seçin
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink-900 mb-6 max-w-3xl mx-auto leading-tight">
        İşinizi büyütmek için gereken App.
      </h1>

      <div className="flex items-center justify-center gap-4 mt-10">
        <span className={`text-sm font-semibold transition ${plan === 'profesyonel' ? 'text-brand-600' : 'text-ink-400'}`}>
          Profesyonel
        </span>
        <button
          onClick={() => onChange(plan === 'profesyonel' ? 'kurumsal' : 'profesyonel')}
          className="relative w-14 h-8 rounded-full bg-brand-100 p-1 transition-colors duration-300 cursor-pointer"
        >
          <div className={`w-6 h-6 rounded-full bg-brand-600 shadow-lg transform transition-transform duration-300 ${
            plan === 'kurumsal' ? 'translate-x-6' : 'translate-x-0'
          }`} />
        </button>
        <span className={`text-sm font-semibold transition ${plan === 'kurumsal' ? 'text-brand-600' : 'text-ink-400'}`}>
          Kurumsal
        </span>
      </div>
    </div>
  )
}