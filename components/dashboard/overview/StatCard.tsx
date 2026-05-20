interface Props {
    period: string
    badge: { text: string; color: string }
    value: string
    unit?: string
    label: string
    extra: React.ReactNode
  }
  
  export default function StatCard({ period, badge, value, unit, label, extra }: Props) {
    return (
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-ink-500">{period}</span>
          <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${badge.color}`}>
            {badge.text}
          </span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-bold text-ink-900">{value}</span>
          {unit && <span className="text-xs sm:text-sm text-ink-500">{unit}</span>}
          {label && <span className="text-xs sm:text-sm text-ink-500">{label}</span>}
        </div>
        <div className="mt-3">{extra}</div>
      </div>
    )
  }