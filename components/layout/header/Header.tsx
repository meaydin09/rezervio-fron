'use client'

import Link from 'next/link'
import Logo from './Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import MobileMenuButton from './MobileMenuButton'
import { useMobileMenu } from './hooks/useMobileMenu'

export default function Header() {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu()

  return (
    <header className="gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4 flex items-center justify-between gap-3">
        <Logo />
        <DesktopNav />

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden sm:inline-flex text-sm font-semibold text-ink-700 hover:text-ink-900 px-3 py-2 transition"
          >
            Giriş Yap
          </Link>
          <Link
            href="/register"
            className="text-sm font-semibold bg-ink-900 text-white px-4 py-2 rounded-lg hover:bg-ink-800 transition"
          >
            Kayıt Ol
          </Link>
          <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      <MobileNav isOpen={isOpen} closeMenu={closeMenu} />
    </header>
  )
}