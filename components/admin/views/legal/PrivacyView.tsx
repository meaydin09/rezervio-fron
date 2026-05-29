import LegalTextView from './LegalTextView'

const INITIAL = `<h2>Gizlilik Politikası</h2>

<h3>1. Giriş</h3>
<p>Rezervio olarak gizliliğinize önem veriyoruz. Bu politika, platformumuzu kullanırken toplanan verilerin nasıl işlendiğini açıklar.</p>

<h3>2. Toplanan Veriler</h3>
<p>Hesap oluşturma sırasında ad, e-posta ve şifre bilgileriniz; platform kullanımı sırasında ise randevu, hizmet ve log verileri toplanmaktadır.</p>

<h3>3. Verilerin Kullanımı</h3>
<p>Toplanan veriler; hizmet sunumu, güvenlik, performans iyileştirme ve yasal yükümlülüklerin karşılanması amacıyla kullanılmaktadır.</p>

<h3>4. Çerezler</h3>
<p>Platformumuz oturum yönetimi ve analitik amaçlı çerezler kullanmaktadır. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.</p>

<h3>5. Veri Güvenliği</h3>
<p>Verileriniz SSL şifrelemesi ve güvenli sunucularda saklanmaktadır. Yetkisiz erişime karşı teknik ve idari önlemler alınmaktadır.</p>

<h3>6. Üçüncü Taraflar</h3>
<p>Ödeme işlemleri Iyzico altyapısı üzerinden gerçekleştirilmekte olup kart bilgileri sistemlerimizde saklanmamaktadır.</p>

<h3>7. Değişiklikler</h3>
<p>Bu politikada yapılacak değişiklikler platform üzerinden duyurulacaktır.</p>

<h3>8. İletişim</h3>
<p><strong>gizlilik@rezervio.com</strong></p>`

export default function PrivacyView() {
  return (
    <LegalTextView
      title="Gizlilik Politikası"
      description="Kullanıcılara gösterilen gizlilik metni"
      initialText={INITIAL}
      lastUpdated="1 Ocak 2025"
    />
  )
}
