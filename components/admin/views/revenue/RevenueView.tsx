import AdminRevenueChart from './RevenueChart'
import TopEarners from './TopEarners'
import RevenueBreakdown from './RevenueBreakdown'

const cards = [
  { label: 'Bugünkü Gelir', value: '₺18.470', sub: '↑ 23% · dün: ₺15.012', gradient: 'from-emerald-600 to-emerald-700' },
  { label: 'Aylık Gelir',   value: '₺624.180', sub: '↑ 12% · Mayıs 2026',   gradient: 'from-brand-600 to-violet-600' },
  { label: 'Yıllık Gelir',  value: '₺6.8M',    sub: '↑ 187% · Geçen yıl: ₺2.4M', gradient: 'from-ink-800 to-ink-900' },
]

export default function RevenueView() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
        {cards.map((c) => (
          <div key={c.label} className={`bg-gradient-to-br ${c.gradient} text-white rounded-2xl p-6 shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)]`}>
            <div className="text-xs font-semibold text-white/80 uppercase tracking-wider">{c.label}</div>
            <div className="mt-2 text-3xl font-bold">{c.value}</div>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <span className="bg-white/20 px-2 py-0.5 rounded-full">{c.sub.split('·')[0]}</span>
              <span className="text-white/80">{c.sub.split('·')[1]}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid xl:grid-cols-3 gap-6">
        <AdminRevenueChart />
        <TopEarners />
      </div>

      <RevenueBreakdown />
    </>
  )
}