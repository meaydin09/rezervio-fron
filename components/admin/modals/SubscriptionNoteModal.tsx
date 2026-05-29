'use client'

import { X } from 'lucide-react'
import { useState } from 'react'

interface SubscriptionNoteModalProps {
  isOpen: boolean
  onClose: () => void
  userName: string
  currentNote?: string
  onSave: (note: string) => void
}

export default function SubscriptionNoteModal({ 
  isOpen, 
  onClose, 
  userName, 
  currentNote = '',
  onSave 
}: SubscriptionNoteModalProps) {
  const [note, setNote] = useState(currentNote)

  if (!isOpen) return null

  const handleSave = () => {
    onSave(note)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="flex items-center justify-between p-5 border-b border-ink-100">
          <div>
            <h3 className="font-semibold text-ink-900">Abonelik Notu</h3>
            <p className="text-xs text-ink-500 mt-0.5">{userName}</p>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5">
          <label className="block text-sm font-medium text-ink-700 mb-2">
            Not
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Abonelik hakkında notlarınızı buraya yazın..."
            className="w-full h-32 px-3 py-2 border border-ink-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center justify-end gap-2 p-5 border-t border-ink-100 bg-ink-50/40">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100 rounded-lg transition"
          >
            İptal
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  )
}
