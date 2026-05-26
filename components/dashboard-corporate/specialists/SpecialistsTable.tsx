'use client'

import { useState } from 'react'
import { Plus, ChevronDown, X } from 'lucide-react'
import SpecialistRow from './SpecialistRow'
import { specialists as initialSpecialists } from '../data/specialists-data'
import type { Specialist } from '../types'

const specialtyCategories = [
  { category: 'Sağlık & Terapi',       items: ['Klinik Psikolog', 'Psikiyatrist', 'Çocuk & Ergen Psikoloğu', 'Aile Danışmanı', 'EMDR Terapisti', 'Fizyoterapist', 'Diyetisyen', 'Diş Hekimi'] },
  { category: 'Hukuk & Finans',        items: ['Avukat', 'Mali Müşavir', 'Vergi Danışmanı', 'Noterlik Hizmetleri'] },
  { category: 'Güzellik & Bakım',      items: ['Kuaför', 'Berber', 'Güzellik Uzmanı', 'Nail Sanatçısı', 'Masaj Terapisti', 'Kaş & Kirpik Uzmanı'] },
  { category: 'Spor & Fitness',        items: ['Personal Trainer', 'Yoga Eğitmeni', 'Pilates Eğitmeni', 'Diyetetik Koçu'] },
  { category: 'Eğitim & Danışmanlık',  items: ['Özel Ders', 'Kariyer Koçu', 'İş Koçu', 'Danışman'] },
  { category: 'Diğer',                 items: ['Veteriner', 'Mimar', 'İç Mimar', 'Fotoğrafçı', 'Diğer'] },
]

interface Props {
  onAddSpecialist: () => void
}

export default function SpecialistsTable({ onAddSpecialist }: Props) {
  const [specialists, setSpecialists] = useState<Specialist[]>(initialSpecialists)
  const [editModal, setEditModal] = useState<Specialist | null>(null)
  const [editName, setEditName] = useState('')
  const [editSpecialty, setEditSpecialty] = useState('')
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const handleDelete = (id: string) => {
    setSpecialists((prev) => prev.filter((s) => s.initials !== id))
  }

  const handleStatusChange = (id: string, status: Specialist['status']) => {
    setSpecialists((prev) => prev.map((s) => s.initials === id ? { ...s, status } : s))
  }

  const handleEdit = (specialist: Specialist) => {
    setEditModal(specialist)
    setEditName(specialist.name)
    setEditSpecialty(specialist.specialty)
    setOpenCategory(null)
  }

  return (
    <>
      <div className="mt-6 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] overflow-hidden">
        <div className="p-5 border-b border-ink-100 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h3 className="font-semibold text-ink-900">Uzman Yönetimi</h3>
            <p className="text-xs text-ink-500 mt-0.5">Kliniğinizde çalışan tüm uzmanları yönetin</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <select className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer">
              <option>Tüm uzmanlar</option>
              <option>Aktif</option>
              <option>İzinli</option>
              <option>Pasif</option>
            </select>
            <button
              onClick={onAddSpecialist}
              className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-3 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition"
            >
              <Plus className="w-4 h-4" strokeWidth={2.5} />
              Uzman Ekle
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-ink-50/60 border-b border-ink-100">
              <tr className="text-left text-[11px] font-semibold text-ink-500 uppercase tracking-wider">
                {['Uzman', 'Uzmanlık', 'Bugün', 'Aylık MRR', 'Doluluk', 'Durum', ''].map((h, i) => (
                  <th key={i} className={`px-4 py-3 ${i === 6 ? 'text-right' : ''}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-50">
              {specialists.map((s) => (
                <SpecialistRow
                  key={s.initials}
                  specialist={s}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onStatusChange={handleStatusChange}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${editModal.bgColor} flex items-center justify-center text-white font-bold shrink-0`}>
                  {editModal.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-ink-900">{editModal.name}</h3>
                  <p className="text-xs text-ink-500">{editModal.specialty}</p>
                </div>
              </div>
              <button onClick={() => setEditModal(null)} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer transition">
                <svg className="w-4 h-4 text-ink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-ink-700">Ad Soyad</label>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-700">Uzmanlık Alanı</label>
                {editSpecialty && (
                  <div className="mt-1 mb-2">
                    <span className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-brand-200">
                      {editSpecialty}
                      <button type="button" onClick={() => setEditSpecialty('')} className="text-brand-400 hover:text-brand-700 cursor-pointer">
                        <X className="w-3 h-3" strokeWidth={2.5} />
                      </button>
                    </span>
                  </div>
                )}
                <div className="mt-1 border border-ink-200 rounded-xl overflow-hidden max-h-48 overflow-y-auto">
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
                              onClick={() => setEditSpecialty(item)}
                              className={`text-left text-xs px-3 py-2 rounded-lg transition cursor-pointer ${
                                editSpecialty === item ? 'bg-brand-600 text-white font-semibold' : 'hover:bg-ink-100 text-ink-700'
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
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-700">Durum</label>
                <select
                  defaultValue={editModal.status}
                  onChange={(e) => handleStatusChange(editModal.initials, e.target.value as Specialist['status'])}
                  className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                >
                  <option>Aktif</option>
                  <option>İzinli</option>
                  <option>Pasif</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-5 pt-4 border-t border-ink-100">
              <button onClick={() => setEditModal(null)} className="px-4 py-2 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-lg cursor-pointer transition">
                İptal
              </button>
              <button onClick={() => {
                setSpecialists((prev) => prev.map((s) => s.initials === editModal.initials ? { ...s, name: editName, specialty: editSpecialty } : s))
                setEditModal(null)
              }} className="px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg cursor-pointer transition">
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}