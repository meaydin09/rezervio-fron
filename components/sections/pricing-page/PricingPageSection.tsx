'use client'

import { useState } from 'react'
import type { PlanType } from './types'
import PricingHeader from './header/PricingHeader'
import BenefitsCard from './benefits/BenefitsCard'
import CheckoutCard from './checkout/CheckoutCard'
import TrustSection from './trust/TrustSection'

export default function PricingPageSection() {
  const [plan, setPlan] = useState<PlanType>('profesyonel')

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-20">
      <PricingHeader plan={plan} onChange={setPlan} />

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <BenefitsCard plan={plan} />
        </div>
        <CheckoutCard plan={plan} />
      </div>

      <TrustSection />
    </main>
  )
}