'use client'

import { useState } from 'react'
import { MessageCircle, Smartphone, AlertCircle } from 'lucide-react'

const templateItems = [
  { id: 1, label: 'Randevu Onayı',      text: 'Merhaba {isim}, {tarih} tarihli randevunuz onaylanmıştır. 📅',                         active: true  },
  { id: 2, label: '24 Saat Hatırlatma', text: 'Merhaba {isim}, yarın saat {saat} randevunuz var. Bekliyoruz! 🕐',                     active: true  },
  { id: 3, label: '1 Saat Hatırlatma',  text: 'Merhaba {isim}, 1 saat sonra randevunuz var. Sizi bekliyoruz. 😊',                     active: false },
  { id: 4, label: 'İptal Bildirimi',    text: 'Merhaba {isim}, randevunuz iptal edilmiştir. Yeni randevu için bize ulaşabilirsiniz.', active: true  },
]

export default function WhatsAppView() {
  const [connected, setConnected] = useState(false)
  const [templates, setTemplates] = useState(templateItems)
  const [phoneNumber, setPhoneNumber] = useState('')

  const toggleTemplate = (id: number) => {
    setTemplates((prev) => prev.map((t) => t.id === id ? { ...t, active: !t.active } : t))
  }

  return (
    <div className="space-y-6 max-w-3xl">

      {/* Bağlantı Kartı */}
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
            <MessageCircle className="w-6 h-6 text-emerald-600" strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-ink-900">WhatsApp Bağlantısı</h3>
            <p className="text-xs text-ink-500 mt-0.5">whatsapp-web.js ile WhatsApp hesabınızı bağlayın.</p>

            {!connected ? (
              <div className="mt-4 space-y-3">
                <div>
                  <label className="text-xs font-semibold text-ink-700">WhatsApp Numarası</label>
                  <input
                    type="tel"
                    placeholder="+90 5XX XXX XX XX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="mt-1 w-full max-w-xs text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                  />
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <button
                    onClick={() => setConnected(true)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer transition"
                  >
                    <Smartphone className="w-4 h-4" strokeWidth={2} />
                    QR Kod ile Bağlan
                  </button>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2} />
                    <span className="text-xs text-amber-800">WhatsApp Web oturumu gerektirir</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-800">Bağlı · {phoneNumber || '+90 5XX XXX XX XX'}</span>
                </div>
                <button onClick={() => setConnected(false)} className="text-xs font-semibold text-rose-600 hover:underline cursor-pointer">
                  Bağlantıyı Kes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Bu Ay Gönderilen', value: '284',  color: 'text-ink-900'    },
          { label: 'Başarılı',         value: '271',  color: 'text-emerald-600' },
          { label: 'Başarısız',        value: '13',   color: 'text-rose-600'   },
          { label: 'No-Show Önlendi',  value: '%68',  color: 'text-brand-600'  },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-4">
            <div className="text-xs text-ink-500 font-medium">{s.label}</div>
            <div className={`text-2xl font-bold mt-1 ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Şablonlar */}
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <div className="mb-5">
          <h3 className="font-semibold text-ink-900">Mesaj Şablonları</h3>
          <p className="text-xs text-ink-500 mt-0.5">Otomatik gönderilecek mesajları özelleştirin</p>
        </div>
        <div className="space-y-3">
          {templates.map((t) => (
            <div key={t.id} className="flex items-start gap-4 p-4 rounded-xl border border-ink-100 hover:bg-ink-50/40 transition">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-ink-900">{t.label}</span>
                  <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${
                    t.active ? 'bg-emerald-50 text-emerald-700' : 'bg-ink-100 text-ink-500'
                  }`}>
                    {t.active ? 'Aktif' : 'Pasif'}
                  </span>
                </div>
                <p className="text-xs text-ink-600 leading-relaxed">{t.text}</p>
                <p className="text-[11px] text-ink-400 mt-1">
                  Değişkenler: <code className="bg-ink-100 px-1 rounded">{'{isim}'}</code>{' '}
                  <code className="bg-ink-100 px-1 rounded">{'{tarih}'}</code>{' '}
                  <code className="bg-ink-100 px-1 rounded">{'{saat}'}</code>
                </p>
              </div>
              <button
                onClick={() => toggleTemplate(t.id)}
                className={`relative w-11 h-6 rounded-full transition cursor-pointer shrink-0 ${t.active ? 'bg-emerald-500' : 'bg-ink-200'}`}
              >
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${t.active ? 'right-0.5' : 'left-0.5'}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}