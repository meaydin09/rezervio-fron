'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Calendar, MessageCircle, Palette, CreditCard, Users, X } from 'lucide-react'

const helpItems = [
  {
    label: 'Takvim nasıl güncellenir?',
    iconBg: 'bg-brand-50', icon: Calendar, iconColor: 'text-brand-600',
    content: [
      { title: 'Haftalık / Aylık / Günlük görünüm', body: 'Takvim kartının sağ üstündeki "Hafta", "Ay", "Gün" butonlarıyla görünümü değiştirebilirsiniz.' },
      { title: 'Yeni randevu oluşturma', body: 'Haftalık veya günlük görünümde yeşil "Müsait" slotlara tıklayarak yeni randevu oluşturabilirsiniz. Danışan adı, telefon, hizmet türü ve süre bilgilerini girerek kaydedin.' },
      { title: 'Saat kapatma', body: 'Müsait bir slota tıkladığınızda açılan formda "Bu Saati Kapat" seçeneğiyle o saati randevuya kapatabilirsiniz.' },
      { title: 'Aylık görünümden güne geçiş', body: 'Aylık takvimde herhangi bir güne tıklayarak o günün detaylı saatlik görünümüne geçebilirsiniz.' },
    ],
  },
  {
    label: 'WhatsApp hatırlatma ayarları',
    iconBg: 'bg-emerald-50', icon: MessageCircle, iconColor: 'text-emerald-600',
    content: [
      { title: 'Otomatik hatırlatmalar', body: 'Rezervio, randevudan 24 saat ve 1 saat önce danışanınıza otomatik WhatsApp mesajı gönderir. Bu özellik tüm planlarda aktiftir.' },
      { title: 'Hatırlatma şablonunu özelleştirme', body: 'Sol menüden "WhatsApp" bölümüne giderek mesaj şablonunuzu düzenleyebilir, klinik adı ve ek bilgiler ekleyebilirsiniz.' },
      { title: 'Telefon numarası doğrulama', body: 'Hatırlatmaların çalışması için danışan telefon numarasının randevu oluşturulurken girilmesi gerekir. Numara +90 formatında kaydedilir.' },
      { title: 'Gönderim durumu', body: 'Bugünün Randevuları kartında her randevunun yanında "✓ WhatsApp Gönderildi" veya "⏱ Hatırlatma planlandı" rozeti görünür.' },
    ],
  },
  {
    label: 'Profil sayfamı özelleştirme',
    iconBg: 'bg-violet-50', icon: Palette, iconColor: 'text-violet-600',
    content: [
      { title: 'Profil bilgileri', body: 'Sol menüden "Ayarlar" bölümüne giderek ad, unvan, uzmanlık alanı, biyografi ve profil fotoğrafınızı güncelleyebilirsiniz.' },
      { title: 'Renk teması', body: 'Dashboard\'un sağ alt köşesindeki "Tema" kartından 6 hazır renk seçeneği veya özel HEX renk kodu ile profil sayfanızın rengini değiştirebilirsiniz.' },
      { title: 'Hizmetler', body: '"Hizmetler" menüsünden sunduğunuz hizmetleri, fiyatları ve süreleri düzenleyebilirsiniz. Bu bilgiler profil sayfanızda ziyaretçilere gösterilir.' },
      { title: 'Eğitim & Sertifikalar', body: 'Ayarlar > Eğitim ve Sertifikalar bölümünden akademik geçmişinizi ve sertifikalarınızı ekleyerek profilinizi güçlendirebilirsiniz.' },
    ],
  },
  {
    label: 'Abonelik & ödeme yönetimi',
    iconBg: 'bg-amber-50', icon: CreditCard, iconColor: 'text-amber-600',
    content: [
      { title: 'Mevcut planınız', body: 'Sol menüden "Abonelik" bölümüne giderek aktif planınızı, yenileme tarihini ve kullanım limitlerini görebilirsiniz.' },
      { title: 'Plan yükseltme', body: 'Daha fazla randevu kapasitesi veya ek özellikler için Abonelik sayfasından planınızı yükseltebilirsiniz. Değişiklik anında aktif olur.' },
      { title: 'Fatura & ödeme geçmişi', body: 'Abonelik sayfasında geçmiş ödemelerinizi ve faturalarınızı PDF olarak indirebilirsiniz.' },
      { title: 'İptal politikası', body: 'Aboneliğinizi istediğiniz zaman iptal edebilirsiniz. Mevcut dönem sonuna kadar tüm özellikler aktif kalmaya devam eder.' },
    ],
  },
  {
    label: 'Danışan yönetimi',
    iconBg: 'bg-rose-50', icon: Users, iconColor: 'text-rose-600',
    content: [
      { title: 'Danışan listesi', body: 'Randevu oluştururken girilen danışan bilgileri otomatik olarak sisteme kaydedilir. Danışanlar bölümünden tüm danışanlarınızı listeleyebilirsiniz.' },
      { title: 'Seans notları', body: 'Randevu oluştururken veya sonrasında danışana özel not ekleyebilirsiniz. Bu notlar yalnızca size görünür.' },
      { title: 'Randevu geçmişi', body: 'Her danışanın profil sayfasından geçmiş randevularını, seans sayısını ve son görüşme tarihini görebilirsiniz.' },
      { title: 'Danışan silme', body: 'Danışan profilinden "Sil" seçeneğiyle danışanı ve ilgili randevu geçmişini sistemden kaldırabilirsiniz. Bu işlem geri alınamaz.' },
    ],
  },
]

interface HelpModalProps {
  item: typeof helpItems[0]
  onClose: () => void
}

function HelpModal({ item, onClose }: HelpModalProps) {
  const Icon = item.icon
  return (
    <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl shadow-ink-900/10 border border-ink-100 w-full max-w-md max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b border-ink-100 flex items-center gap-3 shrink-0">
          <div className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center ${item.iconColor} shrink-0`}>
            <Icon className="w-4 h-4" strokeWidth={2} />
          </div>
          <h3 className="font-bold text-base text-ink-900 flex-1">{item.label}</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center transition cursor-pointer">
            <X className="w-4 h-4 text-ink-500" strokeWidth={2} />
          </button>
        </div>
        <div className="p-4 overflow-y-auto space-y-4">
          {item.content.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-ink-900">{c.title}</p>
              <p className="text-sm text-ink-600 mt-1 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-ink-100 shrink-0">
          <button onClick={onClose} className="w-full py-2.5 text-sm font-semibold bg-ink-900 hover:bg-ink-800 text-white rounded-xl transition cursor-pointer">
            Anladım
          </button>
        </div>
      </div>
    </div>
  )
}

interface Props {
  onNewTicket: () => void
}

export default function QuickHelp({ onNewTicket }: Props) {
  const [active, setActive] = useState<typeof helpItems[0] | null>(null)

  return (
    <>
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
        <h3 className="font-semibold text-ink-900">Hızlı Yardım</h3>
        <p className="text-xs text-ink-500 mt-0.5">Sık sorulan konulara hızlı erişim</p>

        <div className="mt-4 space-y-1">
          {helpItems.map((item) => {
            const Icon = item.icon
            return (
              <button key={item.label} onClick={() => setActive(item)} className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-ink-50 cursor-pointer transition text-left">
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
            <Link href="/iletisim" target='_blank' className="text-center bg-ink-100 hover:bg-ink-200 text-ink-800 text-xs font-semibold py-2 rounded-lg transition cursor-pointer block">
              İletişim
            </Link>
            <button onClick={onNewTicket} className="bg-ink-900 hover:bg-ink-800 text-white text-xs font-semibold py-2 rounded-lg transition cursor-pointer">
              Talep Aç
            </button>
          </div>
        </div>
      </div>

      {active && <HelpModal item={active} onClose={() => setActive(null)} />}
    </>
  )
}
