import type { Certificate } from '../types'

const certificates: Certificate[] = [
  { title: 'Bilişsel Davranışçı Terapi (BDT)', issuer: 'Beck Institute', year: '2020' },
  { title: 'Çift & Aile Terapisi Uzmanlık', issuer: 'TPD', year: '2021' },
  { title: 'Travma Sonrası Stres Bozukluğu', issuer: 'EMDR Institute', year: '2022' },
]

export default function CertificatesCard() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] border border-ink-100 p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
          </svg>
        </div>
        <h3 className="font-semibold text-ink-900">Sertifikalar</h3>
      </div>
      <div className="space-y-2.5">
        {certificates.map((cert) => (
          <div key={cert.title} className="flex items-start gap-3 p-3 rounded-lg bg-ink-50">
            <div className="w-8 h-8 rounded-md bg-white border border-ink-200 flex items-center justify-center text-amber-500 shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-ink-900">{cert.title}</div>
              <div className="text-xs text-ink-500 mt-0.5">{cert.issuer} · {cert.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}