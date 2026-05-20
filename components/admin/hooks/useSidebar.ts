import { useState } from 'react'

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen((p) => !p)
  const close = () => setIsOpen(false)
  return { isOpen, toggle, close }
}