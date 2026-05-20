export interface CalendarDay {
    day: number
    variant: 'available' | 'selected' | 'today' | 'full' | 'empty'
  }
  
  export interface TimeSlot {
    time: string
    variant: 'free' | 'selected' | 'taken'
  }
  
  export interface ProfileStat {
    icon: 'clock' | 'money' | 'location' | 'language'
    label: string
    value: string
  }
  
  export interface Education {
    title: string
    institution: string
    period: string
    color: string
  }
  
  export interface Certificate {
    title: string
    issuer: string
    year: string
  }
  
  export interface Document {
    title: string
    meta: string
    type: 'pdf' | 'image'
    verified?: boolean
  }
  
  export interface Experience {
    title: string
    company: string
    period: string
    color: string
    current?: boolean
  }
  
  export interface BookingFormData {
    firstName: string
    lastName: string
    phone: string
    email: string
    note: string
    kvkkAccepted: boolean
  }