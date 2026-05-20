const hours = [
    { label: '10:00 - 11:00', pct: 94, color: 'bg-brand-500' },
    { label: '19:00 - 20:00', pct: 88, color: 'bg-brand-500' },
    { label: '14:00 - 15:00', pct: 76, color: 'bg-brand-400' },
    { label: '11:00 - 12:00', pct: 62, color: 'bg-brand-300' },
    { label: '16:00 - 17:00', pct: 54, color: 'bg-brand-300' },
    { label: '09:00 - 10:00', pct: 38, color: 'bg-brand-200' },
  ]
  
  export default function PopularHours() {
    return (
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <h3 className="font-semibold text-ink-900">En Popüler Saatler</h3>
        <p className="text-xs text-ink-500 mt-0.5">Son 30 gün talebi</p>
  
        <div className="mt-5 space-y-3">
          {hours.map((h) => (
            <div key={h.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-ink-900">{h.label}</span>
                <span className="text-ink-500">{h.pct}%</span>
              </div>
              <div className="h-2 bg-ink-100 rounded-full overflow-hidden">
                <div className={`h-full ${h.color} rounded-full`} style={{ width: `${h.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
  
        <div className="mt-5 pt-4 border-t border-ink-100">
          <div className="text-xs font-semibold text-ink-700 mb-2">En yoğun gün</div>
          <div className="flex items-center justify-between bg-brand-50 border border-brand-100 rounded-lg p-3">
            <div>
              <div className="text-sm font-bold text-brand-900">Salı</div>
              <div className="text-xs text-brand-700">Ortalama 8.4 randevu</div>
            </div>
            <svg className="w-8 h-8 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 6l-9.5 9.5-5-5L1 18"/><polyline points="17 6 23 6 23 12"/>
            </svg>
          </div>
        </div>
      </div>
    )
  }