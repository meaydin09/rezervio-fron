import type { AdminAppointment } from '../types'
import { users } from './users-data'

export const appointments: AdminAppointment[] = [
  { date: 'Bugün', time: '14:00', specialist: users[0], client: 'Ayşe Şahin',  status: 'Onaylı',      whatsapp: 'Gönderildi' },
  { date: 'Bugün', time: '13:30', specialist: users[1], client: 'Mehmet Can',  status: 'Onaylı',      whatsapp: 'Gönderildi' },
  { date: 'Bugün', time: '15:00', specialist: users[3], client: 'Zeynep Tan',  status: 'Bekleyen',    whatsapp: 'Planlandı'  },
  { date: 'Bugün', time: '16:00', specialist: users[4], client: 'Selin Demir', status: 'Onaylı',      whatsapp: 'Gönderildi' },
  { date: 'Dün',   time: '10:00', specialist: users[0], client: 'Berk Kaya',   status: 'Tamamlandı',  whatsapp: 'Gönderildi' },
  { date: 'Dün',   time: '17:30', specialist: users[1], client: 'Can Yıldız',  status: 'İptal',       whatsapp: '-'          },
]