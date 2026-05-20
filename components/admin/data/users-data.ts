import type { AdminUser } from '../types'

export const users: AdminUser[] = [
  { initials: 'OU', name: 'Psk. Onur Uzun',  email: 'onur@rezervio.com',     slug: 'onuruzun',        plan: 'Profesyonel', status: 'Aktif',           mrr: '₺699',   appointments: 142, lastSeen: '2 dk önce',  bgColor: 'bg-ink-900'     },
  { initials: 'NK', name: 'NovaPsy Klinik',  email: 'info@novapsy.com',      slug: 'novapsy-klinik',  plan: 'Kurumsal',    status: 'Aktif',           mrr: '₺1.299', appointments: 847, lastSeen: '15 dk önce', bgColor: 'bg-rose-600'    },
  { initials: 'SA', name: 'Selma Aydın',     email: 'selma@diyetsel.co',     slug: 'diyetisyenselma', plan: 'Deneme',      status: 'Deneme',          mrr: '₺0',     appointments: 8,   lastSeen: '23 dk önce', bgColor: 'bg-emerald-600' },
  { initials: 'AT', name: 'Av. Ahmet Tekin', email: 'ahmet@tekinhukuk.com',  slug: 'avahmettekin',    plan: 'Profesyonel', status: 'Aktif',           mrr: '₺699',   appointments: 64,  lastSeen: '2 sa önce',  bgColor: 'bg-sky-600'     },
  { initials: 'BS', name: 'Beauty Studio',   email: 'hello@beautystudio.tr', slug: 'beautystudio',    plan: 'Kurumsal',    status: 'Aktif',           mrr: '₺1.299', appointments: 412, lastSeen: '4 sa önce',  bgColor: 'bg-violet-600'  },
  { initials: 'FE', name: 'Dr. Furkan Erol', email: 'furkan@dishekim.com',   slug: 'drfurkan',        plan: 'Deneme',      status: 'Deneme',          mrr: '₺0',     appointments: 3,   lastSeen: '5 sa önce',  bgColor: 'bg-amber-600'   },
  { initials: 'BH', name: 'BeautyHub',       email: 'admin@beautyhub.com',   slug: 'beautyhub',       plan: 'Kurumsal',    status: 'Askıya alındı',   mrr: '₺0',     appointments: 0,   lastSeen: '2 gün önce', bgColor: 'bg-ink-500'     },
  { initials: 'KL', name: 'KuaforLine',      email: 'info@kuaforline.com',   slug: 'kuaforline',      plan: 'Profesyonel', status: 'Aktif',           mrr: '₺699',   appointments: 201, lastSeen: '1 sa önce',  bgColor: 'bg-violet-600'  },
]

export const planBadge: Record<string, string> = {
  Profesyonel: 'bg-brand-50 text-brand-700',
  Kurumsal:    'bg-rose-50 text-rose-700',
  Deneme:      'bg-amber-50 text-amber-700',
  Başlangıç:   'bg-ink-100 text-ink-600',
}

export const statusBadge: Record<string, string> = {
  'Aktif':           'bg-emerald-50 text-emerald-700',
  'Deneme':          'bg-amber-50 text-amber-700',
  'Askıya alındı':   'bg-rose-50 text-rose-700',
  'İptal edilmiş':   'bg-ink-100 text-ink-600',
  'Onaylı':          'bg-brand-50 text-brand-700',
  'Bekleyen':        'bg-amber-50 text-amber-700',
  'Tamamlandı':      'bg-emerald-50 text-emerald-700',
  'İptal':           'bg-rose-50 text-rose-700',
}