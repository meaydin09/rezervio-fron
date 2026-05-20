import { features } from './feature-list'
import FeatureCard from './FeatureCard'

export default function FeaturesSection() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-600">
          Özellikler
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight text-ink-900">
          İhtiyacın olan her şey, fazlası değil.
        </h2>
        <p className="mt-3 text-ink-600">
          Karmaşık yönetim ekranları yerine, gerçekten kullandığın özelliklere odaklandık.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  )
}