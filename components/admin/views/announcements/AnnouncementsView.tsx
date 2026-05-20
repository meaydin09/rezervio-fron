import AnnouncementForm from './AnnouncementForm'

const recent = [
  { status: 'Gönderildi', title: 'Mayıs ayı bakım duyurusu', meta: '1.247 üyeye · %78 okundu', when: '3 gün önce' },
  { status: 'Gönderildi', title: 'Yeni tema özellikleri',     meta: '892 üyeye · %91 okundu',   when: '1 hafta önce' },
  { status: 'Taslak',     title: 'Q3 planlaması',             meta: 'Düzenlenmeyi bekliyor',     when: '2 hafta önce' },
]

const statusColors: Record<string, string> = {
  Gönderildi: 'bg-emerald-50 text-emerald-700',
  Taslak: 'bg-amber-50 text-amber-700',
}

export default function AnnouncementsView() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <AnnouncementForm />
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <h3 className="font-semibold text-ink-900">Son Duyurular</h3>
        <div className="mt-4 space-y-3">
          {recent.map((r) => (
            <div key={r.title} className="p-3 rounded-lg bg-ink-50 border border-ink-100">
              <div className="flex items-center justify-between mb-1">
                <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${statusColors[r.status]}`}>{r.status}</span>
                <span className="text-[11px] text-ink-500">{r.when}</span>
              </div>
              <div className="text-sm font-semibold text-ink-900">{r.title}</div>
              <div className="text-xs text-ink-500 mt-0.5">{r.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}