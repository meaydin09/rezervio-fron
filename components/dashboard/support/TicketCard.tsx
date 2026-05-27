import { ExternalLink } from 'lucide-react'
import type { TicketData } from '../types'

interface Props {
  ticket: TicketData
}

const statusConfig = {
  open: { label: 'Açık', color: 'bg-amber-100 text-amber-800', wrapperColor: 'border-amber-200 bg-amber-50/40 hover:bg-amber-50/70' },
  pending: { label: 'Yanıt Bekleniyor', color: 'bg-brand-50 text-brand-700', wrapperColor: 'border-ink-100 hover:bg-ink-50/60' },
  resolved: { label: 'Çözüldü', color: 'bg-emerald-50 text-emerald-700', wrapperColor: 'border-ink-100 hover:bg-ink-50/60 opacity-90' },
}

export default function TicketCard({ ticket }: Props) {
  const config = statusConfig[ticket.status]

  return (
    <div className={`p-4 rounded-xl border transition cursor-pointer ${config.wrapperColor}`}>
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${config.color}`}>
              {config.label}
            </span>
            {ticket.status === 'open' && (
              <span className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 animate-pulse">
                ● Yeni yanıt
              </span>
            )}
            <span className="text-[11px] text-ink-500 font-mono">{ticket.id}</span>
          </div>
          <div className="text-sm font-semibold mt-1.5 text-ink-900">{ticket.title}</div>
          <div className="text-xs text-ink-600 mt-1 line-clamp-1 italic">
            <span className={`font-semibold not-italic ${ticket.previewAuthorColor ?? ''}`}>{ticket.previewAuthor}:</span>{' '}
            {ticket.preview}
          </div>
          <div className="mt-2 flex items-center gap-3 text-[11px] text-ink-500 flex-wrap">
            <span>{ticket.meta}</span>
            {ticket.priority && <><span>·</span><span>{ticket.priority}</span></>}
            {ticket.rating && <><span>·</span><span className="text-amber-600">{ticket.rating}</span></>}
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-ink-400 shrink-0 mt-1" strokeWidth={2} />
      </div>
    </div>
  )
}