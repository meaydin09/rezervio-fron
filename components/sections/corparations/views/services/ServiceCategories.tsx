import { serviceCategories } from '../../data/services-data'

interface Props {
  activeCategory: string
  onChange: (cat: string) => void
}

export default function ServiceCategories({ activeCategory, onChange }: Props) {
  return (
    <div className="lg:col-span-3">
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5 lg:sticky lg:top-24">
        <h3 className="font-semibold text-ink-900 mb-3">Kategoriler</h3>
        <div className="space-y-1">
          {serviceCategories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => onChange(cat.label)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center justify-between transition cursor-pointer ${
                activeCategory === cat.label
                  ? 'bg-brand-50 text-brand-700 font-semibold'
                  : 'hover:bg-ink-50 text-ink-700'
              }`}
            >
              {cat.label}
              <span className={`text-xs ${activeCategory === cat.label ? 'text-brand-600' : 'text-ink-400'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}