const months = ['Haz','Tem','Ağu','Eyl','Eki','Kas','Ara','Oca','Şub','Mar','Nis','May']

export default function AdminRevenueChart() {
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h3 className="font-semibold text-ink-900">Gelir Trendi (Detaylı)</h3>
        <div className="flex gap-2 text-xs font-semibold">
          {['Günlük','Haftalık','Aylık','Yıllık'].map((v,i) => (
            <button key={v} className={`px-3 py-1.5 rounded-md cursor-pointer transition ${i===2 ? 'bg-ink-900 text-white' : 'text-ink-500 hover:bg-ink-50'}`}>{v}</button>
          ))}
        </div>
      </div>
      <div className="relative h-72">
        <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-ink-400 pointer-events-none">
          {['₺800k','₺600k','₺400k','₺200k','₺0'].map((l) => (
            <div key={l} className="border-b border-dashed border-ink-100"><span>{l}</span></div>
          ))}
        </div>
        <svg viewBox="0 0 400 280" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bigRevGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,220 L33,210 L66,195 L100,170 L133,160 L166,130 L200,135 L233,110 L266,100 L300,75 L333,60 L366,45 L400,35 L400,280 L0,280 Z" fill="url(#bigRevGrad)" />
          <path d="M0,220 L33,210 L66,195 L100,170 L133,160 L166,130 L200,135 L233,110 L266,100 L300,75 L333,60 L366,45 L400,35" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="400" cy="35" r="6" fill="#10b981" />
          <circle cx="400" cy="35" r="10" fill="#10b981" fillOpacity="0.2" />
        </svg>
      </div>
      <div className="mt-3 grid grid-cols-12 text-[10px] text-ink-400 font-medium">
        {months.map((m) => <div key={m}>{m}</div>)}
      </div>
    </div>
  )
}