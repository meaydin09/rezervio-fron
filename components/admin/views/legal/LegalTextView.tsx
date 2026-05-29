'use client'

import { useState } from 'react'
import RichEditor from './RichEditor'

interface LegalTextViewProps {
  title: string
  description: string
  initialText: string
  lastUpdated: string
}

export default function LegalTextView({ title, description, initialText, lastUpdated }: LegalTextViewProps) {
  const [text, setText]       = useState(initialText)
  const [saved, setSaved]     = useState(false)
  const [updated, setUpdated] = useState(lastUpdated)

  const handleSave = () => {
    const now = new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
    setUpdated(now)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
        <div>
          <h3 className="font-semibold text-ink-900">{title}</h3>
          <p className="text-xs text-ink-500 mt-0.5">{description}</p>
        </div>
        <span className="text-xs text-ink-400">Son güncelleme: {updated}</span>
      </div>

      <RichEditor value={text} onChange={setText} />

      <div className="flex items-center justify-end gap-3 mt-4">
        <button
          onClick={handleSave}
          className="px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition"
        >
          {saved ? 'Kaydedildi ✓' : 'Kaydet'}
        </button>
      </div>
    </div>
  )
}
