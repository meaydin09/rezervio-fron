'use client'

import { X, Send, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

export type TicketStatus = 'Açık' | 'İnceleniyor' | 'Beklemede' | 'Kapatıldı'

export interface Ticket {
  id: string
  initials: string
  name: string
  bgColor: string
  priority: string
  priorityColor: string
  title: string
  meta: string
  status: TicketStatus
}

interface TicketReplyModalProps {
  isOpen: boolean
  ticket: Ticket | null
  onClose: () => void
  onSend: (ticketId: string, reply: string, status: TicketStatus, close: boolean) => void
}

const statusOptions: TicketStatus[] = ['Açık', 'İnceleniyor', 'Beklemede']

const statusColors: Record<TicketStatus, string> = {
  'Açık':        'bg-blue-50 text-blue-700',
  'İnceleniyor': 'bg-amber-50 text-amber-700',
  'Beklemede':   'bg-ink-100 text-ink-600',
  'Kapatıldı':   'bg-emerald-50 text-emerald-700',
}

export default function TicketReplyModal({ isOpen, ticket, onClose, onSend }: TicketReplyModalProps) {
  const [reply, setReply]         = useState('')
  const [status, setStatus]       = useState<TicketStatus>('İnceleniyor')
  const [showConfirm, setShowConfirm] = useState(false)

  if (!isOpen || !ticket) return null

  const handleClose = () => {
    setReply('')
    setStatus('İnceleniyor')
    setShowConfirm(false)
    onClose()
  }

  const handleSendOnly = () => {
    if (!reply.trim()) return
    onSend(ticket.id, reply, status, false)
    handleClose()
  }

  const handleConfirmClose = () => {
    onSend(ticket.id, reply, 'Kapatıldı', true)
    handleClose()
  }

  // Onay ekranı
  if (showConfirm) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
          <div className="p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-ink-900 text-lg">Talebi kapatmak istiyor musunuz?</h3>
            <p className="text-sm text-ink-500 mt-2">
              Yanıtınız gönderilecek ve talebin durumu{' '}
              <span className="font-semibold text-emerald-700">Kapatıldı</span> olarak güncellenecektir.
            </p>
            <p className="text-xs text-ink-400 mt-1">Kapatılan talepler "Kapatılmış Talepler" sekmesinden görüntülenebilir.</p>
          </div>
          <div className="flex items-center justify-end gap-2 p-5 border-t border-ink-100 bg-ink-50/40">
            <button
              onClick={() => setShowConfirm(false)}
              className="px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100 rounded-lg transition"
            >
              Geri
            </button>
            <button
              onClick={handleConfirmClose}
              className="px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition"
            >
              Evet, Yanıtla & Kapat
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">

        <div className="flex items-center justify-between p-5 border-b border-ink-100">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`w-9 h-9 rounded-lg ${ticket.bgColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
              {ticket.initials}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-ink-900">{ticket.name}</span>
                <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${ticket.priorityColor}`}>
                  {ticket.priority}
                </span>
                <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${statusColors[ticket.status]}`}>
                  {ticket.status}
                </span>
              </div>
              <p className="text-xs text-ink-500 truncate mt-0.5">{ticket.title}</p>
            </div>
          </div>
          <button onClick={handleClose} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 transition shrink-0 ml-2">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div className="text-xs text-ink-500 bg-ink-50 rounded-lg px-3 py-2">{ticket.meta}</div>

          <div>
            <label className="block text-xs font-semibold text-ink-700 mb-2">Durum Güncelle</label>
            <div className="flex gap-2 flex-wrap">
              {statusOptions.map(s => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border-2 transition ${
                    status === s
                      ? `${statusColors[s]} border-current`
                      : 'border-ink-200 text-ink-500 hover:border-ink-300'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink-700 mb-2">Yanıt</label>
            <textarea
              value={reply}
              onChange={e => setReply(e.target.value)}
              placeholder="Kullanıcıya yanıtınızı yazın..."
              className="w-full h-32 px-3 py-2 border border-ink-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 p-5 border-t border-ink-100 bg-ink-50/40">
          <button onClick={handleClose} className="px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100 rounded-lg transition">
            Vazgeç
          </button>
          <button
            onClick={handleSendOnly}
            disabled={!reply.trim()}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition"
          >
            <Send className="w-3.5 h-3.5" />
            Yanıtla
          </button>
          <button
            onClick={() => setShowConfirm(true)}
            disabled={!reply.trim()}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition"
          >
            Yanıtla & Kapat
          </button>
        </div>
      </div>
    </div>
  )
}
