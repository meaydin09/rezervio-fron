import { Check } from 'lucide-react'
import type { ThemeName, ThemeConfig } from '../types'

const themes: { name: ThemeName; gradient: string }[] = [
  { name: 'indigo',  gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
  { name: 'rose',    gradient: 'linear-gradient(135deg, #f43f5e, #fb923c)' },
  { name: 'emerald', gradient: 'linear-gradient(135deg, #10b981, #06b6d4)' },
  { name: 'amber',   gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)' },
  { name: 'slate',   gradient: 'linear-gradient(135deg, #475569, #0f172a)' },
  { name: 'sky',     gradient: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)' },
]

interface Props {
  active: ThemeConfig
  customHex: string
  onSetTheme: (name: ThemeName) => void
  onSetCustomColor: (hex: string) => void
}

export default function ThemeCustomizer({ active, customHex, onSetTheme, onSetCustomColor }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-ink-900">Sayfa Renkleri</h3>
        <span className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand-50 text-brand-700">Yeni</span>
      </div>
      <p className="text-xs text-ink-500 mt-1">Profil sayfanın görünümünü özelleştir.</p>

      {/* Preview */}
      <div className="mt-4 rounded-xl border border-ink-100 overflow-hidden">
        <div className="h-14 transition-all" style={{ background: active.gradient }} />
        <div className="px-3 pb-3 -mt-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-ink-900 border-2 border-white shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] flex items-center justify-center text-xs font-bold text-white">OU</div>
          <div className="mt-2 h-2 w-24 bg-ink-100 rounded-full" />
          <div className="mt-1 h-1.5 w-16 bg-ink-100 rounded-full" />
          <button
            className="mt-2.5 h-6 w-full rounded-md text-[10px] font-semibold text-white transition-all"
            style={{ backgroundColor: active.color }}
          >
            Randevu Al
          </button>
        </div>
      </div>

      {/* Theme swatches */}
      <div className="mt-4">
        <div className="text-xs font-semibold text-ink-700 mb-2">Hazır Temalar</div>
        <div className="grid grid-cols-6 gap-2">
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => onSetTheme(t.name)}
              className={`h-10 rounded-lg cursor-pointer transition ring-offset-2 ${
                active.name === t.name ? 'ring-2 ring-brand-500' : 'ring-0'
              }`}
              style={{ background: t.gradient }}
            />
          ))}
        </div>
      </div>

      {/* Custom color */}
      <div className="mt-4 pt-4 border-t border-ink-100">
        <div className="text-xs font-semibold text-ink-700 mb-2">Özel Ana Renk</div>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={customHex}
            onChange={(e) => onSetCustomColor(e.target.value)}
            className="w-12 h-9 rounded-lg border border-ink-200 cursor-pointer p-0.5"
          />
          <input
            type="text"
            value={customHex}
            onChange={(e) => onSetCustomColor(e.target.value)}
            className="flex-1 text-sm border border-ink-200 rounded-lg px-3 py-2 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none font-mono min-w-0"
          />
        </div>
      </div>

      <button className="mt-4 w-full bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold py-2.5 rounded-lg transition cursor-pointer flex items-center justify-center gap-2">
        <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
        Değişiklikleri Kaydet
      </button>
    </div>
  )
}