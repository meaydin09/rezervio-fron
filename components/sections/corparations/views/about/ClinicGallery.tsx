const photos = ['🏥', '🛋️', '🌿', '☕', '📚', '🪟']
const gradients = [
  'from-brand-100 via-rose-100 to-amber-100',
  'from-emerald-100 via-sky-100 to-brand-100',
  'from-violet-100 via-pink-100 to-rose-100',
  'from-sky-100 via-emerald-100 to-cyan-100',
  'from-amber-100 via-orange-100 to-rose-100',
  'from-ink-100 to-slate-200',
]

export default function ClinicGallery() {
  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6 sm:p-8">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
        <h3 className="font-bold text-lg text-ink-900">Klinik İçi Görüntüler</h3>
        <button className="text-xs font-semibold text-brand-600 hover:underline cursor-pointer">Tümünü gör →</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {photos.map((emoji, i) => (
          <div key={i} className={`aspect-square rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center text-4xl`}>
            {emoji}
          </div>
        ))}
      </div>
    </div>
  )
}