'use client'

import { X, HeadphonesIcon } from 'lucide-react'
import { useState } from 'react'

export interface SupportTicketPayload {
  specialistName: string
  specialistInitials: string
  specialistBgColor: string
  client: string
  date: string
  time: string
  priority: 'Acil' | 'Yüksek' | 'Normal'
  description: string
}

interface AppointmentSupportModalProps {
  isOpen: boolean
  onClose: () => void
  appointment: {
    specialistName: string
    specialistInitials: string
    specialistBgColor: string
    client: string
    date: string
    time: string
  } | null
  onSubmit: (ticket: SupportTicketPayload) => void
}

const priorityOptions = ['Normal', 'Yüksek', 'Acil'] as const

export default function AppointmentSupportModal({
  isOpen,
  onClose,
  appointment,
  onSubmit,
}: AppointmentSupportModalProps) {
  const [priority, setPriority] = useState<'Acil' | 'Yüksek' | 'Normal'>('Normal')
  const [description, setDescription] = useState('')

  if (!isOpen || !appointment) return null

  const handleSubmit = () => {
    if (!description.trim()) return
    onSubmit({
      ...appointment,
      priority,
      description,
    })
    setDescription('')
    setPriority('Normal')
    onClose()
  }

  const priorityColor: Record<string, string> = {
    'Normal': 'border-ink-300 bg-ink-50 text-ink-700',
    'Yüksek': 'border-amber-400 bg-amber-50 text-amber-700',
    'Acil':   'border-rose-400 bg-rose-50 text-rose-700',
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="flex items-center justify-between p-5 border-b border-ink-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center">
              <HeadphonesIcon className="w-4 h-4 text-brand-600" />
            </div>
            <div>
              <h3 className="font-semibold text-ink-900">Destek Talebi Aç</h3>
              <p className="text-xs text-ink-500 mt-0.5">Randevuya bağlı talep oluşturuluyor</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Randevu özeti — pre-fill */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-ink-50 border border-ink-100">
            <div className={`w-9 h-9 rounded-lg ${appointment.specialistBgColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
              {appointment.specialistInitials}
            </div>
            <div className="text-sm">
              <div className="font-semibold text-ink-900">{appointment.specialistName}</div>
              <div className="text-ink-500">{appointment.client} · {appointment.date} {appointment.time}</div>
            </div>
          </div>

          {/* Öncelik */}
          <div>
            <label className="block text-sm font-medium text-ink-700 mb-2">Öncelik</label>
            <div className="flex gap-2">
              {priorityOptions.map(p => (
                <button
                  key={p}
                  onClick={() => setPriority(p)}
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg border-2 transition ${
                    priority === p ? priorityColor[p] : 'border-ink-200 text-ink-500 hover:border-ink-300'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Açıklama */}
          <div>
            <label className="block text-sm font-medium text-ink-700 mb-2">Sorun Açıklaması</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Randevuyla ilgili yaşanan sorunu kısaca açıklayın..."
              className="w-full h-28 px-3 py-2 border border-ink-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 p-5 border-t border-ink-100 bg-ink-50/40">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100 rounded-lg transition"
          >
            Vazgeç
          </button>
          <button
            onClick={handleSubmit}
            disabled={!description.trim()}
            className="px-4 py-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition"
          >
            Talebi Oluştur
          </button>
        </div>
      </div>
    </div>
  )
}
