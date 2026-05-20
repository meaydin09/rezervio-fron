import ClinicStory from './ClinicStory'
import ClinicValues from './ClinicValues'
import ClinicGallery from './ClinicGallery'
import ClinicAchievements from './ClinicAchievements'
import ClinicContact from './ClinicContact'
import ClinicHours from './ClinicHours'

export default function AboutView() {
  return (
    <div className="mt-6 grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-5">
        <ClinicStory />
        <ClinicValues />
        <ClinicGallery />
      </div>
      <div className="space-y-5">
        <ClinicAchievements />
        <ClinicContact />
        <ClinicHours />
      </div>
    </div>
  )
}