import { useState } from 'react'
import { specialists } from '../data/specialists-data'
import type { Specialist, TimeSlot } from '../types'

const INITIAL_SLOTS: TimeSlot[] = [
  { time: '09:00', variant: 'free' },
  { time: '10:30', variant: 'free' },
  { time: '14:00', variant: 'selected' },
  { time: '15:30', variant: 'free' },
  { time: '17:00', variant: 'taken' },
]

export function useSpecialistSelect() {
  const [selected, setSelected] = useState<Specialist>(specialists[0])
  const [selectedDay, setSelectedDay] = useState(15)
  const [slots, setSlots] = useState<TimeSlot[]>(INITIAL_SLOTS)
  const [activeFilter, setActiveFilter] = useState('Tümü')

  const pickSpecialist = (specialist: Specialist) => setSelected(specialist)

  const pickDay = (date: number, isClosed: boolean, isFull: boolean) => {
    if (isClosed || isFull) return
    setSelectedDay(date)
  }

  const pickSlot = (time: string) => {
    setSlots((prev) =>
      prev.map((s) => ({
        ...s,
        variant: s.variant === 'taken' ? 'taken' : s.time === time ? 'selected' : 'free',
      }))
    )
  }

  return {
    selected,
    selectedDay,
    slots,
    activeFilter,
    pickSpecialist,
    pickDay,
    pickSlot,
    setActiveFilter,
  }
}