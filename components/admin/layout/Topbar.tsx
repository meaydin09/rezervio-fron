'use client'

import { useState } from 'react'
import { Menu, RefreshCw, Bell, Plus, Search, X } from 'lucide-react'

interface Props {
  title: string
  onToggleSidebar: () => void
  onRefresh: () => void
  onNewUser: () => void
  isRefreshing: boolean
}

const notifications = [
  { id: 1, text: '3 başarısız ödeme tespit edildi', time: '5 dk önce', type: 'warning' },
  { id: 2, text: 'Yeni kullanıcı kaydı: Selma Aydın', time: '23 dk önce', type: 'info' },
  { id: 3, text: 'WhatsApp API güncellemesi planlandı', time: '2 sa önce', type: 'info' },
  { id: 4, text: 'BeautyHub aboneliği askıya alındı', time: '5 sa önce', type: 'warning' },
]

const typeColors: Record<string, string> = {
  warning: 'bg-amber-100 text-amber-700',
  info: 'bg-brand-50 text-brand-600',
}

export default function Topbar({ title, onToggleSidebar, onRefresh, onNewUser, isRefreshing }: Props) {
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <div className="flex items-center justify-between gap-3 mb-6 flex-wrap relative">
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden w-9 h-9 rounded-lg bg-white border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 shrink-0 cursor-pointer transition"
        >
          <Menu className="w-5 h-5" strokeWidth={2} />
        </button>
        <div className="min-w-0">
          <div className="text-xs text-ink-500 font-medium">
            {new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5 truncate text-ink-900">{title}</h1>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Kullanıcı, slug, e-posta..."
            className="bg-white border border-ink-200 rounded-lg pl-9 pr-3 py-2 text-sm w-64 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
          />
          <Search className="w-4 h-4 text-ink-400 absolute left-3 top-1/2 -translate-y-1/2" strokeWidth={2} />
        </div>

        {/* Refresh */}
        <button
          onClick={onRefresh}
          className="w-10 h-10 rounded-lg bg-white border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition"
          title="Yenile"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} strokeWidth={2} />
        </button>

        {/* Bildirim */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications((p) => !p)}
            className="relative w-10 h-10 rounded-lg bg-white border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition"
          >
            <Bell className="w-5 h-5" strokeWidth={2} />
            {notifications.length > 0 && (
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500" />
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl border border-ink-100 shadow-[0_8px_30px_-4px_rgba(15,23,42,0.15)] z-50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-ink-100">
                <span className="text-sm font-semibold text-ink-900">Bildirimler</span>
                <button onClick={() => setShowNotifications(false)} className="text-ink-400 hover:text-ink-700 cursor-pointer">
                  <X className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>

              {notifications.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-ink-400">
                  Hiç bildirim yok
                </div>
              ) : (
                <div className="divide-y divide-ink-50">
                  {notifications.map((n) => (
                    <div key={n.id} className="flex items-start gap-3 px-4 py-3 hover:bg-ink-50 transition cursor-pointer">
                      <span className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${n.type === 'warning' ? 'bg-amber-400' : 'bg-brand-400'}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-ink-800">{n.text}</p>
                        <p className="text-[11px] text-ink-400 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="px-4 py-2.5 border-t border-ink-100">
                <button className="text-xs font-semibold text-brand-600 hover:underline cursor-pointer">
                  Tümünü gör →
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={onNewUser}
          className="bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shrink-0 cursor-pointer transition"
        >
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          <span className="hidden sm:inline">Yeni Kullanıcı</span>
        </button>
      </div>
    </div>
  )
}