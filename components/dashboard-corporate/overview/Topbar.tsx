'use client'

import { useState } from 'react'
import { Menu, RefreshCw, Bell, Plus, Search, X } from 'lucide-react'
import {  useEffect, useRef } from 'react'


interface Props {
  onToggleSidebar: () => void
  onRefresh: () => void
  onAddSpecialist: () => void
  isRefreshing: boolean
}

const notifications = [
  { id: 1, text: 'Psk. Zeynep Tan bugün 4 randevu aldı', time: '10 dk önce', type: 'info' },
  { id: 2, text: 'Dr. Mert Doğan izin talebinde bulundu', time: '1 sa önce', type: 'warning' },
  { id: 3, text: '3 yeni randevu onay bekliyor', time: '2 sa önce', type: 'info' },
]



export default function Topbar({ onToggleSidebar, onRefresh, onAddSpecialist, isRefreshing }: Props) {
  const [showNotifications, setShowNotifications] = useState(false)
  
const notifRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
      setShowNotifications(false)
    }
  }
  document.addEventListener('mousedown', handleClickOutside)
  return () => document.removeEventListener('mousedown', handleClickOutside)
}, [])

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
            {new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} · NovaPsy Klinik
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5 truncate text-ink-900">Selam, NovaPsy 👋</h1>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Uzman, danışan veya randevu ara..."
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
        <div className="relative" ref={notifRef}>
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
        
        {/* <button
          onClick={onAddSpecialist}
          className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shrink-0 cursor-pointer transition"
        >
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          <span className="hidden sm:inline">Uzman Ekle</span>
        </button> */}
        
      </div>
    </div>
  )
}