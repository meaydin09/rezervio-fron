import { MoreVertical } from 'lucide-react'
import type { AdminView } from '../../types'
import { users, planBadge } from '../../data/users-data'

interface Props {
  onViewUsers: () => void
}

const recent = users.slice(0, 4)

export default function RecentRegistrations({ onViewUsers }: Props) {
  return (
    <div className="xl:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-ink-900">Son Kayıtlar</h3>
          <p className="text-xs text-ink-500 mt-0.5">En yeni 24 saat</p>
        </div>
        <button onClick={onViewUsers} className="text-xs font-semibold text-brand-600 hover:underline cursor-pointer">
          Tümünü gör →
        </button>
      </div>

      <div className="space-y-2">
        {recent.map((user) => (
          <div key={user.slug} className="flex items-center gap-3 p-3 rounded-lg hover:bg-ink-50 transition">
            <div className={`w-9 h-9 rounded-lg ${user.bgColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
              {user.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate text-ink-900">{user.name}</div>
              <div className="text-xs text-ink-500 truncate">rezervio.co/{user.slug} · {user.lastSeen}</div>
            </div>
            <span className={`hidden sm:inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${planBadge[user.plan]}`}>
              {user.plan}
            </span>
            <button className="text-ink-400 hover:text-ink-900 hidden sm:block cursor-pointer">
              <MoreVertical className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}