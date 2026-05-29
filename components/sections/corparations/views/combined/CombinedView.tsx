import CombinedGrid from './CombinedGrid'
import QuickBookBanner from './QuickBookBanner'

export default function CombinedView() {
  return (
    <div className="mt-6 space-y-6 min-w-0 w-full">
      <CombinedGrid />
      <QuickBookBanner />
    </div>
  )
}