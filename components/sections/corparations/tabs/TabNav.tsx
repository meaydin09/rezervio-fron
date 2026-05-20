import type { TabView } from '../types'

interface Props {
  active: TabView
  onChange: (tab: TabView) => void
}

const tabs: { id: TabView; label: string }[] = [
  { id: 'specialists', label: 'Uzmanlar' },
  { id: 'combined', label: 'Tüm Müsaitlik' },
  { id: 'services', label: 'Hizmetler' },
  { id: 'about', label: 'Hakkımızda' },
]

export default function TabNav({ active, onChange }: Props) {
  return (
    <div className="mt-5 flex items-center gap-1 bg-white rounded-xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-1.5 w-fit overflow-x-auto no-scrollbar max-w-full">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2 text-sm font-semibold rounded-lg whitespace-nowrap transition cursor-pointer ${
            active === tab.id
              ? 'bg-ink-900 text-white'
              : 'text-ink-600 hover:bg-ink-50'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}