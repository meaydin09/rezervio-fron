import { Check } from 'lucide-react'
import CorporateStats from './CorporateStats'
import CorporateActions from './CorporateActions'

export default function CorporateHeader() {
  return (
    <div className="bg-white rounded-3xl shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] border border-ink-100 p-5 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-ink-100 flex items-center justify-center text-4xl sm:text-5xl shrink-0 mx-auto sm:mx-0">
          🏥
        </div>

        <div className="flex-1 min-w-0 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-900">NovaPsy Klinik</h1>
            <span className="w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center" title="Doğrulanmış">
              <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
            </span>
          </div>

          <div className="mt-1.5 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-sm">
            <span className="flex items-center gap-1 text-ink-600">
              <span className="text-amber-400">★</span>
              <strong className="text-ink-900">4.9</strong>
              <span className="text-ink-500">(1.247 yorum)</span>
            </span>
            <span className="text-ink-300 hidden sm:inline">·</span>
            <span className="flex items-center gap-1 text-ink-600">
              <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Beşiktaş, İstanbul
            </span>
            <span className="text-ink-300 hidden sm:inline">·</span>
            <span className="flex items-center gap-1 text-ink-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Bugün açık · 09:00-20:00
            </span>
          </div>

          <p className="mt-3 text-sm text-ink-600 leading-relaxed">
            NovaPsy Klinik, 12 uzman psikolog, psikiyatrist ve aile danışmanından oluşan, 2015'ten bu yana hizmet veren bütünleşik bir ruh sağlığı kliniğidir.
          </p>
        </div>

        <CorporateActions />
      </div>
      <CorporateStats />
    </div>
  )
}