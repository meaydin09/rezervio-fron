'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from './nav-links'

const hideNavOn = ['/iletisim', '/login', '/register']

export default function DesktopNav() {
  const pathname = usePathname()

  if (hideNavOn.includes(pathname)) return null

  return (
    <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur rounded-full border border-ink-200/70 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.08)] p-1 text-sm font-medium">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="px-4 py-1.5 rounded-full hover:bg-white hover:shadow-[0_2px_8px_-2px_rgba(15,23,42,0.08)] text-ink-700 hover:text-ink-900 transition"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}