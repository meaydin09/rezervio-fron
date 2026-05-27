import { Copy, Share2 } from 'lucide-react'

export default function BookingLinkCard() {
  const handleCopy = () => {
    navigator.clipboard.writeText('https://rezervio.co/onuruzun')
  }

  return (
    <div className="bg-gradient-to-br from-ink-900 to-ink-800 rounded-2xl p-5 text-white">
      <div className="text-xs font-semibold text-brand-300 tracking-wider uppercase">
        Rezervasyon Linkin
      </div>
      <div className="mt-2 text-sm font-mono bg-white/10 rounded-lg p-3 break-all">
        rezervio.co/onuruzun
      </div>
      <div className="mt-3 flex gap-2">
        <button
          onClick={handleCopy}
          className="flex-1 bg-white/10 hover:bg-white/20 text-xs font-semibold py-2 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5"
        >
          <Copy className="w-3.5 h-3.5" strokeWidth={2} />
          Kopyala
        </button>
        <button className="flex-1 bg-white text-ink-900 hover:bg-ink-100 text-xs font-semibold py-2 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5">
          <Share2 className="w-3.5 h-3.5" strokeWidth={2} />
          Paylaş
        </button>
      </div>
    </div>
  )
}