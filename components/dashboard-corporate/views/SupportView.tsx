'use client'

import { useState } from 'react'
import { Plus, X, Check, ChevronRight, Calendar, MessageCircle, Palette, CreditCard, Users, Send, Upload, Clock, CheckCircle, AlertCircle } from 'lucide-react'

type TicketStatus = 'open' | 'pending' | 'resolved'

interface Ticket {
  id: string
  status: TicketStatus
  title: string
  preview: string
  previewAuthor: string
  previewAuthorColor?: string
  meta: string
  priority: string
  rating?: string
  fullMessage?: string
  reply?: string
  replyDate?: string
}

const tickets: Ticket[] = [
  {
    id: '#R-1842', status: 'open', title: 'WhatsApp hatırlatması bazı danışanlarıma gitmiyor',
    preview: 'Sorununuzu inceledim. Danışan kayıtlarındaki bazı telefon numaralarında format hatası var...',
    previewAuthor: 'Destek Ekibi', previewAuthorColor: 'text-brand-700',
    meta: '30 dk önce yanıtlandı', priority: 'Yüksek',
    fullMessage: 'Merhaba, son birkaç gündür bazı danışanlarıma WhatsApp üzerinden hatırlatma mesajları gitmiyor. Sistemi kontrol ettim ama sorunun kaynağını bulamadım. Yardımcı olabilir misiniz?',
    reply: 'Sorununuzu inceledim. Danışan kayıtlarındaki bazı telefon numaralarında format hatası var. +90 ile başlamayan veya boşluklu kayıtlı numaralar sisteme düzgün işlenemiyor. Lütfen ilgili danışan kayıtlarında telefon numaralarını +905XXXXXXXXX formatında güncelleyin.',
    replyDate: '30 dk önce',
  },
  {
    id: '#R-1839', status: 'pending', title: 'Aylık randevu raporlarını PDF olarak indirebilir miyim?',
    preview: 'Aylık rapor verilerini muhasebem için PDF ya da Excel olarak indirmek istiyorum...',
    previewAuthor: 'Sen',
    meta: '2 saat önce gönderildi', priority: 'Normal',
    fullMessage: 'Merhaba, aylık randevu raporlarımı muhasebecime göndermem gerekiyor. Bu raporları PDF veya Excel formatında indirme imkânı var mı? Raporlama ekranında böyle bir seçenek göremedim.',
  },
  {
    id: '#R-1721', status: 'resolved', title: 'Profil sayfası rengini nasıl değiştirebilirim?',
    preview: 'Yönetim paneli sağ sütunundaki Sayfa Renkleri kartından dilediğiniz temayı seçebilirsiniz...',
    previewAuthor: 'Destek Ekibi', previewAuthorColor: 'text-brand-700',
    meta: '3 gün önce kapatıldı', priority: 'Normal', rating: '⭐⭐⭐⭐⭐ Değerlendirildi',
    fullMessage: 'Profil sayfamın rengini değiştirmek istiyorum ama nasıl yapacağımı bulamıyorum.',
    reply: 'Yönetim paneli sağ sütunundaki "Sayfa Renkleri" kartından dilediğiniz temayı seçebilirsiniz. Hazır temalar dışında özel renk seçeneği de mevcut. Herhangi bir konuda yardıma ihtiyacınız olursa bizimle iletişime geçebilirsiniz.',
    replyDate: '3 gün önce',
  },
]

const statusConfig: Record<TicketStatus, { label: string; color: string; dot: string; Icon: React.ElementType }> = {
  open:     { label: 'Yanıtlandı',  color: 'bg-amber-50 text-amber-700',   dot: 'bg-amber-400',   Icon: Clock        },
  pending:  { label: 'Bekliyor',    color: 'bg-brand-50 text-brand-700',   dot: 'bg-brand-400',   Icon: AlertCircle  },
  resolved: { label: 'Çözüldü',    color: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-400', Icon: CheckCircle  },
}

const priorityColor: Record<string, string> = {
  Yüksek: 'bg-rose-50 text-rose-700',
  Normal:  'bg-ink-100 text-ink-600',
  Acil:    'bg-rose-100 text-rose-800',
  Düşük:   'bg-ink-50 text-ink-500',
}

const helpItems = [
  { label: 'Takvim nasıl güncellenir?',   iconBg: 'bg-brand-50',   icon: Calendar,      iconColor: 'text-brand-600'   },
  { label: 'WhatsApp hatırlatma ayarları', iconBg: 'bg-emerald-50', icon: MessageCircle, iconColor: 'text-emerald-600' },
  { label: 'Profil sayfamı özelleştirme', iconBg: 'bg-violet-50',  icon: Palette,       iconColor: 'text-violet-600'  },
  { label: 'Abonelik & ödeme yönetimi',   iconBg: 'bg-amber-50',   icon: CreditCard,    iconColor: 'text-amber-600'   },
  { label: 'Uzman yönetimi',              iconBg: 'bg-rose-50',    icon: Users,         iconColor: 'text-rose-600'    },
]

export default function SupportView() {
  const [showNewModal, setShowNewModal] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)

  return (
    <div className="grid xl:grid-cols-3 gap-6">

      {/* Destek Talepleri */}
      <div className="xl:col-span-2 space-y-4">
        <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div>
              <h3 className="font-semibold text-ink-900">Destek Taleplerim</h3>
              <p className="text-xs text-ink-500 mt-0.5">Açık ve yakın zamanda kapatılan talepler</p>
            </div>
            <button
              onClick={() => setShowNewModal(true)}
              className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-3 py-2 rounded-lg flex items-center gap-2 transition cursor-pointer"
            >
              <Plus className="w-4 h-4" strokeWidth={2.5} />
              Yeni Talep
            </button>
          </div>

          <div className="space-y-2.5">
            {tickets.map((t) => {
              const cfg = statusConfig[t.status]
              const Icon = cfg.Icon
              return (
                <div
                  key={t.id}
                  onClick={() => setSelectedTicket(selectedTicket?.id === t.id ? null : t)}
                  className={`p-4 rounded-xl border transition cursor-pointer ${
                    selectedTicket?.id === t.id
                      ? 'border-brand-200 ring-2 ring-brand-100 bg-ink-50/50'
                      : 'border-ink-100 hover:border-brand-200 hover:bg-ink-50/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        <span className="text-xs font-mono text-ink-400">{t.id}</span>
                        <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full ${cfg.color}`}>
                          <Icon className="w-3 h-3" strokeWidth={2} />
                          {cfg.label}
                        </span>
                        <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${priorityColor[t.priority] ?? 'bg-ink-100 text-ink-600'}`}>
                          {t.priority}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-ink-900">{t.title}</p>
                      <p className="text-xs text-ink-500 mt-1 line-clamp-1">
                        <span className={`font-medium ${t.previewAuthorColor ?? 'text-ink-600'}`}>{t.previewAuthor}:</span>{' '}
                        {t.preview}
                      </p>
                      <p className="text-[11px] text-ink-400 mt-1">{t.meta}</p>
                      {t.rating && <p className="text-[11px] text-ink-400 mt-0.5">{t.rating}</p>}
                    </div>
                    <ChevronRight className={`w-4 h-4 text-ink-300 shrink-0 mt-1 transition-transform ${selectedTicket?.id === t.id ? 'rotate-90' : ''}`} strokeWidth={2} />
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
                { color: 'bg-amber-400',   label: '1 açık'      },
                { color: 'bg-brand-400',   label: '1 bekleyen'  },
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

        {/* Inline Detay Paneli */}
        {selectedTicket && (
          <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-ink-400">{selectedTicket.id}</span>
                  <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full ${statusConfig[selectedTicket.status].color}`}>
                    {statusConfig[selectedTicket.status].label}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-ink-900">{selectedTicket.title}</h3>
                <p className="text-xs text-ink-400 mt-0.5">{selectedTicket.meta}</p>
              </div>
              <button onClick={() => setSelectedTicket(null)} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer">
                <X className="w-4 h-4 text-ink-400" strokeWidth={2} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-ink-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-ink-500 mb-1">Talebiniz</p>
                <p className="text-sm text-ink-800">{selectedTicket.fullMessage}</p>
              </div>

              {selectedTicket.reply ? (
                <div className="bg-brand-50 border border-brand-100 rounded-xl p-4">
                  <p className="text-xs font-semibold text-brand-600 mb-1 flex items-center gap-1">
                    <Check className="w-3 h-3" strokeWidth={2.5} />
                    Rezervio Destek Ekibi
                  </p>
                  <p className="text-sm text-ink-800">{selectedTicket.reply}</p>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2} />
                  <p className="text-xs text-amber-800">Talebiniz inceleniyor. Ortalama yanıt süremiz <strong>28 dakika</strong>.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Hızlı Yardım */}
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <h3 className="font-semibold text-ink-900">Hızlı Yardım</h3>
        <p className="text-xs text-ink-500 mt-0.5">Sık sorulan konulara hızlı erişim</p>

        <div className="mt-4 space-y-1">
          {helpItems.map((item) => {
            const Icon = item.icon
            return (
              <button key={item.label} className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-ink-50 cursor-pointer transition text-left">
                <div className={`w-8 h-8 rounded-lg ${item.iconBg} flex items-center justify-center ${item.iconColor} shrink-0`}>
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </div>
                <div className="flex-1 text-sm font-medium text-ink-700 min-w-0 truncate">{item.label}</div>
                <ChevronRight className="w-3.5 h-3.5 text-ink-300" strokeWidth={2} />
              </button>
            )
          })}
        </div>

        <div className="mt-4 pt-4 border-t border-ink-100">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-ink-800">Destek ekibi çevrimiçi</span>
          </div>
          <p className="text-[11px] text-ink-500">Ortalama yanıt süresi: <strong className="text-ink-700">28 dk</strong></p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button className="text-center bg-ink-100 hover:bg-ink-200 text-ink-800 text-xs font-semibold py-2 rounded-lg transition cursor-pointer">
              İletişim
            </button>
            <button
              onClick={() => setShowNewModal(true)}
              className="bg-ink-900 hover:bg-ink-800 text-white text-xs font-semibold py-2 rounded-lg transition cursor-pointer"
            >
              Talep Aç
            </button>
          </div>
        </div>
      </div>

      {/* Yeni Talep Modal */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] max-w-lg w-full">
            <div className="p-5 border-b border-ink-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-ink-900">Yeni Destek Talebi</h3>
                <p className="text-xs text-ink-500 mt-0.5">Destek ekibimiz en kısa sürede dönüş yapacak</p>
              </div>
              <button onClick={() => setShowNewModal(false)} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer transition">
                <X className="w-4 h-4 text-ink-500" strokeWidth={2} />
              </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setShowNewModal(false) }} className="p-5 sm:p-6 space-y-4">
              <div>
                <label className="text-xs font-semibold text-ink-700">Konu</label>
                <input type="text" required placeholder="Talebinizin kısa başlığı"
                  className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-ink-700">Kategori</label>
                  <select required className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer">
                    <option value="">Seçin...</option>
                    {['Teknik Sorun', 'Takvim & Randevu', 'WhatsApp Bildirimi', 'Faturalama & Abonelik', 'Uzman Yönetimi', 'Hesap & Şifre', 'Özellik İsteği', 'Diğer'].map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-ink-700">Öncelik</label>
                  <select className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer">
                    {['Normal', 'Yüksek', 'Acil', 'Düşük'].map((v) => <option key={v}>{v}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-ink-700">Mesajınız</label>
                <textarea required rows={5} placeholder="Yaşadığınız durumu detaylı olarak anlatın..."
                  className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none resize-none" />
              </div>

              <div>
                <label className="text-xs font-semibold text-ink-700 block mb-2">Ek Dosya (opsiyonel)</label>
                <button type="button" className="w-full border-2 border-dashed border-ink-200 hover:border-brand-300 rounded-lg p-4 text-center hover:text-brand-600 hover:bg-brand-50/50 transition cursor-pointer flex flex-col items-center gap-2">
                  <Upload className="w-5 h-5 text-ink-400" strokeWidth={2} />
                  <span className="text-xs text-ink-500">Ekran görüntüsü, PDF veya dosya yükle</span>
                  <span className="text-[11px] text-ink-400">Maks. 10 MB</span>
                </button>
              </div>

              <div className="bg-brand-50 border border-brand-100 rounded-lg p-3 flex items-start gap-2">
                <svg className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                <div className="text-xs text-brand-900">
                  Talebiniz oluşturulduktan sonra <strong>destek@rezervio.com</strong> adresine bilgilendirme e-postası gönderilir. Ortalama yanıt süremiz <strong>28 dakika</strong>.
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-ink-100">
                <button type="button" onClick={() => setShowNewModal(false)} className="px-4 py-2 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-lg cursor-pointer transition">
                  İptal
                </button>
                <button type="submit" className="px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg flex items-center gap-2 cursor-pointer transition">
                  Talebi Gönder
                  <Send className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}