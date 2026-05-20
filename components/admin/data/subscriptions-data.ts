import type { AdminSubscription } from '../types'
import { users } from './users-data'

export const subscriptions: AdminSubscription[] = [
  { user: users[0], cycle: 'Aylık',  startDate: '15 Mar 2026', nextPayment: '15 Haz 2026', amount: '₺699'    },
  { user: users[1], cycle: 'Yıllık', startDate: '10 Eyl 2025', nextPayment: '10 Eyl 2026', amount: '₺12.990' },
  { user: users[3], cycle: 'Aylık',  startDate: '02 Şub 2026', nextPayment: '02 Haz 2026', amount: '₺699'    },
  { user: users[4], cycle: 'Yıllık', startDate: '18 Tem 2025', nextPayment: '18 Tem 2026', amount: '₺12.990' },
  { user: users[7], cycle: 'Aylık',  startDate: '05 May 2026', nextPayment: '05 Haz 2026', amount: '₺699'    },
]