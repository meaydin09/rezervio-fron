export interface CalendarDay {
  day: number
  variant: 'default' | 'active' | 'selected' | 'disabled'
}

export interface TimeSlot {
  time: string
  variant: 'default' | 'selected' | 'disabled'
}