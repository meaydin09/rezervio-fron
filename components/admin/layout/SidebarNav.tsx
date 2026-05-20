import type { AdminView } from '../types'
import {
  LayoutGrid, Users, CreditCard, Calendar,
  DollarSign, Megaphone, MessageCircle,
  FileText, Settings,
} from 'lucide-react'

interface NavItem {
  view: AdminView
  label: string
  icon: React.ElementType
  badge?: { text: string; color: string }
}

const sections = [
  {
    label: 'Yönetim',
    items: [
      { view: 'overview'      as AdminView, label: 'Genel Bakış',      icon: LayoutGrid  },
      { view: 'users'         as AdminView, label: 'Kullanıcılar',     icon: Users,       badge: { text: '1.247', color: 'bg-brand-500/20 text-brand-300' } },
      { view: 'subscriptions' as AdminView, label: 'Abonelikler',      icon: CreditCard  },
      { view: 'appointments'  as AdminView, label: 'Randevular',       icon: Calendar    },
      { view: 'revenue'       as AdminView, label: 'Gelir & Raporlar', icon: DollarSign  },
    ],
  },
  {
    label: 'İletişim',
    items: [
      { view: 'announcements' as AdminView, label: 'Duyurular',        icon: Megaphone   },
      { view: 'support'       as AdminView, label: 'Destek Talepleri', icon: MessageCircle, badge: { text: '7', color: 'bg-rose-500/20 text-rose-300' } },
    ],
  },
  {
    label: 'Sistem',
    items: [
      { view: 'audit'    as AdminView, label: 'İşlem Geçmişi',  icon: FileText  },
      { view: 'settings' as AdminView, label: 'Sistem Ayarları', icon: Settings  },
    ],
  },
]

interface Props {
  active: AdminView
  onChange: (view: AdminView) => void
}

export default function SidebarNav({ active, onChange }: Props) {
  return (
    <nav className="space-y-1 flex-1 overflow-y-auto">
      {sections.map((section) => (
        <div key={section.label}>
          <div className="px-3 py-2 text-[10px] font-semibold text-ink-500 uppercase tracking-wider">
            {section.label}
          </div>
          {section.items.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.view}
                onClick={() => onChange(item.view)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer ${
                  active === item.view
                    ? 'bg-white/10 text-white'
                    : 'text-ink-400 hover:bg-white/5 hover:text-white'
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
        </div>
      ))}
    </nav>
  )
}