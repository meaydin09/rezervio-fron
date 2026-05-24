'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Specialist, TimeSlot } from '../../types'
import SpecialistDayStrip from './SpecialistDayStrip'
import BookingModal from './BookingModal'

interface Props {
  specialist: Specialist
  selectedDay: number
  slots: TimeSlot[]
  onPickDay: (date: number, isClosed: boolean, isFull: boolean) => void
  onPickSlot: (time: string) => void
}

const slotStyles: Record<TimeSlot['variant'], string> = {
  free: 'border border-ink-200 bg-white hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 cursor-pointer',
  selected: 'bg-brand-600 text-white border border-brand-600 shadow-[0_6px_14px_-4px_rgba(79,70,229,0.45)] cursor-pointer',
  taken: 'bg-ink-50 text-ink-400 border border-ink-200 line-through cursor-not-allowed',
}

const DAY_NAMES = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']

export default function SpecialistDetail({ specialist, selectedDay, slots, onPickDay, onPickSlot }: Props) {
  const [showModal, setShowModal] = useState(false)
  const selectedSlot = slots.find((s) => s.variant === 'selected')
  const dayName = DAY_NAMES[selectedDay % 7] ?? 'Salı'

  return (
    <div className="lg:col-span-7">
      <div className="bg-white rounded-2xl shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] border border-ink-100 p-5 sm:p-6">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl ${specialist.bgColor} flex items-center justify-center font-bold text-white shrink-0`}>
            {specialist.initials}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-bold truncate text-ink-900">{specialist.name}</h3>
            <div className="text-xs text-ink-500">{specialist.specialty}</div>
          </div>
          <Link
            href={`/${specialist.initials.toLowerCase()}`}
            className="text-xs font-semibold text-brand-600 hover:underline hidden sm:inline-flex items-center gap-1 shrink-0"
          >
            Tam profil
            <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
          </Link>
        </div>

        <SpecialistDayStrip selectedDay={selectedDay} onPickDay={onPickDay} />

        <div className="mt-5 pt-4 border-t border-ink-100">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <h4 className="text-sm font-semibold text-ink-900">
              {selectedDay} Mayıs {dayName} · Boş saatler
            </h4>
            <span className="text-xs text-ink-500">GMT+3</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {slots.map((slot) => (
              <button
                key={slot.time}
                onClick={() => slot.variant !== 'taken' && onPickSlot(slot.time)}
                className={`inline-flex items-center justify-center px-3 py-2 rounded-xl text-xs font-medium transition ${slotStyles[slot.variant]}`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          disabled={!selectedSlot}
          className={`mt-5 w-full block text-center font-semibold py-3 rounded-xl transition ${
            selectedSlot
              ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] cursor-pointer'
              : 'bg-ink-100 text-ink-400 cursor-not-allowed'
          }`}
        >
          {selectedSlot ? 'Randevu Oluştur' : 'Önce bir saat seçin'}
        </button>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { label: 'Deneyim', value: specialist.experience, color: 'text-brand-600' },
          { label: 'Puan',    value: `${specialist.rating} ★`, color: 'text-brand-600' },
          { label: 'Yorum',   value: String(specialist.reviewCount), color: 'text-brand-600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-ink-100 p-3 text-center">
            <div className="text-xs text-ink-500">{stat.label}</div>
            <div className={`text-lg font-bold mt-0.5 ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      {showModal && (
        <BookingModal
          specialistName={specialist.name}
          selectedDay={selectedDay}
          selectedTime={selectedSlot?.time ?? ''}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}