import type { ProfileStat } from '../types'
import type { ReactElement } from 'react'

const stats: ProfileStat[] = [
  { icon: 'clock', label: 'Seans süresi', value: '50 dakika' },
  { icon: 'money', label: 'Ücret', value: '₺1.200' },
  { icon: 'location', label: 'Konum', value: 'Beşiktaş / Online' },

]

const icons: Record<ProfileStat['icon'], ReactElement> = {
  clock: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  money: (
   <svg
  className="w-3.5 h-3.5"
  viewBox="0 0 440 440"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M344.33,212.5c0,103.857-80.577,189.248-182.5,196.936V197.361l151.76-55.236l-10.26-28.191l-141.5,51.502V121.38
  l151.76-55.236l-10.26-28.191l-141.5,51.502V0h-30v100.374l-66.16,24.08l10.261,28.191L131.83,132.3v44.055l-66.16,24.08
  l10.261,28.191l55.899-20.346V440h15c60.813,0,117.957-23.651,160.902-66.597c42.946-42.946,66.598-100.089,66.598-160.903H344.33z"/>
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
        <div
          key={stat.label}
          className="rounded-xl bg-ink-50 p-3.5 flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center gap-1.5 text-xs text-ink-500">
            {icons[stat.icon]}
            {stat.label}
          </div>

          <div className="text-sm font-bold mt-1 text-ink-900">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  )
}