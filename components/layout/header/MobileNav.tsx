import Link from 'next/link'
import { Calendar, Settings, HelpCircle, FileText, LogIn } from 'lucide-react'
import { navLinks } from './nav-links'
import type { MobileNavProps } from './types'

const navIcons = [Calendar, Settings, HelpCircle, FileText]

export default function MobileNav({ isOpen, closeMenu }: MobileNavProps) {
  if (!isOpen) return null

  return (
    <div className="md:hidden max-w-7xl mx-auto px-4 pb-3">
      <nav className="bg-white rounded-2xl border border-ink-200 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.08)] p-2 space-y-0.5">
        {navLinks.map((link, i) => {
          const Icon = navIcons[i]
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-ink-50 text-ink-700 text-sm font-medium"
            >
              <Icon className="w-4 h-4 text-ink-400" />
              {link.label}
            </Link>
          )
        })}

        <div className="border-t border-ink-100 my-1" />

        <Link
          href="/giris"
          onClick={closeMenu}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-ink-50 text-ink-700 text-sm font-medium"
        >
          <LogIn className="w-4 h-4 text-ink-400" />
          Giriş Yap
        </Link>
      </nav>
    </div>
  )
}