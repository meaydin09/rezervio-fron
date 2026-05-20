import Link from 'next/link'
import { faqs } from './faq-list'
import FAQItem from './FAQItem'

export default function FAQSection() {
  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-600">
          SSS
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight text-ink-900">
          Sıkça Sorulan Sorular
        </h2>
        <p className="mt-3 text-ink-600 text-sm sm:text-base">
          Aklınıza takılan sorulara hızlı cevaplar.
        </p>
      </div>

      <div className="mt-8 sm:mt-10 space-y-3">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} item={faq} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-ink-600">Sorunuzun cevabı yok mu?</p>
        <Link
          href="/iletisim"
          className="mt-2 inline-block text-sm font-semibold text-brand-600 hover:underline"
        >
          Bize yazın →
        </Link>
      </div>
    </section>
  )
}