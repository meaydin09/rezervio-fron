import { Menu, X } from 'lucide-react'
import type { MobileMenuButtonProps } from './types'

export default function MobileMenuButton({ isOpen, toggleMenu }: MobileMenuButtonProps) {
  return (
    <button
      onClick={toggleMenu}
      aria-label="Menü"
      className="md:hidden w-10 h-10 rounded-lg bg-white/70 backdrop-blur border border-ink-200/70 hover:bg-white flex items-center justify-center text-ink-700 transition"
    >
      {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    </button>
  )
}