interface Props {
    date: string
    time: string
    onClose: () => void
  }
  
  export default function SuccessModal({ date, time, onClose }: Props) {
    return (
      <div className="fixed inset-0 z-40 bg-ink-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] max-w-md w-full p-6 sm:p-7 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
  
          <h3 className="mt-5 text-xl sm:text-2xl font-bold tracking-tight text-ink-900">
            Randevunuz onaylandı! 🎉
          </h3>
          <p className="mt-2 text-sm text-ink-600">
            {date}, saat {time} için randevunuz oluşturuldu.
          </p>
  
          <div className="mt-5 bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-white border border-emerald-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c.002-5.45 4.437-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 0 0-3.477-8.413z"/>
                </svg>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-emerald-900">WhatsApp bilgilendirmesi gönderildi</div>
                <div className="text-emerald-700 mt-0.5">
                  Onay mesajı iletildi. 1 saat öncesinde hatırlatma WhatsApp mesajı alacaksınız.
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-5 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 bg-ink-100 hover:bg-ink-200 text-ink-800 font-semibold py-2.5 rounded-lg transition cursor-pointer"
            >
              Kapat
            </button>
            <button className="flex-1 bg-ink-900 hover:bg-ink-800 text-white font-semibold py-2.5 rounded-lg transition cursor-pointer">
              Takvime Ekle
            </button>
          </div>
        </div>
      </div>
    )
  }