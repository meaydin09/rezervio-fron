const stats = [
    { value: '1.2k+', label: 'Aktif uzman' },
    { value: '280k', label: 'Randevu/ay' },
    { value: '%62', label: '↓ No-show' },
  ]
  
  export default function LoginVisual() {
    return (
      <div className="hidden lg:flex items-center justify-center gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-md p-10 text-center">
  
          {/* Testimonial kartı */}
          <div className="bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] border border-ink-100 p-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ink-900 flex items-center justify-center text-sm font-bold text-white">
                OU
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-900">Psk. Onur Uzun</div>
                <div className="text-xs text-ink-500">3 yıldır Rezervio kullanıyor</div>
              </div>
            </div>
            <blockquote className="mt-4 text-sm text-ink-700 leading-relaxed">
              "WhatsApp'tan randevu organize etmeyi bıraktığım gün hayatım değişti. Artık sadece danışanlarıma odaklanıyorum."
            </blockquote>
            <div className="mt-4 flex items-center gap-0.5 text-amber-400">
              {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
            </div>
          </div>
  
          {/* İstatistikler */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-ink-900">{stat.value}</div>
                <div className="text-xs text-ink-500">{stat.label}</div>
              </div>
            ))}
          </div>
  
        </div>
      </div>
    )
  }