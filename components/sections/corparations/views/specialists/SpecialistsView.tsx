import { useSpecialistSelect } from '../../hooks/useSpecialistSelect'
import SpecialistList from './SpecialistList'
import SpecialistDetail from './SpecialistDetail'

export default function SpecialistsView() {
  const {
    selected, selectedDay, slots, activeFilter, filteredSpecialists,
    pickSpecialist, pickDay, pickSlot, setActiveFilter,
  } = useSpecialistSelect()

  return (
    <div className="mt-6 grid lg:grid-cols-12 gap-6">
      <SpecialistList
        selected={selected}
        activeFilter={activeFilter}
        filteredSpecialists={filteredSpecialists}
        onSelect={pickSpecialist}
        onFilterChange={setActiveFilter}
      />
      <SpecialistDetail
        specialist={selected}
        selectedDay={selectedDay}
        slots={slots}
        onPickDay={pickDay}
        onPickSlot={pickSlot}
      />
    </div>
  )
}