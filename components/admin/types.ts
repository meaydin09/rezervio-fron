export type AdminView =
  | 'overview'
  | 'users'
  | 'subscriptions'
  | 'appointments'
  | 'revenue'
  | 'announcements'
  | 'support'
  | 'audit'
  | 'settings'

export interface AdminUser {
  initials: string
  name: string
  email: string
  slug: string
  plan: 'Profesyonel' | 'Kurumsal' | 'Deneme' | 'Başlangıç'
  status: 'Aktif' | 'Deneme' | 'Askıya alındı' | 'İptal edilmiş'
  mrr: string
  appointments: number
  lastSeen: string
  bgColor: string
}

export interface AdminSubscription {
  user: AdminUser
  cycle: 'Aylık' | 'Yıllık'
  startDate: string
  nextPayment: string
  amount: string
}

export interface AdminAppointment {
  date: string
  time: string
  specialist: AdminUser
  client: string
  status: 'Onaylı' | 'Bekleyen' | 'Tamamlandı' | 'İptal'
  whatsapp: string
}

export interface SystemAlert {
  type: 'warning' | 'success' | 'info'
  title: string
  description: string
}

export interface TopEarner {
  rank: string
  initials: string
  name: string
  bgColor: string
  subtitle: string
  amount: string
}