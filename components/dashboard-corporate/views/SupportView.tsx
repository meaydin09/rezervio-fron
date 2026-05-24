'use client'

import { useState } from 'react'
import { Plus, X, Check, Clock, AlertCircle, MessageCircle, Trash2 } from 'lucide-react'

type TicketStatus = 'open' | 'answered' | 'closed'

interface Ticket {
  id: string
  subject: string
  message: string
  status: TicketStatus
  date: string
  reply?: string
}

const initialTickets: Ticket[] = [
  { id: 'T-001', subject: 'WhatsApp mesajı gitmiyor', message: 'Dün randevu hatırlatması gönderilmedi, kontrol eder misiniz?', status: 'answered', date: '3 gün önce', reply: 'Teknik ekibimiz sorunu inceledi ve WhatsApp API bağlantısı yenilendi. Sorun giderildi.' },
  { id: 'T-002', subject: 'Yeni uzman ekleme sorunu', message: 'Davet e-postası gitmiyor gibi görünüyor.', status: 'open', date: '1 gün önce' },
  { id: 'T-003', subject: 'Fatura talebi', message: 'Mayıs ayı faturamı alabilir miyim?', status: 'closed', date: '1 hafta önce', reply: 'Faturanız e-posta adresinize gönderildi.' },
]

const statusConfig: Record<TicketStatus, { label: string; color: string; icon: React.ElementType }> = {
  open:     { label: 'Açık',       color: 'bg-amber-50 text-amber-700',   icon: Clock       },
  answered: { label: 'Cevaplandı', color: 'bg-brand-50 text-brand-700',   icon: Check       },
  closed:   { label: 'Kapatıldı',  color: 'bg-ink-100 text-ink-500',      icon: X           },
}

export default function SupportView() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets)
  const [showNew, setShowNew] = useState(false)
  const [selected, setSelected] = useState<Ticket | null>(null)
  const [form, setForm] = useState({ subject: '', message: '' })

  const handleCreate = () => {
    if (!form.subject || !form.message) return
    const newTicket: Ticket = {
      id: `T-00${tickets.length + 4}`,
      subject: form.subject,
      message: form.message,
      status: 'open',
      date: 'Az önce',
    }
    setTickets((prev) => [newTicket, ...prev])
    setForm({ subject: '', message: '' })
    setShowNew(false)
  }

  const handleDelete = (id: string) => {
    setTickets((prev) => prev.filter((t) => t.id !== id))
    if (selected?.id === id) setSelected(null)
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Ticket Listesi */}
      <div className="lg:col-span-1 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-ink-900">Destek Talepleri</h3>
          <button
            onClick={() => setShowNew(true)}
            className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer transition"
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
            Yeni Talep
          </button>
        </div>

        {tickets.length === 0 ? (
          <div className="bg-white rounded-2xl border border-ink-100 p-8 text-center">
            <MessageCircle className="w-8 h-8 text-ink-300 mx-auto mb-2" strokeWidth={1.5} />
            <p className="text-sm text-ink-400">Henüz destek talebi yok</p>
          </div>
        ) : (
          tickets.map((t) => {
            const cfg = statusConfig[t.status]
            const Icon = cfg.icon
            return (
              <div
                key={t.id}
                onClick={() => setSelected(t)}
                className={`bg-white rounded-xl border p-4 cursor-pointer transition ${
                  selected?.id === t.id ? 'border-brand-300 shadow-[0_0_0_2px_rgba(99,102,241,0.1)]' : 'border-ink-100 hover:border-ink-200'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono text-ink-400">{t.id}</span>
                      <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full ${cfg.color}`}>
                        <Icon className="w-3 h-3" strokeWidth={2.5} />
                        {cfg.label}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-ink-900 truncate">{t.subject}</p>
                    <p className="text-[11px] text-ink-400 mt-0.5">{t.date}</p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(t.id) }}
                    className="w-6 h-6 rounded-lg hover:bg-rose-50 flex items-center justify-center text-ink-300 hover:text-rose-500 cursor-pointer transition shrink-0"
                  >
                    <Trash2 className="w-3.5 h-3.5" strokeWidth={2} />
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Sağ Panel */}
      <div className="lg:col-span-2">
        {selected ? (
          <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-ink-400">{selected.id}</span>
                  <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${statusConfig[selected.status].color}`}>
                    {statusConfig[selected.status].label}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-ink-900">{selected.subject}</h3>
                <p className="text-xs text-ink-400 mt-0.5">{selected.date}</p>
              </div>
              <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer">
                <X className="w-4 h-4 text-ink-400" strokeWidth={2} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-ink-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-ink-500 mb-1">Talebiniz</p>
                <p className="text-sm text-ink-800">{selected.message}</p>
              </div>

              {selected.reply && (
                <div className="bg-brand-50 border border-brand-100 rounded-xl p-4">
                  <p className="text-xs font-semibold text-brand-600 mb-1 flex items-center gap-1">
                    <Check className="w-3 h-3" strokeWidth={2.5} />
                    Rezervio Destek Ekibi
                  </p>
                  <p className="text-sm text-ink-800">{selected.reply}</p>
                </div>
              )}

              {selected.status === 'open' && (
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2} />
                  <p className="text-xs text-amber-800">Talebiniz inceleniyor. Ortalama yanıt süresi 2-4 saattir.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-ink-100 p-12 text-center">
            <MessageCircle className="w-10 h-10 text-ink-200 mx-auto mb-3" strokeWidth={1.5} />
            <p className="text-sm text-ink-400">Bir talep seçerek detaylarını görüntüleyin</p>
          </div>
        )}
      </div>

      {/* Yeni Talep Modal */}
      {showNew && (
        <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-lg text-ink-900">Yeni Destek Talebi</h3>
              <button onClick={() => setShowNew(false)} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer">
                <X className="w-4 h-4 text-ink-500" strokeWidth={2} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-ink-700">Konu</label>
                <input
                  type="text"
                  placeholder="Sorununuzu kısaca belirtin"
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-700">Mesaj</label>
                <textarea
                  rows={4}
                  placeholder="Sorununuzu detaylıca açıklayın..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none resize-none"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-5 pt-4 border-t border-ink-100">
              <button onClick={() => setShowNew(false)} className="px-4 py-2 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-lg cursor-pointer transition">İptal</button>
              <button onClick={handleCreate} className="px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg cursor-pointer transition">Gönder</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}