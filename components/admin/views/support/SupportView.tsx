'use client'

import { useState, useMemo } from 'react'
import TicketReplyModal, { type Ticket, type TicketStatus } from '../../modals/TicketReplyModal'

const statusColors: Record<TicketStatus, string> = {
  'Açık':        'bg-blue-50 text-blue-700',
  'İnceleniyor': 'bg-amber-50 text-amber-700',
  'Beklemede':   'bg-ink-100 text-ink-600',
  'Kapatıldı':   'bg-emerald-50 text-emerald-700',
}

const initialTickets: Ticket[] = [
  { id: 'T-2840', initials: 'DK', name: 'Deniz Kaya',       bgColor: 'bg-amber-600',  priority: 'Acil',   priorityColor: 'bg-rose-50 text-rose-700',   title: 'WhatsApp hatırlatması gitmiyor',                       meta: '#T-2840 · 23 dakika önce · Profesyonel üye', status: 'Açık' },
  { id: 'T-2839', initials: 'EM', name: 'Ela Mete',          bgColor: 'bg-violet-600', priority: 'Yüksek', priorityColor: 'bg-amber-50 text-amber-700',  title: 'Slug değiştirmek istiyorum',                           meta: '#T-2839 · 1 saat önce · Deneme',             status: 'Açık' },
  { id: 'T-2838', initials: 'RC', name: 'Renkli Cup Kuaför', bgColor: 'bg-sky-600',    priority: 'Normal', priorityColor: 'bg-ink-100 text-ink-600',     title: 'Kurumsal hesabıma 3 uzman daha ekleyebilir misiniz?', meta: '#T-2838 · 3 saat önce · Kurumsal',           status: 'İnceleniyor' },
]

type Tab = 'open' | 'closed'

export default function SupportView() {
  const [tickets, setTickets]           = useState<Ticket[]>(initialTickets)
  const [tab, setTab]                   = useState<Tab>('open')
  const [priorityFilter, setPriorityFilter] = useState('Tümü')
  const [selected, setSelected]         = useState<Ticket | null>(null)

  const openTickets   = useMemo(() => tickets.filter(t => t.status !== 'Kapatıldı'), [tickets])
  const closedTickets = useMemo(() => tickets.filter(t => t.status === 'Kapatıldı'), [tickets])
  const activeList    = tab === 'open' ? openTickets : closedTickets

  const availablePriorities = useMemo(() => {
    const priorities = Array.from(new Set(activeList.map(t => t.priority)))
    return ['Tümü', ...priorities]
  }, [activeList])

  const filtered = useMemo(() =>
    priorityFilter === 'Tümü' ? activeList : activeList.filter(t => t.priority === priorityFilter),
    [activeList, priorityFilter]
  )

  const handleSend = (ticketId: string, _reply: string, status: TicketStatus, close: boolean) => {
    setTickets(prev => prev.map(t =>
      t.id === ticketId ? { ...t, status: close ? 'Kapatıldı' : status } : t
    ))
  }

  const handleReopen = (ticketId: string) => {
    setTickets(prev => prev.map(t => t.id === ticketId ? { ...t, status: 'Açık' } : t))
  }

  const handleTabChange = (next: Tab) => {
    setTab(next)
    setPriorityFilter('Tümü')
  }

  return (
    <>
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">

        {/* Tabs */}
        <div className="flex items-center gap-1 mb-5 bg-ink-50 rounded-xl p-1 w-fit">
          <button
            onClick={() => handleTabChange('open')}
            className={`px-4 py-1.5 text-sm font-semibold rounded-lg transition ${tab === 'open' ? 'bg-white text-ink-900 shadow-sm' : 'text-ink-500 hover:text-ink-700'}`}
          >
            Açık
            {openTickets.length > 0 && (
              <span className="ml-1.5 text-[11px] bg-brand-100 text-brand-700 px-1.5 py-0.5 rounded-full">{openTickets.length}</span>
            )}
          </button>
          <button
            onClick={() => handleTabChange('closed')}
            className={`px-4 py-1.5 text-sm font-semibold rounded-lg transition ${tab === 'closed' ? 'bg-white text-ink-900 shadow-sm' : 'text-ink-500 hover:text-ink-700'}`}
          >
            Kapatılmış
            {closedTickets.length > 0 && (
              <span className="ml-1.5 text-[11px] bg-ink-200 text-ink-600 px-1.5 py-0.5 rounded-full">{closedTickets.length}</span>
            )}
          </button>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <p className="text-xs text-ink-500">
            {filtered.length} talep{tab === 'open' ? ' · ortalama yanıt 2sa 14dk' : ''}
          </p>
          <select
            value={priorityFilter}
            onChange={e => setPriorityFilter(e.target.value)}
            className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {availablePriorities.map(p => (
              <option key={p} value={p}>{p === 'Tümü' ? 'Tüm öncelikler' : p}</option>
            ))}
          </select>
        </div>

        {/* Liste */}
        <div className="space-y-2">
          {filtered.length === 0 && (
            <p className="text-sm text-ink-400 text-center py-8">
              {tab === 'open' ? 'Açık talep bulunmuyor.' : 'Kapatılmış talep bulunmuyor.'}
            </p>
          )}
          {filtered.map((t) => (
            <div key={t.id} className="p-4 rounded-xl border border-ink-100 hover:bg-ink-50/50 transition">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className={`w-10 h-10 rounded-lg ${t.bgColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-ink-900">{t.name}</span>
                      <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${t.priorityColor}`}>{t.priority}</span>
                      <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${statusColors[t.status]}`}>{t.status}</span>
                    </div>
                    <div className="text-sm text-ink-700 mt-1">{t.title}</div>
                    <div className="text-xs text-ink-500 mt-1">{t.meta}</div>
                  </div>
                </div>
                {tab === 'open' ? (
                  <button
                    onClick={() => setSelected(t)}
                    className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold px-3 py-2 rounded-lg shrink-0 cursor-pointer transition"
                  >
                    Yanıtla
                  </button>
                ) : (
                  <button
                    onClick={() => handleReopen(t.id)}
                    className="bg-ink-100 hover:bg-ink-200 text-ink-700 text-xs font-semibold px-3 py-2 rounded-lg shrink-0 cursor-pointer transition"
                  >
                    Yeniden Aç
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <TicketReplyModal
        isOpen={!!selected}
        ticket={selected}
        onClose={() => setSelected(null)}
        onSend={handleSend}
      />
    </>
  )
}
