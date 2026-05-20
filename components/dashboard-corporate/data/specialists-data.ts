import type { Specialist, HeatmapRow, TodayAppointment, TopPerformer } from '../types'

export const specialists: Specialist[] = [
  { initials: 'OU', name: 'Psk. Onur Uzun',   specialty: 'Klinik Psikolog', bgColor: 'bg-ink-900',     todayCount: 6, mrr: '₺74K',  fillRate: 88, status: 'Aktif' },
  { initials: 'MD', name: 'Dr. Mert Doğan',   specialty: 'Psikiyatrist',    bgColor: 'bg-brand-600',   todayCount: 8, mrr: '₺97K',  fillRate: 92, status: 'Aktif' },
  { initials: 'SK', name: 'Psk. Selin Kaya',  specialty: 'Çocuk & Ergen',   bgColor: 'bg-emerald-600', todayCount: 7, mrr: '₺95K',  fillRate: 95, status: 'Aktif' },
  { initials: 'CO', name: 'Uzm. Can Özdemir', specialty: 'Aile & Çift',     bgColor: 'bg-amber-600',   todayCount: 5, mrr: '₺68K',  fillRate: 78, status: 'Aktif' },
  { initials: 'ZT', name: 'Psk. Zeynep Tan',  specialty: 'EMDR Terapisti',  bgColor: 'bg-violet-600',  todayCount: 4, mrr: '₺61K',  fillRate: 71, status: 'Aktif' },
  { initials: 'BK', name: 'Psk. Burak Kılıç', specialty: 'Kaygı & OKB',    bgColor: 'bg-sky-600',     todayCount: 3, mrr: '₺53K',  fillRate: 65, status: 'İzinli' },
  { initials: 'EA', name: 'Psk. Esra Ay',     specialty: 'Travma',          bgColor: 'bg-rose-600',    todayCount: 4, mrr: '₺47K',  fillRate: 62, status: 'Aktif' },
]

// 0=available 1=confirmed 2=few 3=full 4=closed
export const heatmapRows: HeatmapRow[] = [
  { specialist: { initials: 'OU', name: 'Psk. Onur Uzun',   bgColor: 'bg-ink-900'     }, slots: [1, 0, 2, 3, 1, 3, 4] },
  { specialist: { initials: 'MD', name: 'Dr. Mert Doğan',   bgColor: 'bg-brand-600'   }, slots: [0, 2, 1, 0, 1, 0, 4] },
  { specialist: { initials: 'SK', name: 'Psk. Selin Kaya',  bgColor: 'bg-emerald-600' }, slots: [3, 1, 2, 1, 3, 1, 4] },
  { specialist: { initials: 'CO', name: 'Uzm. Can Özdemir', bgColor: 'bg-amber-600'   }, slots: [0, 0, 1, 2, 1, 0, 4] },
  { specialist: { initials: 'ZT', name: 'Psk. Zeynep Tan',  bgColor: 'bg-violet-600'  }, slots: [3, 3, 2, 1, 1, 1, 4] },
  { specialist: { initials: 'BK', name: 'Psk. Burak Kılıç', bgColor: 'bg-sky-600'     }, slots: [4, 4, 4, 4, 4, 4, 4] },
  { specialist: { initials: 'EA', name: 'Psk. Esra Ay',     bgColor: 'bg-rose-600'    }, slots: [1, 0, 0, 1, 2, 1, 4] },
]

export const todayAppointments: TodayAppointment[] = [
  { initials: 'OU', specialistName: 'Psk. Onur Uzun',   clientName: 'Danışan: Ayşe Şahin',         time: '10:00', bgColor: 'bg-ink-900',     badges: [{ text: '✓ WhatsApp', color: 'bg-emerald-50 text-emerald-700' }] },
  { initials: 'MD', specialistName: 'Dr. Mert Doğan',   clientName: 'Danışan: Burak Yıldız',        time: '10:30', bgColor: 'bg-brand-600',   badges: [{ text: '✓ WhatsApp', color: 'bg-emerald-50 text-emerald-700' }] },
  { initials: 'SK', specialistName: 'Psk. Selin Kaya',  clientName: 'Danışan: Defne Ali (12 yaş)', time: '11:00', bgColor: 'bg-emerald-600', badges: [{ text: '⏱ Yakında hatırlat', color: 'bg-amber-50 text-amber-700' }] },
  { initials: 'CO', specialistName: 'Uzm. Can Özdemir', clientName: 'Danışan: Hasan & Lale (çift)', time: '13:30', bgColor: 'bg-amber-600',   badges: [{ text: '✓ WhatsApp', color: 'bg-emerald-50 text-emerald-700' }, { text: '📝 Not var', color: 'bg-ink-100 text-ink-600' }] },
  { initials: 'ZT', specialistName: 'Psk. Zeynep Tan',  clientName: 'Danışan: Murat Demir',         time: '14:00', bgColor: 'bg-violet-600',  badges: [{ text: '✓ WhatsApp', color: 'bg-emerald-50 text-emerald-700' }] },
  { initials: 'BK', specialistName: 'Psk. Burak Kılıç', clientName: 'Danışan: Selma Ö.',            time: '16:00', bgColor: 'bg-sky-600',     badges: [{ text: '⏱ Hatırlatma planlandı', color: 'bg-amber-50 text-amber-700' }] },
]

export const topPerformers: TopPerformer[] = [
  { rank: '🥇', initials: 'SK', name: 'Psk. Selin Kaya',  bgColor: 'bg-emerald-600', stats: '68 randevu · ₺95K' },
  { rank: '🥈', initials: 'OU', name: 'Psk. Onur Uzun',   bgColor: 'bg-ink-900',     stats: '62 randevu · ₺74K' },
  { rank: '🥉', initials: 'MD', name: 'Dr. Mert Doğan',   bgColor: 'bg-brand-600',   stats: '54 randevu · ₺97K' },
]