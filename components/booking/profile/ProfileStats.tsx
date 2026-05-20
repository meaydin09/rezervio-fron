import type { ProfileStat } from '../types'

const stats: ProfileStat[] = [
  { icon: 'clock', label: 'Seans süresi', value: '50 dakika' },
  { icon: 'money', label: 'Ücret', value: '₺1.200' },
  { icon: 'location', label: 'Konum', value: 'Beşiktaş / Online' },
  { icon: 'language', label: 'Diller', value: 'Türkçe · İngilizce' },
]

const icons: Record<ProfileStat['icon'], JSX.Element> = {
  clock: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  money: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  location: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  language: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
}

export default function ProfileStats() {
  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl bg-ink-50 p-3.5">
          <div className="flex items-center gap-1.5 text-xs text-ink-500">
            {icons[stat.icon]}
            {stat.label}
          </div>
          <div className="text-sm font-bold mt-1 text-ink-900">{stat.value}</div>
        </div>
      ))}
    </div>
  )
}