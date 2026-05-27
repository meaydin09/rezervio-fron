import { useState, useMemo } from 'react'
import { specialists, filterMap } from '../data/specialists-data'
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
  const today = new Date().getDate()
  const [selectedDay, setSelectedDay] = useState(today)
  const [slots, setSlots] = useState<TimeSlot[]>(INITIAL_SLOTS)
  const [activeFilter, setActiveFilter] = useState('Tümü')

  const filteredSpecialists = useMemo(() => {
    if (activeFilter === 'Tümü') return specialists
    const keywords = filterMap[activeFilter] ?? []
    return specialists.filter((s) =>
      keywords.some((kw) => s.specialty.toLowerCase().includes(kw.toLowerCase()))
    )
  }, [activeFilter])

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
    filteredSpecialists,
    pickSpecialist,
    pickDay,
    pickSlot,
    setActiveFilter,
  }
}