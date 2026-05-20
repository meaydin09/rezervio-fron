// app/(dashboard)/dashboard/page.tsx
import DashboardPage from '@/components/dashboard/DashboardPage'
import CorporateDashboardPage from '@/components/dashboard-corporate/CorporateDashboardPage'

// ileride backend'den gelecek, şimdilik statik
const isCorporate = true

export default function Page() {
  return isCorporate ? <CorporateDashboardPage /> : <DashboardPage />
}