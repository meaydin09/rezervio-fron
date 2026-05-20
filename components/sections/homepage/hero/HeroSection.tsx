import HeroContent from './HeroContent'
import HeroMockup from './HeroMockup'

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-20 grid lg:grid-cols-12 gap-10 items-center">
      <HeroContent />
      <HeroMockup />
    </section>
  )
}