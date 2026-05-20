import { useState } from 'react'

interface MobileMenuState {
  isOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

export const useMobileMenu = (): MobileMenuState => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return { isOpen, toggleMenu, closeMenu }
}