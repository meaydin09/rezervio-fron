import { useState } from 'react'
import type { TabView } from '../types'

export function useCorporateTabs() {
  const [activeTab, setActiveTab] = useState<TabView>('specialists')
  return { activeTab, setActiveTab }
}