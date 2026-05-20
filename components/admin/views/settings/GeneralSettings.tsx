const toggles = [
    { label: 'Bakım Modu',        sub: 'Tüm kullanıcılara bakım mesajı göster', active: false },
    { label: 'Yeni Kayıt',        sub: 'Yeni kullanıcı kaydını aç/kapat',       active: true  },
    { label: 'WhatsApp Gönderimi', sub: 'Sistem genelinde mesaj gönderimi',      active: true  },
    { label: 'Otomatik Yedekleme', sub: 'Günlük veritabanı yedeği',             active: true  },
  ]
  
  export default function GeneralSettings() {
    return (
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <h3 className="font-semibold text-ink-900">Genel Sistem Ayarları</h3>
        <div className="mt-5 space-y-4">
          {toggles.map((t) => (
            <div key={t.label} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-ink-900">{t.label}</div>
                <div className="text-xs text-ink-500">{t.sub}</div>
              </div>
              <button className={`relative w-11 h-6 rounded-full transition ${t.active ? 'bg-emerald-500' : 'bg-ink-200'} cursor-pointer`}>
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${t.active ? 'right-0.5' : 'left-0.5'}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }