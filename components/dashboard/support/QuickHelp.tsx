import { ChevronRight, Calendar, MessageCircle, Palette, CreditCard, Users } from 'lucide-react'

const helpItems = [
  { label: 'Takvim nasıl güncellenir?', iconBg: 'bg-brand-50', icon: Calendar, iconColor: 'text-brand-600' },
  { label: 'WhatsApp hatırlatma ayarları', iconBg: 'bg-emerald-50', icon: MessageCircle, iconColor: 'text-emerald-600' },
  { label: 'Profil sayfamı özelleştirme', iconBg: 'bg-violet-50', icon: Palette, iconColor: 'text-violet-600' },
  { label: 'Abonelik & ödeme yönetimi', iconBg: 'bg-amber-50', icon: CreditCard, iconColor: 'text-amber-600' },
  { label: 'Danışan yönetimi', iconBg: 'bg-rose-50', icon: Users, iconColor: 'text-rose-600' },
]

interface Props {
  onNewTicket: () => void
}

export default function QuickHelp({ onNewTicket }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <h3 className="font-semibold text-ink-900">Hızlı Yardım</h3>
      <p className="text-xs text-ink-500 mt-0.5">Sık sorulan konulara hızlı erişim</p>

      <div className="mt-4 space-y-1">
      {helpItems.map((item) => {
        const Icon = item.icon
        return (
            <button key={item.label} className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-ink-50 cursor-pointer transition text-left">
            <div className={`w-8 h-8 rounded-lg ${item.iconBg} flex items-center justify-center ${item.iconColor} shrink-0`}>
                <Icon className="w-4 h-4" strokeWidth={2} />
            </div>
            <div className="flex-1 text-sm font-medium text-ink-700 min-w-0 truncate">{item.label}</div>
            <ChevronRight className="w-3.5 h-3.5 text-ink-300" strokeWidth={2} />
            </button>
        )
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-ink-100">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-semibold text-ink-800">Destek ekibi çevrimiçi</span>
        </div>
        <p className="text-[11px] text-ink-500">Ortalama yanıt süresi: <strong className="text-ink-700">28 dk</strong></p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button className="text-center bg-ink-100 hover:bg-ink-200 text-ink-800 text-xs font-semibold py-2 rounded-lg transition cursor-pointer">
            İletişim
          </button>
          <button
            onClick={onNewTicket}
            className="bg-ink-900 hover:bg-ink-800 text-white text-xs font-semibold py-2 rounded-lg transition cursor-pointer"
          >
            Talep Aç
          </button>
        </div>
      </div>
    </div>
  )
}