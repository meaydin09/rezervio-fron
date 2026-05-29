'use client'

import { useState, useEffect } from 'react'
import { useSpecialistSelect } from '../../hooks/useSpecialistSelect'
import { specialists } from '../../data/specialists-data'
import SpecialistList from './SpecialistList'
import SpecialistDetail from './SpecialistDetail'

interface Props {
  preselectedSpecialistId?: number | null
  onPreselectedConsumed?: () => void
}

export default function SpecialistsView({ preselectedSpecialistId, onPreselectedConsumed }: Props) {
  const {
    selected, selectedDay, slots, activeFilter, filteredSpecialists,
    pickSpecialist, pickDay, pickSlot, setActiveFilter,
  } = useSpecialistSelect()

  const [showDetail, setShowDetail] = useState(false)

  useEffect(() => {
    if (preselectedSpecialistId == null) return
    const s = specialists.find((sp) => sp.id === preselectedSpecialistId)
    if (s) {
      pickSpecialist(s)
      setShowDetail(true)
    }
    onPreselectedConsumed?.()
  }, [preselectedSpecialistId])

  const handleSelect = (s: Parameters<typeof pickSpecialist>[0]) => {
    pickSpecialist(s)
    setShowDetail(true)
  }

  return (
    <>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className={`col-span-1 lg:col-span-5 ${showDetail ? 'hidden lg:block' : 'block'}`}>
          <SpecialistList
            selected={selected}
            activeFilter={activeFilter}
            filteredSpecialists={filteredSpecialists}
            onSelect={handleSelect}
            onFilterChange={setActiveFilter}
          />
        </div>

        <div className={`col-span-1 lg:col-span-7 ${showDetail ? 'block' : 'hidden lg:block'}`}>
          <button
            onClick={() => setShowDetail(false)}
            className="lg:hidden mb-3 flex items-center gap-1.5 text-sm font-semibold text-brand-600 cursor-pointer"
          >
            ← Uzmanlara Dön
          </button>
          <SpecialistDetail
            specialist={selected}
            selectedDay={selectedDay}
            slots={slots}
            onPickDay={pickDay}
            onPickSlot={pickSlot}
          />
        </div>
      </div>
    </>
  )
}