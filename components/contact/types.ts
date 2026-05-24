export interface ContactField {
  label: string
  placeholder: string
  type: 'text' | 'email' | 'textarea'
  colSpan?: boolean
}

export interface ContactInfoItem {
  label: string
  value: string
  href?: string
  icon: 'mail' | 'phone' | 'location'
}