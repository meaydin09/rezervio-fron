'use client'

import { X, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

interface CancelSubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
  userName: string
  plan: string
  onConfirm: () => void
}

export default function CancelSubscriptionModal({
  isOpen,
  onClose,
  userName,
  plan,
  onConfirm,
}: CancelSubscriptionModalProps) {
  const [step, setStep] = useState<'info' | 'confirm'>('info')

  if (!isOpen) return null

  const handleClose = () => {
    onClose()
    setStep('info')
  }

  const handleConfirm = () => {
    onConfirm()
    handleClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">

        {step === 'info' && (
          <>
            <div className="flex items-center justify-between p-5 border-b border-ink-100">
              <div>
                <h3 className="font-semibold text-ink-900">Aboneliği Pasife Al</h3>
                <p className="text-xs text-ink-500 mt-0.5">{userName} · {plan}</p>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-lg hover:bg-ink-100 flex items-center justify-center text-ink-500 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div className="text-sm text-amber-800">
                  Abonelik askıya alınır. Kullanıcı erişimi kısıtlanır ancak kayıt silinmez. İstediğinizde tekrar aktif edebilirsiniz.
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 p-5 border-t border-ink-100 bg-ink-50/40">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100 rounded-lg transition"
              >
                Vazgeç
              </button>
              <button
                onClick={() => setStep('confirm')}
                className="px-4 py-2 text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 rounded-lg transition"
              >
                Devam Et
              </button>
            </div>
          </>
        )}

        {step === 'confirm' && (
          <>
            <div className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="font-semibold text-ink-900 text-lg">Emin misiniz?</h3>
              <p className="text-sm text-ink-500 mt-2">
                <span className="font-medium text-ink-700">{userName}</span> kullanıcısının{' '}
                <span className="font-medium text-ink-700">{plan}</span> aboneliği askıya alınacak.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 p-5 border-t border-ink-100 bg-ink-50/40">
              <button
                onClick={() => setStep('info')}
                className="px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100 rounded-lg transition"
              >
                Geri
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 rounded-lg transition"
              >
                Evet, Pasife Al
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
