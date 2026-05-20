const months = ['Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara', 'Oca', 'Şub', 'Mar', 'Nis', 'May']

export default function RevenueChart() {
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <h3 className="font-semibold text-ink-900">Aylık Klinik Geliri</h3>
          <p className="text-xs text-ink-500 mt-0.5">12 uzman toplamı · son 12 ay</p>
        </div>
        <div className="flex gap-2 text-xs font-semibold">
          {['12 Ay', '6 Ay', '30 Gün'].map((v, i) => (
            <button key={v} className={`px-3 py-1.5 rounded-md transition cursor-pointer ${i === 0 ? 'bg-ink-900 text-white' : 'text-ink-500 hover:bg-ink-50'}`}>{v}</button>
          ))}
        </div>
      </div>

      <div className="relative h-48 sm:h-56">
        <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-ink-400 pointer-events-none">
          {['₺500K', '₺375K', '₺250K', '₺125K', '₺0'].map((label) => (
            <div key={label} className="border-b border-dashed border-ink-100"><span>{label}</span></div>
          ))}
        </div>
        <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="revenueGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,160 L33,150 L66,140 L100,110 L133,120 L166,85 L200,95 L233,65 L266,75 L300,50 L333,40 L366,28 L400,22 L400,200 L0,200 Z" fill="url(#revenueGrad)" />
          <path d="M0,160 L33,150 L66,140 L100,110 L133,120 L166,85 L200,95 L233,65 L266,75 L300,50 L333,40 L366,28 L400,22" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="400" cy="22" r="5" fill="#4f46e5" />
          <circle cx="400" cy="22" r="9" fill="#4f46e5" fillOpacity="0.2" />
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-12 text-[10px] text-ink-400 font-medium">
        {months.map((m) => <div key={m}>{m}</div>)}
      </div>
    </div>
  )
}