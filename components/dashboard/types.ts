export interface NavItem {
    label: string
    icon: string
    badge?: { text: string; color: string }
    href: string
  }
  
  export interface StatCardData {
    label: string
    period: string
    value: string
    unit?: string
    badge: { text: string; color: string }
    extra: React.ReactNode
  }
  
  export interface AppointmentData {
    initials: string
    name: string
    time: string
    type: string
    bgColor: string
    badges: { text: string; color: string }[]
  }
  
  export interface TicketData {
    id: string
    status: 'open' | 'pending' | 'resolved'
    title: string
    preview: string
    previewAuthor: string
    previewAuthorColor?: string
    meta: string
    priority?: string
    rating?: string
  }
  
  export interface HelpItem {
    label: string
    iconBg: string
    iconColor: string
  }
  
  export type ThemeName = 'indigo' | 'rose' | 'emerald' | 'amber' | 'slate' | 'sky'
  
  export interface ThemeConfig {
    name: ThemeName
    gradient: string
    color: string
    hex: string
  }