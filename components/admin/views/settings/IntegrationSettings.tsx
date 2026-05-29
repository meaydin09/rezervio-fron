'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

function Toggle({ active, onChange }: { active: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!active)}
      className={`relative w-11 h-6 rounded-full transition cursor-pointer shrink-0 ${active ? 'bg-emerald-500' : 'bg-ink-200'}`}
    >
      <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${active ? 'right-0.5' : 'left-0.5'}`} />
    </button>
  )
}

function MaskedInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  const [show, setShow] = useState(false)
  return (
    <div className="relative mt-1">
      <input
        type={show ? 'text' : 'password'}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-sm border border-ink-200 rounded-lg px-3 py-2 pr-9 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none font-mono"
      />
      <button
        onClick={() => setShow(v => !v)}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-600"
      >
        {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
  )
}

export default function IntegrationSettings() {
  const [iyzico, setIyzico]     = useState({ active: true,  apiKey: '', secretKey: '' })
  const [whatsapp, setWhatsapp] = useState({ active: true,  token: '' })
  const [saved, setSaved]       = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5 lg:col-span-2">
      <h3 className="font-semibold text-ink-900">Entegrasyonlar</h3>
      <p className="text-xs text-ink-500 mt-0.5">Üçüncü taraf servis bağlantıları</p>

      <div className="mt-5 grid sm:grid-cols-2 gap-5">
        {/* Iyzico */}
        <div className="p-4 rounded-xl border border-ink-100 bg-ink-50/40 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-ink-900">Iyzico</div>
              <div className="text-xs text-ink-500">Ödeme altyapısı</div>
            </div>
            <Toggle active={iyzico.active} onChange={v => setIyzico(s => ({ ...s, active: v }))} />
          </div>
          {iyzico.active && (
            <>
              <div>
                <label className="text-xs font-semibold text-ink-700">API Key</label>
                <MaskedInput value={iyzico.apiKey} onChange={v => setIyzico(s => ({ ...s, apiKey: v }))} placeholder="sandbox-xxxxxxxxxxxxxxxx" />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-700">Secret Key</label>
                <MaskedInput value={iyzico.secretKey} onChange={v => setIyzico(s => ({ ...s, secretKey: v }))} placeholder="sandbox-xxxxxxxxxxxxxxxx" />
              </div>
            </>
          )}
        </div>

        {/* WhatsApp Business API */}
        <div className="p-4 rounded-xl border border-ink-100 bg-ink-50/40 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-ink-900">WhatsApp Business API</div>
              <div className="text-xs text-ink-500">Hatırlatma & bildirim gönderimi</div>
            </div>
            <Toggle active={whatsapp.active} onChange={v => setWhatsapp(s => ({ ...s, active: v }))} />
          </div>
          {whatsapp.active && (
            <div>
              <label className="text-xs font-semibold text-ink-700">Access Token</label>
              <MaskedInput value={whatsapp.token} onChange={v => setWhatsapp(s => ({ ...s, token: v }))} placeholder="EAAxxxxxxxxxxxxxxx" />
            </div>
          )}
        </div>
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
