export default function MockupProfile() {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-ink-900 flex items-center justify-center font-bold text-white text-sm">
          OU
        </div>
        <div>
          <div className="text-sm font-semibold text-ink-900">Psk. Onur Uzun</div>
          <div className="text-xs text-ink-500">Klinik Psikolog · İstanbul</div>
        </div>
      </div>
      <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
        Online
      </span>
    </div>
  )
}