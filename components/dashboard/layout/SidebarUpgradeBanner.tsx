export default function SidebarUpgradeBanner() {
    return (
      <div className="bg-brand-50 border border-brand-100 rounded-xl p-4">
        <div className="text-xs font-semibold text-brand-900">Yükselt: Kurumsal Plan</div>
        <p className="text-[11px] text-brand-700 mt-1">10 uzman koltuğu + merkezi yönetim</p>
        <button className="mt-3 w-full bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold py-2 rounded-lg transition cursor-pointer">
          İncele
        </button>
      </div>
    )
  }