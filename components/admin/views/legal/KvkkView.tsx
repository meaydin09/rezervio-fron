import LegalTextView from './LegalTextView'

const INITIAL = `<h2>KİŞİSEL VERİLERİN KORUNMASI KANUNU (KVKK) AYDINLATMA METNİ</h2>

<h3>1. Veri Sorumlusu</h3>
<p>Rezervio ("Şirket") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla hareket etmekteyiz.</p>

<h3>2. İşlenen Kişisel Veriler</h3>
<p>Hizmetlerimiz kapsamında aşağıdaki kişisel verileriniz işlenmektedir:</p>
<ul>
  <li>Kimlik bilgileri (ad, soyad)</li>
  <li>İletişim bilgileri (e-posta, telefon)</li>
  <li>Randevu ve hizmet bilgileri</li>
  <li>Ödeme bilgileri (kart bilgileri saklanmamaktadır)</li>
  <li>Kullanım ve log verileri</li>
</ul>

<h3>3. Kişisel Verilerin İşlenme Amaçları</h3>
<p>Kişisel verileriniz; hizmet sunumu, sözleşme yükümlülüklerinin yerine getirilmesi, yasal yükümlülüklerin karşılanması ve meşru menfaatlerimiz doğrultusunda işlenmektedir.</p>

<h3>4. Kişisel Verilerin Aktarılması</h3>
<p>Kişisel verileriniz; ödeme altyapısı sağlayıcıları, bulut hizmet sağlayıcıları ve yasal zorunluluk halinde yetkili kamu kuruluşlarıyla paylaşılabilir.</p>

<h3>5. Veri Sahibinin Hakları</h3>
<p>KVKK'nın 11. maddesi uyarınca; verilerinize erişim, düzeltme, silme, işlemenin kısıtlanması ve itiraz haklarına sahipsiniz.</p>

<h3>6. İletişim</h3>
<p>Talepleriniz için: <strong>kvkk@rezervio.com</strong></p>`

export default function KvkkView() {
  return (
    <LegalTextView
      title="KVKK Aydınlatma Metni"
      description="Kullanıcılara gösterilen KVKK metni"
      initialText={INITIAL}
      lastUpdated="1 Ocak 2025"
    />
  )
}
