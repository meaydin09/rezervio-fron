import { MessageCircle } from 'lucide-react'

export default function AssistanceCard() {
  return (
    <div className="mt-5 bg-ink-50 border border-ink-100 rounded-2xl p-5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
          <MessageCircle className="w-5 h-5 text-brand-600" strokeWidth={2} />
        </div>
        <div>
          <p className="text-sm font-bold text-ink-900">Yardıma mı ihtiyacınız var?</p>
          <p className="text-xs text-ink-500">Ekibimizle hemen konuşun.</p>
        </div>
      </div>
      <button className="text-brand-600 font-bold text-sm hover:underline cursor-pointer whitespace-nowrap">
        Sohbeti Başlat
      </button>
    </div>
  )
}