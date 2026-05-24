import Link from 'next/link'
import Image from 'next/image'

import { navLinks } from './nav-links'
export default function Footer() {
  return (
    <footer className="border-t border-ink-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-500">
        
        <div className="flex items-center gap-2">
          <Image src="/rezervio-logo.png" alt="Rezervio" width={100} height={30} />
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
