const flags = [
    { label: 'Çoklu dil desteği',       sub: 'TR · EN · DE',                active: true  },
    { label: 'Kredi kartı ödeme',        sub: 'Iyzico entegrasyonu',         active: true  },
    { label: 'Google Calendar senkronu', sub: 'Beta · 23 kullanıcı',         active: true  },
    { label: 'Online ödeme alma',        sub: 'Kapalı · Geliştirme aşaması', active: false },
  ]
  
  export default function FeatureFlags() {
    return (
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5 lg:col-span-2">
        <h3 className="font-semibold text-ink-900">Feature Flags</h3>
        <p className="text-xs text-ink-500 mt-0.5">Sistem genelinde aktif/pasif özellikler</p>
        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          {flags.map((f) => (
            <div key={f.label} className="flex items-center justify-between p-3 rounded-lg bg-ink-50">
              <div>
                <div className="text-sm font-semibold text-ink-900">{f.label}</div>
                <div className="text-xs text-ink-500">{f.sub}</div>
              </div>
              <button className={`relative w-11 h-6 rounded-full transition cursor-pointer ${f.active ? 'bg-emerald-500' : 'bg-ink-200'}`}>
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${f.active ? 'right-0.5' : 'left-0.5'}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }