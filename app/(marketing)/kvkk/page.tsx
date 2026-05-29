import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, FileText, Share2, Scale, UserCheck, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | Rezervio',
  description: 'Rezervio olarak kişisel verilerinizin işlenmesi, korunması ve haklarınız hakkında bilgi edinin.',
}

const sections = [
  { id: 'veri-sorumlusu', label: 'Veri Sorumlusu',   Icon: ShieldCheck },
  { id: 'isleme-amaci',   label: 'İşlenme Amacı',    Icon: FileText    },
  { id: 'aktarim',        label: 'Veri Aktarımı',    Icon: Share2      },
  { id: 'yontem',         label: 'Toplama Yöntemi',  Icon: Scale       },
  { id: 'haklar',         label: 'Haklarınız',       Icon: UserCheck   },
  { id: 'iletisim',       label: 'İletişim',         Icon: Mail        },
]

export default function KvkkPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-16 px-4 sm:px-6 ">
        <div className="max-w-3xl mx-auto text-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 border border-brand-200 mb-6 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Son Güncelleme: 12 Mayıs 2024
          </div> */}
          <h1 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4 tracking-tight">
            Kişisel Verilerin Korunması (KVKK)
          </h1>
          <p className="text-ink-500 text-base leading-relaxed max-w-2xl mx-auto">
            Rezervio olarak verilerinizin gizliliğine ve güvenliğine önem veriyoruz. Kişisel verilerinizin işlenmesi süreçlerinde şeffaflık ilkemizi koruyor ve yasal haklarınızı güvence altına alıyoruz.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28 p-5 bg-white rounded-2xl border border-ink-100 shadow-sm space-y-1">
              <p className="text-[11px] font-semibold text-ink-400 uppercase tracking-widest mb-4">İçindekiler</p>
              {sections.map(({ id, label, Icon }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-ink-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition border-l-2 border-transparent hover:border-brand-400"
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {label}
                </Link>
              ))}
            </div>
          </aside>

          {/* Article */}
          <div className="lg:col-span-9 space-y-8">

            {/* 1 */}
            <section id="veri-sorumlusu" className="scroll-mt-28 bg-white border border-ink-100 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-ink-900">1. Veri Sorumlusu</h2>
              </div>
              <div className="text-sm text-ink-600 space-y-3 leading-relaxed">
                <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz; veri sorumlusu olarak <strong className="text-ink-800">Rezervio Yazılım ve Teknoloji A.Ş.</strong> tarafından aşağıda açıklanan kapsamda işlenebilecektir.</p>
                <p>Şirketimiz, verilerinizin korunması için her türlü idari ve teknik tedbiri almakta, verilerinizi gizli tutmayı ve hukuka aykırı erişimi engellemeyi taahhüt etmektedir.</p>
              </div>
            </section>

            {/* 2 */}
            <section id="isleme-amaci" className="scroll-mt-28 bg-white border border-ink-100 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-ink-900">2. Kişisel Verilerin İşlenme Amacı</h2>
              </div>
              <div className="text-sm text-ink-600 space-y-3 leading-relaxed">
                <p>Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {['Randevu ve rezervasyon süreçlerinin yönetimi', 'Müşteri destek ve satış sonrası hizmetler', 'Kullanıcı deneyiminin iyileştirilmesi', 'Bilgi güvenliği süreçlerinin yürütülmesi', 'Yasal yükümlülüklerin yerine getirilmesi'].map(item => (
                    <li key={item} className="flex items-start gap-2 p-3 bg-ink-50 rounded-xl border border-ink-100 text-xs text-ink-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 3 */}
            <section id="aktarim" className="scroll-mt-28 bg-white border border-ink-100 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Share2 className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-ink-900">3. İşlenen Verilerin Aktarımı</h2>
              </div>
              <div className="text-sm text-ink-600 space-y-3 leading-relaxed">
                <p>Toplanan kişisel verileriniz; iş ortaklarımıza, tedarikçilerimize ve kanunen yetkili kamu kurumlarına KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar çerçevesinde aktarılabilecektir.</p>
                <div className="bg-brand-50 border-l-4 border-brand-500 rounded-r-xl px-4 py-3 text-brand-800 text-xs italic">
                  Verileriniz üçüncü taraf reklam ağları ile rızanız olmaksızın asla paylaşılmaz.
                </div>
              </div>
            </section>

            {/* 4 */}
            <section id="yontem" className="scroll-mt-28 bg-white border border-ink-100 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-ink-900">4. Kişisel Veri Toplama Yöntemi ve Hukuki Sebebi</h2>
              </div>
              <div className="text-sm text-ink-600 space-y-3 leading-relaxed">
                <p>Kişisel verileriniz web sitesi, mobil uygulama, e-posta ve çağrı merkezi gibi kanallar aracılığıyla toplanmaktadır. Aşağıdaki hukuki sebeplere dayanarak işlenmektedir:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li>Kanunlarda açıkça öngörülmesi.</li>
                  <li>Sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması.</li>
                  <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması.</li>
                  <li>Meşru menfaatler için veri işlenmesinin zorunlu olması.</li>
                </ul>
              </div>
            </section>

            {/* 5 */}
            <section id="haklar" className="scroll-mt-28 bg-white border border-ink-100 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-ink-900">5. İlgili Kişinin Hakları</h2>
              </div>
              <div className="text-sm text-ink-600 space-y-4 leading-relaxed">
                <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: 'Bilgi Edinme',       desc: 'Kişisel verilerin işlenip işlenmediğini öğrenme.' },
                    { title: 'Düzeltme',           desc: 'Eksik veya yanlış verilerin düzeltilmesini isteme.' },
                    { title: 'Silme',              desc: 'Yasal şartlar oluştuğunda verilerin silinmesini isteme.' },
                    { title: 'Veri Taşınabilirliği', desc: 'Verilerinizin kopyasını talep etme.' },
                  ].map(r => (
                    <div key={r.title} className="p-4 bg-ink-50 rounded-xl border border-ink-100">
                      <p className="font-semibold text-ink-800 text-xs mb-1">{r.title}</p>
                      <p className="text-xs text-ink-500">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6 */}
            <section id="iletisim" className="scroll-mt-28 bg-white border border-ink-100 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-ink-900">6. İletişim</h2>
              </div>
              <div className="text-sm text-ink-600 space-y-3 leading-relaxed">
                <p>Haklarınızı kullanmak için bizimle iletişime geçebilirsiniz:</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:kvkk@rezervio.com" className="text-brand-600 hover:underline font-medium text-sm">kvkk@rezervio.com</a>
                  <span className="text-sm text-ink-500">Teknopark İstanbul, No: 1/1, Pendik/İstanbul</span>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-ink-900 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-bold text-white text-base mb-1">Daha fazla bilgi mi gerekiyor?</h3>
                <p className="text-ink-400 text-sm">Gizlilik konusundaki sorularınız için ekibimizle iletişime geçin.</p>
              </div>
              <Link href="/iletisim" className="whitespace-nowrap px-6 py-2.5 bg-white text-ink-900 rounded-xl text-sm font-semibold hover:bg-ink-100 transition shrink-0">
                Bize Ulaşın
              </Link>
            </div>

            <p className="text-xs text-ink-400 italic text-right">Son güncelleme tarihi: 12 Mayıs 2024</p>
          </div>
        </div>
      </div>
    </>
  )
}
