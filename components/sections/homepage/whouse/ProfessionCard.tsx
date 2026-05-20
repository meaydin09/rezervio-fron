import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Profession } from './types'

interface Props {
  profession: Profession
}

export default function ProfessionCard({ profession }: Props) {
  return (
    <Link
      href={profession.href}
      className="group bg-white rounded-2xl border border-ink-100 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.08)] p-5 sm:p-6 hover:shadow-[0_4px_16px_-4px_rgba(15,23,42,0.12)] hover:-translate-y-0.5 hover:border-brand-200 transition flex flex-col"
    >
      <div className="flex items-start justify-between gap-3">
        <div className={`w-12 h-12 rounded-xl ${profession.iconBg} flex items-center justify-center text-2xl`}>
          {profession.emoji}
        </div>
        <div className="w-8 h-8 rounded-lg bg-ink-50 group-hover:bg-brand-600 flex items-center justify-center text-ink-400 group-hover:text-white transition">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" strokeWidth={2.5} />
        </div>
      </div>

      <h3 className="mt-4 font-semibold text-base text-ink-900">{profession.title}</h3>
      <p className="text-xs text-ink-600 mt-1.5 leading-relaxed flex-1">{profession.description}</p>

      <div className="mt-4 pt-4 border-t border-ink-100 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs text-ink-600">
          <strong className="text-ink-900">{profession.statCount}</strong> {profession.statLabel}
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-ink-50 text-ink-700">
          <span className="text-amber-400">★</span>
          <strong>{profession.rating}</strong>
        </span>
      </div>
    </Link>
  )
}