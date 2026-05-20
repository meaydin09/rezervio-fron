import HeroSection from '@/components/sections/homepage/hero/HeroSection'
import FeaturesSection from '@/components/sections/homepage/features/FeaturesSection'
import HowItWorksSection from '@/components/sections/homepage/howit/HowItWorksSection'
import WhoUsesSection from '@/components/sections/homepage/whouse/WhoUsesSection'
import PricingSection from '@/components/sections/homepage/pricing/PricingSection'
import CTASection from '@/components/sections/homepage/cta/CTASection'
import FAQSection from '@/components/sections/homepage/faq/FAQSection'
import AboutSection from '@/components/sections/homepage/about/AboutSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhoUsesSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
      <AboutSection />
    </>
  )
}