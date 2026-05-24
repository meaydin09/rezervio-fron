import type { CorporateView } from '../types'
import { LayoutGrid, Users, Calendar, User, MessageCircle, BarChart2, Settings, CreditCard } from 'lucide-react'

const navItems: {
  view: CorporateView
  label: string
  icon: React.ElementType
  badge?: { text: string; color: string }
}[] = [
  { view: 'overview',     label: 'Genel Bakış',         icon: LayoutGrid },
  { view: 'specialists',  label: 'Uzmanlar',             icon: Users,         badge: { text: '12', color: 'bg-brand-100 text-brand-700' } },
  { view: 'calendar',     label: 'Takvim',               icon: Calendar },
  { view: 'appointments', label: 'Tüm Randevular',       icon: User,          badge: { text: '47', color: 'bg-brand-100 text-brand-700' } },
  { view: 'services',     label: 'Hizmetler',            icon: MessageCircle },
  { view: 'reports',      label: 'Raporlama',            icon: BarChart2 },
  { view: 'whatsapp',     label: 'WhatsApp & Bildirim',  icon: MessageCircle },
  { view: 'support',      label: 'Destek',               icon: MessageCircle },
  { view: 'settings',     label: 'Ayarlar',              icon: Settings },
  { view: 'subscription', label: 'Aboneliğim', icon: CreditCard, badge: { text: 'Kurumsal', color: 'bg-brand-100 text-brand-700' } }

]

interface Props {
  active: CorporateView
  onChange: (view: CorporateView) => void
}

export default function SidebarNav({ active, onChange }: Props) {
  return (
    <nav className="space-y-1 flex-1 overflow-y-auto">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <button
            key={item.view}
            onClick={() => onChange(item.view)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer ${
              active === item.view
                ? 'bg-ink-900 text-white'
                : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
            }`}
          >
            <Icon className="w-5 h-5 shrink-0" strokeWidth={2} />
            {item.label}
            {item.badge && (
              <span className={`ml-auto inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${item.badge.color}`}>
                {item.badge.text}
              </span>
            )}
          </button>
        )
      })}
    </nav>
  )
}