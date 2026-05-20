import { ArrowLeft, Check, Info } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { RegisterFormData, StepNumber } from '../types'

interface Props {
  form: RegisterFormData
  onUpdate: <K extends keyof RegisterFormData>(key: K, value: RegisterFormData[K]) => void
  onBack: (step: StepNumber) => void
}

export default function StepSlug({ form, onUpdate, onBack }: Props) {
  const router = useRouter()

  const initials = form.firstName && form.lastName
    ? `${form.firstName[0]}${form.lastName[0]}`.toUpperCase()
    : 'OU'

  const displayName = form.firstName && form.lastName
    ? `${form.firstName} ${form.lastName}`
    : 'Psk. Onur Uzun'

  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-900">
        Profil linkin
      </h1>
      <p className="mt-1.5 text-sm text-ink-600">
        Danışanlarının kullanacağı özel linkin. İstediğin zaman değiştirebilirsin.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="text-xs font-semibold text-ink-700">Senin Linkin</label>
          <div className="mt-1 flex">
            <span className="px-3 py-2.5 bg-ink-50 border border-r-0 border-ink-200 rounded-l-lg text-sm text-ink-600 font-medium whitespace-nowrap">
              rezervio.com/
            </span>
            <input
              type="text"
              placeholder="onuruzun"
              value={form.slug}
              onChange={(e) => onUpdate('slug', e.target.value)}
              className="flex-1 text-sm border border-ink-200 rounded-r-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition min-w-0"
            />
          </div>
          {form.slug && (
            <p className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
              <Check className="w-3 h-3" strokeWidth={3} />
              Link kullanılabilir
            </p>
          )}
        </div>

        {/* Önizleme */}
        <div className="bg-ink-50 rounded-xl p-4">
          <div className="text-xs font-semibold text-ink-700 mb-2">Önizleme</div>
          <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-ink-100">
            <div className="w-10 h-10 rounded-xl bg-ink-900 flex items-center justify-center font-bold text-white text-sm">
              {initials}
            </div>
            <div>
              <div className="text-sm font-semibold text-ink-900">{displayName}</div>
              <div className="text-[11px] text-ink-500 font-mono">
                rezervio.com/{form.slug || 'onuruzun'}
              </div>
            </div>
          </div>
        </div>

        {/* Şartlar */}
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.termsAccepted}
            onChange={(e) => onUpdate('termsAccepted', e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500"
          />
          <span className="text-xs text-ink-600 leading-relaxed">
            <Link href="/sartlar" target="_blank" className="underline">Şartlar ve koşulları</Link>,{' '}
            <Link href="/gizlilik" target="_blank" className="underline">Gizlilik politikasını</Link> ve{' '}
            <Link href="/kvkk" target="_blank" className="underline">KVKK aydınlatma metnini</Link> okudum ve kabul ediyorum.
          </span>
        </label>

        {/* Bilgi kutusu */}
        <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 flex items-start gap-3">
          <Info className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" strokeWidth={2} />
          <div className="text-xs text-brand-900">
            <strong>14 gün ücretsiz deneme</strong> ile başla. Bu süre içinde Profesyonel paketin tüm özellikleri açık. Kart bilgisi istemiyoruz.
          </div>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between gap-3">
        <button
          onClick={() => onBack(2)}
          className="bg-ink-100 hover:bg-ink-200 text-ink-800 font-semibold px-5 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
          Geri
        </button>
        <button
          onClick={() => router.push('/dashboard')}
          className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] transition flex items-center gap-2 cursor-pointer"
        >
          Hesabımı Oluştur
          <Check className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}