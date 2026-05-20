const tickets = [
    { initials: 'DK', name: 'Deniz Kaya',           bgColor: 'bg-amber-600', priority: 'Acil',    priorityColor: 'bg-rose-50 text-rose-700',   title: 'WhatsApp hatırlatması gitmiyor',                         meta: '#T-2840 · 23 dakika önce · Profesyonel üye' },
    { initials: 'EM', name: 'Ela Mete',              bgColor: 'bg-violet-600', priority: 'Yüksek', priorityColor: 'bg-amber-50 text-amber-700', title: 'Slug değiştirmek istiyorum',                             meta: '#T-2839 · 1 saat önce · Deneme' },
    { initials: 'RC', name: 'Renkli Cup Kuaför',     bgColor: 'bg-sky-600',   priority: 'Normal',  priorityColor: 'bg-ink-100 text-ink-600',    title: 'Kurumsal hesabıma 3 uzman daha ekleyebilir misiniz?',   meta: '#T-2838 · 3 saat önce · Kurumsal' },
  ]
  
  export default function SupportView() {
    return (
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div>
            <h3 className="font-semibold text-ink-900">Açık Destek Talepleri</h3>
            <p className="text-xs text-ink-500 mt-0.5">7 aktif talep · ortalama yanıt 2sa 14dk</p>
          </div>
          <select className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer">
            <option>Tüm öncelikler</option><option>Acil</option><option>Yüksek</option><option>Normal</option>
          </select>
        </div>
  
        <div className="space-y-2">
          {tickets.map((t) => (
            <div key={t.meta} className="p-4 rounded-xl border border-ink-100 hover:bg-ink-50/50 transition cursor-pointer">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className={`w-10 h-10 rounded-lg ${t.bgColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-ink-900">{t.name}</span>
                      <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${t.priorityColor}`}>{t.priority}</span>
                    </div>
                    <div className="text-sm text-ink-700 mt-1">{t.title}</div>
                    <div className="text-xs text-ink-500 mt-1">{t.meta}</div>
                  </div>
                </div>
                <button className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold px-3 py-2 rounded-lg shrink-0 cursor-pointer transition">
                  Yanıtla
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }