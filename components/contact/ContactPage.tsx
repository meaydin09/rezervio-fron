import ContactHero from './hero/ContactHero'
import ContactForm from './form/ContactForm'
import ContactInfo from './info/ContactInfo'
import HelpCenter from './info/HelpCenter'
import ContactCTA from './cta/ContactCTA'

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      <ContactHero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ContactInfo />
            <HelpCenter />
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}