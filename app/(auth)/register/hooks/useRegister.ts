import { useState } from 'react'
import type { AccountType, RegisterFormData, StepNumber } from '../types'

const initialForm: RegisterFormData = {
  accountType: 'bireysel',
  firstName: '',
  lastName: '',
  companyName: '',
  authorizedFirstName: '',
  authorizedLastName: '',
  specializations: [],
  email: '',
  password: '',
  slug: '',
  termsAccepted: false,
}

export function useRegister() {
  const [step, setStep] = useState<StepNumber>(1)
  const [form, setForm] = useState<RegisterFormData>(initialForm)

  const goToStep = (s: StepNumber) => setStep(s)

  const setAccountType = (type: AccountType) =>
    setForm((prev) => ({ ...prev, accountType: type }))

  const updateField = <K extends keyof RegisterFormData>(
    key: K,
    value: RegisterFormData[K]
  ) => setForm((prev) => ({ ...prev, [key]: value }))

  const toggleSpecialization = (spec: string) => {
    setForm((prev) => ({
      ...prev,
      specializations: prev.specializations.includes(spec) ? [] : [spec],
    }))
  }

  return {
    step,
    form,
    goToStep,
    setAccountType,
    updateField,
    toggleSpecialization,
  }
}