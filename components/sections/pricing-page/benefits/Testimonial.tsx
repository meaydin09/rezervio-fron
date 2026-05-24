export default function Testimonial() {
  return (
    <div className="mt-10 p-5 rounded-2xl bg-ink-50 border border-ink-100 flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-brand-200 flex items-center justify-center text-sm font-bold text-brand-800 shrink-0">
        MK
      </div>
      <div>
        <p className="text-sm text-ink-700 italic leading-relaxed">
          "Rezervio'ya geçtiğimden beri sekreterlik maliyetlerim bitti. Müşterilerim WhatsApp üzerinden randevu almayı çok seviyor."
        </p>
        <p className="text-xs text-brand-600 font-semibold mt-2">— Dyt. Merve Kaya, Klinik Sahibi</p>
      </div>
    </div>
  )
}