'use client'

import { useState, useMemo } from 'react'
import UsersFilter from './UsersFilter'
import UsersTable from './UsersTable'
import { users } from '../../data/users-data'
import type { AdminUser } from '../../types'

interface Props {
  onNewUser: () => void
  onEditUser: (user: AdminUser) => void
}

export default function UsersView({ onNewUser, onEditUser }: Props) {
  const [search, setSearch] = useState('')
  const [plan, setPlan] = useState('Tüm planlar')
  const [status, setStatus] = useState('Tüm durumlar')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return users.filter((u) => {
      const matchSearch = !q || u.name.toLowerCase().includes(q) || u.slug.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
      const matchPlan = plan === 'Tüm planlar' || u.plan === plan
      const matchStatus = status === 'Tüm durumlar' || u.status === status
      return matchSearch && matchPlan && matchStatus
    })
  }, [search, plan, status])

  const handleExport = () => {
    const header = ['Ad', 'E-posta', 'Slug', 'Plan', 'Durum', 'MRR', 'Randevu Sayısı', 'Son Görülme']
    const rows = filtered.map((u) => [u.name, u.email, u.slug, u.plan, u.status, u.mrr, String(u.appointments), u.lastSeen])

    const xmlRows = [header, ...rows].map((row) =>
      `<Row>${row.map((cell) => `<Cell><Data ss:Type="String">${cell.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</Data></Cell>`).join('')}</Row>`
    ).join('\n')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
  xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
  <Styles>
    <Style ss:ID="header">
      <Font ss:Bold="1"/>
      <Interior ss:Color="#F1F5F9" ss:Pattern="Solid"/>
    </Style>
  </Styles>
  <Worksheet ss:Name="Kullanicilar">
    <Table>
      ${xmlRows}
    </Table>
  </Worksheet>
</Workbook>`

    const blob = new Blob(['\uFEFF' + xml], { type: 'application/vnd.ms-excel;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `rezervio-kullanicilar-${new Date().toISOString().slice(0, 10)}.xls`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      <UsersFilter
        search={search} onSearchChange={setSearch}
        plan={plan} onPlanChange={setPlan}
        status={status} onStatusChange={setStatus}
        onNewUser={onNewUser}
        onExport={handleExport}
      />
      <UsersTable users={filtered} onEdit={onEditUser} />
    </div>
  )
}
