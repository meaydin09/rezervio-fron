'use client'

import { MoreVertical, HeadphonesIcon } from 'lucide-react'
import { useState, useMemo, useRef, useEffect } from 'react'
import { appointments } from '../../data/appointments-data'
import AppointmentSupportModal, { type SupportTicketPayload } from '../../modals/AppointmentSupportModal'

const statusBadge: Record<string, string> = {
  'Onaylı':     'bg-emerald-50 text-emerald-700',
  'Bekleyen':   'bg-amber-50 text-amber-700',
  'Tamamlandı': 'bg-blue-50 text-blue-700',
  'İptal':      'bg-red-50 text-red-700',
}

const DATE_GROUPS: Record<string, string[]> = {
  'Bugün':    ['Bugün'],
  'Bu Hafta': ['Bugün', 'Dün'],
  'Bu Ay':    ['Bugün', 'Dün'],
}

const DATE_OPTIONS = ['Tümü', 'Bugün', 'Bu Hafta', 'Bu Ay'] as const

type AppointmentMeta = {
  specialistName: string
  specialistInitials: string
  specialistBgColor: string
  client: string
  date: string
  time: string
}

function RowMenu({ onOpenSupport }: { onOpenSupport: () => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 cursor-pointer transition"
      >
        <MoreVertical className="w-4 h-4" strokeWidth={2} />
      </button>

      {open && (
        <div className="absolute right-0 top-9 z-20 w-48 bg-white rounded-xl border border-ink-100 shadow-lg py-1">
          <button
            onClick={() => { setOpen(false); onOpenSupport() }}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-ink-700 hover:bg-ink-50 transition"
          >
            <HeadphonesIcon className="w-4 h-4 text-brand-500 shrink-0" />
            Destek Talebi Aç
          </button>
        </div>
      )}
    </div>
  )
}

export default function AppointmentsTable() {
  const [dateFilter, setDateFilter]     = useState('Tümü')
  const [statusFilter, setStatusFilter] = useState('Tümü')
  const [supportModal, setSupportModal] = useState<AppointmentMeta | null>(null)
  const [tickets, setTickets]           = useState<SupportTicketPayload[]>([])

  const availableStatuses = useMemo(() => {
    const statuses = Array.from(new Set(appointments.map(a => a.status)))
    return ['Tümü', ...statuses]
  }, [])

  const filtered = useMemo(() => {
    return appointments.filter(a => {
      const matchDate   = dateFilter === 'Tümü' || (DATE_GROUPS[dateFilter]?.includes(a.date) ?? true)
      const matchStatus = statusFilter === 'Tümü' || a.status === statusFilter
      return matchDate && matchStatus
    })
  }, [dateFilter, statusFilter])

  const handleSubmitTicket = (ticket: SupportTicketPayload) => {
    setTickets(prev => [ticket, ...prev])
  }

  return (
    <>
      <div className="mt-6 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] overflow-hidden">
        <div className="p-5 border-b border-ink-100 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h3 className="font-semibold text-ink-900">Platform Genelinde Randevular</h3>
            <p className="text-xs text-ink-500 mt-0.5">Tüm uzmanların randevu kayıtları</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={dateFilter}
              onChange={e => setDateFilter(e.target.value)}
              className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {DATE_OPTIONS.map(d => (
                <option key={d} value={d}>{d === 'Tümü' ? 'Tüm tarihler' : d}</option>
              ))}
            </select>
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {availableStatuses.map(s => (
                <option key={s} value={s}>{s === 'Tümü' ? 'Tüm durumlar' : s}</option>
              ))}
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
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-sm text-ink-400">
                    Bu filtreye uygun randevu bulunamadı.
                  </td>
                </tr>
              )}
              {filtered.map((appt, i) => (
                <tr key={i} className="hover:bg-ink-50/40 transition">
                  <td className="px-4 py-3">
                    <div className="text-sm font-semibold text-ink-900">{appt.date}</div>
                    <div className="text-xs text-ink-500">{appt.time}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-lg ${appt.specialist.bgColor} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
                        {appt.specialist.initials}
                      </div>
                      <div className="text-sm text-ink-900">{appt.specialist.name}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-ink-700">{appt.client}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${statusBadge[appt.status]}`}>
                      {appt.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-ink-600">{appt.whatsapp}</td>
                  <td className="px-4 py-3 text-right">
                    <RowMenu
                      onOpenSupport={() => setSupportModal({
                        specialistName:     appt.specialist.name,
                        specialistInitials: appt.specialist.initials,
                        specialistBgColor:  appt.specialist.bgColor,
                        client:             appt.client,
                        date:               appt.date,
                        time:               appt.time,
                      })}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AppointmentSupportModal
        isOpen={!!supportModal}
        onClose={() => setSupportModal(null)}
        appointment={supportModal}
        onSubmit={handleSubmitTicket}
      />
    </>
  )
}
