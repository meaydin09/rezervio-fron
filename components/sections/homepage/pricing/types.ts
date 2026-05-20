export type BillingPeriod = 'monthly' | 'yearly'

export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingPlan {
  id: string
  label: string
  monthlyPrice: string
  yearlyPrice: string
  monthlyPeriod: string
  yearlyPeriod: string
  monthlyDescription: string
  yearlyDescription: string
  features: PricingFeature[]
  ctaText: string
  ctaHref: string
  featured: boolean
}