import Link from 'next/link'

import { navLinks } from './nav-links'
export default function Footer() {
  return (
    <footer className="border-t border-ink-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-500">
        
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700" />
          <span className="font-bold text-ink-800">Rezervio</span>
          <span>© 2026</span>
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-ink-800 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  )
}
