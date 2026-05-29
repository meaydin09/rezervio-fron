import { useState } from 'react'
import type { AdminView } from '../types'

const titles: Record<AdminView, string> = {
  overview:      'Genel Bakış',
  users:         'Kullanıcılar',
  subscriptions: 'Abonelikler',
  appointments:  'Randevular',
  revenue:       'Gelir & Raporlar',
  announcements: 'Duyurular',
  support:       'Destek Talepleri',
  audit:         'İşlem Geçmişi',
  settings:      'Sistem Ayarları',
  kvkk:          'KVKK Metni',
  privacy:       'Gizlilik Politikası',
  faq:           'Sıkça Sorulan Sorular',
}

export function useAdminView() {
  const [activeView, setActiveView] = useState<AdminView>('overview')
  const title = titles[activeView]
  return { activeView, setActiveView, title }
}