import { X, Send } from 'lucide-react'

interface Props {
  onClose: () => void
  onInvite: () => void
}

export default function AddSpecialistModal({ onClose, onInvite }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] max-w-lg w-full">
        <div className="p-5 border-b border-ink-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-ink-900">Yeni Uzman Ekle</h3>
            <p className="text-xs text-ink-500 mt-0.5">Kliniğinize yeni bir uzman daveti gönderin</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer transition">
            <X className="w-4 h-4 text-ink-500" strokeWidth={2} />
          </button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onInvite() }} className="p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-ink-700">Ad</label>
              <input type="text" placeholder="Onur" className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">Soyad</label>
              <input type="text" placeholder="Uzun" className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">E-posta</label>
            <input type="email" placeholder="uzman@mail.com" className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">Uzmanlık Alanı</label>
            <select className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer">
              {['Klinik Psikolog', 'Psikiyatrist', 'Çocuk & Ergen Psikoloğu', 'Aile Danışmanı', 'EMDR Terapisti', 'Diğer'].map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">Hizmet Süresi (varsayılan)</label>
            <select className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer">
              {['45 dakika', '50 dakika', '60 dakika', '75 dakika', '90 dakika'].map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </div>
          <div className="bg-brand-50 border border-brand-100 rounded-lg p-3 flex items-start gap-2">
            <svg className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <div className="text-xs text-brand-900">
              Uzmana davet e-postası gönderilecek. Kabul ederse <strong>rezervio.com/novapsy-klinik</strong> altında profil oluşturabilecek.
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-ink-100">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-lg cursor-pointer transition">
              İptal
            </button>
            <button type="submit" className="px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg flex items-center gap-2 cursor-pointer transition">
              Davet Gönder
              <Send className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}