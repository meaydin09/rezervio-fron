import Link from 'next/link'
import { X, Calendar } from 'lucide-react'
import SidebarNav from './SidebarNav'
import SidebarUpgradeBanner from './SidebarUpgradeBanner'
import SidebarUser from './SidebarUser'

interface Props {
  isOpen: boolean
  onClose: () => void
  onLogout: () => void
}

export default function Sidebar({ isOpen, onClose, onLogout }: Props) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="lg:hidden fixed inset-0 bg-ink-900/50 backdrop-blur-sm z-30"
        />
      )}

      <aside className={`fixed top-0 left-0 bottom-0 w-64 bg-white border-r border-ink-100 px-4 py-6 pt-16 lg:pt-20 z-40 flex flex-col transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex items-center justify-between px-2 mb-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)]">
              <Calendar className="w-5 h-5 text-white" strokeWidth={2.2} />
            </div>
            <span className="text-lg font-bold tracking-tight text-ink-900">Rezervio</span>
          </Link>
          <button onClick={onClose} className="lg:hidden text-ink-500 hover:text-ink-900 cursor-pointer">
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        <SidebarNav />
        <SidebarUpgradeBanner />
        <SidebarUser onLogout={onLogout} />
      </aside>
    </>
  )
}