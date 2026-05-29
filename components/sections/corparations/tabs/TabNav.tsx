import type { TabView } from '../types'

interface Props {
  active: TabView
  onChange: (tab: TabView) => void
}

const tabs: { id: TabView; label: string }[] = [
  { id: 'specialists', label: 'Uzmanlar' },
  // { id: 'combined', label: 'Tüm Müsaitlik' },
  { id: 'services', label: 'Hizmetler' },
  { id: 'about', label: 'Hakkımızda' },
]

export default function TabNav({ active, onChange }: Props) {
  return (
    <div className="mt-5 w-full">
      {/* Mobil */}
      <div className="flex sm:hidden bg-white rounded-xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-1.5 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex-1 py-2 px-1 text-xs font-semibold rounded-lg transition cursor-pointer text-center whitespace-nowrap ${
              active === tab.id
                ? 'bg-ink-900 text-white shadow-sm'
                : 'text-ink-500 hover:bg-ink-50 hover:text-ink-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Masaüstü */}
      <div className="hidden sm:inline-flex items-center gap-1 bg-white rounded-xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition cursor-pointer whitespace-nowrap ${
              active === tab.id
                ? 'bg-ink-900 text-white'
                : 'text-ink-600 hover:bg-ink-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}