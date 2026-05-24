const brands = [
  { icon: '🧖', name: 'LuxeSpa' },
  { icon: '🏥', name: 'MediHealth' },
  { icon: '💪', name: 'GymCore' },
  { icon: '✂️', name: 'TheBarber' },
  { icon: '🍽️', name: 'Bistro99' },
]

export default function TrustSection() {
  return (
    <div className="mt-20 pt-12 border-t border-ink-100">
      <div className="text-center mb-8">
        <p className="text-xs font-semibold text-ink-400 uppercase tracking-widest">Güvenen Markalar</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 hover:opacity-70 transition-opacity duration-500">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center gap-2">
            <span className="text-2xl">{brand.icon}</span>
            <span className="font-bold text-lg text-ink-700">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}