import Link from 'next/link'
import { LayoutGrid, Users, Calendar, User, BarChart2, MessageCircle, Settings } from 'lucide-react'

const navItems = [
  { label: 'Genel Bakış',     icon: LayoutGrid,    href: '/dashboard/kurumsal',              active: true },
  { label: 'Uzmanlar',        icon: Users,          href: '/dashboard/kurumsal/uzmanlar',     badge: { text: '12', color: 'bg-brand-100 text-brand-700' } },
  { label: 'Takvim',          icon: Calendar,       href: '/dashboard/kurumsal/takvim' },
  { label: 'Tüm Randevular',  icon: User,           href: '/dashboard/kurumsal/randevular',   badge: { text: '47', color: 'bg-brand-100 text-brand-700' } },
  { label: 'Hizmetler',       icon: MessageCircle,  href: '/dashboard/kurumsal/hizmetler' },
  { label: 'Raporlama',       icon: BarChart2,       href: '/dashboard/kurumsal/raporlama' },
  { label: 'WhatsApp & Bildirim', icon: MessageCircle, href: '/dashboard/kurumsal/bildirim' },
  { label: 'Destek',          icon: MessageCircle,  href: '/dashboard/kurumsal/destek' },
  { label: 'Ayarlar',         icon: Settings,       href: '/dashboard/kurumsal/ayarlar' },
]

export default function SidebarNav() {
  return (
    <nav className="space-y-1 flex-1 overflow-y-auto">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer ${
              item.active ? 'bg-ink-900 text-white' : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
            }`}
          >
            <Icon className="w-5 h-5 shrink-0" strokeWidth={2} />
            {item.label}
            {item.badge && (
              <span className={`ml-auto inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${item.badge.color}`}>
                {item.badge.text}
              </span>
            )}
          </Link>
        )
      })}
    </nav>
  )
}