import { useState } from 'react'
import type { CorporateView } from '../types'

export function useCorporateDashboard() {
  const [activeView, setActiveView] = useState<CorporateView>('overview')
  const [profileBannerVisible, setProfileBannerVisible] = useState(true)
  const [showAddSpecialistModal, setShowAddSpecialistModal] = useState(false)
  const [toast, setToast] = useState({ visible: false, text: '' })

  const showToast = (text: string) => {
    setToast({ visible: true, text })
    setTimeout(() => setToast({ visible: false, text: '' }), 2500)
  }

  return {
    activeView, setActiveView,
    profileBannerVisible, setProfileBannerVisible,
    showAddSpecialistModal, setShowAddSpecialistModal,
    toast, showToast,
  }
}