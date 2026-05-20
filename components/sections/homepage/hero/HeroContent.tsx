import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

const avatarColors = ['bg-rose-200', 'bg-amber-200', 'bg-emerald-200', 'bg-brand-200']

export default function HeroContent() {
  return (
    <div className="lg:col-span-6">
      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-[pulseDot_1.8s_infinite]" />
        Yeni · Akıllı WhatsApp Hatırlatma
      </span>

      <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
        Randevu yönetimi,<br />
        <span className="bg-gradient-to-r from-brand-600 to-violet-500 bg-clip-text text-transparent">
          sessiz ve sorunsuz.
        </span>
      </h1>

      <p className="mt-5 text-base sm:text-lg text-ink-600 leading-relaxed max-w-xl">
        Psikologlar, danışmanlar, diyetisyenler, kuaförler ve daha pek çok uzman için
        özel link üzerinden çalışan, WhatsApp hatırlatmalı, takvim odaklı modern rezervasyon platformu.
      </p>

      <div className="mt-7 flex flex-col sm:flex-row gap-3">
        <Link
          href="/kayit"
          className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl shadow-[0_4px_16px_-4px_rgba(79,70,229,0.4)] transition flex items-center justify-center gap-2"
        >
          14 gün ücretsiz başla
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </Link>
        <button className="bg-white border border-ink-200 hover:border-ink-300 text-ink-800 font-semibold px-6 py-3 rounded-xl transition flex items-center justify-center gap-2">
          <Play className="w-4 h-4" strokeWidth={2} />
          2 dk Tanıtım
        </button>
      </div>

      <div className="mt-8 flex items-center gap-6 text-sm text-ink-500">
        <div className="flex -space-x-2">
          {avatarColors.map((color, i) => (
            <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-white`} />
          ))}
        </div>
        <span><strong className="text-ink-900">1.200+</strong> uzman tarafından kullanılıyor</span>
      </div>
    </div>
  )
}