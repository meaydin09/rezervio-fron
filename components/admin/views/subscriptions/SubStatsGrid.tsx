const stats = [
    { label: 'Toplam MRR', value: '₺624.180', sub: '↑ 12% geçen aya göre', gradient: 'from-brand-600 to-violet-600', white: true },
    { label: 'Profesyonel', value: '704',       sub: '₺478k / ay' },
    { label: 'Kurumsal',    value: '188',       sub: '₺146k / ay' },
    { label: 'Bu Ay İptal', value: '14',        sub: '-₺9.786 etki', valueColor: 'text-rose-600' },
  ]
  
  export default function SubStatsGrid() {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat) => (
          stat.gradient ? (
            <div key={stat.label} className={`bg-gradient-to-br ${stat.gradient} text-white rounded-2xl p-5 shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)]`}>
              <div className="text-xs font-semibold text-white/80 uppercase tracking-wider">{stat.label}</div>
              <div className="mt-2 text-2xl sm:text-3xl font-bold">{stat.value}</div>
              <div className="mt-1 text-xs text-white/80">{stat.sub}</div>
            </div>
          ) : (
            <div key={stat.label} className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
              <div className="text-xs font-semibold text-ink-500 uppercase tracking-wider">{stat.label}</div>
              <div className={`mt-2 text-2xl font-bold ${stat.valueColor ?? 'text-ink-900'}`}>{stat.value}</div>
              <div className="mt-1 text-xs text-ink-500">{stat.sub}</div>
            </div>
          )
        ))}
      </div>
    )
  }