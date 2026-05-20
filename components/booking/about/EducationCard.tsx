import type { Education } from '../types'

const educations: Education[] = [
  { title: 'Yüksek Lisans · Klinik Psikoloji', institution: 'İstanbul Üniversitesi', period: '2016-2018', color: 'bg-brand-500' },
  { title: 'Lisans · Psikoloji', institution: 'Boğaziçi Üniversitesi', period: '2012-2016', color: 'bg-brand-400' },
  { title: 'EMDR Terapisti Eğitimi', institution: 'EMDR Türkiye Derneği', period: '2019', color: 'bg-brand-300' },
]

export default function EducationCard() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] border border-ink-100 p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <h3 className="font-semibold text-ink-900">Eğitim & Mezuniyetler</h3>
      </div>
      <div className="space-y-3">
        {educations.map((edu, i) => (
          <div key={i} className={`flex gap-3 ${i < educations.length - 1 ? 'pb-3 border-b border-ink-100' : ''}`}>
            <div className={`w-1 ${edu.color} rounded-full shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-ink-900">{edu.title}</div>
              <div className="text-xs text-ink-500 mt-0.5">{edu.institution} · {edu.period}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}