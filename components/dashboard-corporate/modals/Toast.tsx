import { Check } from 'lucide-react'

interface Props {
  text: string
}

export default function Toast({ text }: Props) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-ink-900 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] flex items-center gap-2">
      <Check className="w-4 h-4 text-emerald-400" strokeWidth={2.5} />
      <span>{text}</span>
    </div>
  )
}