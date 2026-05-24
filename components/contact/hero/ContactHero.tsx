import Image from "next/image"
export default function ContactHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Sol içerik */}
        <div className="text-center md:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold mb-6">
            İletişime Geçin
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-ink-900 mb-6">
            Sorularınız mı var? <br />
            <span className="bg-gradient-to-r from-brand-600 to-violet-500 bg-clip-text text-transparent">
              Bize Ulaşın
            </span>
          </h1>
          <p className="text-base sm:text-lg text-ink-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            Rezervio ekibi olarak işinizi büyütmenize yardımcı olmak için buradayız. Randevu sistemimiz
            veya özelliklerimiz hakkında her türlü soruyu sorabilirsiniz.
          </p>
        </div>

        {/* Sağ görsel */}
        <div className="w-full relative">
          <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-brand-100 via-violet-100 to-rose-100 flex items-center justify-center text-6xl">
            <div>
          <Image src="/favicon.png" alt="Rezervio" className="rounded-4xl" width={120} height={36} priority />

            </div>
          </div>

          {/* Floating kart */}
          <div className="absolute -bottom-6 -left-6 hidden lg:block bg-white/90 backdrop-blur border border-white/50 p-5 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white text-lg">
                💬
              </div>
              <div>
                <p className="text-sm font-bold text-ink-900">Anlık Randevu Bildirimi</p>
                <p className="text-xs text-ink-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Profesyonel Kontrol Paneli
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}