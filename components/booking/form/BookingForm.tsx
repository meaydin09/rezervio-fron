'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { BookingFormData } from '../types'
import SuccessModal from './SuccessModal'

interface Props {
  date: string
  time: string
}

const inputClass = 'mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition'

export default function BookingForm({ date, time }: Props) {
  const [form, setForm] = useState<BookingFormData>({
    firstName: '', lastName: '', phone: '',
    email: '', note: '', kvkkAccepted: false,
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const update = <K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  return (
    <>
      <div className="bg-white rounded-2xl shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] border border-ink-100 p-5 sm:p-6 lg:sticky lg:top-24">
        <h3 className="text-lg font-semibold text-ink-900">Randevu Detayları</h3>

        {/* Özet */}
        <div className="mt-4 bg-brand-50 border border-brand-100 rounded-xl p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-white border border-brand-100 flex items-center justify-center text-brand-600 shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </div>
          <div className="flex-1 text-sm min-w-0">
            <div className="font-semibold text-ink-900">{date} · {time}</div>
            <div className="text-ink-600 mt-0.5">50 dakika · Online seans</div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setShowSuccess(true) }}
          className="mt-5 space-y-3.5"
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-ink-700">Ad</label>
              <input type="text" placeholder="Onur" value={form.firstName}
                onChange={(e) => update('firstName', e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">Soyad</label>
              <input type="text" placeholder="Uzun" value={form.lastName}
                onChange={(e) => update('lastName', e.target.value)} className={inputClass} />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-ink-700">Telefon</label>
            <div className="mt-1 flex">
              <span className="px-3 py-2.5 bg-ink-50 border border-r-0 border-ink-200 rounded-l-lg text-sm text-ink-600">+90</span>
              <input type="tel" placeholder="5XX 123 45 67" value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                className="flex-1 text-sm border border-ink-200 rounded-r-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition min-w-0" />
            </div>
            <p className="mt-1 text-[11px] text-ink-500 flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c.002-5.45 4.437-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 0 0-3.477-8.413z"/>
              </svg>
              Hatırlatma WhatsApp mesajları bu numaraya gönderilecek
            </p>
          </div>

          <div>
            <label className="text-xs font-semibold text-ink-700">E-posta</label>
            <input type="email" placeholder="ornek@mail.com" value={form.email}
              onChange={(e) => update('email', e.target.value)} className={inputClass} />
          </div>

          <div>
            <label className="text-xs font-semibold text-ink-700">
              Kısa not <span className="text-ink-400 font-normal">(opsiyonel)</span>
            </label>
            <textarea rows={3} placeholder="Uzmana iletmek istediğiniz bir not..."
              value={form.note} onChange={(e) => update('note', e.target.value)}
              className={`${inputClass} resize-none`} />
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input type="checkbox" id="kvkk" checked={form.kvkkAccepted}
              onChange={(e) => update('kvkkAccepted', e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500" />
            <label htmlFor="kvkk" className="text-xs text-ink-600 leading-relaxed cursor-pointer">
              <Link href="/kvkk" target="_blank" className="underline">KVKK metnini</Link> okudum,
              kişisel verilerimin işlenmesini kabul ediyorum.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] transition flex items-center justify-center gap-2 cursor-pointer"
          >
            Randevuyu Onayla
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </button>
          <p className="text-center text-[11px] text-ink-500">Ücretlendirme seans sırasında yapılır.</p>
        </form>
      </div>

      {showSuccess && (
        <SuccessModal
          date={date}
          time={time}
          onClose={() => setShowSuccess(false)}
        />
      )}
    </>
  )
}