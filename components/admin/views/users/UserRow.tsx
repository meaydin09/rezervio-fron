import { Eye, Pencil, CreditCard, Lock, Ban, Trash2, MoreVertical } from 'lucide-react'
import type { AdminUser } from '../../types'
import { planBadge, statusBadge } from '../../data/users-data'

interface Props {
  user: AdminUser
  onEdit: (user: AdminUser) => void
}

export default function UserRow({ user, onEdit }: Props) {
  return (
    <tr className="hover:bg-ink-50/40 transition">
      <td className="px-4 py-3"><input type="checkbox" className="w-4 h-4 rounded border-ink-300 cursor-pointer" /></td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg ${user.bgColor} flex items-center justify-center text-white text-xs font-bold`}>{user.initials}</div>
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate text-ink-900">{user.name}</div>
            <div className="text-xs text-ink-500 truncate">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-4 py-3"><span className="text-xs font-mono text-ink-700">{user.slug}</span></td>
      <td className="px-4 py-3"><span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${planBadge[user.plan]}`}>{user.plan}</span></td>
      <td className="px-4 py-3"><span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${statusBadge[user.status]}`}>{user.status}</span></td>
      <td className="px-4 py-3 text-sm font-semibold text-ink-900">{user.mrr}</td>
      <td className="px-4 py-3 text-sm text-ink-700">{user.appointments}</td>
      <td className="px-4 py-3 text-xs text-ink-500">{user.lastSeen}</td>
      <td className="px-4 py-3 text-right">
        <div className="flex items-center justify-end gap-1">
          <button onClick={() => onEdit(user)} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 cursor-pointer transition" title="Düzenle">
            <Pencil className="w-3.5 h-3.5" strokeWidth={2} />
          </button>
          <button className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 cursor-pointer transition" title="Görüntüle">
            <Eye className="w-3.5 h-3.5" strokeWidth={2} />
          </button>
          <button className="w-8 h-8 rounded-lg hover:bg-rose-50 flex items-center justify-center text-rose-500 cursor-pointer transition" title="Askıya Al">
            <Ban className="w-3.5 h-3.5" strokeWidth={2} />
          </button>
        </div>
      </td>
    </tr>
  )
}