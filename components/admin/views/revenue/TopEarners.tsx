import type { TopEarner } from '../../types'

const earners: TopEarner[] = [
  { rank: '🥇', initials: 'NK', name: 'NovaPsy Klinik',  bgColor: 'bg-rose-600',    subtitle: 'Kurumsal · 12 uzman', amount: '₺12.990' },
  { rank: '🥈', initials: 'DD', name: 'Dental Dünya',    bgColor: 'bg-emerald-600', subtitle: 'Kurumsal · 8 uzman',  amount: '₺12.990' },
  { rank: '🥉', initials: 'BS', name: 'Beauty Studio',   bgColor: 'bg-violet-600',  subtitle: 'Kurumsal · 6 uzman',  amount: '₺6.495'  },
  { rank: '4',  initials: 'OU', name: 'Psk. Onur Uzun',  bgColor: 'bg-ink-900',     subtitle: 'Profesyonel',         amount: '₺699'    },
  { rank: '5',  initials: 'SK', name: 'Av. Selim K.',    bgColor: 'bg-sky-600',     subtitle: 'Profesyonel',         amount: '₺699'    },
]

export default function TopEarners() {
  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <h3 className="font-semibold text-ink-900">En Yüksek Gelir Sağlayanlar</h3>
      <p className="text-xs text-ink-500 mt-0.5">Bu ay</p>
      <div className="mt-4 space-y-3">
        {earners.map((e) => (
          <div key={e.name} className="flex items-center gap-3">
            <div className="w-7 h-7 flex items-center justify-center text-xs font-semibold bg-ink-50 rounded text-ink-600">{e.rank}</div>
            <div className={`w-9 h-9 rounded-lg ${e.bgColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>{e.initials}</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate text-ink-900">{e.name}</div>
              <div className="text-xs text-ink-500">{e.subtitle}</div>
            </div>
            <div className="text-sm font-bold text-ink-900">{e.amount}</div>
          </div>
        ))}
      </div>
    </div>
  )
}