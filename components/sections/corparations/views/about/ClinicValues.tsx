const values = [
    { title: 'Gizlilik', description: 'Tüm seans bilgileri KVKK uyumlu olarak şifrelenir ve saklanır.', iconBg: 'bg-brand-50', iconColor: 'text-brand-600' },
    { title: 'Bilimsellik', description: 'Yalnızca kanıta dayalı, bilimsel olarak doğrulanmış yöntemleri kullanırız.', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
    { title: 'Empati', description: 'Her danışanımıza yargısız, koşulsuz pozitif bir kabul anlayışıyla yaklaşırız.', iconBg: 'bg-amber-50', iconColor: 'text-amber-600' },
    { title: 'Gelişim', description: 'Uzmanlarımız sürekli eğitim ve süpervizyon programlarıyla kendini geliştirir.', iconBg: 'bg-violet-50', iconColor: 'text-violet-600' },
  ]
  
  export default function ClinicValues() {
    return (
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6 sm:p-8">
        <h3 className="font-bold text-lg text-ink-900">Değerlerimiz</h3>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          {values.map((value) => (
            <div key={value.title} className="flex gap-3">
              <div className={`w-10 h-10 rounded-xl ${value.iconBg} flex items-center justify-center ${value.iconColor} shrink-0`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-900">{value.title}</div>
                <p className="text-xs text-ink-600 mt-0.5">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }