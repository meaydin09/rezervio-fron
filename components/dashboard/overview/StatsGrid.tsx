import StatCard from './StatCard'

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      <StatCard
        period="Bugün"
        badge={{ text: '+2', color: 'bg-brand-50 text-brand-700' }}
        value="7"
        label="randevu"
        extra={
          <>
            <div className="h-1.5 bg-ink-100 rounded-full overflow-hidden">
              <div className="h-full bg-brand-500 rounded-full" style={{ width: '70%' }} />
            </div>
            <div className="mt-1 text-[11px] text-ink-500">7/10 saat dolu</div>
          </>
        }
      />
      <StatCard
        period="Bu Ay"
        badge={{ text: '↑ 18%', color: 'bg-emerald-50 text-emerald-700' }}
        value="142"
        label="tamamlandı"
        extra={
          <div className="flex items-end gap-1 h-8">
            {[40, 55, 35, 70, 60, 80, 90].map((h, i) => (
              <div
                key={i}
                className={`w-2 rounded-sm ${i < 3 ? 'bg-ink-200' : 'bg-brand-400'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        }
      />
      <StatCard
        label="İptal Oranı"
        period="İptal Oranı"
        badge={{ text: '↓ 3%', color: 'bg-rose-50 text-rose-700' }}
        value="4.2%"
        extra={<div className="text-[11px] text-ink-500">Geçen aya göre düşüş</div>}
      />
      <StatCard
        label="Doluluk"
        period="Doluluk"
        badge={{ text: 'İyi', color: 'bg-emerald-50 text-emerald-700' }}
        value="87%"
        extra={
          <>
            <div className="h-1.5 bg-ink-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" style={{ width: '87%' }} />
            </div>
            <div className="mt-1 text-[11px] text-ink-500">Hedef: %85</div>
          </>
        }
      />
    </div>
  )
}