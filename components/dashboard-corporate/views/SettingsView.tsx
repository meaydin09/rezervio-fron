'use client'

import { useState } from 'react'
import { Check, Upload, X ,ImageIcon  } from 'lucide-react'

interface GalleryImage {
  id: number
  url: string
  name: string
}

export default function SettingsView() {
  const [saved, setSaved] = useState(false)
  const [logo, setLogo] = useState<string | null>(null)
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = (ev) => {
        setGalleryImages((prev) => [
          ...prev,
          { id: Date.now() + Math.random(), url: ev.target?.result as string, name: file.name },
        ])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeGalleryImage = (id: number) => {
    setGalleryImages((prev) => prev.filter((img) => img.id !== id))
  }
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

  const [form, setForm] = useState({
    clinicName: 'NovaPsy Klinik',
    slug: 'novapsy-klinik',
    email: 'info@novapsy.com',
    phone: '+90 212 555 01 23',
    address: 'Levent, Büyükdere Cad. No:199, İstanbul',
    bio: 'İstanbul\'un köklü psikoloji kliniklerinden biri. Uzman kadromuzla hizmetinizdeyiz.',
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

  return (
    <div className="space-y-6 w-full">

      {/* Klinik Bilgileri + Logo */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Klinik Bilgileri */}
        <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
          <h3 className="font-semibold text-ink-900 mb-5">Klinik Bilgileri</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-ink-700">Klinik Adı</label>
              <input value={form.clinicName} onChange={(e) => setForm((f) => ({ ...f, clinicName: e.target.value }))} className={inputClass} />
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
                <input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                  className="flex-1 text-sm border border-ink-200 rounded-r-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none min-w-0" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">Adres</label>
              <input value={form.address} onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))} className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-ink-700">Klinik Hakkında</label>
              <textarea rows={3} value={form.bio} onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))} className={`${inputClass} resize-none`} />
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6 flex flex-col">
          <h3 className="font-semibold text-ink-900 mb-5">Klinik Logosu</h3>
          <div className="flex flex-col items-center flex-1 justify-between gap-4">
            <div className="relative">
              {logo ? (
                <img src={logo} alt="Logo" className="w-28 h-28 rounded-2xl object-cover border-2 border-ink-100" />
              ) : (
                <div className="w-28 h-28 rounded-2xl bg-ink-900 flex items-center justify-center text-white text-3xl font-bold">
                  NP
                </div>
              )}
              {logo && (
                <button onClick={() => setLogo(null)} className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white cursor-pointer shadow">
                  <X className="w-3 h-3" strokeWidth={2.5} />
                </button>
              )}
            </div>
            <div className='flex item-center justify-center'>
             <span>
                  (1:1)
             </span>
            </div>
            

            <div className="w-full">
              <label className="w-full border-2 border-dashed border-ink-200 hover:border-brand-300 rounded-xl p-4 text-center hover:bg-brand-50/50 transition cursor-pointer flex flex-col items-center gap-2 block">
                <Upload className="w-5 h-5 text-ink-400" strokeWidth={2} />
                <span className="text-xs font-medium text-ink-600">Logo Yükle</span>
                <span className="text-[11px] text-ink-400">JPG, PNG · Maks. 5 MB</span>
                <input type="file" accept="image/*" className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onload = (ev) => setLogo(ev.target?.result as string)
                      reader.readAsDataURL(file)
                    }
                  }}
                />
              </label>
            </div>

            <p className="text-[11px] text-ink-400 text-center">
              Logonuz rezervio.com/{form.slug} adresinde görünür.
            </p>
          </div>
        </div>
      </div>

      {/* Çalışma Saatleri */}
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
        <h3 className="font-semibold text-ink-900 mb-1">Çalışma Saatleri & Randevu</h3>
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
            <label className="text-xs font-semibold text-ink-700">Randevu Arası (dk)</label>
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
      {/* Klinik Galerisi */}
<div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
  <div className="flex items-center justify-between mb-5">
    <div>
      <h3 className="font-semibold text-ink-900">Klinik Galerisi</h3>
      <p className="text-xs text-ink-500 mt-0.5">Kliniğinizin fotoğraflarını ekleyin, profil sayfanızda görünsün</p>
    </div>
    <span className="text-xs text-ink-400">{galleryImages.length} / 10 fotoğraf</span>
  </div>

  {/* Yüklenen görseller */}
  {galleryImages.length > 0 && (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
      {galleryImages.map((img) => (
        <div key={img.id} className="relative group aspect-square rounded-xl overflow-hidden border border-ink-100">
          <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink-900/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <button
              onClick={() => removeGalleryImage(img.id)}
              className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white cursor-pointer"
            >
              <X className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )}

  {/* Upload alanı */}
  {galleryImages.length < 10 && (
    <label className="w-full border-2 border-dashed border-ink-200 hover:border-brand-300 rounded-xl p-6 text-center hover:bg-brand-50/50 transition cursor-pointer flex flex-col items-center gap-3 block">
      {galleryImages.length === 0 ? (
        <>
          <div className="w-12 h-12 rounded-2xl bg-ink-100 flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-ink-400" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-700">Klinik fotoğrafları yükle</p>
            <p className="text-xs text-ink-400 mt-0.5">JPG, PNG · Maks. 5 MB · En fazla 10 fotoğraf</p>
          </div>
        </>
      ) : (
        <div className="flex items-center gap-2 text-brand-600">
          <Upload className="w-4 h-4" strokeWidth={2} />
          <span className="text-sm font-semibold">Daha fazla fotoğraf ekle</span>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleGalleryUpload}
      />
    </label>
  )}

  {galleryImages.length > 0 && (
    <p className="text-[11px] text-ink-400 mt-3">
      Fotoğraflar rezervio.com/novapsy-klinik profilinizde görünür. Sürükleyerek sıralayabilirsiniz.
    </p>
  )}
</div>

      {/* Bildirim & Tercihler */}
      <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-6">
        <h3 className="font-semibold text-ink-900 mb-5">Bildirim & Tercihler</h3>
        <div className="space-y-4">
          {[
            { key: 'emailNotif',    label: 'E-posta Bildirimleri',  sub: 'Yeni randevu ve iptal bildirimleri'          },
            { key: 'whatsappNotif', label: 'WhatsApp Bildirimleri', sub: 'Otomatik hatırlatma mesajları'               },
            { key: 'autoConfirm',  label: 'Otomatik Onay',         sub: 'Randevuları otomatik olarak onayla'          },
            { key: 'showPrice',    label: 'Fiyatları Göster',      sub: 'Profil sayfasında hizmet fiyatlarını göster' },
            { key: 'onlineSession',label: 'Online Seans',          sub: 'Video görüşme ile seans kabul et'            },
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
