'use client'

import { useState } from 'react'
import { Share2, Heart, Check } from 'lucide-react'

export default function CorporateActions() {
  const [liked, setLiked] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href
    if (navigator.share) {
      await navigator.share({ title: document.title, url })
    } else {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex sm:flex-col gap-2 justify-center">
      <button
        onClick={handleShare}
        title={copied ? 'Kopyalandı!' : 'Paylaş'}
        className={`w-9 h-9 rounded-lg border flex items-center justify-center cursor-pointer transition ${
          copied ? 'border-emerald-300 bg-emerald-50 text-emerald-600' : 'border-ink-200 hover:bg-ink-50 text-ink-600'
        }`}
      >
        {copied ? <Check className="w-4 h-4" strokeWidth={2.5} /> : <Share2 className="w-4 h-4" strokeWidth={2} />}
      </button>

      <button
        onClick={() => setLiked((p) => !p)}
        title={liked ? 'Favorilerden çıkar' : 'Favoriye ekle'}
        className={`w-9 h-9 rounded-lg border flex items-center justify-center cursor-pointer transition ${
          liked ? 'border-rose-300 bg-rose-50 text-rose-500' : 'border-ink-200 hover:bg-ink-50 text-ink-600'
        }`}
      >
        <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500' : ''}`} strokeWidth={2} />
      </button>
    </div>
  )
}