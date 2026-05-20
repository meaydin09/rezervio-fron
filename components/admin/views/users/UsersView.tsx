import UsersFilter from './UsersFilter'
import UsersTable from './UsersTable'
import type { AdminUser } from '../../types'

interface Props {
  onNewUser: () => void
  onEditUser: (user: AdminUser) => void
}

export default function UsersView({ onNewUser, onEditUser }: Props) {
  return (
    <div>
      <UsersFilter onNewUser={onNewUser} />
      <UsersTable onEdit={onEditUser} />
    </div>
  )
}