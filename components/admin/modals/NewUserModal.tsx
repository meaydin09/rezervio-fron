import { X } from 'lucide-react'

interface Props {
  onClose: () => void
  onCreated: () => void
}

export default function NewUserModal({ onClose, onCreated }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] max-w-lg w-full">
        <div className="p-5 border-b border-ink-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-ink-900">Yeni Kullanıcı Oluştur</h3>
            <p className="text-xs text-ink-500 mt-0.5">Admin tarafından manuel hesap oluşturma</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer transition">
            <X className="w-4 h-4 text-ink-500" strokeWidth={2} />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-ink-700">Hesap Türü</label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button className="border-2 border-brand-500 bg-brand-50 rounded-xl p-3 text-left cursor-pointer">
                <div className="text-sm font-semibold text-ink-900">👤 Bireysel</div>
              </button>
              <button className="border-2 border-ink-200 hover:border-brand-300 rounded-xl p-3 text-left cursor-pointer transition">
                <div className="text-sm font-semibold text-ink-900">🏢 Kurumsal</div>
              </button>
            </div>
          </div>

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
            <input type="email" placeholder="ornek@mail.com" className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
          </div>

          <div>
            <label className="text-xs font-semibold text-ink-700">Slug</label>
            <div className="mt-1 flex">
              <span className="px-3 py-2.5 bg-ink-50 border border-r-0 border-ink-200 rounded-l-lg text-sm text-ink-600 font-medium whitespace-nowrap">rezervio.co/</span>
              <input type="text" placeholder="kullaniciadi" className="flex-1 text-sm border border-ink-200 rounded-r-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none min-w-0" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-ink-700">Başlangıç Planı</label>
              <select className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer">
                <option>Deneme (14 gün)</option><option>Profesyonel</option><option>Kurumsal</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">Uzmanlık</label>
              <select className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer">
                <option>Psikolog</option><option>Diyetisyen</option><option>Kuaför</option><option>Diğer</option>
              </select>
            </div>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-3 text-xs text-brand-900">
            Kullanıcıya otomatik geçici şifre e-postası gönderilecek.
          </div>
        </div>

        <div className="p-4 border-t border-ink-100 flex items-center justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-lg cursor-pointer transition">İptal</button>
          <button onClick={onCreated} className="px-4 py-2 text-sm font-semibold bg-rose-600 hover:bg-rose-700 text-white rounded-lg cursor-pointer transition">Kullanıcı Oluştur</button>
        </div>
      </div>
    </div>
  )
}