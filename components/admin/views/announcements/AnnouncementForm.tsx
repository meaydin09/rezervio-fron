'use client'

import { Send, X } from 'lucide-react'
import { useState } from 'react'

interface FormState {
  title: string
  message: string
  recipient: string
  channel: string
}

function ConfirmModal({
  isOpen,
  form,
  onConfirm,
  onClose,
}: {
  isOpen: boolean
  form: FormState
  onConfirm: () => void
  onClose: () => void
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between p-5 border-b border-ink-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center">
              <Send className="w-4 h-4 text-brand-600" />
            </div>
            <h3 className="font-semibold text-ink-900">Duyuruyu Gönder</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-3">
          <p className="text-sm text-ink-600">Aşağıdaki duyuru gönderilecek. Onaylıyor musunuz?</p>
          <div className="rounded-xl border border-ink-100 bg-ink-50 p-4 space-y-2 text-sm">
            <div className="flex gap-2">
              <span className="text-ink-400 w-16 shrink-0">Başlık</span>
              <span className="font-semibold text-ink-900 truncate">{form.title || '—'}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-ink-400 w-16 shrink-0">Alıcı</span>
              <span className="text-ink-700">{form.recipient}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-ink-400 w-16 shrink-0">Kanal</span>
              <span className="text-ink-700">{form.channel}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 p-5 border-t border-ink-100 bg-ink-50/40">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100 rounded-lg transition"
          >
            Vazgeç
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition"
          >
            Evet, Gönder
          </button>
        </div>
      </div>
    </div>
  )
}

export default function AnnouncementForm() {
  const [form, setForm] = useState<FormState>({
    title:     '',
    message:   '',
    recipient: 'Tüm kullanıcılar (1.247)',
    channel:   'E-posta + Panel',
  })
  const [confirmOpen, setConfirmOpen] = useState(false)

  const canSend = form.title.trim() !== '' && form.message.trim() !== ''

  const handleConfirm = () => {
    setConfirmOpen(false)
    setForm({ title: '', message: '', recipient: 'Tüm kullanıcılar (1.247)', channel: 'E-posta + Panel' })
  }

  return (
    <>
      <div className="lg:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5 sm:p-6">
        <h3 className="font-semibold text-ink-900">Yeni Duyuru Oluştur</h3>
        <p className="text-xs text-ink-500 mt-0.5">Tüm üyelere veya seçili gruba mesaj gönder</p>
        <div className="mt-5 space-y-4">
          <div>
            <label className="text-xs font-semibold text-ink-700">Başlık</label>
            <input
              type="text"
              value={form.title}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              placeholder="Örn: Yeni WhatsApp özellikleri"
              className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">Mesaj</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              placeholder="Duyuru içeriği..."
              className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-ink-700">Alıcı</label>
              <select
                value={form.recipient}
                onChange={e => setForm(f => ({ ...f, recipient: e.target.value }))}
                className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer"
              >
                <option>Tüm kullanıcılar (1.247)</option>
                <option>Sadece Profesyonel (704)</option>
                <option>Sadece Kurumsal (188)</option>
                <option>Sadece Deneme (78)</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">Kanal</label>
              <select
                value={form.channel}
                onChange={e => setForm(f => ({ ...f, channel: e.target.value }))}
                className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer"
              >
                <option>E-posta + Panel</option>
                <option>Sadece Panel</option>
                <option>Sadece E-posta</option>
                <option>WhatsApp</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setConfirmOpen(true)}
              disabled={!canSend}
              className="bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold px-4 py-2.5 rounded-xl cursor-pointer transition"
            >
              Şimdi Gönder
            </button>
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={confirmOpen}
        form={form}
        onConfirm={handleConfirm}
        onClose={() => setConfirmOpen(false)}
      />
    </>
  )
}
