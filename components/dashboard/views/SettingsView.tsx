'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

export default function SettingsView() {
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    fullName: 'Onur Uzun',
    title: 'Psk.',
    slug: 'onuruzun',
    email: 'onur@rezervio.com',
    phone: '+90 5XX 123 45 67',
    specialty: 'Klinik Psikolog',
    bio: 'İstanbul Üniversitesi mezunu, 8 yıllık deneyimli klinik psikolog.',
    timezone: 'Europe/Istanbul',
    workStart: '09:00',
    workEnd: '19:00',
    sessionDuration: '50',
    sessionBuffer: '10',
    emailNotif: true,
    whatsappNotif: true,
    autoConfirm: false,
    showPrice: true,
    onlineSession: true,
  })

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const toggle = (key: keyof typeof form) => {
    setForm((f) => ({ ...f, [key]: !f[key as keyof typeof form] }))
  }

  const inputClass = 'mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none'

  return (
    <div className="space-y-6 max-w-3xl">

      {/* Profil Bilgileri */}
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
        <h3 className="font-semibold text-ink-900 mb-5">Profil Bilgileri</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-ink-700">Ad Soyad</label>
            <input value={form.fullName} onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">Unvan</label>
            <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">Uzmanlık Alanı</label>
            <input value={form.specialty} onChange={(e) => setForm((f) => ({ ...f, specialty: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">E-posta</label>
            <input type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">Telefon</label>
            <input value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">Profil URL</label>
            <div className="mt-1 flex">
              <span className="px-3 py-2.5 bg-ink-50 border border-r-0 border-ink-200 rounded-l-lg text-sm text-ink-500 whitespace-nowrap">rezervio.com/</span>
              <input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} className="flex-1 text-sm border border-ink-200 rounded-r-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none min-w-0" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs font-semibold text-ink-700">Biyografi</label>
            <textarea rows={3} value={form.bio} onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))} className={`${inputClass} resize-none`} />
          </div>
        </div>
      </div>

      {/* Çalışma Saatleri */}
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
        <h3 className="font-semibold text-ink-900 mb-5">Çalışma Saatleri & Seans</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-ink-700">Açılış Saati</label>
            <input type="time" value={form.workStart} onChange={(e) => setForm((f) => ({ ...f, workStart: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">Kapanış Saati</label>
            <input type="time" value={form.workEnd} onChange={(e) => setForm((f) => ({ ...f, workEnd: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">Seans Süresi (dk)</label>
            <select value={form.sessionDuration} onChange={(e) => setForm((f) => ({ ...f, sessionDuration: e.target.value }))} className={`${inputClass} bg-white cursor-pointer`}>
              {['30', '45', '50', '60', '75', '90'].map((v) => <option key={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">Seans Arası (dk)</label>
            <input type="number" value={form.sessionBuffer} onChange={(e) => setForm((f) => ({ ...f, sessionBuffer: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">Saat Dilimi</label>
            <select value={form.timezone} onChange={(e) => setForm((f) => ({ ...f, timezone: e.target.value }))} className={`${inputClass} bg-white cursor-pointer`}>
              <option value="Europe/Istanbul">İstanbul (UTC+3)</option>
              <option value="Europe/London">Londra (UTC+0)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tercihler */}
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
        <h3 className="font-semibold text-ink-900 mb-5">Bildirim & Tercihler</h3>
        <div className="space-y-4">
          {[
            { key: 'emailNotif',    label: 'E-posta Bildirimleri',  sub: 'Yeni randevu ve iptal bildirimleri'        },
            { key: 'whatsappNotif', label: 'WhatsApp Bildirimleri', sub: 'Otomatik hatırlatma mesajları'             },
            { key: 'autoConfirm',  label: 'Otomatik Onay',         sub: 'Randevuları otomatik olarak onayla'        },
            { key: 'showPrice',    label: 'Fiyatları Göster',      sub: 'Profil sayfasında hizmet fiyatlarını göster' },
            { key: 'onlineSession', label: 'Online Seans',         sub: 'Video görüşme ile seans kabul et'          },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-ink-900">{item.label}</div>
                <div className="text-xs text-ink-500">{item.sub}</div>
              </div>
              <button
                onClick={() => toggle(item.key as keyof typeof form)}
                className={`relative w-11 h-6 rounded-full transition cursor-pointer ${
                  form[item.key as keyof typeof form] ? 'bg-emerald-500' : 'bg-ink-200'
                }`}
              >
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${
                  form[item.key as keyof typeof form] ? 'right-0.5' : 'left-0.5'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Kaydet */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer transition"
        >
          {saved && <Check className="w-4 h-4" strokeWidth={2.5} />}
          {saved ? 'Kaydedildi' : 'Değişiklikleri Kaydet'}
        </button>
        {saved && <span className="text-sm text-emerald-600 font-medium">✓ Başarıyla güncellendi</span>}
      </div>
    </div>
  )
}