'use client'

import { useState } from 'react'
import { Check, Crown, AlertCircle, CreditCard, RefreshCw, X } from 'lucide-react'

const features = [
  'Sınırsız randevu',
  'WhatsApp hatırlatma',
  'Premium Panel',
  'Özel profil sayfası',
  'Detaylı istatistikler',
  '7/24 teknik destek',
]

const invoices = [
  { date: '15 May 2026', amount: '₺699', status: 'Ödendi' },
  { date: '15 Nis 2026', amount: '₺699', status: 'Ödendi' },
  { date: '15 Mar 2026', amount: '₺699', status: 'Ödendi' },
  { date: '15 Şub 2026', amount: '₺699', status: 'Ödendi' },
]

export default function SubscriptionView() {
  const [showCancelModal, setShowCancelModal] = useState(false)

  const daysLeft = 31
  const totalDays = 30
  const progressPct = Math.max(0, Math.min(100, ((totalDays - daysLeft) / totalDays) * 100))

  return (
    <>
      <div className="space-y-6 max-w-3xl">

        {/* Mevcut Plan */}
        <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-100 flex items-center justify-center shrink-0">
                <Crown className="w-6 h-6 text-brand-600" strokeWidth={2} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg text-ink-900">Profesyonel Plan</h3>
                  <span className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                    Aktif
                  </span>
                </div>
                <p className="text-sm text-ink-500 mt-0.5">Aylık · ₺699 / ay</p>
              </div>
            </div>
            <button
              onClick={() => setShowCancelModal(true)}
              className="text-xs font-semibold text-rose-600 hover:underline cursor-pointer"
            >
              Aboneliği İptal Et
            </button>
          </div>

          {/* Yenileme */}
          <div className="mt-5 p-4 rounded-xl bg-ink-50 border border-ink-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-ink-500" strokeWidth={2} />
                <span className="text-sm font-semibold text-ink-900">Sonraki yenileme</span>
              </div>
              <span className="text-sm font-bold text-brand-600">15 Haziran 2026</span>
            </div>
            <div className="flex items-center justify-between text-xs text-ink-500 mb-2">
              <span>{daysLeft} gün kaldı</span>
              <span>30 günlük dönem</span>
            </div>
            <div className="h-2 bg-ink-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-500 to-violet-500 rounded-full transition-all"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Özellikler */}
          <div className="mt-5 grid sm:grid-cols-2 gap-2">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-brand-600" strokeWidth={3} />
                </div>
                <span className="text-xs text-ink-700">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ödeme Yöntemi */}
        <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
          <h3 className="font-semibold text-ink-900 mb-4">Ödeme Yöntemi</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-ink-100 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-ink-600" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">•••• •••• •••• 4242</p>
                <p className="text-xs text-ink-500">Son kullanma: 12/27</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-brand-600 hover:underline cursor-pointer">
              Güncelle
            </button>
          </div>
        </div>

       

        {/* Fatura Geçmişi */}
        <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
          <h3 className="font-semibold text-ink-900 mb-4">Fatura Geçmişi</h3>
          <div className="divide-y divide-ink-50">
            {invoices.map((inv) => (
              <div key={inv.date} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-semibold text-ink-900">{inv.date}</p>
                  <p className="text-xs text-ink-500">Profesyonel · Aylık</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                    {inv.status}
                  </span>
                  <span className="text-sm font-bold text-ink-900">{inv.amount}</span>
                  <button className="text-xs text-brand-600 hover:underline cursor-pointer">PDF</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* İptal Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg text-ink-900">Aboneliği İptal Et</h3>
              <button onClick={() => setShowCancelModal(false)} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer">
                <X className="w-4 h-4 text-ink-500" strokeWidth={2} />
              </button>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 mb-5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" strokeWidth={2} />
              <p className="text-xs text-amber-800">
                Aboneliğinizi iptal ederseniz dönem sonunda (15 Haziran 2026) tüm Pro özellikleriniz devre dışı kalacak.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 px-4 py-2.5 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-xl cursor-pointer transition"
              >
                Vazgeç
              </button>
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 px-4 py-2.5 text-sm font-semibold bg-rose-600 hover:bg-rose-700 text-white rounded-xl cursor-pointer transition"
              >
                İptal Et
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}