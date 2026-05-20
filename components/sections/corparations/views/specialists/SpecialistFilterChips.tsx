import { filterChips } from '../../data/specialists-data'

interface Props {
  active: string
  onChange: (filter: string) => void
}

export default function SpecialistFilterChips({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-1.5 mb-4">
      {filterChips.map((chip) => (
        <button
          key={chip}
          onClick={() => onChange(chip)}
          className={`inline-flex items-center justify-center px-2.5 py-1.5 rounded-xl text-[11px] font-medium border transition cursor-pointer ${
            active === chip
              ? 'bg-brand-600 text-white border-brand-600 shadow-[0_6px_14px_-4px_rgba(79,70,229,0.45)]'
              : 'border-ink-200 bg-white hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700'
          }`}
        >
          {chip}
        </button>
      ))}
    </div>
  )
}