'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import MobileMenuButton from './MobileMenuButton'
import { useMobileMenu } from './hooks/useMobileMenu'

const hideNavOn = ['/iletisim', '/login', '/register', '/kvkk', '/gizlilik']

export default function Header() {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu()
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const hideNav = hideNavOn.includes(pathname)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md ${
  scrolled ? 'border-b border-ink-100/80 shadow-[0_1px_8px_-2px_rgba(15,23,42,0.08)]' : 'border-b border-transparent'
}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
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

      {!hideNav && <MobileNav isOpen={isOpen} closeMenu={closeMenu} />}
    </header>
  )
}