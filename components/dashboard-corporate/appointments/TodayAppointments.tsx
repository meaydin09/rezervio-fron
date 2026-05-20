import { RefreshCw } from 'lucide-react'
import { todayAppointments } from '../data/specialists-data'

export default function TodayAppointments() {
  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-ink-900">Bugünün Randevuları</h3>
          <p className="text-xs text-ink-500 mt-0.5">47 randevu · 12 uzman</p>
        </div>
        <button className="w-8 h-8 rounded-lg hover:bg-ink-50 flex items-center justify-center text-ink-500 cursor-pointer transition" title="Yenile">
          <RefreshCw className="w-4 h-4" strokeWidth={2} />
        </button>
      </div>

      <div className="mt-4 space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
        {todayAppointments.map((appt) => (
          <div key={`${appt.initials}-${appt.time}`} className="p-3 rounded-xl border border-ink-100 hover:border-brand-200 transition cursor-pointer">
            <div className="flex items-start gap-3">
              <div className={`w-9 h-9 rounded-lg ${appt.bgColor} flex items-center justify-center font-bold text-white text-xs shrink-0`}>
                {appt.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold truncate text-ink-900">{appt.specialistName}</div>
                  <div className="text-[11px] text-ink-500">{appt.time}</div>
                </div>
                <div className="text-xs text-ink-700 truncate mt-0.5">{appt.clientName}</div>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {appt.badges.map((badge, i) => (
                    <span key={i} className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${badge.color}`}>
                      {badge.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-3 block w-full text-center text-xs font-semibold text-brand-600 hover:underline cursor-pointer">
        41 randevu daha gör →
      </button>
    </div>
  )
}