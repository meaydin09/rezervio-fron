'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import type { ContactField } from '../types'

const fields: ContactField[] = [
  { label: 'Ad Soyad',   placeholder: 'Adınız',                    type: 'text'     },
  { label: 'E-posta',    placeholder: 'E-posta adresiniz',          type: 'email'    },
  { label: 'Konu',       placeholder: 'Hangi konuda yazıyorsunuz?', type: 'text',     colSpan: true },
  { label: 'Mesajınız',  placeholder: 'Size nasıl yardımcı olabiliriz?', type: 'textarea', colSpan: true },
]

const inputClass = 'w-full px-5 py-3.5 rounded-xl border border-ink-200 focus:ring-2 focus:ring-brand-100 focus:border-brand-500 bg-white outline-none transition placeholder:text-ink-400 text-sm'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="lg:col-span-7 bg-white border border-ink-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm flex flex-col items-center justify-center text-center gap-4 min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl">✅</div>
        <h2 className="text-2xl font-bold text-ink-900">Mesajınız Gönderildi!</h2>
        <p className="text-ink-600 text-sm max-w-sm">En kısa sürede size dönüş yapacağız. Ortalama yanıt süremiz 28 dakikadır.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-brand-600 hover:underline cursor-pointer"
        >
          Yeni mesaj gönder
        </button>
      </div>
    )
  }

  return (
    <div className="lg:col-span-7 bg-white border border-ink-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
      <h2 className="text-2xl font-bold text-ink-900 mb-8">Mesaj Gönderin</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {fields.map((field) => (
          <div key={field.label} className={`flex flex-col gap-2 ${field.colSpan ? 'md:col-span-2' : ''}`}>
            <label className="text-xs font-semibold text-ink-700 px-1">{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                placeholder={field.placeholder}
                rows={5}
                required
                className={`${inputClass} resize-none`}
              />
            ) : (
              <input
                type={field.type}
                placeholder={field.placeholder}
                required
                className={inputClass}
              />
            )}
          </div>
        ))}

        <div className="md:col-span-2 pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] transition flex items-center justify-center gap-2 cursor-pointer"
          >
            Mesajı Gönder
            <Send className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </form>
    </div>
  )
}