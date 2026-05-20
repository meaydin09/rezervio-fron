import Link from 'next/link'
import { LogOut } from 'lucide-react'

export default function SidebarUser() {
  return (
    <div className="mt-4 pt-3 border-t border-white/10">
      <div className="flex items-center gap-3 px-2 py-2">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center text-sm font-bold text-white shrink-0">
          A
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-white truncate">Süper Admin</div>
          <div className="text-xs text-ink-400 truncate flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Çevrimiçi
          </div>
        </div>
      </div>
      <Link
        href="/login"
        className="mt-1 w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition cursor-pointer"
      >
        <LogOut className="w-4 h-4" strokeWidth={2} />
        Çıkış Yap
      </Link>
    </div>
  )
}