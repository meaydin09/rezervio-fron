'use client'

import { useState } from 'react'
import { Plus, X, Check, AlertCircle, ChevronRight } from 'lucide-react'
import type { TicketData } from '../types'

const tickets: TicketData[] = [
  {
    id: '#R-1842', status: 'open', title: 'WhatsApp hatırlatması bazı danışanlarıma gitmiyor',
    preview: 'Sorununuzu inceledim. Danışan kayıtlarındaki bazı telefon numaralarında format hatası var...',
    previewAuthor: 'Destek Ekibi', previewAuthorColor: 'text-brand-700',
    meta: '30 dk önce yanıtlandı', priority: 'Yüksek öncelik',
  },
  {
    id: '#R-1839', status: 'pending', title: 'Aylık randevu raporlarını PDF olarak indirebilir miyim?',
    preview: 'Aylık rapor verilerini muhasebem için PDF ya da Excel olarak indirmek istiyorum...',
    previewAuthor: 'Sen',
    meta: '2 saat önce gönderildi', priority: 'Normal öncelik',
  },
  {
    id: '#R-1721', status: 'resolved', title: 'Profil sayfası rengini nasıl değiştirebilirim?',
    preview: 'Yönetim paneli sağ sütunundaki Sayfa Renkleri kartından dilediğiniz temayı seçebilirsiniz...',
    previewAuthor: 'Destek Ekibi', previewAuthorColor: 'text-brand-700',
    meta: '3 gün önce kapatıldı', rating: '⭐⭐⭐⭐⭐ Değerlendirildi',
  },
]

const statusConfig = {
  open:     { label: 'Açık',              color: 'bg-amber-100 text-amber-800',   wrapperColor: 'border-amber-200 bg-amber-50/40 hover:bg-amber-50/70' },
  pending:  { label: 'Yanıt Bekleniyor',  color: 'bg-brand-50 text-brand-700',    wrapperColor: 'border-ink-100 hover:bg-ink-50/60' },
  resolved: { label: 'Çözüldü',           color: 'bg-emerald-50 text-emerald-700', wrapperColor: 'border-ink-100 hover:bg-ink-50/60 opacity-90' },
}

const ticketMessages: Record<string, { message: string; reply?: string }> = {
  '#R-1842': {
    message: 'WhatsApp hatırlatması bazı danışanlarıma gitmiyor. Dün randevu hatırlatması gönderilmedi, kontrol eder misiniz?',
    reply: 'Sorununuzu inceledik. Danışan kayıtlarındaki bazı telefon numaralarında format hatası var. Numaraları +90 ile başlayacak şekilde güncellerseniz sorun çözülecektir.',
  },
  '#R-1839': {
    message: 'Aylık rapor verilerini muhasebem için PDF ya da Excel olarak indirmek istiyorum. Bu özellik mevcut mu?',
  },
  '#R-1721': {
    message: 'Profil sayfamın arka plan rengini değiştirmek istiyorum ama nerede olduğunu bulamadım.',
    reply: 'Yönetim paneli sağ sütunundaki Sayfa Renkleri kartından dilediğiniz temayı seçebilirsiniz. Özel renk için hex kodu da girebilirsiniz.',
  },
}

interface Props {
  onNewTicket: () => void
}

export default function SupportTickets({ onNewTicket }: Props) {
  const [selected, setSelected] = useState<TicketData | null>(null)

  return (
    <div className="xl:col-span-2 space-y-4">
      {/* Liste */}
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div>
            <h3 className="font-semibold text-ink-900">Destek Taleplerim</h3>
            <p className="text-xs text-ink-500 mt-0.5">Açık ve yakın zamanda kapatılan talepler</p>
          </div>
          <button
            onClick={onNewTicket}
            className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-3 py-2 rounded-lg flex items-center gap-2 transition cursor-pointer shadow-[0_1px_2px_0_rgba(15,23,42,0.04)]"
          >
            <Plus className="w-4 h-4" strokeWidth={2.5} />
            Yeni Talep
          </button>
        </div>

        <div className="space-y-2.5">
          {tickets.map((t) => {
            const cfg = statusConfig[t.status]
            return (
              <div
                key={t.id}
                onClick={() => setSelected(selected?.id === t.id ? null : t)}
                className={`p-4 rounded-xl border transition cursor-pointer ${cfg.wrapperColor} ${selected?.id === t.id ? 'ring-2 ring-brand-200' : ''}`}
              >
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${cfg.color}`}>
                        {cfg.label}
                      </span>
                      {t.status === 'open' && (
                        <span className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 animate-pulse">
                          ● Yeni yanıt
                        </span>
                      )}
                      <span className="text-[11px] text-ink-500 font-mono">{t.id}</span>
                    </div>
                    <div className="text-sm font-semibold mt-1.5 text-ink-900">{t.title}</div>
                    <div className="text-xs text-ink-600 mt-1 line-clamp-1 italic">
                      <span className={`font-semibold not-italic ${t.previewAuthorColor ?? ''}`}>{t.previewAuthor}:</span>{' '}
                      {t.preview}
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-[11px] text-ink-500 flex-wrap">
                      <span>{t.meta}</span>
                      {t.priority && <><span>·</span><span>{t.priority}</span></>}
                      {t.rating && <><span>·</span><span className="text-amber-600">{t.rating}</span></>}
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-ink-400 shrink-0 mt-1 transition-transform ${selected?.id === t.id ? 'rotate-90' : ''}`} strokeWidth={2} />
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-4 flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-ink-100">
          <button className="text-xs font-semibold text-brand-600 hover:underline cursor-pointer">
            Tüm taleplerimi gör (12) →
          </button>
          <div className="flex items-center gap-3 text-[11px] text-ink-500">
            {[
              { color: 'bg-amber-400', label: '1 açık' },
              { color: 'bg-brand-400', label: '1 bekleyen' },
              { color: 'bg-emerald-400', label: '10 çözülmüş' },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${item.color}`} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Detay Paneli */}
      {selected && (() => {
  const msgs = ticketMessages[selected.id]
  const cfg = statusConfig[selected.status]
  return (
    <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelected(null)}>
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-ink-100 p-5 flex items-start justify-between z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-ink-400">{selected.id}</span>
              <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${cfg.color}`}>
                {cfg.label}
              </span>
            </div>
            <h3 className="font-bold text-base text-ink-900">{selected.title}</h3>
            <p className="text-xs text-ink-400 mt-0.5">{selected.meta}</p>
          </div>
          <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer shrink-0 ml-3">
            <X className="w-4 h-4 text-ink-400" strokeWidth={2} />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div className="bg-ink-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-ink-500 mb-1">Talebiniz</p>
            <p className="text-sm text-ink-800">{msgs?.message}</p>
          </div>

          {msgs?.reply && (
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-4">
              <p className="text-xs font-semibold text-brand-600 mb-1 flex items-center gap-1">
                <Check className="w-3 h-3" strokeWidth={2.5} />
                Rezervio Destek Ekibi
              </p>
              <p className="text-sm text-ink-800">{msgs.reply}</p>
            </div>
          )}

          {selected.status === 'pending' && (
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2} />
              <p className="text-xs text-amber-800">Talebiniz inceleniyor. Ortalama yanıt süresi 2-4 saattir.</p>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-ink-100 p-4">
          <button
            onClick={() => setSelected(null)}
            className="w-full py-2.5 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-xl cursor-pointer transition"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  )
})()}
    </div>
  )
}
