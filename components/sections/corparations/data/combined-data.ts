import type { CombinedRow } from '../types'

export const weekDays = [
  { short: 'Pzt', date: 11 },
  { short: 'Sal', date: 12 },
  { short: 'Çar', date: 13 },
  { short: 'Per', date: 14 },
  { short: 'Cum', date: 15 },
  { short: 'Cmt', date: 16 },
  { short: 'Paz', date: 17 },
]

// 0=available, 1=limited, 2=full, 3=closed
export const combinedRows: CombinedRow[] = [
  { specialist: { initials: 'OU', name: 'Psk. Onur Uzun', title: 'Klinik Psikolog', bgColor: 'bg-ink-900' }, slots: [1, 0, 2, 3, 1, 3, 3] },
  { specialist: { initials: 'MD', name: 'Dr. Mert Doğan', title: 'Psikiyatrist', bgColor: 'bg-brand-600' }, slots: [0, 2, 1, 0, 1, 0, 3] },
  { specialist: { initials: 'SK', name: 'Psk. Selin Kaya', title: 'Çocuk & Ergen', bgColor: 'bg-emerald-600' }, slots: [3, 1, 2, 1, 3, 1, 3] },
  { specialist: { initials: 'CO', name: 'Uzm. Can Özdemir', title: 'Aile Danışmanı', bgColor: 'bg-amber-600' }, slots: [0, 0, 1, 2, 1, 0, 3] },
  { specialist: { initials: 'ZT', name: 'Psk. Zeynep Tan', title: 'EMDR Terapisti', bgColor: 'bg-violet-600' }, slots: [3, 3, 2, 1, 1, 1, 3] },
  { specialist: { initials: 'BK', name: 'Psk. Burak Kılıç', title: 'Kaygı & OKB', bgColor: 'bg-sky-600' }, slots: [1, 0, 0, 1, 2, 1, 3] },
]