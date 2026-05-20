import type { TimeSlot } from '../types'

interface Props {
  slots: TimeSlot[]
  onPick: (time: string) => void
}

const slotStyles: Record<TimeSlot['variant'], string> = {
  free: 'border border-ink-200 bg-white hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 cursor-pointer',
  selected: 'bg-brand-600 text-white border border-brand-600 shadow-[0_6px_14px_-4px_rgba(79,70,229,0.45)] cursor-pointer',
  taken: 'bg-ink-50 text-ink-400 border border-ink-200 line-through cursor-not-allowed',
}

export default function TimeSlots({ slots, onPick }: Props) {
  return (
    <div className="mt-3 grid grid-cols-3 sm:grid-cols-4 gap-2">
      {slots.map((slot) => (
        <button
          key={slot.time}
          type="button"
          onClick={() => slot.variant !== 'taken' && onPick(slot.time)}
          className={`inline-flex items-center justify-center px-3 py-2 rounded-xl text-xs font-medium transition ${slotStyles[slot.variant]}`}
        >
          {slot.time}
        </button>
      ))}
    </div>
  )
}