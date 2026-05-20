import { Zap } from 'lucide-react'

export default function QuickBookBanner() {
  return (
    <div className="mt-5 bg-gradient-to-br from-brand-600 to-violet-600 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="relative">
        <h3 className="text-base sm:text-lg font-bold">İlk müsait randevuya hızlıca al</h3>
        <p className="text-sm text-white/80 mt-1">
          Hangi uzmanın müsait olduğuna bakmadan, sistem en hızlı saati seçsin.
        </p>
      </div>
      <button className="relative bg-white text-ink-900 font-semibold px-5 py-2.5 rounded-xl hover:bg-ink-100 transition flex items-center gap-2 shrink-0 cursor-pointer">
        En erken randevu
        <Zap className="w-4 h-4" strokeWidth={2} />
      </button>
    </div>
  )
}