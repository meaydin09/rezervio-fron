const stats = [
    { label: 'Bugünkü Gelir', value: '₺18.470', badge: { text: '↑ 23%', color: 'bg-emerald-50 text-emerald-700' }, extra: null },
    { label: 'MRR',           value: '₺624.180', badge: { text: '↑ 12%', color: 'bg-emerald-50 text-emerald-700' }, extra: 'Aylık tekrarlayan' },
    { label: 'Aktif Üye',     value: '1.247',    badge: { text: '+89',   color: 'bg-brand-50 text-brand-700'    }, extra: null },
    { label: 'Yeni Kayıt',    value: '23',       badge: { text: 'Bugün', color: 'bg-amber-50 text-amber-700'   }, extra: 'Son 24 saat' },
    { label: 'Kayıp Oranı',   value: '2.1%',     badge: { text: '↓ 0.4%', color: 'bg-rose-50 text-rose-700'   }, extra: 'Aylık churn' },
  ]
  
  export default function StatsGrid() {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className={`bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-4 sm:p-5 ${stat.label === 'Kayıp Oranı' ? 'col-span-2 lg:col-span-1' : ''}`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-ink-500">{stat.label}</span>
              <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${stat.badge.color}`}>{stat.badge.text}</span>
            </div>
            <div className="mt-2 text-xl sm:text-2xl font-bold text-ink-900">{stat.value}</div>
            {stat.extra && <div className="mt-3 text-[11px] text-ink-500">{stat.extra}</div>}
            {stat.label === 'Aktif Üye' && (
              <div className="mt-3 h-1.5 bg-ink-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-500 rounded-full" style={{ width: '71%' }} />
              </div>
            )}
            {stat.label === 'Bugünkü Gelir' && (
              <div className="mt-3 flex items-end gap-1 h-7">
                {[30, 45, 35, 60, 55, 75, 90].map((h, i) => (
                  <div key={i} className={`w-1.5 rounded-sm ${i < 3 ? 'bg-ink-200' : 'bg-brand-400'}`} style={{ height: `${h}%` }} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }