export type TabView = 'specialists' | 'combined' | 'services' | 'about'

export interface Specialist {
  id: number
  initials: string
  name: string
  title: string
  specialty: string
  rating: number
  price: string
  experience: string
  reviewCount: number
  bgColor: string
  services?: string[]
  availableCount: number | null
  nextAvailable?: string
  todaySlots?: string[]
}

export interface WeekDay {
  name: string
  shortName: string
  date: number
  status: 'available' | 'selected' | 'full' | 'closed'
  slotCount?: number
}

export interface TimeSlot {
  time: string
  variant: 'free' | 'selected' | 'taken'
}

export interface Service {
  id: number
  title: string
  category: string
  description: string
  price: string
  duration: string
  expertCount: number
  location: string
  iconBg: string
  iconColor: string
  badge?: string
}

export interface ServiceCategory {
  label: string
  count: number
}

export interface CombinedRow {
  specialist: Pick<Specialist, 'initials' | 'name' | 'title' | 'bgColor'>
  slots: number[]
}

export interface ClinicStat {
  value: string
  label: string
  bg: string
  textColor: string
}

export interface ClinicValue {
  title: string
  description: string
  iconBg: string
  iconColor: string
}

export interface ContactInfo {
  type: 'address' | 'phone' | 'whatsapp'
  label: string
  value: string | string[]
}

export interface WorkingHour {
  days: string
  hours: string
  closed?: boolean
}