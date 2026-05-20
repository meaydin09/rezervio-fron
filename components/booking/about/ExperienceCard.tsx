import type { Experience } from '../types'

const experiences: Experience[] = [
  { title: 'Klinik Psikolog', company: 'Bağımsız Pratik', period: '2020 - Bugün', color: 'bg-violet-500', current: true },
  { title: 'Klinik Psikolog', company: 'NovaPsy Klinik', period: '2018 - 2020', color: 'bg-violet-400' },
  { title: 'Stajyer Psikolog', company: 'İstanbul Üniversitesi Hastanesi', period: '2017 - 2018', color: 'bg-violet-300' },
]

export default function ExperienceCard() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] border border-ink-100 p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center text-violet-600">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        </div>
        <h3 className="font-semibold text-ink-900">Mesleki Deneyim</h3>
      </div>
      <div className="space-y-3">
        {experiences.map((exp, i) => (
          <div key={i} className={`flex gap-3 ${i < experiences.length - 1 ? 'pb-3 border-b border-ink-100' : ''}`}>
            <div className={`w-1 ${exp.color} rounded-full shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="text-sm font-semibold text-ink-900">{exp.title}</div>
                {exp.current && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                    Devam ediyor
                  </span>
                )}
              </div>
              <div className="text-xs text-ink-500 mt-0.5">{exp.company} · {exp.period}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}