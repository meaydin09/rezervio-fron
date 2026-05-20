import EducationCard from './EducationCard'
import CertificatesCard from './CertificatesCard'
import DocumentsCard from './DocumentsCard'
import ExperienceCard from './ExperienceCard'

export default function AboutSection() {
  return (
    <div className="mt-8">
      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">Hakkımda</span>
        <h2 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-ink-900">
          Eğitim, Sertifika & Deneyim
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-5">
        <EducationCard />
        <CertificatesCard />
        <DocumentsCard />
        <ExperienceCard />
      </div>
    </div>
  )
}