import Link from 'next/link'
import Image from 'next/image'
import { X, Calendar } from 'lucide-react'
import SidebarNav from './SidebarNav'
import SidebarBrandCard from './SidebarBrandCard'
import SidebarUser from './SidebarUser'
import type { CorporateView } from '../types'

interface Props {
  isOpen: boolean
  onClose: () => void
  onLogout: () => void
  activeView: CorporateView
  onViewChange: (view: CorporateView) => void
}

export default function Sidebar({ isOpen, onClose, onLogout, activeView, onViewChange }: Props) {
  return (
    <>
      {isOpen && (
        <div onClick={onClose} className="lg:hidden fixed inset-0 bg-ink-900/50 backdrop-blur-sm z-30" />
      )}
      <aside className={`fixed top-0 left-0 bottom-0 w-64 bg-white border-r border-ink-100 px-4 py-6 z-40 flex flex-col transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex items-center justify-between px-2 mb-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)]">
          <Image src="/favicon.png" alt="Rezervio" width={120} height={36} className='rounded-2xl'priority />

            </div>
            <div>
              <div className="text-base font-bold tracking-tight leading-tight text-ink-900">Rezervio</div>
              <div className="text-[10px] font-semibold text-brand-600 tracking-wider uppercase">Kurumsal</div>
            </div>
          </Link>
          <button onClick={onClose} className="lg:hidden text-ink-500 hover:text-ink-900 cursor-pointer">
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        <SidebarBrandCard />
        <SidebarNav active={activeView} onChange={(view) => { onViewChange(view); onClose() }} />
        <SidebarUser onLogout={onLogout} />
      </aside>
    </>
  )
}