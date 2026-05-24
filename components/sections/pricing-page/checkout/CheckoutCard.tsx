import Link from 'next/link'
import { Lock } from 'lucide-react'
import type { PlanType, PlanFeature } from '../types'
import PlanFeatureList from './PlanFeatureList'
import AssistanceCard from './AssistanceCard'

const plans: Record<PlanType, {
  title: string
  subtitle: string
  price: string
  features: PlanFeature[]
}> = {
  profesyonel: {
    title: 'Profesyonel',
    subtitle: 'Bireysel profesyoneller için',
    price: '₺699',
    features: [
      { text: '14 Gün Ücretsiz Deneme' },
      { text: 'Dilediğin Zaman İptal Et' },
      { text: 'Komisyonsuz Rezervasyon' },
      { text: '7/24 Teknik Destek' },
    ],
  },
  kurumsal: {
    title: 'Kurumsal',
    subtitle: 'Çok uzmanlı yapılar için',
    price: '₺1.299',
    features: [
      { text: '14 Gün Ücretsiz Deneme' },
      { text: '10 Uzman Koltuğu' },
      { text: 'Merkezi Yönetim Paneli' },
      { text: 'Öncelikli Destek' },
    ],
  },
}

interface Props {
  plan: PlanType
}

export default function CheckoutCard({ plan }: Props) {
  const data = plans[plan]

  return (
    <div className="lg:col-span-5 lg:sticky lg:top-28">
      <div className="bg-white rounded-2xl border border-brand-200 shadow-[0_4px_16px_-4px_rgba(79,70,229,0.12)] p-8 py-16 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-50 rounded-full blur-3xl" />

        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-ink-900">{data.title}</h3>
              <p className="text-xs text-ink-500 mt-0.5">{data.subtitle}</p>
            </div>
            <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-brand-600 text-white">
              POPÜLER
            </span>
          </div>

          <div className="mb-8 flex items-baseline gap-2">
            <span className="text-5xl font-bold text-brand-600 tracking-tight">{data.price}</span>
            <span className="text-sm text-ink-500">/ ay</span>
          </div>

          <PlanFeatureList features={data.features} />

          <Link
            href="/register"
            className="w-full block text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.3)] transition hover:scale-[1.02] active:scale-95 mb-5 cursor-pointer"
          >
            Ödeme Yap
          </Link>

          <div className="flex items-center justify-center gap-2 text-ink-400">
            <Lock className="w-3.5 h-3.5" strokeWidth={2} />
            <span className="text-[11px]">256-bit SSL ile güvenli ödeme</span>
          </div>
        </div>
      </div>
      {/*
      <AssistanceCard />
      */}
    </div>
  )
}