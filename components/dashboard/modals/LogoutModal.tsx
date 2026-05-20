import Link from 'next/link'
import { LogOut } from 'lucide-react'

interface Props {
  onClose: () => void
}

export default function LogoutModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] max-w-sm w-full p-6">
        <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mx-auto">
          <LogOut className="w-6 h-6 text-rose-600" strokeWidth={2} />
        </div>
        <h3 className="mt-4 text-lg font-bold text-center text-ink-900">Çıkış yapmak istediğine emin misin?</h3>
        <p className="mt-1 text-sm text-ink-600 text-center">Tekrar giriş yapana kadar randevu bildirimlerini alamayacaksın.</p>
        <div className="mt-5 flex gap-3">
          <button onClick={onClose} className="flex-1 bg-ink-100 hover:bg-ink-200 text-ink-800 font-semibold py-2.5 rounded-lg transition cursor-pointer">
            İptal
          </button>
          <Link href="/login" className="flex-1 bg-rose-600 hover:bg-rose-700 text-white text-center font-semibold py-2.5 rounded-lg transition">
            Çıkış Yap
          </Link>
        </div>
      </div>
    </div>
  )
}