import { useState } from 'react'

export function useDashboard() {
  const [profileBannerVisible, setProfileBannerVisible] = useState(true)
  const [showNewTicketModal, setShowNewTicketModal] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [toast, setToast] = useState<{ visible: boolean; text: string }>({ visible: false, text: '' })

  const showToast = (text: string) => {
    setToast({ visible: true, text })
    setTimeout(() => setToast({ visible: false, text: '' }), 3000)
  }

  return {
    profileBannerVisible, setProfileBannerVisible,
    showNewTicketModal, setShowNewTicketModal,
    showLogoutModal, setShowLogoutModal,
    toast, showToast,
  }
}