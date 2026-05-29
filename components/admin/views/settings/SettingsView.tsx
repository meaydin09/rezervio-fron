import GeneralSettings from './GeneralSettings'
import PricingSettings from './PricingSettings'
import ContactSettings from './ContactSettings'
import IntegrationSettings from './IntegrationSettings'
import SecuritySettings from './SecuritySettings'

export default function SettingsView() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <GeneralSettings />
      <SecuritySettings />
      <PricingSettings />
      <ContactSettings />
      <IntegrationSettings />
    </div>
  )
}
