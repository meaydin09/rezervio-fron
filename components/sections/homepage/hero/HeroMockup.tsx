import MockupCard from './mockup/MockupCard'
import WhatsAppNotification from './mockup/WhatsAppNotification'

export default function HeroMockup() {
  return (
    <div className="lg:col-span-6 relative">
      <div className="absolute inset-0 sm:-inset-6 bg-gradient-to-tr from-brand-200/50 via-transparent to-violet-200/40 rounded-3xl blur-2xl" />
      <MockupCard />
      <WhatsAppNotification />
    </div>
  )
}