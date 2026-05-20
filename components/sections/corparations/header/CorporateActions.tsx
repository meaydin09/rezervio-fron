import { Share2, Heart } from 'lucide-react'

export default function CorporateActions() {
  return (
    <div className="flex sm:flex-col gap-2 justify-center">
      <button title="Paylaş" className="w-9 h-9 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition">
        <Share2 className="w-4 h-4" strokeWidth={2} />
      </button>
      <button title="Favori" className="w-9 h-9 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition">
        <Heart className="w-4 h-4" strokeWidth={2} />
      </button>
    </div>
  )
}