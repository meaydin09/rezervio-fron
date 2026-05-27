import { ArrowRight, Check } from 'lucide-react'
import type { AccountType, StepNumber } from '../types'

interface Props {
  selected: AccountType
  onSelect: (type: AccountType) => void
  onNext: (step: StepNumber) => void
}

const types = [
  {
    id: 'bireysel' as AccountType,
    emoji: '👤',
    title: 'Bireysel',
    description: 'Tek başına çalışan uzmanlar için. Kendi adına özel link.',
    features: ['rezervio.co/adın', 'Tek kişilik takvim', 'Hızlı kurulum'],
    badge: null,
  },
  {
    id: 'kurumsal' as AccountType,
    emoji: '🏢',
    title: 'Kurumsal',
    description: 'Birden çok uzmanı yöneten klinikler, salonlar ve şirketler için.',
    features: ['rezervio.co/firma', 'Çoklu uzman takvimi', 'Merkezi yönetim'],
    badge: '+ Pro',
  },
]

export default function StepAccountType({ selected, onSelect, onNext }: Props) {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-900">
        Nasıl başlamak istersin?
      </h1>
      <p className="mt-1.5 text-sm text-ink-600">
        İhtiyacına en uygun hesap türünü seç. İstediğin zaman değiştirebilirsin.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {types.map((type) => {
          const isSelected = selected === type.id
          return (
            <div
              key={type.id}
              onClick={() => onSelect(type.id)}
              className={`relative rounded-2xl border-2 p-5 cursor-pointer transition ${
                isSelected ? 'border-brand-600 bg-brand-50/30' : 'border-ink-200 bg-white hover:border-brand-300'
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3.5} />
                </div>
              )}
              {type.badge && (
                <div className="absolute top-4 right-12">
                  <span className="text-[10px] font-semibold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                    {type.badge}
                  </span>
                </div>
              )}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl border ${
                isSelected ? 'bg-white border-brand-200' : 'bg-white border-ink-200'
              }`}>
                {type.emoji}
              </div>
              <h3 className="mt-3 font-semibold text-ink-900">{type.title}</h3>
              <p className="text-xs text-ink-600 mt-1">{type.description}</p>
              <ul className="mt-3 space-y-1">
                {type.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-ink-700">
                    <span className="text-emerald-500">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <div className="mt-7 flex justify-end">
        <button
          onClick={() => onNext(2)}
          className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] transition flex items-center gap-2 cursor-pointer"
        >
          Devam Et
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}