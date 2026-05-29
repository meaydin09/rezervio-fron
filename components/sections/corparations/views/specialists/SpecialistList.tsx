import type { Specialist } from '../../types'
import SpecialistCard from './SpecialistCard'
import SpecialistFilterChips from './SpecialistFilterChips'

interface Props {
  selected: Specialist
  activeFilter: string
  filteredSpecialists: Specialist[]
  onSelect: (s: Specialist) => void
  onFilterChange: (f: string) => void
}

export default function SpecialistList({ selected, activeFilter, filteredSpecialists, onSelect, onFilterChange }: Props) {
  return (
    <div className="col-span-1 lg:col-span-5">
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-ink-900">
            Uzmanlarımız{' '}
            <span className="text-ink-400 font-normal">({filteredSpecialists.length})</span>
          </h3>
          {/* <button className="text-xs font-semibold text-brand-600 hover:underline cursor-pointer">Filtrele</button> */}
        </div>

        <SpecialistFilterChips active={activeFilter} onChange={onFilterChange} />

        <div className="space-y-2.5 max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-y-auto pr-1">
          {filteredSpecialists.length === 0 ? (
            <div className="py-8 text-center text-sm text-ink-400">
              Bu kategoride uzman bulunamadı.
            </div>
          ) : (
            filteredSpecialists.map((s) => (
              <SpecialistCard
                key={s.id}
                specialist={s}
                isSelected={selected.id === s.id}
                onSelect={onSelect}
              />
            ))
          )}
          {filteredSpecialists.length > 0 && (
            <button className="w-full py-2 text-xs font-semibold text-brand-600 hover:bg-brand-50 rounded-lg transition cursor-pointer">
              Tüm {filteredSpecialists.length} uzmanı gör →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}