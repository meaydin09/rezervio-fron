import { useState } from 'react'

export function useCorporateDashboard() {
  const [profileBannerVisible, setProfileBannerVisible] = useState(true)
  const [showAddSpecialistModal, setShowAddSpecialistModal] = useState(false)
  const [toast, setToast] = useState({ visible: false, text: '' })

  const showToast = (text: string) => {
    setToast({ visible: true, text })
    setTimeout(() => setToast({ visible: false, text: '' }), 2500)
  }

  return {
    profileBannerVisible, setProfileBannerVisible,
    showAddSpecialistModal, setShowAddSpecialistModal,
    toast, showToast,
  }
}