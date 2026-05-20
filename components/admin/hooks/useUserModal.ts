import { useState } from 'react'
import type { AdminUser } from '../types'

export function useUserModal() {
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null)
  const open = (user: AdminUser) => setSelectedUser(user)
  const close = () => setSelectedUser(null)
  return { selectedUser, open, close }
}