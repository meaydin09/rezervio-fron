'use client'

import { useState } from 'react'
import { X, Plus, ChevronDown, Pencil } from 'lucide-react'

interface Props {
  onClose: () => void
  onInvite: () => void
}

const specialtyCategories = [
  {
    category: 'Sağlık & Terapi',
    items: [
      'Klinik Psikolog', 'Psikolog', 'Psikiyatrist', 'Çocuk Psikiyatristi',
      'Çocuk & Ergen Psikoloğu', 'Aile Danışmanı', 'Çift Terapisti',
      'EMDR Terapisti', 'Bilişsel Davranışçı Terapist', 'Gestalt Terapisti',
      'Fizyoterapist', 'Diyetisyen', 'Beslenme Uzmanı',
      'Diş Hekimi', 'Ortodontist', 'Periodontist',
      'Genel Pratisyen Hekim', 'Dahiliye Uzmanı', 'Kardiyolog',
      'Dermatoloji Uzmanı', 'Göz Doktoru', 'KBB Uzmanı',
      'Ortopedi Uzmanı', 'Nörolog', 'Endokrinolog',
    ],
  },
  {
    category: 'Hukuk & Finans',
    items: [
      'Avukat', 'Ceza Avukatı', 'Boşanma Avukatı', 'İş Hukuku Avukatı',
      'Mali Müşavir', 'Vergi Danışmanı', 'Yeminli Mali Müşavir',
      'Noterlik Hizmetleri', 'Finansal Danışman', 'Sigorta Danışmanı',
    ],
  },
  {
    category: 'Güzellik & Bakım',
    items: [
      'Kuaför', 'Berber', 'Saç Boyama Uzmanı',
      'Güzellik Uzmanı', 'Estetisyen', 'Cilt Bakım Uzmanı',
      'Nail Sanatçısı', 'Kalıcı Makyaj Uzmanı',
      'Masaj Terapisti', 'Epilasyon Uzmanı',
      'Kaş & Kirpik Uzmanı', 'Lazer Epilasyon',
    ],
  },
  {
    category: 'Spor & Fitness',
    items: [
      'Personal Trainer', 'Fitness Koçu', 'Vücut Geliştirme Koçu',
      'Yoga Eğitmeni', 'Pilates Eğitmeni', 'Meditasyon Eğitmeni',
      'Diyetetik Koçu', 'Sporcu Beslenmesi Uzmanı',
      'Yüzme Antrenörü', 'Tenis Antrenörü', 'Dans Eğitmeni',
    ],
  },
  {
    category: 'Eğitim & Danışmanlık',
    items: [
      'Özel Ders (İlkokul)', 'Özel Ders (Ortaokul)', 'Özel Ders (Lise)',
      'Yabancı Dil Eğitmeni', 'İngilizce Öğretmeni',
      'Kariyer Koçu', 'İş Koçu', 'Yaşam Koçu',
      'Danışman', 'Akademik Danışman',
    ],
  },
  {
    category: 'Diğer',
    items: [
      'Veteriner', 'Mimar', 'İç Mimar', 'Peyzaj Mimarı',
      'Fotoğrafçı', 'Grafik Tasarımcı',
      'Çevirmen', 'Muhasebeci',
    ],
  },
]

export default function AddSpecialistModal({ onClose, onInvite }: Props) {
  const [openCategory, setOpenCategory] = useState<string | null>('Sağlık & Terapi')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [customMode, setCustomMode] = useState(false)
  const [customSpecialty, setCustomSpecialty] = useState('')

  const finalSpecialty = customMode ? customSpecialty : selectedSpecialty

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

          {/* Uzmanlık Alanı */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-ink-700">Uzmanlık Alanı</label>
              <button
                type="button"
                onClick={() => { setCustomMode((p) => !p); setSelectedSpecialty(''); setCustomSpecialty('') }}
                className="flex items-center gap-1 text-[11px] font-semibold text-brand-600 hover:text-brand-700 cursor-pointer transition"
              >
                <Pencil className="w-3 h-3" strokeWidth={2.5} />
                {customMode ? 'Listeden seç' : 'Kendim yazayım'}
              </button>
            </div>

            {/* Seçili göster */}
            {!customMode && finalSpecialty && (
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-brand-200">
                  {finalSpecialty}
                  <button type="button" onClick={() => setSelectedSpecialty('')} className="text-brand-400 hover:text-brand-700 cursor-pointer">
                    <X className="w-3 h-3" strokeWidth={2.5} />
                  </button>
                </span>
              </div>
            )}

            {/* Özel giriş modu */}
            {customMode ? (
              <input
                type="text"
                placeholder="Uzmanlık alanını yazın..."
                value={customSpecialty}
                onChange={(e) => setCustomSpecialty(e.target.value)}
                className="w-full text-sm border border-brand-300 rounded-xl px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                autoFocus
              />
            ) : (
              /* Liste modu */
              <div className="border border-ink-200 rounded-xl overflow-hidden max-h-52 overflow-y-auto">
                {specialtyCategories.map((cat) => (
                  <div key={cat.category} className="border-b border-ink-100 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpenCategory(openCategory === cat.category ? null : cat.category)}
                      className="w-full flex items-center justify-between px-3 py-2.5 bg-ink-50/60 hover:bg-ink-100/60 transition cursor-pointer"
                    >
                      <span className="text-xs font-bold text-ink-700">{cat.category}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-ink-400 transition-transform ${openCategory === cat.category ? 'rotate-180' : ''}`} strokeWidth={2} />
                    </button>
                    {openCategory === cat.category && (
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {cat.items.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setSelectedSpecialty(item)}
                            className={`text-left text-xs px-3 py-2 rounded-lg transition cursor-pointer ${
                              selectedSpecialty === item
                                ? 'bg-brand-600 text-white font-semibold'
                                : 'hover:bg-ink-100 text-ink-700'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="text-xs font-semibold text-ink-700">Hizmet Süresi (varsayılan)</label>
            <select className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer">
              {['45 dakika', '50 dakika', '60 dakika', '75 dakika', '90 dakika'].map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-ink-100">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-lg cursor-pointer transition">
              İptal
            </button>
            <button type="submit" className="px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg flex items-center gap-2 cursor-pointer transition">
              Ekle
              <Plus className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}