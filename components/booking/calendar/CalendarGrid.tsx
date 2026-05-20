interface Props {
    selectedDay: number
    today: number
    firstDayCol: number
    daysInMonth: number
    avail: Set<number>
    full: Set<number>
    onPick: (day: number) => void
  }
  
  const DAY_LABELS = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']
  
  const dayStyles = {
    past: 'text-ink-200 cursor-not-allowed',
    selected: 'bg-brand-600 text-white shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] cursor-pointer',
    today: 'bg-brand-100 text-brand-700 ring-2 ring-brand-200 cursor-pointer hover:bg-brand-200',
    available: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 cursor-pointer',
    full: 'bg-ink-100 text-ink-400 line-through cursor-not-allowed',
    empty: 'text-ink-300',
  }
  const TODAY = new Date().getDate()

  export default function CalendarGrid({
    selectedDay, today, firstDayCol, daysInMonth, avail, full, onPick,
  }: Props) {
    return (
      <div>
        <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-ink-500 mb-1">
          {DAY_LABELS.map((d) => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDayCol }).map((_, i) => (
            <div key={`empty-${i}`} className="h-10" />
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
            let style = dayStyles.empty
            if (day < TODAY) style = dayStyles.past 
            if (day === selectedDay) style = dayStyles.selected
            else if (day === today) style = dayStyles.today
            else if (avail.has(day)) style = dayStyles.available
            else if (full.has(day)) style = dayStyles.full
  
            return (
              <div
                key={day}
                onClick={() => onPick(day)}
                className={`h-10 rounded-lg text-xs flex items-center justify-center font-medium transition ${style}`}
              >
                {day}
              </div>
            )
          })}
        </div>
      </div>
    )
  }