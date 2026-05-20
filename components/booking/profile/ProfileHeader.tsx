import { Check } from 'lucide-react'
import ProfileStats from './ProfileStats'
import ProfileTags from './ProfileTags'
import ProfileActions from './ProfileActions'

export default function ProfileHeader() {
  return (
    <div className="bg-white rounded-3xl shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] border border-ink-100 p-5 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">

        {/* Avatar */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 mx-auto sm:mx-0">
          <div className="w-full h-full rounded-2xl bg-ink-900 flex items-center justify-center text-2xl sm:text-3xl font-bold text-white">
            OU
          </div>
          <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center border-[3px] border-white">
            <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
          </span>
        </div>

        {/* Bilgiler */}
        <div className="flex-1 min-w-0 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-900">
              Psk. Onur Uzun
            </h1>
            <span className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center" title="Doğrulanmış">
              <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
            </span>
          </div>

          <div className="mt-1.5 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-sm">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand-50 text-brand-700">
              Klinik Psikolog
            </span>
            <span className="flex items-center gap-1 text-ink-600">
              <span className="text-amber-400">★</span>
              <strong className="text-ink-900">4.9</strong>
              <span className="text-ink-500">(218 yorum)</span>
            </span>
            <span className="text-ink-300 hidden sm:inline">·</span>
            <span className="flex items-center gap-1 text-ink-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Bugün müsait
            </span>
          </div>

          <p className="mt-3 text-sm text-ink-600 leading-relaxed">
            İstanbul Üniversitesi mezunu, 8 yıllık deneyimli klinik psikolog. Bilişsel davranışçı terapi,
            kaygı bozuklukları ve ilişki danışmanlığı alanlarında çalışmaktadır. Online ve yüz yüze seans imkânı sunar.
          </p>
        </div>

        <ProfileActions />
      </div>

      <ProfileStats />
      <ProfileTags />
    </div>
  )
}