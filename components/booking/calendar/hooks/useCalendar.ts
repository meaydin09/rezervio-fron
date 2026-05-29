import { useState } from 'react'
import type { TimeSlot } from '../../types'

const DAY_NAMES = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
const FIRST_DAY_COL = 4
const DAYS_IN_MONTH = 31
const TODAY = new Date().getDate()
const AVAIL = new Set([16, 18, 19,  22, 25, 26, 27, 28, 29].filter(d => d >= TODAY))

const FULL = new Set([20,21])

const INITIAL_SLOTS: TimeSlot[] = [
  { time: '09:00', variant: 'free' },
  { time: '10:00', variant: 'free' },
  { time: '10:30', variant: 'selected' },
  { time: '11:00', variant: 'taken' },
  { time: '13:00', variant: 'free' },
  { time: '14:00', variant: 'free' },
  { time: '15:30', variant: 'free' },
  { time: '16:30', variant: 'taken' },
  { time: '17:00', variant: 'free' },
  { time: '18:00', variant: 'free' },
  { time: '19:00', variant: 'taken' },
  { time: '20:00', variant: 'free' },
]

export function useCalendar() {
  const [selectedDay, setSelectedDay] = useState(TODAY)

  const [selectedTime, setSelectedTime] = useState('10:30')
  const [slots, setSlots] = useState<TimeSlot[]>(INITIAL_SLOTS)

  const pickDate = (day: number) => {
    if (day < TODAY) return
    if (FULL.has(day) || (!AVAIL.has(day) && day !== TODAY)) return
    setSelectedDay(day)
  }

  const pickSlot = (time: string) => {
    setSlots((prev) =>
      prev.map((s) => ({
        ...s,
        variant: s.variant === 'taken' ? 'taken' : s.time === time ? 'selected' : 'free',
      }))
    )
    setSelectedTime(time)
  }

  const markTaken = (time: string) => {
    setSlots((prev) =>
      prev.map((s) => ({
        ...s,
        variant: s.time === time ? 'taken' : s.variant === 'selected' ? 'free' : s.variant,
      }))
    )
    setSelectedTime('')
  }

  const getDayName = (day: number) => {
    const idx = (FIRST_DAY_COL + day - 1) % 7
    return DAY_NAMES[idx]
  }

  const getFormattedDate = (day: number) =>
    `${day} Mayıs ${getDayName(day)}`

  return {
    selectedDay,
    selectedTime,
    slots,
    pickDate,
    pickSlot,
    markTaken,
    getFormattedDate,
    FIRST_DAY_COL,
    DAYS_IN_MONTH,
    TODAY,
    AVAIL,
    FULL,
  }
}