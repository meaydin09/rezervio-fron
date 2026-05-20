const plans = [
    { label: 'Profesyonel (Aylık)',  sub: 'Bireysel paket',      value: 699   },
    { label: 'Profesyonel (Yıllık)', sub: '2 ay indirim dahil',  value: 6990  },
    { label: 'Kurumsal (Aylık)',     sub: 'Çok uzmanlı yapılar', value: 1299  },
    { label: 'Kurumsal (Yıllık)',    sub: '2 ay indirim dahil',  value: 12990 },
  ]
  
  export default function PricingSettings() {
    return (
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <h3 className="font-semibold text-ink-900">Plan Fiyatları</h3>
        <div className="mt-5 space-y-4">
          {plans.map((p) => (
            <div key={p.label} className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <div className="text-sm font-semibold text-ink-900">{p.label}</div>
                <div className="text-xs text-ink-500">{p.sub}</div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-ink-500">₺</span>
                <input type="number" defaultValue={p.value} className="w-20 text-sm font-bold border border-ink-200 rounded-lg px-2 py-1.5 text-right focus:border-brand-500 outline-none" />
              </div>
            </div>
          ))}
        </div>
        <button className="mt-5 w-full bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold py-2.5 rounded-lg transition cursor-pointer">
          Değişiklikleri Kaydet
        </button>
      </div>
    )
  }