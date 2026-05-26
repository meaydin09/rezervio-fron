'use client'

import { useState,  useEffect, useRef } from 'react'
import { Check, Upload, Plus, X, GraduationCap, Award } from 'lucide-react'

interface Props {
  focusSection?: 'education' | 'certificate'
  onFocusComplete?: () => void
}

interface Education {
  id: number
  school: string
  degree: string
  year: string
}

interface Certificate {
  id: number
  name: string
  issuer: string
  year: string
}
export default function SettingsView({ focusSection, onFocusComplete }: Props) {

  
const educationRef = useRef<HTMLDivElement>(null)
const certificateRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  if (focusSection === 'education' && educationRef.current) {
    setTimeout(() => {
      educationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      educationRef.current?.classList.add('ring-2', 'ring-brand-400', 'ring-offset-2')
      setTimeout(() => {
        educationRef.current?.classList.remove('ring-2', 'ring-brand-400', 'ring-offset-2')
        onFocusComplete?.()
      }, 2000)
    }, 100)
  }
  if (focusSection === 'certificate' && certificateRef.current) {
    setTimeout(() => {
      certificateRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      certificateRef.current?.classList.add('ring-2', 'ring-amber-400', 'ring-offset-2')
      setTimeout(() => {
        certificateRef.current?.classList.remove('ring-2', 'ring-amber-400', 'ring-offset-2')
        onFocusComplete?.()
      }, 2000)
    }, 100)
  }
}, [focusSection])
  const defaultWorkHours = {
    Pazartesi: { enabled: true,  start: '09:00', end: '19:00' },
    Salı:      { enabled: true,  start: '09:00', end: '19:00' },
    Çarşamba:  { enabled: true,  start: '09:00', end: '19:00' },
    Perşembe:  { enabled: true,  start: '09:00', end: '19:00' },
    Cuma:      { enabled: true,  start: '09:00', end: '19:00' },
    Cumartesi: { enabled: false, start: '10:00', end: '16:00' },
    Pazar:     { enabled: false, start: '10:00', end: '16:00' },
  }

  const [workHours, setWorkHours] = useState(defaultWorkHours)
  const [saved, setSaved] = useState(false)
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null)

  const [educations, setEducations] = useState<Education[]>([
    { id: 1, school: 'İstanbul Üniversitesi', degree: 'Klinik Psikoloji Yüksek Lisans', year: '2016' },
    { id: 2, school: 'Boğaziçi Üniversitesi', degree: 'Psikoloji Lisans', year: '2014' },
  ])

  const [certificates, setCertificates] = useState<Certificate[]>([
    { id: 1, name: 'EMDR Terapisti Sertifikası', issuer: 'EMDR Europe', year: '2019' },
  ])

  const [form, setForm] = useState({
    fullName: 'Onur Uzun',
    title: 'Psk.',
    slug: 'onuruzun',
    email: 'onur@rezervio.com',
    phone: '+90 5XX 123 45 67',
    specialty: 'Klinik Psikolog',
    bio: 'İstanbul Üniversitesi mezunu, 8 yıllık deneyimli klinik psikolog.',
    timezone: 'Europe/Istanbul',
    sessionDuration: '50',
    sessionBuffer: '10',
    emailNotif: true,
    whatsappNotif: true,
    autoConfirm: false,
    showPrice: true,
    onlineSession: true,
  })

  const updateDay = (day: string, field: 'enabled' | 'start' | 'end', value: string | boolean) => {
    setWorkHours((prev) => ({
      ...prev,
      [day]: { ...prev[day as keyof typeof prev], [field]: value },
    }))
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const toggle = (key: keyof typeof form) => {
    setForm((f) => ({ ...f, [key]: !f[key as keyof typeof form] }))
  }

  const inputClass = 'mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none'

  const addEducation = () => setEducations((prev) => [...prev, { id: Date.now(), school: '', degree: '', year: '' }])
  const removeEducation = (id: number) => setEducations((prev) => prev.filter((e) => e.id !== id))
  const updateEducation = (id: number, field: keyof Education, value: string) =>
    setEducations((prev) => prev.map((e) => e.id === id ? { ...e, [field]: value } : e))

  const addCertificate = () => setCertificates((prev) => [...prev, { id: Date.now(), name: '', issuer: '', year: '' }])
  const removeCertificate = (id: number) => setCertificates((prev) => prev.filter((c) => c.id !== id))
  const updateCertificate = (id: number, field: keyof Certificate, value: string) =>
    setCertificates((prev) => prev.map((c) => c.id === id ? { ...c, [field]: value } : c))

  return (
    <div className="space-y-6 w-full">

      {/* Profil Bilgileri + Profil Fotoğrafı */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Profil Bilgileri */}
        <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
          <h3 className="font-semibold text-ink-900 mb-5">Profil Bilgileri</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-ink-700">Ad Soyad</label>
              <input value={form.fullName} onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))} className={inputClass} />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">Unvan</label>
              <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className={inputClass} />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">Uzmanlık Alanı</label>
              <input value={form.specialty} onChange={(e) => setForm((f) => ({ ...f, specialty: e.target.value }))} className={inputClass} />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">E-posta</label>
              <input type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className={inputClass} />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">Telefon</label>
              <input value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className={inputClass} />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">Profil URL</label>
              <div className="mt-1 flex">
                <span className="px-3 py-2.5 bg-ink-50 border border-r-0 border-ink-200 rounded-l-lg text-sm text-ink-500 whitespace-nowrap">rezervio.com/</span>
                <input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} className="flex-1 text-sm border border-ink-200 rounded-r-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none min-w-0" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-ink-700">Biyografi</label>
              <textarea rows={3} value={form.bio} onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))} className={`${inputClass} resize-none`} />
            </div>
          </div>
        </div>

        {/* Profil Fotoğrafı */}
        <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6 flex flex-col">
          <h3 className="font-semibold text-ink-900 mb-5">Profil Fotoğrafı</h3>
          <div className="flex flex-col items-center flex-1 justify-between gap-4">
            <div className="relative">
              {profilePhoto ? (
                <img src={profilePhoto} alt="Profil" className="w-28 h-28 rounded-2xl object-cover border-2 border-ink-100" />
              ) : (
                <div className="w-28 h-28 rounded-2xl bg-ink-900 flex items-center justify-center text-white text-3xl font-bold">
                  OU
                </div>
              )}
              {profilePhoto && (
                <button onClick={() => setProfilePhoto(null)} className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white cursor-pointer shadow">
                  <X className="w-3 h-3" strokeWidth={2.5} />
                </button>
              )}
            </div>

            <div className="w-full">
              <label className="w-full border-2 border-dashed border-ink-200 hover:border-brand-300 rounded-xl p-4 text-center hover:bg-brand-50/50 transition cursor-pointer flex flex-col items-center gap-2 block">
                <Upload className="w-5 h-5 text-ink-400" strokeWidth={2} />
                <span className="text-xs font-medium text-ink-600">Fotoğraf Yükle</span>
                <span className="text-[11px] text-ink-400">JPG, PNG · Maks. 5 MB</span>
                <input type="file" accept="image/*" className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onload = (ev) => setProfilePhoto(ev.target?.result as string)
                      reader.readAsDataURL(file)
                    }
                  }}
                />
              </label>
            </div>

            <p className="text-[11px] text-ink-400 text-center">
              Profil fotoğrafınız rezervio.com/{form.slug} adresinde görünür.
            </p>
          </div>
        </div>
      </div>

      {/* Çalışma Saatleri + Eğitim & Sertifika */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Çalışma Saatleri */}
        <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
          <h3 className="font-semibold text-ink-900 mb-1">Çalışma Saatleri & Seans</h3>
          <p className="text-xs text-ink-500 mb-5">Her gün için çalışma saatlerini ayrı ayrı belirleyin</p>

          <div className="space-y-3">
            {Object.entries(workHours).map(([day, val]) => (
              <div key={day} className={`grid grid-cols-[140px_1fr] gap-3 items-center p-3 rounded-xl border transition ${
                val.enabled ? 'border-ink-100 bg-white' : 'border-ink-100 bg-ink-50/50'
              }`}>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => updateDay(day, 'enabled', !val.enabled)}
                    className={`relative w-9 h-5 rounded-full transition cursor-pointer shrink-0 ${val.enabled ? 'bg-emerald-500' : 'bg-ink-200'}`}
                  >
                    <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${val.enabled ? 'right-0.5' : 'left-0.5'}`} />
                  </button>
                  <span className={`text-sm font-semibold ${val.enabled ? 'text-ink-900' : 'text-ink-400'}`}>{day}</span>
                </div>
                {val.enabled ? (
                  <div className="flex items-center gap-2">
                    <input type="time" value={val.start} onChange={(e) => updateDay(day, 'start', e.target.value)}
                      className="text-sm border border-ink-200 rounded-lg px-2 py-1.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
                    <span className="text-ink-400 text-sm">—</span>
                    <input type="time" value={val.end} onChange={(e) => updateDay(day, 'end', e.target.value)}
                      className="text-sm border border-ink-200 rounded-lg px-2 py-1.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
                  </div>
                ) : (
                  <span className="text-xs text-ink-400 font-medium">Kapalı</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 pt-5 border-t border-ink-100 grid grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-ink-700">Seans Süresi (dk)</label>
              <select value={form.sessionDuration} onChange={(e) => setForm((f) => ({ ...f, sessionDuration: e.target.value }))}
                className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer focus:border-brand-500 outline-none">
                {['30', '45', '50', '60', '75', '90'].map((v) => <option key={v}>{v}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">Seans Arası (dk)</label>
              <input type="number" value={form.sessionBuffer} onChange={(e) => setForm((f) => ({ ...f, sessionBuffer: e.target.value }))}
                className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 outline-none" />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">Saat Dilimi</label>
              <select value={form.timezone} onChange={(e) => setForm((f) => ({ ...f, timezone: e.target.value }))}
                className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer focus:border-brand-500 outline-none">
                <option value="Europe/Istanbul">İstanbul (UTC+3)</option>
                <option value="Europe/London">Londra (UTC+0)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Eğitim & Sertifika */}
        <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6 flex flex-col gap-6 overflow-y-auto">

          {/* Eğitim */}
          <div className="transition-all rounded-xl" ref={educationRef}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-brand-600" strokeWidth={2} />
                <h3 className="font-semibold text-ink-900">Eğitim</h3>
              </div>
              <button onClick={addEducation} className="w-6 h-6 rounded-lg bg-brand-50 hover:bg-brand-100 flex items-center justify-center text-brand-600 cursor-pointer transition">
                <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
              </button>
            </div>
            <div className="space-y-3">
              {educations.map((edu) => (
                <div key={edu.id} className="relative p-3 rounded-xl border border-ink-100 bg-ink-50/40 space-y-2">
                  <button onClick={() => removeEducation(edu.id)} className="absolute top-2 right-2 w-5 h-5 rounded flex items-center justify-center text-ink-400 hover:text-rose-500 cursor-pointer transition">
                    <X className="w-3.5 h-3.5" strokeWidth={2} />
                  </button>
                  <input placeholder="Okul adı" value={edu.school} onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                    className="w-full text-xs border border-ink-200 rounded-lg px-2.5 py-1.5 focus:border-brand-500 outline-none bg-white" />
                  <input placeholder="Bölüm / Derece" value={edu.degree} onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    className="w-full text-xs border border-ink-200 rounded-lg px-2.5 py-1.5 focus:border-brand-500 outline-none bg-white" />
                  <input placeholder="Yıl" value={edu.year} onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                    className="w-24 text-xs border border-ink-200 rounded-lg px-2.5 py-1.5 focus:border-brand-500 outline-none bg-white" />
                </div>
              ))}
              {educations.length === 0 && <p className="text-xs text-ink-400 text-center py-2">Henüz eğitim eklenmedi</p>}
            </div>
          </div>

          <div className="border-t border-ink-100" />

          {/* Sertifika */}
          <div ref={certificateRef} className="transition-all rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" strokeWidth={2} />
                <h3 className="font-semibold text-ink-900">Sertifikalar</h3>
              </div>
              <button onClick={addCertificate} className="w-6 h-6 rounded-lg bg-amber-50 hover:bg-amber-100 flex items-center justify-center text-amber-600 cursor-pointer transition">
                <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
              </button>
            </div>
            <div className="space-y-3">
              {certificates.map((cert) => (
                <div key={cert.id} className="relative p-3 rounded-xl border border-ink-100 bg-ink-50/40 space-y-2">
                  <button onClick={() => removeCertificate(cert.id)} className="absolute top-2 right-2 w-5 h-5 rounded flex items-center justify-center text-ink-400 hover:text-rose-500 cursor-pointer transition">
                    <X className="w-3.5 h-3.5" strokeWidth={2} />
                  </button>
                  <input placeholder="Sertifika adı" value={cert.name} onChange={(e) => updateCertificate(cert.id, 'name', e.target.value)}
                    className="w-full text-xs border border-ink-200 rounded-lg px-2.5 py-1.5 focus:border-brand-500 outline-none bg-white" />
                  <input placeholder="Veren kurum" value={cert.issuer} onChange={(e) => updateCertificate(cert.id, 'issuer', e.target.value)}
                    className="w-full text-xs border border-ink-200 rounded-lg px-2.5 py-1.5 focus:border-brand-500 outline-none bg-white" />
                  <input placeholder="Yıl" value={cert.year} onChange={(e) => updateCertificate(cert.id, 'year', e.target.value)}
                    className="w-24 text-xs border border-ink-200 rounded-lg px-2.5 py-1.5 focus:border-brand-500 outline-none bg-white" />
                </div>
              ))}
              {certificates.length === 0 && <p className="text-xs text-ink-400 text-center py-2">Henüz sertifika eklenmedi</p>}
            </div>

            
          </div>
        </div>
      </div>

      {/* Bildirim & Tercihler */}
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
        <h3 className="font-semibold text-ink-900 mb-5">Bildirim & Tercihler</h3>
        <div className="space-y-4">
          {[
            { key: 'emailNotif',     label: 'E-posta Bildirimleri',  sub: 'Yeni randevu ve iptal bildirimleri'          },
            { key: 'whatsappNotif',  label: 'WhatsApp Bildirimleri', sub: 'Otomatik hatırlatma mesajları'               },
            { key: 'autoConfirm',   label: 'Otomatik Onay',         sub: 'Randevuları otomatik olarak onayla'          },
            { key: 'showPrice',     label: 'Fiyatları Göster',      sub: 'Profil sayfasında hizmet fiyatlarını göster' },
            { key: 'onlineSession', label: 'Online Seans',          sub: 'Video görüşme ile seans kabul et'            },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-ink-900">{item.label}</div>
                <div className="text-xs text-ink-500">{item.sub}</div>
              </div>
              <button
                onClick={() => toggle(item.key as keyof typeof form)}
                className={`relative w-11 h-6 rounded-full transition cursor-pointer ${
                  form[item.key as keyof typeof form] ? 'bg-emerald-500' : 'bg-ink-200'
                }`}
              >
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${
                  form[item.key as keyof typeof form] ? 'right-0.5' : 'left-0.5'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Kaydet */}
      <div className="flex items-center gap-3 pb-6">
        <button
          onClick={handleSave}
          className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer transition"
        >
          {saved && <Check className="w-4 h-4" strokeWidth={2.5} />}
          {saved ? 'Kaydedildi' : 'Değişiklikleri Kaydet'}
        </button>
        {saved && <span className="text-sm text-emerald-600 font-medium">✓ Başarıyla güncellendi</span>}
      </div>
    </div>
  )
}