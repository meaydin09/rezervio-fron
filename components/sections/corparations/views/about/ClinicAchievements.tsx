const stats = [
    { value: '8K+', label: 'Danışan', bg: 'bg-brand-50', textColor: 'text-brand-700' },
    { value: '12', label: 'Uzman', bg: 'bg-emerald-50', textColor: 'text-emerald-700' },
    { value: '9', label: 'Yıl', bg: 'bg-amber-50', textColor: 'text-amber-700' },
    { value: '4.9', label: '★ Puan', bg: 'bg-rose-50', textColor: 'text-rose-700' },
  ]
  
  export default function ClinicAchievements() {
    return (
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <h3 className="font-bold text-ink-900">Rakamlarla Biz</h3>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className={`${stat.bg} rounded-xl p-3 text-center`}>
              <div className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</div>
              <div className={`text-[11px] mt-0.5 ${stat.textColor}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }