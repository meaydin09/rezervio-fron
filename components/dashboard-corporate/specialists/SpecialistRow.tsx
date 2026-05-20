import { Eye, Pencil, MoreVertical } from 'lucide-react'
import type { Specialist } from '../types'

interface Props {
  specialist: Specialist
}

const statusColors: Record<Specialist['status'], string> = {
  Aktif: 'bg-emerald-50 text-emerald-700',
  İzinli: 'bg-amber-50 text-amber-700',
  Pasif: 'bg-ink-100 text-ink-600',
}

export default function SpecialistRow({ specialist: s }: Props) {
  const fillColor = s.fillRate > 80 ? 'bg-emerald-500' : s.fillRate > 60 ? 'bg-brand-500' : 'bg-amber-500'

  return (
    <tr className="hover:bg-ink-50/40 transition">
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg ${s.bgColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
            {s.initials}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate text-ink-900">{s.name}</div>
            <div className="text-xs text-ink-500 truncate">rezervio.com/novapsy-klinik/{s.initials.toLowerCase()}</div>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-xs text-ink-700">{s.specialty}</td>
      <td className="px-4 py-3 text-sm font-semibold text-ink-900">{s.todayCount}</td>
      <td className="px-4 py-3 text-sm font-bold text-brand-700">{s.mrr}</td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-ink-100 rounded-full overflow-hidden min-w-[60px]">
            <div className={`h-full ${fillColor} rounded-full`} style={{ width: `${s.fillRate}%` }} />
          </div>
          <span className="text-xs font-semibold text-ink-900">{s.fillRate}%</span>
        </div>
      </td>
      <td className="px-4 py-3">
        <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${statusColors[s.status]}`}>
          {s.status}
        </span>
      </td>
      <td className="px-4 py-3 text-right">
        <div className="flex items-center justify-end gap-1">
          <button className="w-7 h-7 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 cursor-pointer transition" title="Profili gör">
            <Eye className="w-3.5 h-3.5" strokeWidth={2} />
          </button>
          <button className="w-7 h-7 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 cursor-pointer transition" title="Düzenle">
            <Pencil className="w-3.5 h-3.5" strokeWidth={2} />
          </button>
          <button className="w-7 h-7 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 cursor-pointer transition" title="Daha fazla">
            <MoreVertical className="w-3.5 h-3.5" strokeWidth={2} />
          </button>
        </div>
      </td>
    </tr>
  )
}