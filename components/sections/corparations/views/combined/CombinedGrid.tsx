'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, X, Check, Calendar, Clock } from 'lucide-react'
import { specialists } from '../../data/specialists-data'

const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

type SlotType = 'available' | 'taken' | 'closed'
type SlotMap = Record<string, SlotType>

const initialSlots: Record<string, SlotMap> = {
  OU: {
    '10:00-0': 'taken', '11:00-1': 'taken', '12:00-3': 'taken', '10:00-4': 'taken',
    '09:00-6': 'closed', '10:00-6': 'closed', '11:00-6': 'closed',
    '12:00-6': 'closed', '13:00-6': 'closed', '14:00-6': 'closed',
  },
  MD: {
    '10:00-2': 'taken', '13:00-4': 'taken', '18:00-3': 'taken', '16:00-4': 'taken',
    '09:00-6': 'closed', '10:00-6': 'closed', '11:00-6': 'closed',
    '12:00-6': 'closed', '13:00-6': 'closed', '14:00-6': 'closed',
  },
  SK: {
    '11:00-0': 'taken', '14:00-2': 'taken', '10:00-3': 'taken',
    '09:00-6': 'closed', '10:00-6': 'closed', '11:00-6': 'closed',
    '12:00-6': 'closed', '13:00-6': 'closed', '14:00-6': 'closed',
  },
  CO: {
    '13:00-1': 'taken', '15:00-3': 'taken',
    '09:00-6': 'closed', '10:00-6': 'closed', '11:00-6': 'closed',
    '12:00-6': 'closed', '13:00-6': 'closed', '14:00-6': 'closed',
  },
  ZT: {
    '14:00-0': 'taken', '11:00-2': 'taken',
    '09:00-6': 'closed', '10:00-6': 'closed', '11:00-6': 'closed',
    '12:00-6': 'closed', '13:00-6': 'closed', '14:00-6': 'closed',
  },
  BK: {
    '09:00-6': 'closed', '10:00-6': 'closed', '11:00-6': 'closed',
    '12:00-6': 'closed', '13:00-6': 'closed', '14:00-6': 'closed',
  },
  EA: {
    '10:00-1': 'taken', '13:00-3': 'taken',
    '09:00-6': 'closed', '10:00-6': 'closed', '11:00-6': 'closed',
    '12:00-6': 'closed', '13:00-6': 'closed', '14:00-6': 'closed',
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

interface BookingModalProps {
  specialist: typeof specialists[0]
  hour: string
  dayLabel: string
  onClose: () => void
  onBook: (data: { name: string; email: string; phone: string }) => void
}

function BookingModal({ specialist, hour, dayLabel, onClose, onBook }: BookingModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10)
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0,3)} ${digits.slice(3)}`
    if (digits.length <= 8) return `${digits.slice(0,3)} ${digits.slice(3,6)} ${digits.slice(6)}`
    return `${digits.slice(0,3)} ${digits.slice(3,6)} ${digits.slice(6,8)} ${digits.slice(8)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('success')
    setTimeout(() => onBook(form), 2500)
  }

  return (
    <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {step === 'form' ? (
          <>
            <div className="p-5 border-b border-ink-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-ink-900">Randevu Al</h3>
                <p className="text-xs text-ink-500 mt-0.5">{specialist.name}</p>
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer transition">
                <X className="w-4 h-4 text-ink-500" strokeWidth={2} />
              </button>
            </div>
            <div className="mx-5 mt-5 p-3 rounded-xl bg-brand-50 border border-brand-100 flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-brand-700">
                <div className={`w-8 h-8 rounded-lg ${specialist.bgColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {specialist.initials}
                </div>
                <span className="text-sm font-semibold">{specialist.name}</span>
              </div>
              <div className="flex items-center gap-3 text-brand-700 ml-auto">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
                  <span className="text-sm font-semibold">{dayLabel}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                  <span className="text-sm font-semibold">{hour}</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-ink-700">Ad Soyad</label>
                <input required placeholder="Adınız ve soyadınız" value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-700">E-posta</label>
                <input required type="email" placeholder="ornek@mail.com" value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-700">Telefon</label>
                <div className="mt-1 flex">
                  <span className="px-3 py-2.5 bg-ink-50 border border-r-0 border-ink-200 rounded-l-lg text-sm text-ink-500 whitespace-nowrap">+90</span>
                  <input required type="tel" placeholder="5XX XXX XX XX" value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: formatPhone(e.target.value) }))}
                    className="flex-1 text-sm border border-ink-200 rounded-r-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none min-w-0" />
                </div>
              </div>
              <div className="flex gap-2 pt-2 border-t border-ink-100">
                <button type="button" onClick={onClose}
                  className="flex-1 px-4 py-2.5 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-xl cursor-pointer transition">
                  İptal
                </button>
                <button type="submit"
                  className="flex-1 px-4 py-2.5 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-xl cursor-pointer transition">
                  Randevu Oluştur
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="p-10 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <Check className="w-8 h-8 text-emerald-600" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-ink-900">Randevunuz Oluşturuldu!</h3>
              <p className="text-sm text-ink-600 mt-2">{specialist.name} · {dayLabel} · {hour}</p>
              <p className="text-xs text-ink-400 mt-1">Bilgilendirme +90 {form.phone} numarasına gönderildi.</p>
            </div>
            <div className="w-full bg-ink-100 rounded-full h-1 overflow-hidden mt-2">
              <div className="h-full bg-emerald-500 rounded-full animate-[shrink_2.5s_linear_forwards]" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CombinedGrid() {
  const [selectedSpecialist, setSelectedSpecialist] = useState(specialists[0])
  const [offset, setOffset] = useState(0)
  const [specialistModalOpen, setSpecialistModalOpen] = useState(false)
  const [slots, setSlots] = useState(initialSlots)
  const [bookingModal, setBookingModal] = useState<{
    specialist: typeof specialists[0]
    hour: string; dayLabel: string; key: string
  } | null>(null)

  const specSlots = slots[selectedSpecialist.initials] ?? {}

  const handleBook = (specialistInitials: string, key: string) => {
    setSlots((prev) => ({
      ...prev,
      [specialistInitials]: { ...prev[specialistInitials], [key]: 'taken' },
    }))
    setBookingModal(null)
  }

  return (
    <>
      <div className="space-y-3 px-4 sm:px-6">

        {/* Uzman Seç butonu */}
        <div>
          <p className="text-xs font-semibold text-ink-500 mb-2">Uzman Seçin</p>
          <button
            onClick={() => setSpecialistModalOpen(true)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white border border-ink-200 hover:border-ink-300 hover:shadow-sm shadow-[0_1px_3px_0_rgba(15,23,42,0.06)] transition cursor-pointer"
          >
            <div className={`w-7 h-7 rounded-lg ${selectedSpecialist.bgColor} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
              {selectedSpecialist.initials}
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-brand-700">
                {selectedSpecialist.name.replace('Psk. ', '').replace('Dr. ', '').replace('Uzm. ', '')}
              </div>
              <div className="text-[10px] text-ink-400">{selectedSpecialist.title.split('·')[0].trim()}</div>
            </div>
            <svg className="w-4 h-4 text-brand-500 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

      </div>

      {/* Uzman Seçim Modalı */}
      {specialistModalOpen && (
        <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSpecialistModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl shadow-ink-900/10 w-full max-w-sm overflow-hidden border border-ink-100" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-ink-100 flex items-center justify-between">
              <h3 className="font-bold text-base text-ink-900">Uzman Seçin</h3>
              <button onClick={() => setSpecialistModalOpen(false)} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center transition">
                <X className="w-4 h-4 text-ink-500" strokeWidth={2} />
              </button>
            </div>
            <div className="p-2 max-h-80 overflow-y-auto">
              {specialists.map((s) => (
                <button
                  key={s.initials}
                  onClick={() => {
                    setSelectedSpecialist(s)
                    setOffset(0)
                    setSpecialistModalOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition cursor-pointer text-left ${
                    selectedSpecialist.initials === s.initials
                      ? 'bg-brand-50'
                      : 'hover:bg-ink-50'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl ${s.bgColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {s.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-semibold truncate ${selectedSpecialist.initials === s.initials ? 'text-brand-700' : 'text-ink-800'}`}>
                      {s.name}
                    </div>
                    <div className="text-xs text-ink-400 truncate">{s.title.split('·')[0].trim()}</div>
                  </div>
                  {selectedSpecialist.initials === s.initials && (
                    <Check className="w-4 h-4 text-brand-600 shrink-0" strokeWidth={2.5} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {bookingModal && (
        <BookingModal
          specialist={bookingModal.specialist}
          hour={bookingModal.hour}
          dayLabel={bookingModal.dayLabel}
          onClose={() => setBookingModal(null)}
          onBook={() => handleBook(bookingModal.specialist.initials, bookingModal.key)}
        />
      )}
    </>
  )
}
