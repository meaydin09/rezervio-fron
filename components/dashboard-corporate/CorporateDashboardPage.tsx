'use client'

import { useState } from 'react'
import Sidebar from './layout/Sidebar'
import Topbar from './overview/Topbar'
import ProfileCompletion from './overview/ProfileCompletion'
import StatsGrid from './overview/StatsGrid'
import SpecialistsTable from './specialists/SpecialistsTable'
import TeamCalendar from './calendar/TeamCalendar'
import TodayAppointments from './appointments/TodayAppointments'
import TopPerformers from './reports/TopPerformers'
import RevenueChart from './reports/RevenueChart'
import AddSpecialistModal from './specialists/AddSpecialistModal'
import Toast from './modals/Toast'
import { useSidebar } from './hooks/useSidebar'
import { useCorporateDashboard } from './hooks/useCorporateDashboard'
import ServicesView from './views/ServicesView'
import SupportView from './views/SupportView'
import SettingsView from './views/SettingsView'
import WhatsAppView from './views/WhatsAppView'
import SubscriptionView from './views/SubscriptionView'

export default function CorporateDashboardPage() {
  const { isOpen, toggle, close } = useSidebar()
  const {
    activeView, setActiveView,
    profileBannerVisible, setProfileBannerVisible,
    showAddSpecialistModal, setShowAddSpecialistModal,
    toast, showToast,
  } = useCorporateDashboard()

  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
      showToast('Veriler güncellendi')
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-ink-50">
      <Sidebar
        isOpen={isOpen}
        onClose={close}
        onLogout={() => {}}
        activeView={activeView}
        onViewChange={setActiveView}
      />

      <main className="lg:ml-64 px-4 sm:px-6 lg:px-8 pt-6 pb-12 max-w-[1500px]">
        <Topbar
          onToggleSidebar={toggle}
          onRefresh={handleRefresh}
          onAddSpecialist={() => setShowAddSpecialistModal(true)}
          isRefreshing={isRefreshing}
        />

        <div className={`transition-all duration-500 ${isRefreshing ? 'opacity-40 blur-sm pointer-events-none' : 'opacity-100 blur-0'}`}>

          {activeView === 'overview' && (
            <>
              {profileBannerVisible && (
                <ProfileCompletion onClose={() => setProfileBannerVisible(false)} />
              )}
              <StatsGrid />
              <SpecialistsTable onAddSpecialist={() => setShowAddSpecialistModal(true)} />
              <div className="mt-6 grid xl:grid-cols-3 gap-6">
                <TeamCalendar />
                <TodayAppointments />
              </div>
              <div className="mt-6 grid lg:grid-cols-3 gap-6">
                <TopPerformers />
                <RevenueChart />
              </div>
            </>
          )}

          {activeView === 'specialists' && (
            <SpecialistsTable onAddSpecialist={() => setShowAddSpecialistModal(true)} />
          )}

          {activeView === 'calendar' && <TeamCalendar />}

          {activeView === 'appointments' && <TodayAppointments />}

          {activeView === 'reports' && (
            <div className="grid lg:grid-cols-3 gap-6">
              <TopPerformers />
              <RevenueChart />
            </div>
          )}

         {activeView === 'services'     && <ServicesView />}
{activeView === 'whatsapp'     && <WhatsAppView />}
{activeView === 'support'      && <SupportView />}
{activeView === 'settings'     && <SettingsView />}
{activeView === 'subscription'  &&<SubscriptionView/>}
        </div>
      </main>

      {showAddSpecialistModal && (
        <AddSpecialistModal
          onClose={() => setShowAddSpecialistModal(false)}
          onInvite={() => {
            setShowAddSpecialistModal(false)
            showToast('Davet e-postası gönderildi')
          }}
        />
      )}

      {toast.visible && <Toast text={toast.text} />}
    </div>
  )
}