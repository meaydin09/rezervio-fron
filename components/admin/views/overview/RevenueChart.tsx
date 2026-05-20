const months = ['Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara', 'Oca', 'Şub', 'Mar', 'Nis', 'May']

export default function RevenueChart() {
  return (
    <div className="xl:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <h3 className="font-semibold text-ink-900">Gelir Trendi</h3>
          <p className="text-xs text-ink-500 mt-0.5">Toplam · Profesyonel · Kurumsal</p>
        </div>
        <div className="flex gap-2 text-xs font-semibold">
          {['Günlük', 'Aylık', 'Yıllık'].map((v, i) => (
            <button key={v} className={`px-3 py-1.5 rounded-md transition cursor-pointer ${i === 1 ? 'bg-ink-900 text-white' : 'text-ink-500 hover:bg-ink-50'}`}>{v}</button>
          ))}
        </div>
      </div>

      <div className="relative h-56 sm:h-64">
        <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-ink-400 pointer-events-none">
          {['₺800k', '₺600k', '₺400k', '₺200k', '₺0'].map((l) => (
            <div key={l} className="border-b border-dashed border-ink-100"><span>{l}</span></div>
          ))}
        </div>
        <svg viewBox="0 0 400 220" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="adminTotalGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,170 L33,160 L66,150 L100,130 L133,120 L166,95 L200,100 L233,80 L266,75 L300,55 L333,45 L366,35 L400,28 L400,220 L0,220 Z" fill="url(#adminTotalGrad)" />
          <path d="M0,170 L33,160 L66,150 L100,130 L133,120 L166,95 L200,100 L233,80 L266,75 L300,55 L333,45 L366,35 L400,28" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M0,185 L33,178 L66,170 L100,158 L133,150 L166,130 L200,135 L233,118 L266,115 L300,98 L333,90 L366,78 L400,70" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
          <path d="M0,200 L33,196 L66,192 L100,180 L133,175 L166,160 L200,165 L233,148 L266,140 L300,128 L333,118 L366,108 L400,95" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
          <circle cx="400" cy="28" r="5" fill="#4f46e5" />
          <circle cx="400" cy="28" r="9" fill="#4f46e5" fillOpacity="0.2" />
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-12 text-[10px] text-ink-400 font-medium">
        {months.map((m) => <div key={m}>{m}</div>)}
      </div>

      <div className="mt-4 pt-4 border-t border-ink-100 flex items-center gap-4 text-xs flex-wrap">
        <div className="flex items-center gap-1.5"><span className="w-3 h-1 rounded bg-brand-600" /> Toplam <strong>₺624k</strong></div>
        <div className="flex items-center gap-1.5"><span className="w-3 border-t-2 border-dashed border-brand-300" /> Profesyonel <strong>₺478k</strong></div>
        <div className="flex items-center gap-1.5"><span className="w-3 border-t-2 border-dashed border-rose-400" /> Kurumsal <strong>₺146k</strong></div>
      </div>
    </div>
  )
}