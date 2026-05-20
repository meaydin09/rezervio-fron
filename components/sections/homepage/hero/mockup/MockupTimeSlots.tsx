import type { TimeSlot } from '../types'

const timeSlots: TimeSlot[] = [
  { time: '09:00', variant: 'default' },
  { time: '10:30', variant: 'selected' },
  { time: '13:00', variant: 'default' },
  { time: '15:30', variant: 'default' },
  { time: '17:00', variant: 'disabled' },
]

const slotStyles: Record<TimeSlot['variant'], string> = {
  default:  'border border-ink-200 bg-white hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700',
  selected: 'bg-brand-600 text-white border border-brand-600 shadow-[0_6px_14px_-4px_rgba(79,70,229,0.45)]',
  disabled: 'bg-ink-50 text-ink-400 border border-ink-200 line-through cursor-not-allowed',
}

export default function MockupTimeSlots() {
  return (
    <div className="mt-4">
      <div className="text-xs font-semibold text-ink-700 mb-2">16 Mayıs · Boş saatler</div>
      <div className="flex flex-wrap gap-2">
        {timeSlots.map((slot) => (
          <span
            key={slot.time}
            className={`inline-flex items-center justify-center px-3 py-2 rounded-xl text-xs font-medium transition ${slotStyles[slot.variant]}`}
          >
            {slot.time}
          </span>
        ))}
      </div>
    </div>
  )
}