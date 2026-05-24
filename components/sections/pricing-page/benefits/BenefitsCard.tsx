import type { BenefitFeature, PlanType } from '../types'
import FeatureItem from './FeatureItem'
import Testimonial from './Testimonial'

const profesyonelFeatures: BenefitFeature[] = [
  { icon: 'whatsapp', title: 'Akıllı WhatsApp Hatırlatma',  description: 'Randevu öncesi otomatik ve kişiselleştirilmiş WhatsApp mesajları ile "gelmeyen müşteri" oranını %70 azaltın.' },
  { icon: 'calendar', title: 'Sınırsız Randevu',            description: 'Herhangi bir sınır olmadan dilediğiniz kadar randevu kabul edin ve takviminizi kolayca yönetin.' },
  { icon: 'sync',     title: 'Takvim Entegrasyonu',         description: 'Google ve iCloud takvimlerinizle tam senkronize çalışın. Çift kayıtları sonsuza dek ortadan kaldırın.' },
  { icon: 'stats',    title: 'Detaylı İstatistikler',       description: 'Kazanç, iptal oranı ve müşteri sadakati raporlarıyla işletmenizi veriye dayalı yönetin.' },
]

const kurumsalFeatures: BenefitFeature[] = [
  { icon: 'calendar', title: 'Çoklu Uzman Yönetimi',        description: 'Tüm ekibinizin takvimini tek panelden yönetin. Her uzmana özel link ve profil sayfası.' },
  { icon: 'stats',    title: 'Merkezi Raporlama',           description: 'Klinik genelinde doluluk, gelir ve performans raporlarını tek ekranda görün.' },
  { icon: 'whatsapp', title: 'Sınırsız WhatsApp',           description: 'Tüm uzmanlarınız için sınırsız WhatsApp hatırlatma. No-show oranını minimize edin.' },
  { icon: 'sync',     title: 'Marka Özelleştirme',          description: 'Kurumsal kimliğinize uygun renk ve tema seçenekleriyle marka sayfanızı özelleştirin.' },
]

interface Props {
  plan: PlanType
}

export default function BenefitsCard({ plan }: Props) {
  const features = plan === 'profesyonel' ? profesyonelFeatures : kurumsalFeatures
  const title = plan === 'profesyonel' ? 'Neden Profesyonel Plan?' : 'Neden Kurumsal Plan?'
  const subtitle = plan === 'profesyonel'
    ? 'Rezervio Profesyonel ile randevularınızı otomatiğe bağlayın ve vaktinizi sadece işinize ayırın.'
    : 'Kliniğinizi veya salonunuzu tek panelden yönetin, ekibinizi büyütün.'

  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-8 md:p-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-ink-900 mb-3">{title}</h2>
        <p className="text-sm text-ink-600 leading-relaxed">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <FeatureItem key={feature.title} feature={feature} />
        ))}
      </div>

      <Testimonial />
    </div>
  )
}