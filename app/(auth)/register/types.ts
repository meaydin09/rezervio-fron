export type AccountType = 'bireysel' | 'kurumsal'
export type StepNumber = 1 | 2 | 3

export interface RegisterFormData {
  accountType: AccountType
  firstName: string
  lastName: string
  companyName: string
  authorizedFirstName: string
  authorizedLastName: string
  specializations: string[]
  email: string
  password: string
  slug: string
  termsAccepted: boolean
}