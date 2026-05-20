import { RefreshCw } from 'lucide-react'
import AppointmentCard from './AppointmentCard'

const appointments = [
  {
    initials: 'OU', name: 'Onur Uzun', time: '10:00', type: 'İlk seans · Online',
    bgColor: 'bg-brand-600',
    badges: [
      { text: '✓ WhatsApp Gönderildi', color: 'bg-emerald-50 text-emerald-700' },
      { text: '⏱ 1sa kala hatırlatma', color: 'bg-amber-50 text-amber-700' },
    ],
  },
  {
    initials: 'AŞ', name: 'Ayşe Şahin', time: '13:30', type: 'Takip seansı · Klinik',
    bgColor: 'bg-rose-600',
    badges: [
      { text: '✓ WhatsApp Gönderildi', color: 'bg-emerald-50 text-emerald-700' },
      { text: '📝 Not var', color: 'bg-ink-100 text-ink-600' },
    ],
  },
  {
    initials: 'BK', name: 'Berk Kaya', time: '16:00', type: '3. seans · Online',
    bgColor: 'bg-emerald-600',
    badges: [
      { text: '⏱ Hatırlatma planlandı', color: 'bg-amber-50 text-amber-700' },
    ],
  },
]

export default function TodayAppointments() {
  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-ink-900">Bugünün Randevuları</h3>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 rounded-lg hover:bg-ink-50 flex items-center justify-center text-ink-500 hover:text-ink-900 transition cursor-pointer" title="Yenile">
            <RefreshCw className="w-4 h-4" strokeWidth={2} />
          </button>
          <button className="text-xs text-brand-600 font-semibold hover:underline cursor-pointer">Tümü</button>
        </div>
      </div>
      <div className="text-[11px] text-ink-400 mt-1">Son güncelleme: az önce</div>
      <div className="mt-4 space-y-3">
        {appointments.map((a) => (
          <AppointmentCard key={a.name} {...a} />
        ))}
      </div>
    </div>
  )
}