import Link from 'next/link'
import { LayoutGrid, Calendar, Users, BarChart2, MessageCircle, Settings } from 'lucide-react'

const navItems = [
  { label: 'Genel Bakış', icon: LayoutGrid, href: '/dashboard', active: true },
  { label: 'Takvimim', icon: Calendar, href: '/dashboard/schedule' },
  { label: 'Randevular', icon: Users, href: '/dashboard/appointments', badge: { text: '12', color: 'bg-brand-100 text-brand-700' } },
  { label: 'Raporlama', icon: BarChart2, href: '/dashboard/reports' },
  { label: 'WhatsApp & Bildirim', icon: MessageCircle, href: '/dashboard/notifications', whatsapp: true },
  { label: 'Destek', icon: MessageCircle, href: '/dashboard/support', badge: { text: '2', color: 'bg-amber-100 text-amber-700' } },
  { label: 'Ayarlar', icon: Settings, href: '/dashboard/settings' },
]

export default function SidebarNav() {
  return (
    <nav className="space-y-1 flex-1">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer ${
              item.active
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
          </Link>
        )
      })}
    </nav>
  )
}