'use client'

import { useState } from 'react'
import Sidebar from './layout/Sidebar'
import Topbar from './layout/Topbar'
import ProfileCompletion from './overview/ProfileCompletion'
import StatsGrid from './overview/StatsGrid'
import WeeklyCalendar from './overview/WeeklyCalendar'
import TodayAppointments from './overview/TodayAppointments'
import BookingLinkCard from './overview/BookingLinkCard'
import ThemeCustomizer from './overview/ThemeCustomizer'
import OccupancyChart from './reports/OccupancyChart'
import PopularHours from './reports/PopularHours'
import SupportTickets from './support/SupportTickets'
import QuickHelp from './support/QuickHelp'
import NewTicketModal from './support/NewTicketModal'
import LogoutModal from './modals/LogoutModal'
import Toast from './modals/Toast'
import { useSidebar } from './hooks/useSidebar'
import { useDashboard } from './hooks/useDashboard'
import { useTheme } from './hooks/useTheme'
import type { DashboardView } from './types'
import WhatsAppView from './views/WhatsAppView'
import SettingsView from './views/SettingsView'
import SubscriptionView from './views/SubscriptionView'
export default function DashboardPage() {
  const { isOpen, toggle, close } = useSidebar()
  const {
    profileBannerVisible, setProfileBannerVisible,
    showNewTicketModal, setShowNewTicketModal,
    showLogoutModal, setShowLogoutModal,
    toast, showToast,
  } = useDashboard()
  const { active, customHex, setTheme, setCustomColor } = useTheme()
  const [activeView, setActiveView] = useState<DashboardView>('overview')
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
        onLogout={() => setShowLogoutModal(true)}
        activeView={activeView}
        onViewChange={setActiveView}
      />

      <main className="lg:ml-64 pt-6 px-4 sm:px-6 lg:px-8 pb-12 max-w-[1400px]">
        <Topbar
          onToggleSidebar={toggle}
          onRefresh={handleRefresh}
        />

        <div className={`transition-all duration-500 ${isRefreshing ? 'opacity-40 blur-sm pointer-events-none' : 'opacity-100 blur-0'}`}>

          {activeView === 'overview' && (
            <>
              {profileBannerVisible && (
                <ProfileCompletion onClose={() => setProfileBannerVisible(false)} />
              )}
              <StatsGrid />
              <div className="mt-6 grid xl:grid-cols-3 gap-6">
                <WeeklyCalendar />
                <div className="space-y-5">
                  <TodayAppointments />
                  <BookingLinkCard />
                  <ThemeCustomizer
                    active={active}
                    customHex={customHex}
                    onSetTheme={setTheme}
                    onSetCustomColor={setCustomColor}
                  />
                </div>
              </div>
              <div className="mt-6 grid xl:grid-cols-3 gap-6">
                <OccupancyChart />
                <PopularHours />
              </div>
              <div className="mt-6 grid xl:grid-cols-3 gap-6">
                <SupportTickets onNewTicket={() => setShowNewTicketModal(true)} />
                <QuickHelp onNewTicket={() => setShowNewTicketModal(true)} />
              </div>
            </>
          )}

          {activeView === 'schedule' && (
            <div className="mt-2">
              <WeeklyCalendar />
            </div>
          )}

          {activeView === 'appointments' && (
            <div className="mt-2">
              <TodayAppointments />
            </div>
          )}

          {activeView === 'reports' && (
            <div className="mt-2 grid xl:grid-cols-3 gap-6">
              <OccupancyChart />
              <PopularHours />
            </div>
          )}

          {activeView === 'support' && (
            <div className="mt-2 grid xl:grid-cols-3 gap-6">
              <SupportTickets onNewTicket={() => setShowNewTicketModal(true)} />
              <QuickHelp onNewTicket={() => setShowNewTicketModal(true)} />
            </div>
          )}
{activeView === 'whatsapp'  && <WhatsAppView />}
{activeView === 'settings'  && <SettingsView />}
{activeView === 'subscription' && <SubscriptionView />}
        </div>
      </main>

      {showNewTicketModal && <NewTicketModal onClose={() => setShowNewTicketModal(false)} />}
      {showLogoutModal && <LogoutModal onClose={() => setShowLogoutModal(false)} />}
      {toast.visible && <Toast text={toast.text} />}
    </div>
  )
}