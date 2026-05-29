import type { Metadata } from 'next'
import Link from 'next/link'
import { Database, Cookie, Lock, Share2, UserCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Rezervio',
  description: 'Rezervio gizlilik politikası — verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu öğrenin.',
}

const sections = [
  { id: 'veri-toplama',     label: 'Veri Toplama',    Icon: Database  },
  { id: 'cerez-kullanimi',  label: 'Çerez Kullanımı', Icon: Cookie    },
  { id: 'veri-guvenligi',   label: 'Veri Güvenliği',  Icon: Lock      },
  { id: 'ucuncu-taraf',     label: 'Paylaşım',        Icon: Share2    },
  { id: 'kullanici-haklari',label: 'Haklarınız',      Icon: UserCheck },
]

export default function GizlilikPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-16 px-4 sm:px-6 ">
        <div className="max-w-3xl mx-auto text-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 border border-brand-200 mb-6 text-xs font-semibold">
            <Lock className="w-3.5 h-3.5" />
            Son Güncelleme: 14 Mart 2024
          </div> */}
          <h1 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4 tracking-tight">
            Gizlilik Politikası
          </h1>
          <p className="text-ink-500 text-base leading-relaxed max-w-2xl mx-auto">
            Rezervio olarak verilerinizin güvenliği ve gizliliği en büyük önceliğimizdir. Bilgilerinizi nasıl koruduğumuzu ve haklarınızı nasıl kullanabileceğinizi şeffaf bir şekilde paylaşıyoruz.
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

            {/* 1 — Veri Toplama */}
            <section id="veri-toplama" className="scroll-mt-28 bg-white border border-ink-100 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-ink-900">1. Veri Toplama</h2>
              </div>
              <div className="text-sm text-ink-600 space-y-4 leading-relaxed">
                <p>Rezervio'yu kullanırken size en iyi hizmeti sunabilmek adına belirli kişisel verileri topluyoruz. Bu veriler temel olarak iki kategoriye ayrılır:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  <div className="p-4 bg-ink-50 rounded-xl border border-ink-100">
                    <p className="font-semibold text-brand-600 text-xs mb-1">Hesap Bilgileri</p>
                    <p className="text-xs text-ink-600">Adınız, e-posta adresiniz ve şifreniz gibi kayıt sırasında verdiğiniz bilgiler.</p>
                  </div>
                  <div className="p-4 bg-ink-50 rounded-xl border border-ink-100">
                    <p className="font-semibold text-brand-600 text-xs mb-1">Hizmet Verileri</p>
                    <p className="text-xs text-ink-600">Randevu geçmişiniz, işletme profiliniz ve platform üzerindeki tercihleriniz.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2 — Çerez */}
            <section id="cerez-kullanimi" className="scroll-mt-28 bg-white border border-ink-100 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-ink-900">2. Çerez Kullanımı</h2>
              </div>
              <div className="text-sm text-ink-600 space-y-3 leading-relaxed">
                <p>Deneyiminizi kişiselleştirmek ve platform performansını analiz etmek için çerezler kullanıyoruz.</p>
                <div className="bg-brand-50 border-l-4 border-brand-500 rounded-r-xl px-4 py-3 text-brand-800 text-xs italic">
                  Çerez ayarlarınızı dilediğiniz zaman tarayıcı ayarlarınızdan değiştirebilirsiniz; ancak bu durum bazı özelliklerin çalışmasını engelleyebilir.
                </div>
                <div className="space-y-2 mt-2">
                  {[
                    { title: 'Zorunlu Çerezler', desc: 'Platformun temel fonksiyonları için gereklidir.' },
                    { title: 'Analitik Çerezler', desc: 'Ziyaretçi trafiğini anlamamıza yardımcı olur.' },
                  ].map(c => (
                    <div key={c.title} className="flex items-start gap-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                      <span><strong className="text-ink-800">{c.title}:</strong> {c.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3 — Güvenlik (vurgulu kart) */}
            <section id="veri-guvenligi" className="scroll-mt-28 relative overflow-hidden bg-brand-600 rounded-2xl shadow-lg p-8">
              <div className="absolute -right-16 -top-16 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-white">3. Veri Güvenliği</h2>
              </div>
              <div className="relative z-10 text-sm text-white/90 space-y-4 leading-relaxed">
                <p>Verileriniz AES-256 şifreleme yöntemleriyle korunmaktadır. Sunucularımız yüksek güvenlikli veri merkezlerinde barındırılmakta ve düzenli güvenlik taramalarından geçirilmektedir.</p>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {['SSL Şifreleme', 'Düzenli Denetim', 'Günlük Yedekleme'].map(item => (
                    <div key={item} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                      <p className="text-[11px] font-semibold text-white/90 uppercase tracking-wide">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4 — Üçüncü Taraf */}
            <section id="ucuncu-taraf" className="scroll-mt-28 bg-white border border-ink-100 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Share2 className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-ink-900">4. Üçüncü Taraf Paylaşımı</h2>
              </div>
              <div className="text-sm text-ink-600 space-y-3 leading-relaxed">
                <p>Verileriniz hiçbir koşulda reklam amaçlı olarak üçüncü taraflarla satılmaz veya paylaşılmaz. Sadece aşağıdaki durumlarda paylaşım yapılabilir:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li>Yasal yükümlülüklerin yerine getirilmesi amacıyla resmi makamlarla.</li>
                  <li>Hizmet sağlayıcılarımızla (ödeme altyapısı, e-posta servisleri) yalnızca hizmetin ifası için gerekli olduğu ölçüde.</li>
                </ul>
              </div>
            </section>

            {/* 5 — Haklar */}
            <section id="kullanici-haklari" className="scroll-mt-28 bg-white border border-ink-100 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-ink-900">5. Kullanıcı Hakları</h2>
              </div>
              <div className="text-sm text-ink-600 space-y-4 leading-relaxed">
                <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: 'Erişim Hakkı',          desc: 'Hangi verilerinizin işlendiğini öğrenme.' },
                    { title: 'Düzeltme Hakkı',         desc: 'Eksik veya yanlış verilerin güncellenmesi.' },
                    { title: 'Unutulma Hakkı',         desc: 'Verilerinizin silinmesini talep etme.' },
                    { title: 'Veri Taşınabilirliği',   desc: 'Verilerinizin kopyasını talep etme.' },
                  ].map(r => (
                    <div key={r.title} className="flex gap-3 p-4 bg-ink-50 rounded-xl border border-ink-100">
                      <div>
                        <p className="font-semibold text-ink-800 text-xs mb-1">{r.title}</p>
                        <p className="text-xs text-ink-500">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-ink-900 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-bold text-white text-base mb-1">Daha fazla bilgi mi gerekiyor?</h3>
                <p className="text-ink-400 text-sm">Gizlilik konusundaki sorularınız için hukuk ekibimizle iletişime geçebilirsiniz.</p>
              </div>
              <Link href="/iletisim" className="whitespace-nowrap px-6 py-2.5 bg-white text-ink-900 rounded-xl text-sm font-semibold hover:bg-ink-100 transition shrink-0">
                Bize Ulaşın
              </Link>
            </div>

            <p className="text-xs text-ink-400 italic text-right">Son güncelleme tarihi: 14 Mart 2024</p>
          </div>
        </div>
      </div>
    </>
  )
}
