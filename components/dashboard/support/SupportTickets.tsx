import { Plus } from 'lucide-react'
import TicketCard from './TicketCard'
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

interface Props {
  onNewTicket: () => void
}

export default function SupportTickets({ onNewTicket }: Props) {
  return (
    <div className="xl:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
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
        {tickets.map((t) => <TicketCard key={t.id} ticket={t} />)}
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
  )
}