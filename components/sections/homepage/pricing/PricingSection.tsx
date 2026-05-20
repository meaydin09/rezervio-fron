'use client'

import { useState } from 'react'
import { plans } from './pricing-list'
import PricingCard from './PricingCard'
import BillingToggle from './BillingToggle'
import type { BillingPeriod } from './types'

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingPeriod>('monthly')

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-600">
          Fiyatlandırma
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight text-ink-900">
          Şeffaf ve esnek.
        </h2>
        <p className="mt-3 text-ink-600">İstediğin zaman iptal edebilirsin. Kart bilgisi gerekmez.</p>
      </div>

      <div className="mt-8 flex justify-center">
        <BillingToggle billing={billing} onChange={setBilling} />
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} billing={billing} />
        ))}
      </div>
    </section>
  )
}