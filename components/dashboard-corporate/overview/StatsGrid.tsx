import StatCard from './StatCard'

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      <StatCard
        period="Aktif Uzman"
        badge={{ text: '12/15', color: 'bg-brand-50 text-brand-700' }}
        value="12"
        label="uzman"
        extra={
          <>
            <div className="h-1.5 bg-ink-100 rounded-full overflow-hidden">
              <div className="h-full bg-brand-500 rounded-full" style={{ width: '80%' }} />
            </div>
            <div className="mt-1 text-[11px] text-ink-500">3 boş koltuk var</div>
          </>
        }
      />
      <StatCard
        period="Bugün Toplam"
        badge={{ text: '+5', color: 'bg-brand-50 text-brand-700' }}
        value="47"
        label="randevu"
        extra={
          <div className="flex items-end gap-1 h-7">
            {[40, 55, 70, 65, 85, 90].map((h, i) => (
              <div key={i} className={`w-2 rounded-sm ${i < 2 ? 'bg-ink-200' : 'bg-brand-400'}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        }
      />
      <StatCard
        period="Aylık Gelir"
        badge={{ text: '↑ 18%', color: 'bg-emerald-50 text-emerald-700' }}
        value="₺486K"
        extra={<div className="text-[11px] text-ink-500">Hedef: ₺520K</div>}
      />
      <StatCard
        period="Doluluk"
        badge={{ text: 'İyi', color: 'bg-emerald-50 text-emerald-700' }}
        value="82%"
        extra={
          <>
            <div className="h-1.5 bg-ink-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" style={{ width: '82%' }} />
            </div>
            <div className="mt-1 text-[11px] text-ink-500">12 uzman ortalaması</div>
          </>
        }
      />
    </div>
  )
}