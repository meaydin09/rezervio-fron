import type { Step } from './types'

interface Props {
  step: Step
}

export default function StepCard({ step }: Props) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <div className="text-3xl font-bold text-brand-300">{step.number}</div>
      <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
      <p className="text-sm text-white/60 mt-1.5 leading-relaxed">{step.description}</p>
    </div>
  )
}