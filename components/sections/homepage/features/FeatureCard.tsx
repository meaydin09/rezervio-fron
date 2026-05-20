import type { Feature } from './types'
import { FeatureIcon } from './FeatureIcon'

interface Props {
  feature: Feature
}

export default function FeatureCard({ feature }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-ink-100 p-6 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.08)] hover:shadow-[0_4px_16px_-4px_rgba(15,23,42,0.12)] transition">
      <div className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4`}>
        <FeatureIcon icon={feature.icon} colorClass={feature.iconColor} />
      </div>
      <h3 className="font-semibold text-lg text-ink-900">{feature.title}</h3>
      <p className="text-sm text-ink-600 mt-1.5 leading-relaxed">{feature.description}</p>
    </div>
  )
}