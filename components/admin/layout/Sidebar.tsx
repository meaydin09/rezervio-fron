import Link from 'next/link'
import { X, Shield } from 'lucide-react'
import SidebarNav from './SidebarNav'
import SidebarUser from './SidebarUser'
import type { AdminView } from '../types'

interface Props {
  isOpen: boolean
  activeView: AdminView
  onClose: () => void
  onChangeView: (view: AdminView) => void
}

export default function Sidebar({ isOpen, activeView, onClose, onChangeView }: Props) {
  return (
    <>
      {isOpen && (
        <div onClick={onClose} className="lg:hidden fixed inset-0 bg-ink-900/50 backdrop-blur-sm z-30" />
      )}
      <aside className={`fixed top-0 left-0 bottom-0 w-64 bg-ink-900 px-4 py-6 z-40 flex flex-col transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex items-center justify-between px-2 mb-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(244,63,94,0.4)]">
              <Shield className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-white leading-tight">Rezervio</div>
              <div className="text-[10px] font-semibold text-rose-400 tracking-wider uppercase">Admin Panel</div>
            </div>
          </Link>
          <button onClick={onClose} className="lg:hidden text-ink-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        <SidebarNav active={activeView} onChange={(view) => { onChangeView(view); onClose() }} />
        <SidebarUser />
      </aside>
    </>
  )
}