'use client'

import { useState } from 'react'

export default function ContactSettings() {
  const [form, setForm] = useState({
    supportEmail: 'destek@rezervio.com',
    phone:        '+90 212 000 00 00',
    address:      'İstanbul, Türkiye',
    website:      'https://rezervio.com',
  })
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <h3 className="font-semibold text-ink-900">İletişim Bilgileri</h3>
      <p className="text-xs text-ink-500 mt-0.5">Destek ve iletişim için kullanılan bilgiler</p>
      <div className="mt-5 space-y-3">
        {[
          { key: 'supportEmail', label: 'Destek E-posta',  placeholder: 'destek@rezervio.com', type: 'email' },
          { key: 'phone',        label: 'Telefon',          placeholder: '+90 212 000 00 00',   type: 'tel'   },
          { key: 'address',      label: 'Adres',            placeholder: 'İstanbul, Türkiye',   type: 'text'  },
          { key: 'website',      label: 'Web Sitesi',       placeholder: 'https://...',         type: 'url'   },
        ].map(({ key, label, placeholder, type }) => (
          <div key={key}>
            <label className="text-xs font-semibold text-ink-700">{label}</label>
            <input
              type={type}
              value={form[key as keyof typeof form]}
              onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
              placeholder={placeholder}
              className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleSave}
        className="mt-5 w-full bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold py-2.5 rounded-lg transition cursor-pointer"
      >
        {saved ? 'Kaydedildi ✓' : 'Kaydet'}
      </button>
    </div>
  )
}
