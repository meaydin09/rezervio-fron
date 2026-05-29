import { Search, Download, Plus } from 'lucide-react'

interface Props {
  search: string
  onSearchChange: (v: string) => void
  plan: string
  onPlanChange: (v: string) => void
  status: string
  onStatusChange: (v: string) => void
  onNewUser: () => void
  onExport: () => void
}

export default function UsersFilter({ search, onSearchChange, plan, onPlanChange, status, onStatusChange, onNewUser, onExport }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="İsim, slug veya e-posta..."
              className="bg-white border border-ink-200 rounded-lg pl-9 pr-3 py-2 text-sm w-60 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
            />
            <Search className="w-4 h-4 text-ink-400 absolute left-3 top-1/2 -translate-y-1/2" strokeWidth={2} />
          </div>
          <select
            value={plan}
            onChange={(e) => onPlanChange(e.target.value)}
            className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
          >
            <option>Tüm planlar</option>
            <option>Başlangıç</option>
            <option>Profesyonel</option>
            <option>Kurumsal</option>
            <option>Deneme</option>
          </select>
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
          >
            <option>Tüm durumlar</option>
            <option>Aktif</option>
            <option>Deneme</option>
            <option>Askıya alındı</option>
            <option>İptal edilmiş</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onExport}
            className="text-sm font-semibold text-ink-600 border border-ink-200 hover:bg-ink-50 px-3 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition"
          >
            <Download className="w-4 h-4" strokeWidth={2} />
            <span className="hidden sm:inline">Dışa Aktar</span>
          </button>
          <button
            onClick={onNewUser}
            className="text-sm font-semibold bg-rose-600 hover:bg-rose-700 text-white px-3 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition"
          >
            <Plus className="w-4 h-4" strokeWidth={2.5} />
            <span className="hidden sm:inline">Yeni Kullanıcı</span>
          </button>
        </div>
      </div>
    </div>
  )
}
