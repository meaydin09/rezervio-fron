import { Mail, Phone, MapPin } from 'lucide-react'
import type { ContactInfoItem } from '../types'

const items: ContactInfoItem[] = [
  { label: 'E-posta',  value: 'destek@rezervio.com',                href: 'mailto:destek@rezervio.com', icon: 'mail'     },
  { label: 'Telefon',  value: '+90 (212) 555 01 23',                href: 'tel:+902125550123',           icon: 'phone'    },
  { label: 'Ofis',     value: 'Levent, Büyükdere Cad. No:199, İstanbul',                                  icon: 'location' },
]

const icons = {
  mail:     Mail,
  phone:    Phone,
  location: MapPin,
}

export default function ContactInfo() {
  return (
    <div className="bg-gradient-to-br from-brand-600 to-violet-600 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-8">İletişim Bilgileri</h3>
        <div className="space-y-6">
          {items.map((item) => {
            const Icon = icons[item.icon]
            const content = (
              <div className="flex items-center gap-5 group/item">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover/item:scale-110 transition-transform shrink-0">
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </div>
            )

            return item.href ? (
              <a key={item.label} href={item.href}>{content}</a>
            ) : (
              <div key={item.label}>{content}</div>
            )
          })}
        </div>
      </div>

      {/* Dekorasyon */}
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent" />
    </div>
  )
}