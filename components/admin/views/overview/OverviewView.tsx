import StatsGrid from './StatsGrid'
import RevenueChart from './RevenueChart'
import PlanDistribution from './PlanDistribution'
import RecentRegistrations from './RecentRegistrations'
import SystemAlerts from './SystemAlerts'

interface Props {
  onViewUsers: () => void
}

export default function OverviewView({ onViewUsers }: Props) {
  return (
    <div>
      <StatsGrid />
      <div className="mt-6 grid xl:grid-cols-3 gap-6">
        <RevenueChart />
        <PlanDistribution />
      </div>
      <div className="mt-6 grid xl:grid-cols-3 gap-6">
        <RecentRegistrations onViewUsers={onViewUsers} />
        <SystemAlerts />
      </div>
    </div>
  )
}