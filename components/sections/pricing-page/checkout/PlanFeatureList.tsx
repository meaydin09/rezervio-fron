import { Check } from 'lucide-react'
import type { PlanFeature } from '../types'

interface Props {
  features: PlanFeature[]
}

export default function PlanFeatureList({ features }: Props) {
  return (
    <ul className="space-y-3 mb-8">
      {features.map((f) => (
        <li key={f.text} className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-brand-600" strokeWidth={3} />
          </div>
          <span className="text-sm font-semibold text-ink-900">{f.text}</span>
        </li>
      ))}
    </ul>
  )
}