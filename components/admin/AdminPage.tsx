'use client'

import type { AdminView } from './types'
import Sidebar from './layout/Sidebar'
import Topbar from './layout/Topbar'
import OverviewView from './views/overview/OverviewView'
import UsersView from './views/users/UsersView'
import SubscriptionsView from './views/subscriptions/SubscriptionsView'
import AppointmentsView from './views/appointments/AppointmentsView'
import RevenueView from './views/revenue/RevenueView'
import AnnouncementsView from './views/announcements/AnnouncementsView'
import SupportView from './views/support/SupportView'
import AuditView from './views/audit/AuditView'
import SettingsView from './views/settings/SettingsView'
import KvkkView from './views/legal/KvkkView'
import PrivacyView from './views/legal/PrivacyView'
import FaqView from './views/legal/FaqView'
import UserEditModal from './modals/UserEditModal'
import NewUserModal from './modals/NewUserModal'
import Toast from './modals/Toast'
import { useSidebar } from './hooks/useSidebar'
import { useAdminView  } from './hooks/useAdminView'
import { useUserModal } from './hooks/useUserModal'
import { useState } from 'react'


export default function AdminPage() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const { isOpen, toggle, close } = useSidebar()
  const { activeView, setActiveView , title } = useAdminView()
  const { selectedUser, open: openUser, close: closeUser } = useUserModal()
  const [showNewUser, setShowNewUser] = useState(false)
  const [toast, setToast] = useState({ visible: false, text: '' })

  const showToast = (text: string) => {
    setToast({ visible: true, text })
    setTimeout(() => setToast({ visible: false, text: '' }), 2500)
  }
  const handleRefresh = () => {
  setIsRefreshing(true)
  setTimeout(() => {
    setIsRefreshing(false)
    showToast('Tüm veriler güncellendi')
  }, 1200)
}

  return (
    <div className="min-h-screen bg-ink-50">
      <Sidebar
  isOpen={isOpen}
  activeView={activeView}
  onClose={close}
  onChangeView={(view: AdminView) => { setActiveView(view); close() }}
/>

      <main className="lg:ml-64 px-4 sm:px-6 lg:px-8 pt-6 pb-12 max-w-[1500px]">
        <Topbar
  title={title}
  onToggleSidebar={toggle}
  onRefresh={handleRefresh}
  onNewUser={() => setShowNewUser(true)}
  isRefreshing={isRefreshing}
/>

<div className={`transition-all duration-500 ${isRefreshing ? 'opacity-40 blur-sm pointer-events-none' : 'opacity-100 blur-0'}`}>


        {activeView === 'overview' && (
  <OverviewView onViewUsers={() => setActiveView('users')} />
)}
        {activeView === 'users'         && <UsersView onNewUser={() => setShowNewUser(true)} onEditUser={openUser} />}
        {activeView === 'subscriptions' && <SubscriptionsView />}
        {activeView === 'appointments'  && <AppointmentsView />}
        {activeView === 'revenue'       && <RevenueView />}
        {activeView === 'announcements' && <AnnouncementsView />}
        {activeView === 'support'       && <SupportView />}
        {activeView === 'audit'         && <AuditView />}
        {activeView === 'settings'      && <SettingsView />}
        {activeView === 'kvkk'          && <KvkkView />}
        {activeView === 'privacy'       && <PrivacyView />}
        {activeView === 'faq'           && <FaqView />}
        </div>

      </main>

      {selectedUser && (
        <UserEditModal
          user={selectedUser}
          onClose={closeUser}
          onSave={() => { closeUser(); showToast('Kullanıcı bilgileri güncellendi') }}
        />
      )}

      {showNewUser && (
        <NewUserModal
          onClose={() => setShowNewUser(false)}
          onCreated={() => { setShowNewUser(false); showToast('Yeni kullanıcı oluşturuldu') }}
        />
      )}

      {toast.visible && <Toast text={toast.text} />}
    </div>
  )
}