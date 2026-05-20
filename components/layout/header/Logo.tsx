import Link from 'next/link'
import { Calendar } from 'lucide-react'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-[0_4px_16px_-4px_rgba(79,70,229,0.4)]">
        <Calendar className="w-5 h-5 text-white" strokeWidth={2.2} />
      </div>
      <span className="text-lg font-bold tracking-tight text-ink-900">Rezervio</span>
    </Link>
  )
}