'use client'

import { useState } from 'react'
import { X, Check } from 'lucide-react'
import { services } from '../../data/services-data'
import { specialists } from '../../data/specialists-data'
import ServiceCategories from './ServiceCategories'
import ServiceCard from './ServiceCard'
import type { Service } from '../../types'

interface Props {
  onBook: (specialistId: number) => void
}

function SpecialistPickModal({
  service,
  onClose,
  onPick,
}: {
  service: Service
  onClose: () => void
  onPick: (specialistId: number) => void
}) {
  const [selected, setSelected] = useState<number | null>(null)

  const matching = specialists.filter((sp) =>
    sp.services?.some((s) => s === service.title)
  )
  const list = matching.length > 0 ? matching : specialists

  return (
    <div
      className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl shadow-ink-900/10 border border-ink-100 w-full max-w-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-ink-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-base text-ink-900">Uzman Seçin</h3>
            <p className="text-xs text-ink-400 mt-0.5">{service.title}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center transition"
          >
            <X className="w-4 h-4 text-ink-500" strokeWidth={2} />
          </button>
        </div>

        <div className="p-2 max-h-72 overflow-y-auto">
          {list.map((sp) => (
            <button
              key={sp.id}
              onClick={() => setSelected(sp.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition cursor-pointer text-left ${
                selected === sp.id ? 'bg-brand-50' : 'hover:bg-ink-50'
              }`}
            >
              <div className={`w-9 h-9 rounded-xl ${sp.bgColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                {sp.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-semibold truncate ${selected === sp.id ? 'text-brand-700' : 'text-ink-800'}`}>
                  {sp.name}
                </div>
                <div className="text-xs text-ink-400 truncate">{sp.title}</div>
              </div>
              {selected === sp.id && (
                <Check className="w-4 h-4 text-brand-600 shrink-0" strokeWidth={2.5} />
              )}
            </button>
          ))}
        </div>

        <div className="p-3 border-t border-ink-100">
          <button
            disabled={selected === null}
            onClick={() => selected !== null && onPick(selected)}
            className="w-full py-2.5 text-sm font-semibold bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl transition cursor-pointer"
          >
            Randevu Al
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ServicesView({ onBook }: Props) {
  const [activeCategory, setActiveCategory] = useState('Tüm Hizmetler')
  const [pickingFor, setPickingFor] = useState<Service | null>(null)

  const filtered = activeCategory === 'Tüm Hizmetler'
    ? services
    : services.filter((s) => s.category === activeCategory)

  return (
    <>
      <div className="mt-6 grid lg:grid-cols-12 gap-6">
        <ServiceCategories activeCategory={activeCategory} onChange={setActiveCategory} />
        <div className="lg:col-span-9 space-y-3">
          {filtered.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={() => setPickingFor(service)}
            />
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-ink-400 text-sm">Bu kategoride hizmet bulunamadı.</div>
          )}
          <button className="w-full text-sm font-semibold text-brand-600 hover:bg-brand-50 py-3 rounded-xl transition cursor-pointer">
            Tüm 18 hizmeti gör →
          </button>
        </div>
      </div>

      {pickingFor && (
        <SpecialistPickModal
          service={pickingFor}
          onClose={() => setPickingFor(null)}
          onPick={(id) => {
            setPickingFor(null)
            onBook(id)
          }}
        />
      )}
    </>
  )
}