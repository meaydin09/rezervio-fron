import GeneralSettings from './GeneralSettings'
import PricingSettings from './PricingSettings'
import FeatureFlags from './FeatureFlags'

export default function SettingsView() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <GeneralSettings />
      <PricingSettings />
      <FeatureFlags />
    </div>
  )
}