import type { Document } from '../types'

const documents: Document[] = [
  { title: 'Diploma · Y. Lisans', meta: 'PDF · 2.4 MB', type: 'pdf' },
  { title: 'Türk Psikologlar Derneği Üyelik', meta: 'PDF · 1.1 MB · Doğrulanmış', type: 'pdf', verified: true },
  { title: 'EMDR Sertifika Görüntüsü', meta: 'JPG · 845 KB', type: 'image' },
]

export default function DocumentsCard() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] border border-ink-100 p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/>
          </svg>
        </div>
        <h3 className="font-semibold text-ink-900">Belgeler & Yetkinlikler</h3>
      </div>
      <div className="space-y-2">
        {documents.map((doc) => (
          <div key={doc.title} className="flex items-center gap-3 p-3 rounded-lg border border-ink-100 hover:bg-ink-50/50 transition cursor-pointer">
            <div className={`w-9 h-11 rounded flex items-center justify-center shrink-0 ${
              doc.type === 'pdf' ? 'bg-rose-50 border border-rose-100 text-rose-600' : 'bg-sky-50 border border-sky-100 text-sky-600'
            }`}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {doc.type === 'pdf'
                  ? <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>
                  : <><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></>
                }
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate text-ink-900">{doc.title}</div>
              <div className="text-xs text-ink-500">{doc.meta}</div>
            </div>
            {doc.verified ? (
              <svg className="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}