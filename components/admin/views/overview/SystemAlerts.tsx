import { AlertTriangle, Check, Info } from 'lucide-react'

const alerts = [
  { type: 'warning', icon: AlertTriangle, title: '3 başarısız ödeme',        description: 'Profesyonel paket yenileme',   bg: 'bg-amber-50 border-amber-100',   iconColor: 'text-amber-600',  titleColor: 'text-amber-900',  descColor: 'text-amber-700' },
  { type: 'success', icon: Check,         title: 'Sistem sağlıklı',           description: 'Tüm servisler çalışıyor',     bg: 'bg-emerald-50 border-emerald-100', iconColor: 'text-emerald-600', titleColor: 'text-emerald-900', descColor: 'text-emerald-700' },
  { type: 'info',    icon: Info,          title: 'WhatsApp API güncellemesi', description: "17 Mayıs'ta planlanan bakım", bg: 'bg-brand-50 border-brand-100',   iconColor: 'text-brand-600',  titleColor: 'text-brand-900',  descColor: 'text-brand-700' },
]

export default function SystemAlerts() {
  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <h3 className="font-semibold text-ink-900">Sistem Uyarıları</h3>
      <p className="text-xs text-ink-500 mt-0.5">Son 24 saat</p>

      <div className="mt-4 space-y-3">
        {alerts.map((alert) => {
          const Icon = alert.icon
          return (
            <div key={alert.title} className={`flex items-start gap-2.5 p-3 rounded-lg border ${alert.bg}`}>
              <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${alert.iconColor}`} strokeWidth={2} />
              <div className="text-xs">
                <div className={`font-semibold ${alert.titleColor}`}>{alert.title}</div>
                <div className={`mt-0.5 ${alert.descColor}`}>{alert.description}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}