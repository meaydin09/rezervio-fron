'use client'

import Link from 'next/link'
import Image from 'next/image'
import Stepper from './Stepper'
import StepAccountType from './steps/StepAccountType'
import StepInfo from './steps/StepInfo'
import StepSlug from './steps/StepSlug'
import { useRegister } from './hooks/useRegister'

export default function RegisterPage() {
  const { step, form, goToStep, setAccountType, updateField, toggleSpecialization } = useRegister()

  return (
    <div className="min-h-screen flex items-start justify-center px-4 sm:px-6 pt-24 pb-12 gradient-bg">
      <div className="w-full max-w-2xl">

        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-6">
          <Image src="/rezervio-logo.png" alt="Rezervio" width={120} height={36} priority />
        </Link>

        <Stepper currentStep={step} />

        <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5 sm:p-8">
          {step === 1 && (
            <StepAccountType
              selected={form.accountType}
              onSelect={setAccountType}
              onNext={goToStep}
            />
          )}
          {step === 2 && (
            <StepInfo
              form={form}
              onUpdate={updateField}
              onToggleSpec={toggleSpecialization}
              onNext={goToStep}
              onBack={goToStep}
            />
          )}
          {step === 3 && (
            <StepSlug
              form={form}
              onUpdate={updateField}
              onBack={goToStep}
            />
          )}
        </div>

        <p className="mt-5 text-center text-sm text-ink-600">
          Zaten hesabın var mı?{' '}
          <Link href="/login" className="font-semibold text-brand-600 hover:underline">
            Giriş yap
          </Link>
        </p>

      </div>
    </div>
  )
}