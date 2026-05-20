import { ChevronLeft, ChevronRight } from 'lucide-react'
import UserRow from './UserRow'
import { users } from '../../data/users-data'
import type { AdminUser } from '../../types'

interface Props {
  onEdit: (user: AdminUser) => void
}

export default function UsersTable({ onEdit }: Props) {
  return (
    <div className="mt-4 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-ink-50/60 border-b border-ink-100">
            <tr className="text-left text-[11px] font-semibold text-ink-500 uppercase tracking-wider">
              <th className="px-4 py-3 w-6"><input type="checkbox" className="w-4 h-4 rounded border-ink-300 cursor-pointer" /></th>
              {['Kullanıcı', 'Slug', 'Plan', 'Durum', 'MRR', 'Randevu', 'Son Görülme', ''].map((h, i) => (
                <th key={i} className={`px-4 py-3 ${i === 7 ? 'text-right' : ''}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-50">
            {users.map((user) => (
              <UserRow key={user.slug} user={user} onEdit={onEdit} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between p-4 border-t border-ink-100 flex-wrap gap-3">
        <div className="text-xs text-ink-500">
          Toplam <strong className="text-ink-900">1.247</strong> kullanıcının 1-8 arası gösteriliyor
        </div>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 rounded-lg border border-ink-200 flex items-center justify-center text-ink-400 cursor-not-allowed" disabled>
            <ChevronLeft className="w-4 h-4" strokeWidth={2} />
          </button>
          {[1, 2, 3].map((p) => (
            <button key={p} className={`w-8 h-8 rounded-lg text-xs font-semibold cursor-pointer ${p === 1 ? 'bg-brand-600 text-white' : 'hover:bg-ink-50 text-ink-600'}`}>{p}</button>
          ))}
          <span className="px-2 text-ink-400">...</span>
          <button className="w-8 h-8 rounded-lg hover:bg-ink-50 text-xs font-semibold text-ink-600 cursor-pointer">156</button>
          <button className="w-8 h-8 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer">
            <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  )
}