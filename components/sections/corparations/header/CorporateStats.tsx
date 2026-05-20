const stats = [
    { label: 'Aktif uzman', value: '12', bg: 'bg-brand-50 border border-brand-100', labelColor: 'text-brand-700', valueColor: 'text-brand-900' },
    { label: 'Bu hafta boş', value: '47', unit: 'saat', bg: 'bg-ink-50', labelColor: 'text-ink-500', valueColor: 'text-ink-900' },
    { label: 'Hizmet türü', value: '18+', bg: 'bg-ink-50', labelColor: 'text-ink-500', valueColor: 'text-ink-900' },
    { label: 'Hizmet süresi', value: '9', unit: 'yıl', bg: 'bg-ink-50', labelColor: 'text-ink-500', valueColor: 'text-ink-900' },
  ]
  
  export default function CorporateStats() {
    return (
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className={`rounded-xl p-3.5 ${stat.bg}`}>
            <div className={`text-xs font-medium ${stat.labelColor}`}>{stat.label}</div>
            <div className={`text-xl font-bold mt-0.5 ${stat.valueColor}`}>
              {stat.value}
              {stat.unit && <span className="text-xs font-medium text-ink-500 ml-1">{stat.unit}</span>}
            </div>
          </div>
        ))}
      </div>
    )
  }