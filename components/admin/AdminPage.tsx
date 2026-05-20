'use client'

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
import UserEditModal from './modals/UserEditModal'
import NewUserModal from './modals/NewUserModal'
import Toast from './modals/Toast'
import { useSidebar } from './hooks/useSidebar'
import { useAdminView } from './hooks/useAdminView'
import { useUserModal } from './hooks/useUserModal'
import { useState } from 'react'

export default function AdminPage() {
  const { isOpen, toggle, close } = useSidebar()
  const { activeView, setActiveView } = useAdminView()
  const { selectedUser, open: openUser, close: closeUser } = useUserModal()
  const [showNewUser, setShowNewUser] = useState(false)
  const [toast, setToast] = useState({ visible: false, text: '' })

  const showToast = (text: string) => {
    setToast({ visible: true, text })
    setTimeout(() => setToast({ visible: false, text: '' }), 2500)
  }

  return (
    <div className="min-h-screen bg-ink-50">
      <Sidebar
        isOpen={isOpen}
        activeView={activeView}
        onClose={close}
        onViewChange={(view) => { setActiveView(view); close() }}
        onLogout={() => {}}
      />

      <main className="lg:ml-64 px-4 sm:px-6 lg:px-8 pt-6 pb-12 max-w-[1500px]">
        <Topbar
          activeView={activeView}
          onToggleSidebar={toggle}
          onRefresh={() => showToast('Tüm veriler güncellendi')}
          onNewUser={() => setShowNewUser(true)}
        />

        {activeView === 'overview'      && <OverviewView onViewChange={setActiveView} />}
        {activeView === 'users'         && <UsersView onNewUser={() => setShowNewUser(true)} onEditUser={openUser} />}
        {activeView === 'subscriptions' && <SubscriptionsView />}
        {activeView === 'appointments'  && <AppointmentsView />}
        {activeView === 'revenue'       && <RevenueView />}
        {activeView === 'announcements' && <AnnouncementsView />}
        {activeView === 'support'       && <SupportView />}
        {activeView === 'audit'         && <AuditView />}
        {activeView === 'settings'      && <SettingsView />}
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