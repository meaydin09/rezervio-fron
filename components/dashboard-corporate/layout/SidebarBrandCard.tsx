export default function SidebarBrandCard() {
    return (
      <div className="px-2 mb-4 pb-4 border-b border-ink-100">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-ink-100 flex items-center justify-center text-xl shrink-0">🏥</div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-bold truncate text-ink-900">NovaPsy Klinik</div>
            <div className="text-[11px] text-ink-500 truncate">12 uzman · Kurumsal</div>
          </div>
        </div>
      </div>
    )
  }