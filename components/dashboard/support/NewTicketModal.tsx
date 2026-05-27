import { X, Send, Upload } from 'lucide-react'

interface Props {
  onClose: () => void
}

export default function NewTicketModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] max-w-lg w-full">
        <div className="p-5 border-b border-ink-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-ink-900">Yeni Destek Talebi</h3>
            <p className="text-xs text-ink-500 mt-0.5">Destek ekibimiz en kısa sürede dönüş yapacak</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer transition">
            <X className="w-4 h-4 text-ink-500" strokeWidth={2} />
          </button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onClose() }} className="p-5 sm:p-6 space-y-4">
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
                {['Teknik Sorun', 'Takvim & Randevu', 'WhatsApp Bildirimi', 'Faturalama & Abonelik', 'Profil & Tema', 'Hesap & Şifre', 'Özellik İsteği', 'Diğer'].map((v) => (
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
            <button type="button" className="w-full border-2 border-dashed border-ink-200 hover:border-brand-300 rounded-lg p-4 text-center text-sm text-ink-500 hover:text-brand-600 hover:bg-brand-50/50 transition cursor-pointer flex flex-col items-center gap-2">
              <Upload className="w-5 h-5" strokeWidth={2} />
              <span className="text-xs">Ekran görüntüsü, PDF veya dosya yükle</span>
              <span className="text-[11px] text-ink-400">Maks. 10 MB</span>
            </button>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-3 flex items-start gap-2">
            <svg className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <div className="text-xs text-brand-900">
              Talebiniz oluşturulduktan sonra <strong>destek@rezervio.co</strong> adresine bilgilendirme e-postası gönderilir. Ortalama yanıt süremiz <strong>28 dakika</strong>.
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-ink-100">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-lg cursor-pointer transition">
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
  )
}