import type { CalendarDay } from '../types'

const dayLabels = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']

const calendarDays: CalendarDay[] = [
  { day: 12, variant: 'default' },
  { day: 13, variant: 'default' },
  { day: 14, variant: 'active' },
  { day: 15, variant: 'active' },
  { day: 16, variant: 'selected' },
  { day: 17, variant: 'disabled' },
  { day: 18, variant: 'disabled' },
]

const dayStyles: Record<CalendarDay['variant'], string> = {
  default:  'bg-ink-50 text-ink-400',
  active:   'bg-brand-100 font-semibold text-brand-700',
  selected: 'bg-brand-600 font-semibold text-white shadow-[0_4px_16px_-4px_rgba(79,70,229,0.4)]',
  disabled: 'bg-ink-100 text-ink-400 line-through',
}

export default function MockupCalendar() {
  return (
    <div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-ink-500 mb-2">
        {dayLabels.map((d) => <div key={d}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((item) => (
          <div
            key={item.day}
            className={`h-9 rounded-md text-xs flex items-center justify-center transition ${dayStyles[item.variant]}`}
          >
            {item.day}
          </div>
        ))}
      </div>
    </div>
  )
}