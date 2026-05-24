import { LayoutGrid, Calendar, Users, BarChart2, MessageCircle, Settings,CreditCard  } from 'lucide-react'
import type { DashboardView } from '../types'

const navItems: {
  view: DashboardView
  label: string
  icon: React.ElementType
  badge?: { text: string; color: string }
}[] = [
  { view: 'overview',      label: 'Genel Bakış',         icon: LayoutGrid },
  { view: 'schedule',      label: 'Takvimim',             icon: Calendar },
  { view: 'appointments',  label: 'Randevular',           icon: Users,         badge: { text: '12', color: 'bg-brand-100 text-brand-700' } },
  { view: 'reports',       label: 'Raporlama',            icon: BarChart2 },
  { view: 'whatsapp',      label: 'WhatsApp & Bildirim',  icon: MessageCircle },
  { view: 'support',       label: 'Destek',               icon: MessageCircle, badge: { text: '2', color: 'bg-amber-100 text-amber-700' } },
  { view: 'settings',      label: 'Ayarlar',              icon: Settings },
  { view: 'subscription', label: 'Aboneliğim', icon: CreditCard, badge: { text: 'Pro', color: 'bg-brand-100 text-brand-700' } }
]

interface Props {
  active: DashboardView
  onChange: (view: DashboardView) => void
}

export default function SidebarNav({ active, onChange }: Props) {
  return (
    <nav className="space-y-1 flex-1">
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