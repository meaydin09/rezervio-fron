const hours = [
    { days: 'Pazartesi - Cuma', value: '09:00 - 20:00', closed: false },
    { days: 'Cumartesi', value: '10:00 - 18:00', closed: false },
    { days: 'Pazar', value: 'Kapalı', closed: true },
  ]
  
  export default function ClinicHours() {
    return (
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <h3 className="font-bold text-ink-900 mb-3">Çalışma Saatleri</h3>
        <div className="space-y-2 text-xs">
          {hours.map((h) => (
            <div key={h.days} className={`flex items-center justify-between ${h.closed ? 'text-ink-400' : ''}`}>
              <span className={h.closed ? '' : 'text-ink-600'}>{h.days}</span>
              <span className="font-semibold text-ink-900">{h.value}</span>
            </div>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-ink-100 text-emerald-600">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Şu an açık
            </span>
            <span className="font-semibold">Saat 20:00'ye kadar</span>
          </div>
        </div>
      </div>
    )
  }