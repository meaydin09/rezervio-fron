const plans = [
    { label: 'Profesyonel', count: 704,  pct: 56, color: 'bg-brand-600' },
    { label: 'Kurumsal',    count: 188,  pct: 15, color: 'bg-rose-500'  },
    { label: 'Deneme',      count: 78,   pct: 6,  color: 'bg-ink-400'   },
    { label: 'Pasif',       count: 277,  pct: 22, color: 'bg-ink-200', muted: true },
  ]
  
  export default function PlanDistribution() {
    return (
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <h3 className="font-semibold text-ink-900">Plan Dağılımı</h3>
        <p className="text-xs text-ink-500 mt-0.5">Aktif aboneliklere göre</p>
  
        <div className="mt-5 relative w-40 h-40 mx-auto">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#4f46e5" strokeWidth="4" strokeDasharray="62 88" strokeDashoffset="0" strokeLinecap="round" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#f43f5e" strokeWidth="4" strokeDasharray="20 88" strokeDashoffset="-62" strokeLinecap="round" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="6 88" strokeDashoffset="-82" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-ink-900">1.247</div>
            <div className="text-[11px] text-ink-500">Toplam üye</div>
          </div>
        </div>
  
        <div className="mt-5 space-y-2.5 text-sm">
          {plans.map((p) => (
            <div key={p.label} className={`flex items-center justify-between ${p.muted ? 'pt-2 border-t border-ink-100' : ''}`}>
              <div className={`flex items-center gap-2 ${p.muted ? 'text-ink-500' : ''}`}>
                <span className={`w-2.5 h-2.5 rounded-full ${p.color}`} />
                {p.label}
              </div>
              <div className={p.muted ? 'text-ink-500' : ''}>
                <strong>{p.count}</strong>
                <span className="text-ink-500 text-xs ml-1">(%{p.pct})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }