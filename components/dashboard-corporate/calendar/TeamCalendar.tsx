'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, X, Lock, User } from 'lucide-react'
import { specialists } from '../data/specialists-data'

const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

type SlotType = 'confirmed' | 'pending' | 'closed' | 'available'

interface Slot {
  type: SlotType
  name?: string
  note?: string
}

// Her uzman için ayrı slot map: specialistInitials -> key -> Slot
type SpecialistSlots = Record<string, Record<string, Slot>>

const initialSpecialistSlots: SpecialistSlots = {
  OU: {
    '10:00-0': { type: 'confirmed', name: 'Ayşe Ş.' },
    '11:00-1': { type: 'confirmed', name: 'Burak M.' },
    '14:00-1': { type: 'pending',   name: 'Zeynep T.' },
    '12:00-3': { type: 'confirmed', name: 'Deniz A.' },
    '10:00-4': { type: 'confirmed', name: 'Onur U.' },
    '12:00-0': { type: 'closed' },
    '09:00-6': { type: 'closed' }, '10:00-6': { type: 'closed' }, '11:00-6': { type: 'closed' },
    '12:00-6': { type: 'closed' }, '13:00-6': { type: 'closed' }, '14:00-6': { type: 'closed' },
  },
  MD: {
    '10:00-2': { type: 'confirmed', name: 'Selin K.' },
    '13:00-4': { type: 'confirmed', name: 'Mert Y.' },
    '18:00-3': { type: 'pending',   name: 'Can Ö.' },
    '16:00-4': { type: 'confirmed', name: 'Esra A.' },
    '09:00-6': { type: 'closed' }, '10:00-6': { type: 'closed' }, '11:00-6': { type: 'closed' },
    '12:00-6': { type: 'closed' }, '13:00-6': { type: 'closed' }, '14:00-6': { type: 'closed' },
  },
  SK: {
    '11:00-0': { type: 'confirmed', name: 'Defne A.' },
    '14:00-2': { type: 'confirmed', name: 'Hasan B.' },
    '10:00-3': { type: 'pending',   name: 'Lale C.' },
    '09:00-6': { type: 'closed' }, '10:00-6': { type: 'closed' }, '11:00-6': { type: 'closed' },
    '12:00-6': { type: 'closed' }, '13:00-6': { type: 'closed' }, '14:00-6': { type: 'closed' },
  },
  CO: {
    '13:00-1': { type: 'confirmed', name: 'Hasan & Lale' },
    '15:00-3': { type: 'pending',   name: 'Selma Ö.' },
    '09:00-6': { type: 'closed' }, '10:00-6': { type: 'closed' }, '11:00-6': { type: 'closed' },
    '12:00-6': { type: 'closed' }, '13:00-6': { type: 'closed' }, '14:00-6': { type: 'closed' },
  },
  ZT: {
    '14:00-0': { type: 'confirmed', name: 'Murat D.' },
    '11:00-2': { type: 'confirmed', name: 'Seda K.' },
    '09:00-6': { type: 'closed' }, '10:00-6': { type: 'closed' }, '11:00-6': { type: 'closed' },
    '12:00-6': { type: 'closed' }, '13:00-6': { type: 'closed' }, '14:00-6': { type: 'closed' },
  },
  BK: {},
  EA: {
    '10:00-1': { type: 'confirmed', name: 'Cem O.' },
    '13:00-3': { type: 'pending',   name: 'Berk K.' },
    '09:00-6': { type: 'closed' }, '10:00-6': { type: 'closed' }, '11:00-6': { type: 'closed' },
    '12:00-6': { type: 'closed' }, '13:00-6': { type: 'closed' }, '14:00-6': { type: 'closed' },
  },
}

function getWeekDays(offsetWeeks = 0) {
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const currentDay = today.getDay()
  const monday = new Date(today)
  monday.setDate(today.getDate() - (currentDay === 0 ? 6 : currentDay - 1) + offsetWeeks * 7)
  const dayNames = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday); d.setDate(monday.getDate() + i)
    return { short: dayNames[i], date: d.getDate(), today: d.toDateString() === today.toDateString(), past: d < today }
  })
}

const monthNames = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık']

// Tüm uzmanlar modunda bir slottaki tüm randevuları topla
function getAllSlotsForKey(key: string, allSlots: SpecialistSlots): { initials: string; name: string; bgColor: string; slot: Slot }[] {
  return specialists.flatMap((s) => {
    const slot = allSlots[s.initials]?.[key]
    if (slot && (slot.type === 'confirmed' || slot.type === 'pending')) {
      return [{ initials: s.initials, name: s.name, bgColor: s.bgColor, slot }]
    }
    return []
  })
}

interface BookModalProps {
  hour: string; dayLabel: string; specialistName: string
  showSpecialistSelect?: boolean
  onClose: () => void; onBook: (name: string, note: string, specialistInitials?: string) => void; onCloseSlot: () => void
}
function BookModal({ hour, dayLabel, specialistName, showSpecialistSelect, onClose, onBook, onCloseSlot }: BookModalProps) {
  const [name, setName] = useState('')
  const [note, setNote] = useState('')
  const [selectedSpec, setSelectedSpec] = useState(specialists[0].initials)
  return (
    <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-ink-900">Randevu Oluştur</h3>
            <p className="text-xs text-ink-500 mt-0.5">{showSpecialistSelect ? dayLabel : `${specialistName} · ${dayLabel}`} · {hour}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer">
            <X className="w-4 h-4 text-ink-400" strokeWidth={2} />
          </button>
        </div>
        <div className="space-y-3">
          {showSpecialistSelect && (
            <div>
              <label className="text-xs font-semibold text-ink-700">Uzman</label>
              <select value={selectedSpec} onChange={(e) => setSelectedSpec(e.target.value)}
                className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none">
                {specialists.map((s) => (
                  <option key={s.initials} value={s.initials}>{s.name}</option>
                ))}
              </select>
            </div>
          )}
          <div>
            <label className="text-xs font-semibold text-ink-700">Ad Soyad</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Danışan adı"
              className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">Not (opsiyonel)</label>
            <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Seans notu"
              className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
          </div>
        </div>
        <div className="mt-5 pt-4 border-t border-ink-100 flex flex-col gap-2">
          <button onClick={() => { if (name.trim()) onBook(name.trim(), note, showSpecialistSelect ? selectedSpec : undefined) }} disabled={!name.trim()}
            className="w-full py-2.5 text-sm font-semibold bg-brand-600 hover:bg-brand-700 disabled:opacity-40 text-white rounded-lg cursor-pointer transition">
            Randevu Oluştur
          </button>
          <button onClick={onCloseSlot}
            className="w-full py-2.5 text-sm font-semibold bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition">
            <Lock className="w-3.5 h-3.5" strokeWidth={2} />
            Bu Saati Kapat
          </button>
        </div>
      </div>
    </div>
  )
}

interface ViewModalProps {
  entries: { initials: string; name: string; bgColor: string; slot: Slot }[]
  hour: string; dayLabel: string; onClose: () => void
}
function ViewModal({ entries, hour, dayLabel, onClose }: ViewModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-bold text-ink-900">Randevu Detayı</h3>
            <p className="text-xs text-ink-500 mt-0.5">{dayLabel} · {hour}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer">
            <X className="w-4 h-4 text-ink-400" strokeWidth={2} />
          </button>
        </div>
        <div className="space-y-3">
          {entries.map((e) => (
            <div key={e.initials} className="flex items-center gap-3 p-3 bg-ink-50 rounded-xl">
              <div className={`w-9 h-9 rounded-lg ${e.bgColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                {e.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-ink-500">{e.name}</div>
                <div className="text-sm font-semibold text-ink-900 truncate">{e.slot.name}</div>
              </div>
              <span className={`inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                e.slot.type === 'confirmed' ? 'bg-brand-50 text-brand-700' : 'bg-amber-50 text-amber-700'
              }`}>
                {e.slot.type === 'confirmed' ? 'Onaylı' : 'Bekliyor'}
              </span>
            </div>
          ))}
        </div>
        <button onClick={onClose} className="mt-5 w-full py-2.5 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-lg cursor-pointer transition">
          Kapat
        </button>
      </div>
    </div>
  )
}

export default function TeamCalendar() {
  const [selectedSpecialist, setSelectedSpecialist] = useState<string>('ALL')
  const [offset, setOffset] = useState(0)
  const [allSlots, setAllSlots] = useState<SpecialistSlots>(initialSpecialistSlots)
  const [bookModal, setBookModal] = useState<{ key: string; hour: string; dayLabel: string } | null>(null)
  const [viewModal, setViewModal] = useState<{ entries: { initials: string; name: string; bgColor: string; slot: Slot }[]; hour: string; dayLabel: string } | null>(null)

  const weekDays = getWeekDays(offset)
  const today = new Date(); today.setHours(0, 0, 0, 0)

  const currentSpecialist = selectedSpecialist === 'ALL' ? null : specialists.find((s) => s.initials === selectedSpecialist)
  const currentSlots = currentSpecialist ? (allSlots[currentSpecialist.initials] ?? {}) : {}

  const handleSlotClick = (key: string, hour: string, dayLabel: string, dayPast: boolean) => {
    if (dayPast) return

    if (selectedSpecialist === 'ALL') {
      const entries = getAllSlotsForKey(key, allSlots)
      if (entries.length > 0) {
        setViewModal({ entries, hour, dayLabel })
      } else {
        // Boş slot — uzman seçerek randevu oluştur
        setBookModal({ key, hour, dayLabel })
      }
      return
    }

    const slot = currentSlots[key]
    if (!slot || slot.type === 'available') {
      setBookModal({ key, hour, dayLabel })
    } else if (slot.type === 'confirmed' || slot.type === 'pending') {
      const spec = specialists.find((s) => s.initials === selectedSpecialist)!
      setViewModal({ entries: [{ initials: spec.initials, name: spec.name, bgColor: spec.bgColor, slot }], hour, dayLabel })
    }
  }

  const handleBook = (name: string, note: string, specialistInitials?: string) => {
    if (!bookModal) return
    const targetInitials = specialistInitials ?? currentSpecialist?.initials
    if (!targetInitials) return
    setAllSlots((prev) => ({
      ...prev,
      [targetInitials]: {
        ...prev[targetInitials],
        [bookModal.key]: { type: 'pending', name, note },
      },
    }))
    setBookModal(null)
  }

  const handleCloseSlot = () => {
    if (!bookModal || !currentSpecialist) return
    setAllSlots((prev) => ({
      ...prev,
      [currentSpecialist.initials]: {
        ...prev[currentSpecialist.initials],
        [bookModal.key]: { type: 'closed' },
      },
    }))
    setBookModal(null)
  }

  const getTitle = () => {
    const days = getWeekDays(offset)
    return `${days[0].date} - ${days[6].date} ${monthNames[new Date().getMonth()]}`
  }

  return (
    <div className="xl:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-ink-100 flex-wrap gap-3">
        <div>
          <h3 className="font-semibold text-ink-900">Ekip Takvimi</h3>
          <p className="text-xs text-ink-500 mt-0.5">{getTitle()}</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <select
            value={selectedSpecialist}
            onChange={(e) => setSelectedSpecialist(e.target.value)}
            className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer"
          >
            <option value="ALL">Tüm Uzmanlar ({specialists.length})</option>
            {specialists.map((s) => (
              <option key={s.initials} value={s.initials}>{s.name}</option>
            ))}
          </select>
          <button onClick={() => setOffset((p) => p - 1)} className="w-8 h-8 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition">
            <ChevronLeft className="w-4 h-4" strokeWidth={2} />
          </button>
          <button onClick={() => setOffset((p) => p + 1)} className="w-8 h-8 rounded-lg border border-ink-200 hover:bg-ink-50 flex items-center justify-center text-ink-600 cursor-pointer transition">
            <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[720px]">
          {/* Gün başlıkları */}
          <div className="grid grid-cols-[60px_repeat(7,minmax(0,1fr))] border-b border-ink-100 bg-ink-50/60">
            <div className="border-r border-ink-100" />
            {weekDays.map((day, i) => (
              <div key={i} className={`px-3 py-2 text-xs font-semibold text-center border-r border-ink-100 last:border-r-0 ${day.today ? 'bg-brand-50' : day.past ? 'opacity-40' : ''}`}>
                <div className={day.today ? 'text-brand-600' : 'text-ink-500'}>{day.short}</div>
                <div className={`text-base ${day.today ? 'text-brand-800' : 'text-ink-800'}`}>{day.date}</div>
              </div>
            ))}
          </div>

          {/* Slot grid */}
          <div>
            {hours.map((hour) => (
              <div key={hour} className="grid grid-cols-[60px_repeat(7,minmax(0,1fr))] border-b border-ink-50">
                <div className="px-3 py-2 text-[11px] text-ink-400 font-medium border-r border-ink-100">{hour}</div>
                {weekDays.map((day, i) => {
                  const key = `${hour}-${i}`
                  const dayLabel = `${day.short} ${day.date}`

                  if (day.past) {
  // Tüm uzmanlar modu - geçmiş
  if (selectedSpecialist === 'ALL') {
    const entries = getAllSlotsForKey(key, allSlots)
    if (entries.length > 0) return (
      <div key={i} className="p-1 border-r border-ink-50">
        <div className="w-full h-full min-h-[52px] rounded-md bg-ink-100 border border-ink-200 p-1.5 opacity-60 cursor-default">
          <div className="flex flex-wrap gap-0.5">
            {entries.slice(0, 3).map((e) => (
              <span key={e.initials} className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ink-400 text-white text-[9px] font-bold">
                {e.initials.slice(0, 1)}
              </span>
            ))}
            {entries.length > 3 && <span className="text-[10px] text-ink-400 font-semibold">+{entries.length - 3}</span>}
          </div>
          <div className="text-[10px] font-semibold mt-0.5 text-ink-400">{entries.length} randevu</div>
        </div>
      </div>
    )
    return (
      <div key={i} className="p-1 border-r border-ink-50">
        <div className="w-full h-full min-h-[52px] rounded-md bg-ink-50 opacity-40" />
      </div>
    )
  }

  // Tekil uzman modu - geçmiş
  const pastSlot = currentSlots[key]
  if (pastSlot?.type === 'confirmed' || pastSlot?.type === 'pending') return (
    <div key={i} className="p-1 border-r border-ink-50">
      <div className="w-full h-full min-h-[52px] rounded-md bg-ink-100 border border-ink-200 text-ink-400 p-1.5 opacity-60 cursor-default">
        <div className="text-[11px] font-semibold truncate">{pastSlot.name}</div>
        <div className="text-[10px] opacity-70">{hour}</div>
      </div>
    </div>
  )

  return (
    <div key={i} className="p-1 border-r border-ink-50">
      <div className="w-full h-full min-h-[52px] rounded-md bg-ink-50 opacity-40" />
    </div>
  )
}

                  // Tüm uzmanlar modu
                  if (selectedSpecialist === 'ALL') {
                    const entries = getAllSlotsForKey(key, allSlots)
                    const hasConfirmed = entries.some((e) => e.slot.type === 'confirmed')
                    const hasPending = entries.some((e) => e.slot.type === 'pending')
                    const count = entries.length

                    if (count === 0) return (
                      <div key={i} className="p-1 border-r border-ink-50">
                        <div
                          onClick={() => handleSlotClick(key, hour, dayLabel, day.past)}
                          className="w-full h-full min-h-[52px] rounded-md bg-emerald-50 border border-dashed border-emerald-300 text-emerald-600 flex items-center justify-center cursor-pointer hover:bg-emerald-100 transition">
                          <span className="text-[11px] font-semibold">Müsait</span>
                        </div>
                      </div>
                    )

                    return (
                      <div key={i} className="p-1 border-r border-ink-50">
                        <div
                          onClick={() => handleSlotClick(key, hour, dayLabel, day.past)}
                          className={`w-full h-full min-h-[52px] rounded-md p-1.5 cursor-pointer transition ${
                            hasConfirmed ? 'bg-brand-100 border border-brand-200 hover:bg-brand-200' : 'bg-amber-100 border border-amber-200 hover:bg-amber-200'
                          }`}
                        >
                          <div className="flex flex-wrap gap-0.5">
                            {entries.slice(0, 3).map((e) => (
                              <span key={e.initials} className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${e.bgColor} text-white text-[9px] font-bold`}>
                                {e.initials.slice(0, 1)}
                              </span>
                            ))}
                            {count > 3 && <span className="text-[10px] text-ink-500 font-semibold">+{count - 3}</span>}
                          </div>
                          <div className="text-[10px] font-semibold mt-0.5 text-ink-700">{count} randevu</div>
                        </div>
                      </div>
                    )
                  }

                  // Tekil uzman modu
                  const slot = currentSlots[key]
                  const type = slot?.type

                  if (type === 'confirmed') return (
                    <div key={i} className="p-1 border-r border-ink-50">
                      <div onClick={() => handleSlotClick(key, hour, dayLabel, day.past)}
                        className="w-full h-full min-h-[52px] rounded-md bg-brand-100 border border-brand-200 text-brand-800 p-1.5 cursor-pointer hover:bg-brand-200 transition">
                        <div className="text-[11px] font-semibold truncate">{slot.name}</div>
                        <div className="text-[10px] opacity-70">{hour}</div>
                      </div>
                    </div>
                  )

                  if (type === 'pending') return (
                    <div key={i} className="p-1 border-r border-ink-50">
                      <div onClick={() => handleSlotClick(key, hour, dayLabel, day.past)}
                        className="w-full h-full min-h-[52px] rounded-md bg-amber-100 border border-amber-200 text-amber-800 p-1.5 cursor-pointer hover:bg-amber-200 transition">
                        <div className="text-[11px] font-semibold truncate">{slot.name}</div>
                        <div className="text-[10px] opacity-70">{hour}</div>
                      </div>
                    </div>
                  )

                  if (type === 'closed') return (
                    <div key={i} className="p-1 border-r border-ink-50">
                      <div className="w-full h-full min-h-[52px] rounded-md border border-ink-200"
                        style={{ backgroundImage: 'repeating-linear-gradient(45deg,#f8fafc,#f8fafc 6px,#f1f5f9 6px,#f1f5f9 12px)' }} />
                    </div>
                  )

                  return (
                    <div key={i} className="p-1 border-r border-ink-50">
                      <div onClick={() => handleSlotClick(key, hour, dayLabel, day.past)}
                        className="w-full h-full min-h-[52px] rounded-md bg-emerald-50 border border-dashed border-emerald-300 text-emerald-600 flex items-center justify-center cursor-pointer hover:bg-emerald-100 transition">
                        <span className="text-[11px] font-semibold">Müsait</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 px-5 py-3 border-t border-ink-100 text-xs text-ink-500 flex-wrap">
        {[
          { color: 'bg-brand-400',   label: 'Onaylı' },
          { color: 'bg-amber-300',   label: 'Onay bekleyen' },
          { color: 'bg-emerald-100 border border-dashed border-emerald-300', label: 'Müsait' },
          { color: '', label: 'Kapalı', striped: true },
        ].map((item) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded border ${item.color}`}
              style={item.striped ? { backgroundImage: 'repeating-linear-gradient(45deg,#f8fafc,#f8fafc 4px,#f1f5f9 4px,#f1f5f9 8px)', borderColor: '#e2e8f0' } : {}} />
            {item.label}
          </span>
        ))}
      </div>

      {bookModal && (
        <BookModal
          hour={bookModal.hour}
          dayLabel={bookModal.dayLabel}
          specialistName={currentSpecialist?.name ?? ''}
          showSpecialistSelect={selectedSpecialist === 'ALL'}
          onClose={() => setBookModal(null)}
          onBook={handleBook}
          onCloseSlot={handleCloseSlot}
        />
      )}

      {viewModal && (
        <ViewModal
          entries={viewModal.entries}
          hour={viewModal.hour}
          dayLabel={viewModal.dayLabel}
          onClose={() => setViewModal(null)}
        />
      )}
    </div>
  )
}
