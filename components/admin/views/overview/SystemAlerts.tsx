'use client'

import { useState } from 'react'
import { AlertTriangle, Check, Info, X } from 'lucide-react'

const initialAlerts = [
  { id: 1, type: 'warning', icon: AlertTriangle, title: '3 başarısız ödeme',        description: 'Profesyonel paket yenileme',   bg: 'bg-amber-50 border-amber-100',    iconColor: 'text-amber-600',   titleColor: 'text-amber-900',   descColor: 'text-amber-700' },
  { id: 2, type: 'success', icon: Check,         title: 'Sistem sağlıklı',           description: 'Tüm servisler çalışıyor',     bg: 'bg-emerald-50 border-emerald-100', iconColor: 'text-emerald-600', titleColor: 'text-emerald-900', descColor: 'text-emerald-700' },
  { id: 3, type: 'info',    icon: Info,          title: 'WhatsApp API güncellemesi', description: "17 Mayıs'ta planlanan bakım", bg: 'bg-brand-50 border-brand-100',    iconColor: 'text-brand-600',   titleColor: 'text-brand-900',   descColor: 'text-brand-700' },
  { id: 4, type: 'warning', icon: AlertTriangle, title: 'Yüksek sunucu yükü',        description: '%87 CPU kullanımı tespit edildi', bg: 'bg-amber-50 border-amber-100', iconColor: 'text-amber-600',   titleColor: 'text-amber-900',   descColor: 'text-amber-700' },
  { id: 5, type: 'info',    icon: Info,          title: 'Yeni kullanıcı kaydı',      description: 'Son 1 saatte 12 yeni kayıt',  bg: 'bg-brand-50 border-brand-100',    iconColor: 'text-brand-600',   titleColor: 'text-brand-900',   descColor: 'text-brand-700' },
]

export default function SystemAlerts() {
  const [alerts, setAlerts] = useState(initialAlerts)

  const dismiss = (id: number) => setAlerts((prev) => prev.filter((a) => a.id !== id))

  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5 flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-ink-900">Sistem Uyarıları</h3>
          <p className="text-xs text-ink-500 mt-0.5">Son 24 saat · {alerts.length} uyarı</p>
        </div>
        {alerts.length > 0 && (
          <button
            onClick={() => setAlerts([])}
            className="text-xs text-ink-400 hover:text-ink-700 cursor-pointer transition"
          >
            Tümünü temizle
          </button>
        )}
      </div>

      <div className="mt-4 space-y-2 overflow-y-auto max-h-64 pr-1 no-scrollbar">
        {alerts.length === 0 ? (
          <div className="text-center py-8 text-xs text-ink-400">Uyarı bulunmuyor</div>
        ) : (
          alerts.map((alert) => {
            const Icon = alert.icon
            return (
              <div key={alert.id} className={`flex items-start gap-2.5 p-3 rounded-lg border ${alert.bg} group`}>
                <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${alert.iconColor}`} strokeWidth={2} />
                <div className="text-xs flex-1 min-w-0">
                  <div className={`font-semibold ${alert.titleColor}`}>{alert.title}</div>
                  <div className={`mt-0.5 ${alert.descColor}`}>{alert.description}</div>
                </div>
                <button
                  onClick={() => dismiss(alert.id)}
                  className="shrink-0 w-5 h-5 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-black/10 transition cursor-pointer"
                >
                  <X className="w-3 h-3" strokeWidth={2.5} />
                </button>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
