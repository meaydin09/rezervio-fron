import { ArrowRight, Clock, User } from 'lucide-react'
import type { Service } from '../../types'

interface Props {
  service: Service
  onBook: () => void
}

export default function ServiceCard({ service, onBook }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5 sm:p-6 hover:border-brand-200 transition">
      <div className="flex items-start gap-4 flex-wrap">
        <div className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center ${service.iconColor} shrink-0`}>
          <User className="w-5 h-5" strokeWidth={2} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="font-semibold text-ink-900">{service.title}</h3>
              {service.badge && (
                <span className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 mt-1">
                  {service.badge}
                </span>
              )}
            </div>
            <div className="text-lg font-bold text-ink-900">{service.price}</div>
          </div>

          <p className="text-xs text-ink-600 mt-1 leading-relaxed">{service.description}</p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-ink-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" strokeWidth={2} />
              {service.duration}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" strokeWidth={2} />
              {service.expertCount} uzman
            </span>
            <span>{service.location}</span>
          </div>

          <button
            onClick={onBook}
            className="mt-4 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition flex items-center gap-2 cursor-pointer"
          >
            Uzman Seç
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  )
}