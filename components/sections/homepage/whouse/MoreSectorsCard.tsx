import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function MoreSectorsCard() {
  return (
    <Link
      href="/register"
      className="group relative bg-gradient-to-br from-brand-600 to-violet-600 text-white rounded-2xl shadow-[0_4px_16px_-4px_rgba(79,70,229,0.4)] overflow-hidden hover:scale-[1.01] transition"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative p-6 h-full flex flex-col justify-between min-h-[200px]">
        <div>
          <div className="text-xs font-semibold opacity-90">+ Daha fazla sektör</div>
          <h3 className="mt-3 text-xl font-bold leading-snug">
            Spor koçu, masaj terapisti,<br />estetisyen ve fazlası
          </h3>
        </div>
        <button className="mt-4 bg-white/15 hover:bg-white/25 backdrop-blur text-xs font-semibold py-2 px-4 rounded-lg w-fit transition flex items-center gap-2">
          Sen de katıl
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
        </button>
      </div>
    </Link>
  )
}