'use client'

import { useState } from 'react'
import { X, Check, Calendar, Clock } from 'lucide-react'

interface Props {
  specialistName: string
  selectedDay: number
  selectedTime: string
  onClose: () => void
}

export default function BookingModal({ specialistName, selectedDay, selectedTime, onClose }: Props) {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('success')
    setTimeout(() => {
      onClose()
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">

        {step === 'form' ? (
          <>
            <div className="p-5 border-b border-ink-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-ink-900">Randevu Oluştur</h3>
                <p className="text-xs text-ink-500 mt-0.5">{specialistName}</p>
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer transition">
                <X className="w-4 h-4 text-ink-500" strokeWidth={2} />
              </button>
            </div>

            {/* Seçilen randevu bilgisi */}
            <div className="mx-5 mt-5 p-3 rounded-xl bg-brand-50 border border-brand-100 flex items-center gap-3">
              <div className="flex items-center gap-2 text-brand-700">
                <Calendar className="w-4 h-4" strokeWidth={2} />
                <span className="text-sm font-semibold">{selectedDay} Mayıs</span>
              </div>
              <span className="text-brand-300">·</span>
              <div className="flex items-center gap-2 text-brand-700">
                <Clock className="w-4 h-4" strokeWidth={2} />
                <span className="text-sm font-semibold">{selectedTime || 'Saat seçilmedi'}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-ink-700">Ad Soyad</label>
                <input
                  type="text"
                  required
                  placeholder="Adınız ve soyadınız"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-700">E-posta</label>
                <input
                  type="email"
                  required
                  placeholder="ornek@mail.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-700">Telefon</label>
                <input
                  type="tel"
                  required
                  placeholder="+90 5XX XXX XX XX"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                />
              </div>

              <div className="flex gap-2 pt-2 border-t border-ink-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2.5 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-xl cursor-pointer transition"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-xl shadow-[0_4px_12px_-2px_rgba(79,70,229,0.3)] cursor-pointer transition"
                >
                  Randevu Oluştur
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="p-10 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <Check className="w-8 h-8 text-emerald-600" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-ink-900">Randevunuz Oluşturuldu!</h3>
              <p className="text-sm text-ink-600 mt-2">
                {selectedDay} Mayıs · {selectedTime} randevunuz onaylandı.
              </p>
              <p className="text-xs text-ink-400 mt-1">
                Randevu bilgileri {form.phone}  gönderildi.
              </p>
            </div>
            <div className="w-full bg-ink-100 rounded-full h-1 overflow-hidden mt-2">
              <div className="h-full bg-emerald-500 rounded-full animate-[shrink_2.5s_linear_forwards]" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}