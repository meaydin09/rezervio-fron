import Link from 'next/link'
import type { BillingPeriod, PricingPlan } from './types'

interface Props {
  plan: PricingPlan
  billing: BillingPeriod
}

export default function PricingCard({ plan, billing }: Props) {
  const price = billing === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice
  const period = billing === 'monthly' ? plan.monthlyPeriod : plan.yearlyPeriod
  const description = billing === 'monthly' ? plan.monthlyDescription : plan.yearlyDescription
  const checkColor = plan.featured ? 'text-emerald-300' : 'text-emerald-500'

  if (plan.featured) {
    return (
      <div className="bg-ink-900 text-white rounded-2xl p-6 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.12)] relative">
        <span className="absolute -top-3 left-6 bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          En Popüler
        </span>
        <div className="text-xs font-semibold uppercase tracking-wider text-brand-300">{plan.label}</div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-base font-medium text-white/60">{period}</span>
        </div>
        <p className="text-sm text-white/70 mt-2">{description}</p>
        <ul className="mt-5 space-y-2.5 text-sm">
          {plan.features.map((feature) => (
            <li key={feature.text} className="flex items-center gap-2">
              <span className={checkColor}>✓</span>
              {feature.text}
            </li>
          ))}
        </ul>
        <Link
          href={plan.ctaHref}
          className="mt-6 w-full block text-center bg-white hover:bg-ink-100 text-ink-900 font-semibold py-2.5 rounded-lg transition"
        >
          {plan.ctaText}
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-ink-100 p-6 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.08)] sm:col-span-2 lg:col-span-1">
      <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">{plan.label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-ink-900">{price}</span>
        <span className="text-base font-medium text-ink-500">{period}</span>
      </div>
      <p className="text-sm text-ink-600 mt-2">{description}</p>
      <ul className="mt-5 space-y-2.5 text-sm">
        {plan.features.map((feature) => (
          <li
            key={feature.text}
            className={`flex items-center gap-2 ${!feature.included ? 'text-ink-400' : 'text-ink-900'}`}
          >
            <span className={feature.included ? checkColor : ''}>{feature.included ? '✓' : '—'}</span>
            {feature.text}
          </li>
        ))}
      </ul>
      <Link
        href={plan.ctaHref}
        className="mt-6 w-full block text-center bg-ink-100 hover:bg-ink-200 text-ink-800 font-semibold py-2.5 rounded-lg transition"
      >
        {plan.ctaText}
      </Link>
    </div>
  )
}