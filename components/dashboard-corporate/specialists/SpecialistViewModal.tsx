import { X, ExternalLink } from 'lucide-react'
import type { Specialist } from '../types'

interface Props {
  specialist: Specialist
  onClose: () => void
  onEdit: () => void
}

const statusColors: Record<Specialist['status'], string> = {
  Aktif: 'bg-emerald-50 text-emerald-700',
  İzinli: 'bg-amber-50 text-amber-700',
  Pasif: 'bg-ink-100 text-ink-600',
}

export default function SpecialistViewModal({ specialist: s, onClose, onEdit }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl ${s.bgColor} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
              {s.initials}
            </div>
            <div>
              <h3 className="font-bold text-lg text-ink-900">{s.name}</h3>
              <p className="text-xs text-ink-500">{s.specialty}</p>
            </div>
          </div>
          
        </div>

        <div className="space-y-0">
          {[
            { label: 'Durum',            value: s.status,    badge: true },
            { label: 'Uzmanlık',         value: s.specialty, badge: false },
            { label: 'Bugünkü Randevu',  value: `${s.todayCount} randevu`, badge: false },
            { label: 'Aylık Gelir',      value: s.mrr,       badge: false },
            { label: 'Doluluk',          value: `%${s.fillRate}`, badge: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between py-3 border-b border-ink-50 last:border-0">
              <span className="text-xs font-semibold text-ink-500">{item.label}</span>
              {item.badge ? (
                <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${statusColors[s.status]}`}>
                  {item.value}
                </span>
              ) : (
                <span className="text-sm font-medium text-ink-900">{item.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-6 pt-4 border-t border-ink-100">
          <button
            onClick={onEdit}
            className="flex-1 px-4 py-2.5 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-xl cursor-pointer transition"
          >
            Düzenle
          </button>
          <a
            onClick={onClose}
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-xl cursor-pointer transition text-center flex items-center justify-center gap-2"
          >

            Kapat
          </a>
        </div>
      </div>
    </div>
  )
}