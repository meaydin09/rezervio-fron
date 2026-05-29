'use client'

import { useState } from 'react'

function Toggle({ active, onChange }: { active: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!active)}
      className={`relative w-11 h-6 rounded-full transition cursor-pointer ${active ? 'bg-emerald-500' : 'bg-ink-200'}`}
    >
      <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${active ? 'right-0.5' : 'left-0.5'}`} />
    </button>
  )
}

export default function GeneralSettings() {
  const [maintenance, setMaintenance] = useState(false)
  const [registration, setRegistration] = useState(true)

  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <h3 className="font-semibold text-ink-900">Genel</h3>
      <p className="text-xs text-ink-500 mt-0.5">Platform erişim kontrolleri</p>
      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-ink-900">Bakım Modu</div>
            <div className="text-xs text-ink-500">Tüm kullanıcılara bakım mesajı göster</div>
          </div>
          <Toggle active={maintenance} onChange={setMaintenance} />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-ink-900">Yeni Kayıt</div>
            <div className="text-xs text-ink-500">Yeni kullanıcı kaydını aç / kapat</div>
          </div>
          <Toggle active={registration} onChange={setRegistration} />
        </div>
      </div>
    </div>
  )
}
