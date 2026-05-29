'use client'

import { Plus, Pencil, Trash2, Clock, Megaphone } from 'lucide-react'
import { useState, useMemo } from 'react'

// daysAgo: kaç gün önce olduğunu tutar — filtre buna göre çalışır
const logs = [
  { Icon: Plus,      bg: 'bg-emerald-100', color: 'text-emerald-600', daysAgo: 0,  text: <><strong>Süper Admin</strong> yeni kullanıcı oluşturdu: <strong>Selma Aydın</strong></>,                          meta: '10 dakika önce · IP: 85.99.x.x' },
  { Icon: Pencil,    bg: 'bg-brand-100',   color: 'text-brand-600',   daysAgo: 0,  text: <><strong>Süper Admin</strong>, <strong>Onur Uzun</strong> kullanıcısının planını güncelledi</>,                   meta: '45 dakika önce · IP: 85.99.x.x' },
  { Icon: Trash2,    bg: 'bg-rose-100',    color: 'text-rose-600',    daysAgo: 0,  text: <><strong>Süper Admin</strong>, <strong>spam-user-42</strong> hesabını sildi</>,                                   meta: '2 saat önce · IP: 85.99.x.x'   },
  { Icon: Clock,     bg: 'bg-amber-100',   color: 'text-amber-600',   daysAgo: 0,  text: <><strong>Süper Admin</strong>, <strong>BeautyHub</strong> aboneliğini askıya aldı (ödeme problemi)</>,            meta: '5 saat önce · IP: 85.99.x.x'   },
  { Icon: Megaphone, bg: 'bg-violet-100',  color: 'text-violet-600',  daysAgo: 3,  text: <><strong>Süper Admin</strong> duyuru gönderdi: <em>"Mayıs ayı bakım duyurusu"</em> → 1.247 alıcı</>,            meta: '3 gün önce · IP: 85.99.x.x'    },
  { Icon: Pencil,    bg: 'bg-brand-100',   color: 'text-brand-600',   daysAgo: 8,  text: <><strong>Süper Admin</strong>, <strong>Renkli Cup Kuaför</strong> kurumsal planını yükseltti</>,                  meta: '8 gün önce · IP: 85.99.x.x'    },
  { Icon: Trash2,    bg: 'bg-rose-100',    color: 'text-rose-600',    daysAgo: 15, text: <><strong>Süper Admin</strong>, <strong>test-account-7</strong> hesabını sildi</>,                                 meta: '15 gün önce · IP: 85.99.x.x'   },
  { Icon: Clock,     bg: 'bg-amber-100',   color: 'text-amber-600',   daysAgo: 40, text: <><strong>Süper Admin</strong>, <strong>Ela Mete</strong> aboneliğini yeniledi</>,                                 meta: '40 gün önce · IP: 85.99.x.x'   },
]

const RANGE_OPTIONS = [
  { label: 'Son 7 gün',  days: 7  },
  { label: 'Son 30 gün', days: 30 },
  { label: 'Son 90 gün', days: 90 },
]

export default function AuditView() {
  const [range, setRange] = useState(7)

  const filtered = useMemo(() =>
    logs.filter(l => l.daysAgo <= range),
    [range]
  )

  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5">
      <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
        <div>
          <h3 className="font-semibold text-ink-900">İşlem Geçmişi</h3>
          <p className="text-xs text-ink-500 mt-0.5">{filtered.length} kayıt · Tüm yönetici hareketleri</p>
        </div>
        <select
          value={range}
          onChange={e => setRange(Number(e.target.value))}
          className="text-sm border border-ink-200 rounded-lg px-3 py-2 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          {RANGE_OPTIONS.map(o => (
            <option key={o.days} value={o.days}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        {filtered.length === 0 && (
          <p className="text-sm text-ink-400 text-center py-8">Bu aralıkta işlem bulunamadı.</p>
        )}
        {filtered.map((log, i) => {
          const Icon = log.Icon
          return (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-ink-50 transition">
              <div className={`w-8 h-8 rounded-full ${log.bg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-4 h-4 ${log.color}`} strokeWidth={2} />
              </div>
              <div className="flex-1 text-sm text-ink-900">
                {log.text}
                <div className="text-xs text-ink-500 mt-0.5">{log.meta}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
