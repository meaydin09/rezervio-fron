'use client'

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

export default function CorporateDashboardPage() {
  const { isOpen, toggle, close } = useSidebar()
  const {
    profileBannerVisible, setProfileBannerVisible,
    showAddSpecialistModal, setShowAddSpecialistModal,
    toast, showToast,
  } = useCorporateDashboard()

  return (
    <div className="min-h-screen bg-ink-50">
      <Sidebar isOpen={isOpen} onClose={close} onLogout={() => {}} />

      <main className="lg:ml-64 px-4 sm:px-6 lg:px-8 pt-6 pb-12 max-w-[1500px]">
        <Topbar
          onToggleSidebar={toggle}
          onRefresh={() => showToast('Veriler güncellendi')}
          onAddSpecialist={() => setShowAddSpecialistModal(true)}
        />

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