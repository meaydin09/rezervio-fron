export default function ContactCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
      <div className="bg-ink-900 text-white py-16 px-8 sm:px-12 rounded-[2.5rem] text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Hemen Başlamaya Hazır mısınız?
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-10">
            14 günlük ücretsiz deneme sürenizi bugün başlatın. Kredi kartı gerekmez.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform w-full sm:w-auto cursor-pointer">
              Ücretsiz Başla
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 transition w-full sm:w-auto cursor-pointer">
              Demoyu İzle
            </button>
          </div>
        </div>

        {/* Dekorasyon */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.2" />
            <path d="M0 80 C 30 20 70 20 100 80" fill="none" stroke="currentColor" strokeWidth="0.2" />
          </svg>
        </div>
      </div>
    </section>
  )
}