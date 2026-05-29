'use client'

import { useState } from 'react'
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react'

interface FaqItem {
  id: number
  question: string
  answer: string
}

const initialFaqs: FaqItem[] = [
  { id: 1, question: 'Rezervio nedir?',                          answer: 'Rezervio, bireysel uzmanlar ve kurumsal işletmeler için online randevu yönetim platformudur.' },
  { id: 2, question: 'Deneme süresi ne kadar?',                  answer: '14 gün ücretsiz deneme süresi sunulmaktadır. Kredi kartı gerekmez.' },
  { id: 3, question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?', answer: 'Kredi kartı ve banka kartı ile ödeme yapabilirsiniz. Tüm ödemeler Iyzico güvencesiyle işlenmektedir.' },
  { id: 4, question: 'Aboneliğimi iptal edebilir miyim?',        answer: 'Evet, istediğiniz zaman aboneliğinizi iptal edebilirsiniz. İptal sonrası mevcut dönem sonuna kadar erişiminiz devam eder.' },
  { id: 5, question: 'WhatsApp hatırlatmaları nasıl çalışır?',   answer: 'Randevu öncesinde belirlenen sürede müşterilerinize otomatik WhatsApp mesajı gönderilir.' },
]

export default function FaqView() {
  const [faqs, setFaqs]       = useState<FaqItem[]>(initialFaqs)
  const [expanded, setExpanded] = useState<number | null>(null)
  const [saved, setSaved]     = useState(false)

  const handleChange = (id: number, field: 'question' | 'answer', value: string) => {
    setFaqs(prev => prev.map(f => f.id === id ? { ...f, [field]: value } : f))
  }

  const handleAdd = () => {
    const newId = Date.now()
    setFaqs(prev => [...prev, { id: newId, question: '', answer: '' }])
    setExpanded(newId)
  }

  const handleDelete = (id: number) => {
    setFaqs(prev => prev.filter(f => f.id !== id))
    if (expanded === id) setExpanded(null)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5 sm:p-6">
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <div>
          <h3 className="font-semibold text-ink-900">Sıkça Sorulan Sorular</h3>
          <p className="text-xs text-ink-500 mt-0.5">{faqs.length} soru · Platformda gösterilen SSS içeriği</p>
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-lg transition"
        >
          <Plus className="w-4 h-4" />
          Soru Ekle
        </button>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <div key={faq.id} className="border border-ink-100 rounded-xl overflow-hidden">
            <div
              className="flex items-center gap-3 px-4 py-3 bg-ink-50/60 cursor-pointer hover:bg-ink-50 transition"
              onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
            >
              <span className="text-xs font-bold text-ink-400 w-5 shrink-0">{idx + 1}</span>
              <span className="flex-1 text-sm font-medium text-ink-800 truncate">
                {faq.question || 'Yeni soru...'}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={e => { e.stopPropagation(); handleDelete(faq.id) }}
                  className="w-7 h-7 rounded-lg hover:bg-rose-50 flex items-center justify-center text-ink-400 hover:text-rose-500 transition"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                {expanded === faq.id
                  ? <ChevronUp className="w-4 h-4 text-ink-400" />
                  : <ChevronDown className="w-4 h-4 text-ink-400" />
                }
              </div>
            </div>

            {expanded === faq.id && (
              <div className="p-4 space-y-3 border-t border-ink-100">
                <div>
                  <label className="text-xs font-semibold text-ink-700">Soru</label>
                  <input
                    type="text"
                    value={faq.question}
                    onChange={e => handleChange(faq.id, 'question', e.target.value)}
                    placeholder="Soruyu yazın..."
                    className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-ink-700">Cevap</label>
                  <textarea
                    value={faq.answer}
                    onChange={e => handleChange(faq.id, 'answer', e.target.value)}
                    placeholder="Cevabı yazın..."
                    rows={3}
                    className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-5">
        <button
          onClick={handleSave}
          className="px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition"
        >
          {saved ? 'Kaydedildi ✓' : 'Değişiklikleri Kaydet'}
        </button>
      </div>
    </div>
  )
}
