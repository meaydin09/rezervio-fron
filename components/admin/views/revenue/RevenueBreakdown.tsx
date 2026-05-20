const plans = [
    { label: 'Profesyonel', amount: '₺478.296', count: '704 abone', pct: 77, gradient: 'from-brand-400 to-brand-600' },
    { label: 'Kurumsal',    amount: '₺145.884', count: '188 abone', pct: 23, gradient: 'from-rose-400 to-rose-600' },
  ]
  
  const metrics = [
    { label: 'ARPU',      value: '₺700',    sub: 'Üye başı gelir' },
    { label: 'LTV',       value: '₺18.420', sub: 'Yaşam boyu değer' },
    { label: 'Churn',     value: '2.1%',    sub: 'Aylık',         color: 'text-rose-600' },
    { label: 'Dönüşüm',   value: '38%',     sub: 'Deneme → Ücretli', color: 'text-emerald-600' },
  ]
  
  export default function RevenueBreakdown() {
    return (
      <div className="mt-6 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <h3 className="font-semibold text-ink-900">Plan Bazında Gelir Dağılımı</h3>
        <p className="text-xs text-ink-500 mt-0.5">Aylık tekrarlayan gelir (MRR) detayı</p>
        <div className="mt-5 space-y-4">
          {plans.map((p) => (
            <div key={p.label}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-semibold text-ink-900">{p.label}</span>
                <span className="text-ink-600"><strong className="text-ink-900">{p.amount}</strong> · {p.count} · %{p.pct}</span>
              </div>
              <div className="h-3 bg-ink-100 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${p.gradient} rounded-full`} style={{ width: `${p.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-5 border-t border-ink-100 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-xs text-ink-500">{m.label}</div>
              <div className={`text-lg font-bold mt-0.5 ${m.color || 'text-ink-900'}`}>{m.value}</div>
              <div className="text-[11px] text-ink-500">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }