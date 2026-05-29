'use client'

import { useState } from 'react'

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

export default function SecuritySettings() {
  const [twoFactor, setTwoFactor] = useState(false)
  const [saved, setSaved]         = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <h3 className="font-semibold text-ink-900">Güvenlik</h3>
      <p className="text-xs text-ink-500 mt-0.5">Admin erişim güvenliği</p>

      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-ink-900">İki Faktörlü Doğrulama (2FA)</div>
            <div className="text-xs text-ink-500">Admin girişlerinde 2FA zorunlu olsun</div>
          </div>
          <Toggle active={twoFactor} onChange={setTwoFactor} />
        </div>

        {twoFactor && (
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800">
            2FA aktif edildiğinde tüm admin hesapları bir sonraki girişte doğrulayıcı uygulama kurulumunu tamamlamalıdır.
          </div>
        )}
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
