interface Badge {
    text: string
    color: string
  }
  
  interface Props {
    initials: string
    name: string
    time: string
    type: string
    bgColor: string
    badges: Badge[]
  }
  
  export default function AppointmentCard({ initials, name, time, type, bgColor, badges }: Props) {
    return (
      <div className="p-3 rounded-xl border border-ink-100 hover:border-brand-200 transition cursor-pointer">
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center font-bold text-white text-sm shrink-0`}>
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold truncate text-ink-900">{name}</div>
              <div className="text-xs text-ink-500">{time}</div>
            </div>
            <div className="text-xs text-ink-500 mt-0.5">{type}</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {badges.map((badge, i) => (
                <span key={i} className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${badge.color}`}>
                  {badge.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }