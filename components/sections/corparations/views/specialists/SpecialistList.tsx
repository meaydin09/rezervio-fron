import { specialists } from '../../data/specialists-data'
import type { Specialist } from '../../types'
import SpecialistCard from './SpecialistCard'
import SpecialistFilterChips from './SpecialistFilterChips'

interface Props {
  selected: Specialist
  activeFilter: string
  onSelect: (s: Specialist) => void
  onFilterChange: (f: string) => void
}

export default function SpecialistList({ selected, activeFilter, onSelect, onFilterChange }: Props) {
  return (
    <div className="lg:col-span-5">
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-ink-900">
            Uzmanlarımız <span className="text-ink-400 font-normal">(12)</span>
          </h3>
          <button className="text-xs font-semibold text-brand-600 hover:underline cursor-pointer">Filtrele</button>
        </div>

        <SpecialistFilterChips active={activeFilter} onChange={onFilterChange} />

        <div className="space-y-2.5 max-h-[500px] lg:max-h-[600px] overflow-y-auto pr-1">
          {specialists.map((s) => (
            <SpecialistCard
              key={s.id}
              specialist={s}
              isSelected={selected.id === s.id}
              onSelect={onSelect}
            />
          ))}
          <button className="w-full py-2 text-xs font-semibold text-brand-600 hover:bg-brand-50 rounded-lg transition cursor-pointer">
            Tüm 12 uzmanı gör →
          </button>
        </div>
      </div>
    </div>
  )
}