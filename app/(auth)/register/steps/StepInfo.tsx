import { ArrowRight, ArrowLeft } from 'lucide-react'
import type { AccountType, RegisterFormData, StepNumber } from '../types'
import SpecChip from '../ui/SpecChip'
import PasswordStrength from '../ui/PasswordStrength'

interface Props {
  form: RegisterFormData
  onUpdate: <K extends keyof RegisterFormData>(key: K, value: RegisterFormData[K]) => void
  onToggleSpec: (spec: string) => void
  onNext: (step: StepNumber) => void
  onBack: (step: StepNumber) => void
}

const specializations = [
  '🧠 Psikolog', '🥗 Diyetisyen', '⚖️ Avukat',
  '🦷 Diş Hekimi', '🐾 Veteriner', '💄 Güzellik Salonu',
  '💇 Kuaför', '💆 Estetisyen', '+ Diğer',
]

const inputClass = 'mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition'

export default function StepInfo({ form, onUpdate, onToggleSpec, onNext, onBack }: Props) {
  const isBireysel = form.accountType === 'bireysel'

  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-900">
        {isBireysel ? 'Kendinden bahset' : 'Firmandan bahset'}
      </h1>
      <p className="mt-1.5 text-sm text-ink-600">
        {isBireysel ? 'Profilin için gerekli temel bilgiler.' : 'Kurumsal hesap için temel bilgiler.'}
      </p>

      <div className="mt-6 space-y-4">
        {isBireysel ? (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-ink-700">Ad</label>
              <input
                type="text"
                placeholder="Onur"
                value={form.firstName}
                onChange={(e) => onUpdate('firstName', e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">Soyad</label>
              <input
                type="text"
                placeholder="Uzun"
                value={form.lastName}
                onChange={(e) => onUpdate('lastName', e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-ink-700">Firma / Kurum Adı</label>
              <input
                type="text"
                placeholder="Webonya"
                value={form.companyName}
                onChange={(e) => onUpdate('companyName', e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-ink-700">Yetkili Adı</label>
                <input
                  type="text"
                  placeholder="Onur"
                  value={form.authorizedFirstName}
                  onChange={(e) => onUpdate('authorizedFirstName', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-700">Yetkili Soyadı</label>
                <input
                  type="text"
                  placeholder="Uzun"
                  value={form.authorizedLastName}
                  onChange={(e) => onUpdate('authorizedLastName', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        )}

        <div>
          <label className="text-xs font-semibold text-ink-700">Faaliyet Alanı</label>
          <div className="mt-1.5 flex flex-wrap gap-2">
            {specializations.map((spec) => (
              <SpecChip
                key={spec}
                label={spec}
                selected={form.specializations.includes(spec)}
                onClick={() => onToggleSpec(spec)}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-ink-700">E-posta</label>
          <input
            type="email"
            placeholder="ornek@mail.com"
            value={form.email}
            onChange={(e) => onUpdate('email', e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-ink-700">Şifre</label>
          <input
            type="password"
            placeholder="En az 8 karakter"
            value={form.password}
            onChange={(e) => onUpdate('password', e.target.value)}
            className={inputClass}
          />
          <PasswordStrength password={form.password} />
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between gap-3">
        <button
          onClick={() => onBack(1)}
          className="bg-ink-100 hover:bg-ink-200 text-ink-800 font-semibold px-5 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
          Geri
        </button>
        <button
          onClick={() => onNext(3)}
          className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] transition flex items-center gap-2 cursor-pointer"
        >
          Devam Et
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}