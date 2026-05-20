import { Pencil } from 'lucide-react'
import { subscriptions } from '../../data/subscriptions-data'

export default function SubscriptionsTable() {
  return (
    <div className="mt-6 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] overflow-hidden">
      <div className="p-5 border-b border-ink-100 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h3 className="font-semibold text-ink-900">Aboneler</h3>
          <p className="text-xs text-ink-500 mt-0.5">Ücretli üyelerin tam listesi</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer">
            <option>Tüm planlar</option>
            <option>Profesyonel</option>
            <option>Kurumsal</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-ink-50/60 border-b border-ink-100">
            <tr className="text-left text-[11px] font-semibold text-ink-500 uppercase tracking-wider">
              {['Kullanıcı', 'Plan', 'Ödeme Periyodu', 'Başlangıç', 'Sonraki Ödeme', 'Tutar', ''].map((h, i) => (
                <th key={i} className={`px-4 py-3 ${i === 6 ? 'text-right' : ''}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-50">
            {subscriptions.map((sub) => (
              <tr key={sub.user.slug} className="hover:bg-ink-50/40 transition">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg ${sub.user.bgColor} flex items-center justify-center text-white text-xs font-bold`}>{sub.user.initials}</div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold truncate text-ink-900">{sub.user.name}</div>
                      <div className="text-xs text-ink-500 truncate">{sub.user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3"><span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${planBadge[sub.user.plan]}`}>{sub.user.plan}</span></td>
                <td className="px-4 py-3 text-sm text-ink-700">{sub.cycle}</td>
                <td className="px-4 py-3 text-sm text-ink-600">{sub.startDate}</td>
                <td className="px-4 py-3 text-sm font-semibold text-ink-900">{sub.nextPayment}</td>
                <td className="px-4 py-3 text-sm font-bold text-ink-900">{sub.amount}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 cursor-pointer transition">
                      <Pencil className="w-4 h-4" strokeWidth={2} />
                    </button>
                    <button className="text-xs font-semibold text-rose-600 hover:bg-rose-50 px-2 py-1 rounded cursor-pointer transition">İptal</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}