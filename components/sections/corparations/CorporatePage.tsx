'use client'

import Link from 'next/link'
import CorporateHeader from './header/CorporateHeader'
import TabNav from './tabs/TabNav'
import SpecialistsView from './views/specialists/SpecialistsView'
import CombinedView from './views/combined/CombinedView'
import ServicesView from './views/services/ServicesView'
import AboutView from './views/about/AboutView'
import { useCorporateTabs } from './hooks/useCorporateTabs'

export default function CorporatePage() {
  const { activeTab, setActiveTab } = useCorporateTabs()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12">
      <CorporateHeader />
      <TabNav active={activeTab} onChange={setActiveTab} />

      {activeTab === 'specialists' && <SpecialistsView />}
      {activeTab === 'combined' && <CombinedView />}
      {activeTab === 'services' && <ServicesView onTabChange={setActiveTab} />}
      {activeTab === 'about' && <AboutView />}

      <div className="mt-10 pt-6 border-t border-ink-100 text-center">
        <p className="text-xs text-ink-500">
          Bu sayfa, gücünü{' '}
          <Link href="https://rezervio.co" target="_blank" rel="noopener" className="font-bold text-brand-600 hover:text-brand-700 transition inline-flex items-center gap-1">
            Rezervio
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9z"/>
            </svg>
          </Link>
          'dan alıyor!
        </p>
      </div>
    </div>
  )
}