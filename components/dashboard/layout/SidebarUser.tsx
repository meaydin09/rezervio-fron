import Link from 'next/link'
import { LogOut, ChevronRight } from 'lucide-react'

interface Props {
  onLogout: () => void
}

export default function SidebarUser({ onLogout }: Props) {
  return (
    <div className="mt-4 pt-3 border-t border-ink-100">
      <Link href="/dashboard/kurumsal" className="flex items-center gap-2 px-2 py-2 text-xs text-ink-500 hover:text-ink-900 transition">
        <ChevronRight className="w-4 h-4" strokeWidth={2} />
        Kurumsal panele geç
      </Link>
      <div className="flex items-center gap-3 px-2 py-2">
        <div className="w-9 h-9 rounded-full bg-ink-900 flex items-center justify-center text-sm font-bold text-white shrink-0">
          OU
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold truncate text-ink-900">Onur Uzun</div>
          <div className="text-xs text-ink-500 truncate">rezervio.com/onuruzun</div>
        </div>
      </div>
      <button
        onClick={onLogout}
        className="mt-1 w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium text-rose-600 hover:bg-rose-50 transition cursor-pointer"
      >
        <LogOut className="w-4 h-4" strokeWidth={2} />
        Çıkış Yap
      </button>
    </div>
  )
}