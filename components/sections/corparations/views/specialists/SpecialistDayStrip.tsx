interface DayItem {
    shortName: string
    date: number
    statusText: string
    statusColor: string
    isClosed: boolean
    isFull: boolean
  }
  
  const days: DayItem[] = [
    { shortName: 'Pzt', date: 14, statusText: 'Dolu', statusColor: 'text-ink-400', isClosed: false, isFull: true },
    { shortName: 'Sal', date: 15, statusText: '3 boş', statusColor: 'text-emerald-300', isClosed: false, isFull: false },
    { shortName: 'Çar', date: 16, statusText: '5 boş', statusColor: 'text-emerald-600', isClosed: false, isFull: false },
    { shortName: 'Per', date: 17, statusText: '2 boş', statusColor: 'text-emerald-600', isClosed: false, isFull: false },
    { shortName: 'Cum', date: 18, statusText: '4 boş', statusColor: 'text-emerald-600', isClosed: false, isFull: false },
    { shortName: 'Cmt', date: 19, statusText: '6 boş', statusColor: 'text-emerald-600', isClosed: false, isFull: false },
    { shortName: 'Paz', date: 20, statusText: 'Kapalı', statusColor: 'text-ink-400', isClosed: true, isFull: false },
  ]
  
  interface Props {
    selectedDay: number
    onPickDay: (date: number, isClosed: boolean, isFull: boolean) => void
  }
  
  export default function SpecialistDayStrip({ selectedDay, onPickDay }: Props) {
    return (
      <div className="mt-5 grid grid-cols-7 gap-1">
        {days.map((day) => {
          const isSelected = day.date === selectedDay
          const isDisabled = day.isClosed || day.isFull
  
          return (
            <div
              key={day.date}
              onClick={() => onPickDay(day.date, day.isClosed, day.isFull)}
              className={`text-center p-2 rounded-lg transition ${
                isDisabled
                  ? 'opacity-40 cursor-not-allowed'
                  : isSelected
                  ? 'bg-brand-600 text-white cursor-pointer'
                  : 'hover:bg-ink-50 cursor-pointer'
              }`}
            >
              <div className={`text-[10px] ${isSelected ? 'opacity-80' : 'text-ink-500'}`}>
                {day.shortName}
              </div>
              <div className="text-sm font-bold mt-0.5">{day.date}</div>
              <div className={`text-[10px] mt-1 font-semibold ${isSelected ? 'opacity-80' : day.statusColor}`}>
                {day.statusText}
              </div>
            </div>
          )
        })}
      </div>
    )
  }