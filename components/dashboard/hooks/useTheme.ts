import { useState } from 'react'
import type { ThemeConfig, ThemeName } from '../types'

const themes: Record<ThemeName, ThemeConfig> = {
  indigo:  { name: 'indigo',  gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#4f46e5', hex: '#4f46e5' },
  rose:    { name: 'rose',    gradient: 'linear-gradient(135deg, #f43f5e, #fb923c)', color: '#f43f5e', hex: '#f43f5e' },
  emerald: { name: 'emerald', gradient: 'linear-gradient(135deg, #10b981, #06b6d4)', color: '#10b981', hex: '#10b981' },
  amber:   { name: 'amber',   gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: '#f59e0b', hex: '#f59e0b' },
  slate:   { name: 'slate',   gradient: 'linear-gradient(135deg, #475569, #0f172a)', color: '#475569', hex: '#475569' },
  sky:     { name: 'sky',     gradient: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)', color: '#0ea5e9', hex: '#0ea5e9' },
}

export function useTheme() {
  const [active, setActive] = useState<ThemeConfig>(themes.indigo)
  const [customHex, setCustomHex] = useState('#4f46e5')

  const setTheme = (name: ThemeName) => setActive(themes[name])

  const setCustomColor = (hex: string) => {
    setCustomHex(hex)
    setActive({ name: 'indigo', gradient: `linear-gradient(135deg, ${hex}, ${hex})`, color: hex, hex })
  }

  return { active, customHex, setTheme, setCustomColor }
}