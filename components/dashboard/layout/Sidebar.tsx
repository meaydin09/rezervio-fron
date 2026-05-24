import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'
import SidebarNav from './SidebarNav'
import SidebarUpgradeBanner from './SidebarUpgradeBanner'
import SidebarUser from './SidebarUser'
import type { DashboardView } from '../types'

interface Props {
  isOpen: boolean
  onClose: () => void
  onLogout: () => void
  activeView: DashboardView
  onViewChange: (view: DashboardView) => void
}

export default function Sidebar({ isOpen, onClose, onLogout, activeView, onViewChange }: Props) {
  return (
    <>
      {isOpen && (
        <div onClick={onClose} className="lg:hidden fixed inset-0 bg-ink-900/50 backdrop-blur-sm z-30" />
      )}

      <aside className={`fixed top-0 left-0 bottom-0 w-64 bg-white border-r border-ink-100 px-4 py-6 pt-16 lg:pt-20 z-40 flex flex-col transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex items-center justify-between px-2 mb-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/rezervio-logo.png" alt="Rezervio" width={110} height={32} />
          </Link>
          <button onClick={onClose} className="lg:hidden text-ink-500 hover:text-ink-900 cursor-pointer">
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        <SidebarNav active={activeView} onChange={(view) => { onViewChange(view); onClose() }} />
        <SidebarUpgradeBanner />
        <SidebarUser onLogout={onLogout} />
      </aside>
    </>
  )
}