'use client'

import { useState } from 'react'
import { services } from '../../data/services-data'
import ServiceCategories from './ServiceCategories'
import ServiceCard from './ServiceCard'
import type { TabView } from '../../types'

interface Props {
  onTabChange: (tab: TabView) => void
}

export default function ServicesView({ onTabChange }: Props) {
  const [activeCategory, setActiveCategory] = useState('Tüm Hizmetler')

  return (
    <div className="mt-6 grid lg:grid-cols-12 gap-6">
      <ServiceCategories activeCategory={activeCategory} onChange={setActiveCategory} />
      <div className="lg:col-span-9 space-y-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onBook={() => onTabChange('specialists')}
          />
        ))}
        <button className="w-full text-sm font-semibold text-brand-600 hover:bg-brand-50 py-3 rounded-xl transition cursor-pointer">
          Tüm 18 hizmeti gör →
        </button>
      </div>
    </div>
  )
}