export default function AnnouncementForm() {
    return (
      <div className="lg:col-span-2 bg-white rounded-2xl border border-ink-100 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] p-5 sm:p-6">
        <h3 className="font-semibold text-ink-900">Yeni Duyuru Oluştur</h3>
        <p className="text-xs text-ink-500 mt-0.5">Tüm üyelere veya seçili gruba mesaj gönder</p>
        <div className="mt-5 space-y-4">
          <div>
            <label className="text-xs font-semibold text-ink-700">Başlık</label>
            <input type="text" placeholder="Örn: Yeni WhatsApp özellikleri"
              className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none" />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700">Mesaj</label>
            <textarea rows={5} placeholder="Duyuru içeriği..."
              className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none resize-none" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-ink-700">Alıcı</label>
              <select className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer">
                <option>Tüm kullanıcılar (1.247)</option>
                <option>Sadece Profesyonel (704)</option>
                <option>Sadece Kurumsal (188)</option>
                <option>Sadece Deneme (78)</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700">Kanal</label>
              <select className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer">
                <option>E-posta + Panel</option>
                <option>Sadece Panel</option>
                <option>Sadece E-posta</option>
                <option>WhatsApp</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl cursor-pointer transition">Şimdi Gönder</button>
            <button className="bg-ink-100 hover:bg-ink-200 text-ink-800 text-sm font-semibold px-4 py-2.5 rounded-xl cursor-pointer transition">Taslak Kaydet</button>
          </div>
        </div>
      </div>
    )
  }