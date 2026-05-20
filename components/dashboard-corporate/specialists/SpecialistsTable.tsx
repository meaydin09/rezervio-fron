import { Plus } from 'lucide-react'
import SpecialistRow from './SpecialistRow'
import { specialists } from '../data/specialists-data'

interface Props {
  onAddSpecialist: () => void
}

export default function SpecialistsTable({ onAddSpecialist }: Props) {
  return (
    <div className="mt-6 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] overflow-hidden">
      <div className="p-5 border-b border-ink-100 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h3 className="font-semibold text-ink-900">Uzman Yönetimi</h3>
          <p className="text-xs text-ink-500 mt-0.5">Kliniğinizde çalışan tüm uzmanları yönetin</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <select className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer">
            <option>Tüm uzmanlar</option>
            <option>Aktif</option>
            <option>İzinli</option>
            <option>Pasif</option>
          </select>
          <button
            onClick={onAddSpecialist}
            className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-3 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition"
          >
            <Plus className="w-4 h-4" strokeWidth={2.5} />
            Uzman Ekle
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-ink-50/60 border-b border-ink-100">
            <tr className="text-left text-[11px] font-semibold text-ink-500 uppercase tracking-wider">
              {['Uzman', 'Uzmanlık', 'Bugün', 'Aylık MRR', 'Doluluk', 'Durum', ''].map((h, i) => (
                <th key={i} className={`px-4 py-3 ${i === 6 ? 'text-right' : ''}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-50">
            {specialists.map((s) => (
              <SpecialistRow key={s.initials} specialist={s} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}