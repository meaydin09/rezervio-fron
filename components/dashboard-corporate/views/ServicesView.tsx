'use client'

import { useState } from 'react'
import { Plus, Pencil, Trash2, X, Check } from 'lucide-react'

interface Service {
  id: number
  name: string
  duration: number
  price: number
  description: string
  active: boolean
    assignedSpecialists: string[]  // initials array

}

const initialServices: Service[] = [
  { id: 1, name: 'Bireysel Terapi',  duration: 50, price: 800,  description: 'Bireysel psikoterapi seansı',         active: true,  assignedSpecialists: ['OU', 'SK', 'ZT'] },
  { id: 2, name: 'Çift Terapisi',   duration: 75, price: 1200, description: 'Çiftler için terapi seansı',          active: true,  assignedSpecialists: ['CO'] },
  { id: 3, name: 'Çocuk Terapisi',  duration: 45, price: 700,  description: '6-12 yaş arası çocuklar için seans', active: true,  assignedSpecialists: ['SK'] },
  { id: 4, name: 'EMDR Seansı',     duration: 90, price: 1500, description: 'Travma odaklı EMDR terapisi',         active: false, assignedSpecialists: ['ZT', 'OU'] },
  { id: 5, name: 'Online Seans',    duration: 50, price: 700,  description: 'Video görüşme ile online terapi',     active: true,  assignedSpecialists: [] },
]

interface ModalState {
  open: boolean
  service: Partial<Service> | null
}

export default function ServicesView() {
  const [services, setServices] = useState<Service[]>(initialServices)
  const [modal, setModal] = useState<ModalState>({ open: false, service: null })
  const [deleteId, setDeleteId] = useState<number | null>(null)

  const openAdd = () => {
  setModal({ open: true, service: { name: '', duration: 50, price: 0, description: '', active: true, assignedSpecialists: [] } })
  setAssignedSpecialists([])
}
const openEdit = (s: Service) => {
  setModal({ open: true, service: { ...s } })
  setAssignedSpecialists(s.assignedSpecialists ?? [])
}
  const closeModal = () => setModal({ open: false, service: null })

const handleSave = () => {
  if (!modal.service) return
  const serviceToSave = {
    ...modal.service,
    assignedSpecialists: assignedSpecialists,
  }
  if (modal.service.id) {
    setServices((prev) => prev.map((s) => s.id === modal.service!.id ? { ...s, ...serviceToSave } as Service : s))
  } else {
    setServices((prev) => [...prev, { ...serviceToSave, id: Date.now() } as Service])
  }
  closeModal()
}

  const handleDelete = (id: number) => {
    setServices((prev) => prev.filter((s) => s.id !== id))
    setDeleteId(null)
  }

  const toggleActive = (id: number) => {
    setServices((prev) => prev.map((s) => s.id === id ? { ...s, active: !s.active } : s))
  }
  const [assignedSpecialists, setAssignedSpecialists] = useState<string[]>([])
const specialistOptions = [
  { initials: 'OU', name: 'Psk. Onur Uzun',   bgColor: 'bg-ink-900'     },
  { initials: 'MD', name: 'Dr. Mert Doğan',   bgColor: 'bg-brand-600'   },
  { initials: 'SK', name: 'Psk. Selin Kaya',  bgColor: 'bg-emerald-600' },
  { initials: 'CO', name: 'Uzm. Can Özdemir', bgColor: 'bg-amber-600'   },
  { initials: 'ZT', name: 'Psk. Zeynep Tan',  bgColor: 'bg-violet-600'  },
  { initials: 'BK', name: 'Psk. Burak Kılıç', bgColor: 'bg-sky-600'     },
  { initials: 'EA', name: 'Psk. Esra Ay',     bgColor: 'bg-rose-600'    },
]

const toggleSpecialist = (initials: string) => {
  setAssignedSpecialists((prev) =>
    prev.includes(initials) ? prev.filter((s) => s !== initials) : [...prev, initials]
  )
}

  return (
    <>
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] overflow-hidden">
        <div className="p-5 border-b border-ink-100 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h3 className="font-semibold text-ink-900">Hizmet Yönetimi</h3>
            <p className="text-xs text-ink-500 mt-0.5">Sunduğunuz hizmetleri ekleyin, düzenleyin veya kaldırın</p>
          </div>
          <button
            onClick={openAdd}
            className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition"
          >
            <Plus className="w-4 h-4" strokeWidth={2.5} />
            Hizmet Ekle
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-ink-50/60 border-b border-ink-100">
              <tr className="text-left text-[11px] font-semibold text-ink-500 uppercase tracking-wider">
                {['Hizmet Adı', 'Süre', 'Ücret', 'Açıklama', 'Uzmanlar', 'Durum', ''].map((h, i) => (
  <th key={i} className={`px-4 py-3 ${i === 6 ? 'text-right' : ''}`}>{h}</th>
))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-50">
              {services.map((s) => (
                <tr key={s.id} className="hover:bg-ink-50/40 transition">
                  <td className="px-4 py-3 text-sm font-semibold text-ink-900">{s.name}</td>
                  <td className="px-4 py-3 text-sm text-ink-600">{s.duration} dk</td>
                  <td className="px-4 py-3 text-sm font-bold text-brand-700">₺{s.price}</td>
                  <td className="px-4 py-3 text-xs text-ink-500 max-w-[200px] truncate">{s.description}</td>
                  <td className="px-4 py-3">
  <div className="flex items-center gap-1">
    {s.assignedSpecialists.length === 0 ? (
      <span className="text-[11px] text-ink-400">Tümü</span>
    ) : (
      s.assignedSpecialists.slice(0, 3).map((initials) => {
        const sp = specialistOptions.find((o) => o.initials === initials)
        return (
          <div key={initials} className={`w-6 h-6 rounded-md ${sp?.bgColor ?? 'bg-ink-400'} flex items-center justify-center text-white text-[9px] font-bold`} title={sp?.name}>
            {initials}
          </div>
        )
      })
    )}
    {s.assignedSpecialists.length > 3 && (
      <span className="text-[11px] text-ink-400">+{s.assignedSpecialists.length - 3}</span>
    )}
  </div>
</td>
                  <td className="px-4 py-3">
                    <button onClick={() => toggleActive(s.id)} className="cursor-pointer">
                      <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${
                        s.active ? 'bg-emerald-50 text-emerald-700' : 'bg-ink-100 text-ink-500'
                      }`}>
                        {s.active ? 'Aktif' : 'Pasif'}
                      </span>
                    </button>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => openEdit(s)} className="w-7 h-7 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 cursor-pointer transition">
                        <Pencil className="w-3.5 h-3.5" strokeWidth={2} />
                      </button>
                      <button onClick={() => setDeleteId(s.id)} className="w-7 h-7 rounded-lg hover:bg-rose-50 flex items-center justify-center text-rose-500 cursor-pointer transition">
                        <Trash2 className="w-3.5 h-3.5" strokeWidth={2} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit/Add Modal */}
      {modal.open && modal.service && (
        <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-lg text-ink-900">{modal.service.id ? 'Hizmeti Düzenle' : 'Yeni Hizmet Ekle'}</h3>
              <button onClick={closeModal} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer">
                <X className="w-4 h-4 text-ink-500" strokeWidth={2} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-ink-700">Hizmet Adı</label>
                <input
                  type="text"
                  value={modal.service.name ?? ''}
                  onChange={(e) => setModal((m) => ({ ...m, service: { ...m.service!, name: e.target.value } }))}
                  className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-ink-700">Süre (dk)</label>
                  <input
                    type="number"
                    value={modal.service.duration ?? 50}
                    onChange={(e) => setModal((m) => ({ ...m, service: { ...m.service!, duration: +e.target.value } }))}
                    className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-ink-700">Ücret (₺)</label>
                  <input
                    type="number"
                    value={modal.service.price ?? 0}
                    onChange={(e) => setModal((m) => ({ ...m, service: { ...m.service!, price: +e.target.value } }))}
                    className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-700">Açıklama</label>
                <textarea
                  rows={3}
                  value={modal.service.description ?? ''}
                  onChange={(e) => setModal((m) => ({ ...m, service: { ...m.service!, description: e.target.value } }))}
                  className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none resize-none"
                />
              </div>
              <div>
  <label className="text-xs font-semibold text-ink-700">Bu Hizmeti Verecek Uzmanlar</label>
  <p className="text-[11px] text-ink-400 mt-0.5 mb-2">Seçili uzmanlar bu hizmeti verebilir olarak işaretlenir</p>
  <div className="flex flex-wrap gap-2">
    {specialistOptions.map((sp) => {
      const isSelected = assignedSpecialists.includes(sp.initials)
      return (
        <button
          key={sp.initials}
          type="button"
          onClick={() => toggleSpecialist(sp.initials)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition cursor-pointer ${
            isSelected
              ? 'border-brand-300 bg-brand-50 text-brand-700'
              : 'border-ink-200 hover:border-ink-300 text-ink-600'
          }`}
        >
          <div className={`w-5 h-5 rounded-md ${sp.bgColor} flex items-center justify-center text-white text-[9px] font-bold shrink-0`}>
            {sp.initials}
          </div>
          {sp.name.split(' ').slice(-1)[0]}
          {isSelected && <Check className="w-3 h-3 text-brand-600" strokeWidth={2.5} />}
        </button>
      )
    })}
  </div>
  {assignedSpecialists.length === 0 && (
    <p className="text-[11px] text-amber-600 mt-1.5">⚠ Uzman atanmadı — tüm uzmanlar bu hizmeti verebilir sayılır</p>
  )}
</div>
            </div>
            <div className="flex justify-end gap-2 mt-5 pt-4 border-t border-ink-100">
              <button onClick={closeModal} className="px-4 py-2 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-lg cursor-pointer transition">İptal</button>
              <button onClick={handleSave} className="px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg flex items-center gap-2 cursor-pointer transition">
                <Check className="w-4 h-4" strokeWidth={2.5} />
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteId && (
        <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-5 h-5 text-rose-600" strokeWidth={2} />
            </div>
            <h3 className="font-bold text-lg text-ink-900 mb-2">Hizmeti Sil</h3>
            <p className="text-sm text-ink-600 mb-5">Bu hizmeti silmek istediğinizden emin misiniz?</p>
            <div className="flex gap-2 justify-center">
              <button onClick={() => setDeleteId(null)} className="px-4 py-2 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-lg cursor-pointer transition">İptal</button>
              <button onClick={() => handleDelete(deleteId)} className="px-4 py-2 text-sm font-semibold bg-rose-600 hover:bg-rose-700 text-white rounded-lg cursor-pointer transition">Sil</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}