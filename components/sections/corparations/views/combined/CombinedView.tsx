import CombinedGrid from './CombinedGrid'
import QuickBookBanner from './QuickBookBanner'

export default function CombinedView() {
  return (
    <div className="mt-6">
      <CombinedGrid />
      <QuickBookBanner />
    </div>
  )
}