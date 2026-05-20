import AppointmentsTable from './AppointmentsTable'

const stats = [
  { label: 'Bugün',       value: '3.847', sub: '↑ 18% dün',        subColor: 'text-emerald-600' },
  { label: 'Bu Ay',       value: '89.412', sub: 'Toplam' },
  { label: 'No-Show',     value: '2.8%',  sub: 'Aylık ortalama',   valueColor: 'text-rose-600' },
  { label: 'İptal Oranı', value: '5.4%',  sub: 'Aylık ortalama' },
]

export default function AppointmentsView() {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
            <div className="text-xs font-semibold text-ink-500 uppercase tracking-wider">{stat.label}</div>
            <div className={`mt-2 text-2xl font-bold ${stat.valueColor ?? 'text-ink-900'}`}>{stat.value}</div>
            <div className={`mt-1 text-xs ${stat.subColor ?? 'text-ink-500'}`}>{stat.sub}</div>
          </div>
        ))}
      </div>
      <AppointmentsTable />
    </div>
  )
}