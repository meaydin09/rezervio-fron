import type { Specialist } from '../../types'

interface Props {
  specialist: Specialist
  isSelected: boolean
  onSelect: (s: Specialist) => void
}

export default function SpecialistCard({ specialist, isSelected, onSelect }: Props) {
  const { availableCount, nextAvailable, todaySlots } = specialist

  const availBadge = availableCount === null
    ? { text: 'Dolu', className: 'bg-ink-100 text-ink-600' }
    : availableCount <= 2
    ? { text: `${availableCount} boş`, className: 'bg-amber-50 text-amber-700' }
    : { text: `${availableCount} boş`, className: 'bg-emerald-50 text-emerald-700' }

  return (
    <div
      onClick={() => onSelect(specialist)}
      className={`p-3 rounded-xl border-2 cursor-pointer transition ${
        isSelected
          ? 'border-brand-500 bg-brand-50/50'
          : 'border-transparent bg-white hover:bg-ink-50'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-12 h-12 rounded-xl ${specialist.bgColor} flex items-center justify-center font-bold text-white text-sm shrink-0`}>
          {specialist.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="font-semibold text-sm truncate text-ink-900">{specialist.name}</div>
            <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 ${availBadge.className}`}>
              {availBadge.text}
            </span>
          </div>
          <div className="text-xs text-ink-500">{specialist.title}</div>
          <div className="mt-1 flex items-center gap-2 text-[11px] text-ink-600">
            <span>⭐ {specialist.rating}</span>
            <span>·</span>
            <span>{specialist.price} / seans</span>
          </div>
          {todaySlots && (
            <div className="mt-2 flex flex-wrap gap-1">
              {todaySlots.map((slot) => (
                <span key={slot} className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-white border border-ink-200 text-ink-700">
                  {slot}
                </span>
              ))}
            </div>
          )}
          {nextAvailable && (
            <div className="mt-1.5 text-[11px] text-ink-500">İlk müsait: {nextAvailable}</div>
          )}
        </div>
      </div>
    </div>
  )
}