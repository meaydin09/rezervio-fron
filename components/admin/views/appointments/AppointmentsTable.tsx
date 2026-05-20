import { MoreVertical } from 'lucide-react'
import { appointments } from '../../data/appointments-data'

export default function AppointmentsTable() {
  return (
    <div className="mt-6 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] overflow-hidden">
      <div className="p-5 border-b border-ink-100 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h3 className="font-semibold text-ink-900">Platform Genelinde Randevular</h3>
          <p className="text-xs text-ink-500 mt-0.5">Tüm uzmanların randevu kayıtları</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <select className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer">
            <option>Bugün</option><option>Bu hafta</option><option>Bu ay</option>
          </select>
          <select className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer">
            <option>Tüm durumlar</option><option>Onaylı</option><option>Bekleyen</option><option>İptal</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-ink-50/60 border-b border-ink-100">
            <tr className="text-left text-[11px] font-semibold text-ink-500 uppercase tracking-wider">
              {['Tarih & Saat', 'Uzman', 'Danışan', 'Durum', 'WhatsApp', ''].map((h, i) => (
                <th key={i} className={`px-4 py-3 ${i === 5 ? 'text-right' : ''}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-50">
            {appointments.map((appt, i) => (
              <tr key={i} className="hover:bg-ink-50/40 transition">
                <td className="px-4 py-3">
                  <div className="text-sm font-semibold text-ink-900">{appt.date}</div>
                  <div className="text-xs text-ink-500">{appt.time}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-lg ${appt.specialist.bgColor} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>{appt.specialist.initials}</div>
                    <div className="text-sm text-ink-900">{appt.specialist.name}</div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-ink-700">{appt.client}</td>
                <td className="px-4 py-3"><span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${statusBadge[appt.status]}`}>{appt.status}</span></td>
                <td className="px-4 py-3 text-xs text-ink-600">{appt.whatsapp}</td>
                <td className="px-4 py-3 text-right">
                  <button className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 cursor-pointer transition ml-auto">
                    <MoreVertical className="w-4 h-4" strokeWidth={2} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}