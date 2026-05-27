'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'
import type { AdminUser } from '../types'

interface Props {
  user: AdminUser
  onClose: () => void
  onSave: () => void
}

type Tab = 'profile' | 'subscription' | 'appointments' | 'activity'

export default function UserEditModal({ user, onClose, onSave }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('profile')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'profile',      label: 'Profil'      },
    { id: 'subscription', label: 'Abonelik'    },
    { id: 'appointments', label: 'Randevular'  },
    { id: 'activity',     label: 'Aktivite'    },
  ]

  return (
    <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] max-w-3xl w-full max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-ink-100 p-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${user.bgColor} flex items-center justify-center text-white font-bold`}>
              {user.initials}
            </div>
            <div>
              <h3 className="font-bold text-lg text-ink-900">{user.name}</h3>
              <p className="text-xs text-ink-500">rezervio.co/{user.slug} · {user.plan}</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center cursor-pointer transition">
            <X className="w-4 h-4 text-ink-500" strokeWidth={2} />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-5 pt-4 border-b border-ink-100">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-semibold border-b-2 whitespace-nowrap cursor-pointer transition ${
                  activeTab === tab.id
                    ? 'border-brand-600 text-brand-600'
                    : 'border-transparent text-ink-600 hover:text-ink-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="p-5 sm:p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Ad', value: user.name.split(' ')[1] ?? '' },
                { label: 'Soyad', value: user.name.split(' ')[2] ?? '' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="text-xs font-semibold text-ink-700">{f.label}</label>
                  <input defaultValue={f.value} className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-ink-700">Kullanıcı Adı (Slug)</label>
                <div className="mt-1 flex">
                  <span className="px-3 py-2.5 bg-ink-50 border border-r-0 border-ink-200 rounded-l-lg text-sm text-ink-600 font-medium whitespace-nowrap">rezervio.co/</span>
                  <input defaultValue={user.slug} className="flex-1 text-sm border border-ink-200 rounded-r-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none min-w-0" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-700">E-posta</label>
                <input defaultValue={user.email} className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-ink-100">
              <h4 className="text-sm font-semibold text-ink-900 mb-3">Tehlikeli Bölge</h4>
              <div className="flex flex-wrap gap-2">
                <button className="text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-lg cursor-pointer transition">Şifre Sıfırla</button>
                <button className="text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-lg cursor-pointer transition">Hesabı Askıya Al</button>
                <button className="text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-2 rounded-lg cursor-pointer transition">Hesabı Sil</button>
              </div>
            </div>
          </div>
        )}

        {/* Subscription Tab */}
        {activeTab === 'subscription' && (
          <div className="p-5 sm:p-6">
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <div className="text-xs text-brand-700 font-semibold uppercase tracking-wider">Mevcut Plan</div>
                  <div className="text-xl font-bold text-brand-900 mt-1">{user.plan} · Aylık</div>
                  <div className="text-xs text-brand-700 mt-0.5">{user.mrr}/ay · Sonraki ödeme: 15 Haz 2026</div>
                </div>
                <span className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Aktif</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-ink-100">
              <button className="text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-2 rounded-lg cursor-pointer transition">Aboneliği İptal Et</button>
              <button className="text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-lg cursor-pointer transition">Ödeme İade</button>
              <button className="text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 px-3 py-2 rounded-lg cursor-pointer transition">Kupon Uygula</button>
            </div>
          </div>
        )}

        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <div className="p-5 sm:p-6">
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: 'Bu ay',      value: '142',  color: '' },
                { label: 'Tamamlanan', value: '128',  color: 'text-emerald-600' },
                { label: 'İptal',      value: '14',   color: 'text-rose-600' },
              ].map((s) => (
                <div key={s.label} className="bg-ink-50 rounded-xl p-3 text-center">
                  <div className="text-xs text-ink-500">{s.label}</div>
                  <div className={`text-lg font-bold mt-0.5 ${s.color || 'text-ink-900'}`}>{s.value}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-ink-500 text-center">Randevu detayları backend bağlandığında burada görünecek.</p>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="p-5 sm:p-6">
            <p className="text-xs text-ink-500">Aktivite geçmişi backend bağlandığında burada görünecek.</p>
          </div>
        )}

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-ink-100 p-4 flex items-center justify-between gap-3">
          <Link href={`/${user.slug}`} className="text-xs font-semibold text-brand-600 hover:underline">
            Kullanıcının sayfasını gör →
          </Link>
          <div className="flex gap-2">
            <button onClick={onClose} className="px-4 py-2 text-sm font-semibold bg-ink-100 hover:bg-ink-200 text-ink-800 rounded-lg cursor-pointer transition">İptal</button>
            <button onClick={onSave} className="px-4 py-2 text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg cursor-pointer transition">Değişiklikleri Kaydet</button>
          </div>
        </div>
      </div>
    </div>
  )
}