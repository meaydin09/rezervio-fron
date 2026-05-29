import { ChevronLeft, ChevronRight } from 'lucide-react'
import UserRow from './UserRow'
import type { AdminUser } from '../../types'

interface Props {
  users: AdminUser[]
  onEdit: (user: AdminUser) => void
}

export default function UsersTable({ users, onEdit }: Props) {
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
            {users.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-12 text-center text-sm text-ink-400">Sonuç bulunamadı</td>
              </tr>
            ) : (
              users.map((user) => (
                <UserRow key={user.slug} user={user} onEdit={onEdit} />
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between p-4 border-t border-ink-100 flex-wrap gap-3">
        <div className="text-xs text-ink-500">
          <strong className="text-ink-900">{users.length}</strong> kullanıcı gösteriliyor
        </div>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 rounded-lg border border-ink-200 flex items-center justify-center text-ink-400 cursor-not-allowed" disabled>
            <ChevronLeft className="w-4 h-4" strokeWidth={2} />
          </button>
          <button className="w-8 h-8 rounded-lg text-xs font-semibold cursor-pointer bg-brand-600 text-white">1</button>
          <button className="w-8 h-8 rounded-lg border border-ink-200 flex items-center justify-center text-ink-400 cursor-not-allowed" disabled>
            <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  )
}
