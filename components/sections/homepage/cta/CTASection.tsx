import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-violet-600 p-8 sm:p-10 md:p-14 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            Randevu yönetimini geride bırak, gerçek işine dön.
          </h2>
          <p className="mt-3 text-white/80 max-w-xl">
            14 gün boyunca tüm özellikleri ücretsiz dene. Kart bilgisi istemiyoruz.
          </p>
          <Link
            href="/kayit"
            className="mt-7 inline-flex items-center gap-2 bg-white text-ink-900 font-semibold px-6 py-3 rounded-xl hover:bg-ink-100 transition"
          >
            Hemen başla →
          </Link>
        </div>
      </div>
    </section>
  )
}