import Link from 'next/link'
import { ArrowRight, HelpCircle } from 'lucide-react'

export default function HelpCenter() {
  return (
    <Link
      href="#faq"
      className="bg-ink-50 border border-ink-100 p-8 rounded-[2rem] flex flex-col items-center text-center gap-4 hover:bg-ink-100 transition cursor-pointer group"
    >
      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform">
        <HelpCircle className="w-8 h-8 text-brand-600" strokeWidth={2} />
      </div>
      <div>
        <h4 className="text-xl font-bold text-ink-900 mb-2">Yardım Merkezi</h4>
        <p className="text-ink-600 text-sm mb-4 leading-relaxed">
          Bir sorunuz mu var? Cevabı Sıkça Sorulan Sorular bölümünde bulabilirsiniz.
        </p>
        <span className="text-brand-600 font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
          SSS'ye Göz At
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </span>
      </div>
    </Link>
  )
}