import type { StepNumber } from './types'

interface Props {
  currentStep: StepNumber
}

const steps = [
  { number: 1, label: 'Hesap Türü' },
  { number: 2, label: 'Bilgiler' },
  { number: 3, label: 'Linkin' },
]

export default function Stepper({ currentStep }: Props) {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-6 sm:mb-8 px-2">
      {steps.map((step, i) => {
        const isDone = step.number < currentStep
        const isActive = step.number === currentStep

        return (
          <div key={step.number} className="flex items-center gap-1 sm:gap-2">
            <div className={`flex items-center gap-2 ${!isActive && !isDone ? 'opacity-50' : ''}`}>
              <span
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                  isDone
                    ? 'bg-emerald-500 text-white'
                    : isActive
                    ? 'bg-brand-600 text-white'
                    : 'bg-ink-200 text-ink-600'
                }`}
              >
                {isDone ? (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  step.number
                )}
              </span>
              <span className="hidden sm:inline text-xs font-semibold text-ink-700">
                {step.label}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div className="w-6 sm:w-12 h-px bg-ink-200 mx-1" />
            )}
          </div>
        )
      })}
    </div>
  )
}