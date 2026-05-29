'use client'

import Link from 'next/link'
import CorporateHeader from './header/CorporateHeader'
import TabNav from './tabs/TabNav'
import SpecialistsView from './views/specialists/SpecialistsView'
import ServicesView from './views/services/ServicesView'
import AboutView from './views/about/AboutView'
import { useCorporateTabs } from './hooks/useCorporateTabs'
import { useState } from 'react'

export default function CorporatePage() {
  const { activeTab, setActiveTab } = useCorporateTabs()
  const [preselectedSpecialistId, setPreselectedSpecialistId] = useState<number | null>(null)

  const handleBookFromService = (specialistId: number) => {
    setPreselectedSpecialistId(specialistId)
    setActiveTab('specialists')
  }

  return (
    <div className="max-w-6xl mx-auto pt-6 sm:pt-10 pb-12">
      <div className="px-4 sm:px-6">
        <CorporateHeader />
      </div>

      <div className="px-4 sm:px-6">
        <TabNav active={activeTab} onChange={setActiveTab} />
      </div>

      <div className="px-4 sm:px-6">
        {activeTab === 'specialists' && (
          <SpecialistsView
            preselectedSpecialistId={preselectedSpecialistId}
            onPreselectedConsumed={() => setPreselectedSpecialistId(null)}
          />
        )}
        {activeTab === 'services' && (
          <ServicesView onBook={handleBookFromService} />
        )}
        {activeTab === 'about' && <AboutView />}
      </div>

      <div className="px-4 sm:px-6 mt-10 pt-6 border-t border-ink-100 text-center">
        <p className="text-xs text-ink-500">
          Bu sayfa, gücünü{' '}
          <Link href="https://rezervio.co" target="_blank" rel="noopener" className="font-bold text-brand-600 hover:text-brand-700 transition inline-flex items-center gap-1">
            Rezervio
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9z" />
            </svg>
          </Link>
          'dan alıyor!
        </p>
      </div>
    </div>
  )
}