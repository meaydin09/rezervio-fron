import { steps } from './step-list'
import StepCard from './StepCard'

export default function HowItWorksSection() {
  return (
    <section className="bg-ink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-300">
            Nasıl çalışır
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight">
            3 dakikada kurulum.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}