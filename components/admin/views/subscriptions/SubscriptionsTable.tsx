'use client'

import { Pencil, X } from 'lucide-react'
import { useState, useMemo } from 'react'
import { subscriptions as initialData } from '../../data/subscriptions-data'
import type { AdminSubscription } from '../../types'
import SubscriptionNoteModal from '../../modals/SubscriptionNoteModal'
import CancelSubscriptionModal from '../../modals/CancelSubscriptionModal'

const planBadge: Record<string, string> = {
  'Profesyonel': 'bg-brand-50 text-brand-700',
  'Kurumsal':    'bg-purple-50 text-purple-700',
  'Deneme':      'bg-amber-50 text-amber-700',
  'Başlangıç':   'bg-gray-50 text-gray-700',
}

const statusBadge: Record<string, string> = {
  'Aktif':           'bg-emerald-50 text-emerald-700',
  'Askıya alındı':   'bg-amber-50 text-amber-700',
  'İptal edilmiş':   'bg-rose-50 text-rose-700',
}

export default function SubscriptionsTable() {
  const [data, setData] = useState<(AdminSubscription & { note?: string; status?: string })[]>(
    initialData.map(s => ({ ...s, note: '', status: 'Aktif' }))
  )
  const [planFilter, setPlanFilter] = useState('Tümü')
  const [noteModal, setNoteModal] = useState<{ open: boolean; slug: string; name: string; note: string } | null>(null)
  const [cancelModal, setCancelModal] = useState<{ open: boolean; slug: string; name: string; plan: string } | null>(null)

  // Dinamik plan listesi — sadece mevcut verideki planlar
  const availablePlans = useMemo(() => {
    const plans = Array.from(new Set(data.map(s => s.user.plan)))
    return ['Tümü', ...plans]
  }, [data])

  const filtered = useMemo(() =>
    planFilter === 'Tümü' ? data : data.filter(s => s.user.plan === planFilter),
    [data, planFilter]
  )

  const handleSaveNote = (slug: string, note: string) => {
    setData(prev => prev.map(s => s.user.slug === slug ? { ...s, note } : s))
  }

  const handleCancel = (slug: string) => {
    setData(prev => prev.map(s =>
      s.user.slug === slug ? { ...s, status: 'Askıya alındı' } : s
    ))
  }

  return (
    <>
      <div className="mt-6 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] overflow-hidden">
        <div className="p-5 border-b border-ink-100 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h3 className="font-semibold text-ink-900">Aboneler</h3>
            <p className="text-xs text-ink-500 mt-0.5">Ücretli üyelerin tam listesi</p>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={planFilter}
              onChange={e => setPlanFilter(e.target.value)}
              className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {availablePlans.map(plan => (
                <option key={plan} value={plan}>{plan === 'Tümü' ? 'Tüm planlar' : plan}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[960px]">
            <thead className="bg-ink-50/60 border-b border-ink-100">
              <tr className="text-left text-[11px] font-semibold text-ink-500 uppercase tracking-wider">
                {['Kullanıcı', 'Plan', 'Durum', 'Ödeme Periyodu', 'Başlangıç', 'Sonraki Ödeme', 'Tutar', ''].map((h, i) => (
                  <th key={i} className={`px-4 py-3 ${i === 7 ? 'text-right' : ''}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-50">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-sm text-ink-400">
                    Bu plana ait abone bulunamadı.
                  </td>
                </tr>
              )}
              {filtered.map((sub) => {
                const status = sub.status ?? 'Aktif'
                const isInactive = status !== 'Aktif'
                return (
                  <tr key={sub.user.slug} className={`hover:bg-ink-50/40 transition ${isInactive ? 'opacity-60' : ''}`}>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg ${sub.user.bgColor} flex items-center justify-center text-white text-xs font-bold`}>
                          {sub.user.initials}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold truncate text-ink-900">{sub.user.name}</div>
                          <div className="text-xs text-ink-500 truncate">{sub.user.email}</div>
                          {sub.note && (
                            <div className="text-[11px] text-ink-400 truncate max-w-[180px] mt-0.5 italic">"{sub.note}"</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${planBadge[sub.user.plan]}`}>
                        {sub.user.plan}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${statusBadge[status] ?? 'bg-gray-50 text-gray-700'}`}>
                        {status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-ink-700">{sub.cycle}</td>
                    <td className="px-4 py-3 text-sm text-ink-600">{sub.startDate}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-ink-900">{sub.nextPayment}</td>
                    <td className="px-4 py-3 text-sm font-bold text-ink-900">{sub.amount}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => setNoteModal({ open: true, slug: sub.user.slug, name: sub.user.name, note: sub.note ?? '' })}
                          className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 cursor-pointer transition"
                          title="Not ekle"
                        >
                          <Pencil className="w-4 h-4" strokeWidth={2} />
                        </button>
                        {!isInactive && (
                          <button
                            onClick={() => setCancelModal({ open: true, slug: sub.user.slug, name: sub.user.name, plan: sub.user.plan })}
                            className="text-xs font-semibold text-rose-600 hover:bg-rose-50 px-2 py-1 rounded cursor-pointer transition"
                          >
                            İptal
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {noteModal && (
        <SubscriptionNoteModal
          isOpen={noteModal.open}
          onClose={() => setNoteModal(null)}
          userName={noteModal.name}
          currentNote={noteModal.note}
          onSave={(note) => handleSaveNote(noteModal.slug, note)}
        />
      )}

      {cancelModal && (
        <CancelSubscriptionModal
          isOpen={cancelModal.open}
          onClose={() => setCancelModal(null)}
          userName={cancelModal.name}
          plan={cancelModal.plan}
          onConfirm={() => handleCancel(cancelModal.slug)}
        />
      )}
    </>
  )
}
