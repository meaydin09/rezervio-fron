import LoginForm from './LoginForm'
import LoginVisual from './LoginVisual'

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <LoginForm />
      <LoginVisual />
    </div>
  )
}