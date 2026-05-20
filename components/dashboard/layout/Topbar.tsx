import { Menu, RefreshCw, Bell, Plus, Search } from 'lucide-react'

interface Props {
  onToggleSidebar: () => void
  onRefresh: () => void
}

export default function Topbar({ onToggleSidebar, onRefresh }: Props) {
  return (
    <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden w-9 h-9 rounded-lg bg-white border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition"
        >
          <Menu className="w-5 h-5" strokeWidth={2} />
        </button>
        <div>
          <div className="text-xs text-ink-500 font-medium">
            {new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5 text-ink-900">Günaydın, Onur 👋</h1>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Danışan ara..."
            className="bg-white border border-ink-200 rounded-lg pl-9 pr-3 py-2 text-sm w-56 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
          />
          <Search className="w-4 h-4 text-ink-400 absolute left-3 top-1/2 -translate-y-1/2" strokeWidth={2} />
        </div>

        <button
          onClick={onRefresh}
          className="w-10 h-10 rounded-lg bg-white border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition"
          title="Verileri yenile"
        >
          <RefreshCw className="w-4 h-4" strokeWidth={2} />
        </button>

        <button className="relative w-10 h-10 rounded-lg bg-white border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition">
          <Bell className="w-5 h-5" strokeWidth={2} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500" />
        </button>

        <button className="bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition">
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          <span className="hidden sm:inline">Boş saat ekle</span>
        </button>
      </div>
    </div>
  )
}