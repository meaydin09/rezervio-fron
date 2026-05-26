'use client'

import { X, Check, Plus } from 'lucide-react'

interface Props {
  onClose: () => void
  onNavigate?: (view: string) => void
}

const completed = ['Temel Bilgiler', 'Profil Fotoğrafı', 'Biyografi', 'Çalışma Saatleri']

const pending = [
  { label: 'Sertifika Ekle',       view: 'settings:certificate' },
  { label: 'Eğitim Bilgileri',     view: 'settings:education'   },

]

export default function ProfileCompletion({ onClose, onNavigate }: Props) {
  return (
    <div className="mb-6 bg-gradient-to-br from-brand-50 via-violet-50 to-rose-50 rounded-2xl border border-brand-100 p-4 sm:p-5 relative overflow-hidden">
      <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-brand-200/30 to-violet-200/30 rounded-full blur-2xl" />

      <div className="relative flex items-start gap-4 flex-wrap">
        <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] flex items-center justify-center text-2xl shrink-0">✨</div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-base sm:text-lg text-ink-900">Profilini tamamla!</h3>
            <span className="inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded-full bg-white text-brand-700 border border-brand-200">%65</span>
          </div>
          <p className="text-xs sm:text-sm text-ink-600 mt-1">
            Sertifika, eğitim ve hizmet bilgilerini ekleyerek profilini güçlendir.
            Tamamlanmış profil <strong className="text-ink-900">2.3 kat</strong> daha fazla randevu alıyor!
          </p>

          <div className="mt-3 h-2 bg-white rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-brand-500 via-violet-500 to-rose-500 rounded-full transition-all duration-700" style={{ width: '65%' }} />
          </div>

          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {completed.map((item) => (
              <div key={item} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-emerald-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                </div>
                <span className="text-xs font-medium text-ink-700 truncate">{item}</span>
              </div>
            ))}
            {pending.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate?.(item.view)}
                className="flex items-center gap-2 p-2 rounded-lg bg-amber-50/80 border border-amber-200 hover:bg-amber-100 transition cursor-pointer text-left"
              >
                <div className="w-5 h-5 rounded-full border-2 border-amber-400 flex items-center justify-center shrink-0">
                  <Plus className="w-3 h-3 text-amber-600" strokeWidth={2.5} />
                </div>
                <span className="text-xs font-semibold text-amber-800 truncate">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute top-3 right-3 w-7 h-7 rounded-lg hover:bg-white/60 flex items-center justify-center text-ink-400 hover:text-ink-700 transition cursor-pointer"
        >
          <X className="w-4 h-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}