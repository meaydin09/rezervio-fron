'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { LoginFormData } from './types'

export default function LoginForm() {
  const router = useRouter()
  const [form, setForm] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 py-20 bg-white">
      <div className="w-full max-w-md">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-8 sm:mb-10">
          <Image src="/rezervio-logo.png" alt="Rezervio" width={120} height={36} priority />
        </Link>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-900">Hoş geldin 👋</h1>
        <p className="mt-2 text-sm text-ink-600">Hesabına giriş yap ve randevularını yönetmeye devam et.</p>

        {/* Sosyal giriş */}
        <div className="mt-7 grid grid-cols-2 gap-3">
          <button className="border border-ink-200 hover:bg-ink-50 rounded-lg py-2.5 text-sm font-semibold flex items-center justify-center gap-2 transition">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M5.27 9.76A7.08 7.08 0 0 1 16.4 6.83l3.2-3.2A11.45 11.45 0 0 0 12 .5 11.5 11.5 0 0 0 1.83 6.6z"/>
              <path fill="#34A853" d="M16.04 18.01A6.97 6.97 0 0 1 12 19.1a7 7 0 0 1-6.73-4.83L1.83 17.4A11.5 11.5 0 0 0 12 23.5a11 11 0 0 0 7.63-2.77z"/>
              <path fill="#4A90E2" d="M19.63 20.73A11.06 11.06 0 0 0 23.5 12c0-.78-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.43 3.77z"/>
              <path fill="#FBBC05" d="M5.27 14.27A7.08 7.08 0 0 1 4.9 12c0-.8.14-1.55.37-2.24L1.83 6.6A11.5 11.5 0 0 0 .5 12c0 1.85.44 3.6 1.33 5.4z"/>
            </svg>
            Google
          </button>
          <button className="border border-ink-200 hover:bg-ink-50 rounded-lg py-2.5 text-sm font-semibold flex items-center justify-center gap-2 transition">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.86-3.08.41-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Apple
          </button>
        </div>

        {/* Ayraç */}
        <div className="my-6 flex items-center gap-3 text-xs text-ink-400">
          <div className="flex-1 h-px bg-ink-100" />
          <span>veya e-posta ile</span>
          <div className="flex-1 h-px bg-ink-100" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-ink-700">E-posta</label>
            <input
              type="email"
              placeholder="ornek@mail.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-ink-700">Şifre</label>
              <Link href="/sifremi-unuttum" className="text-xs font-semibold text-brand-600 hover:underline">
                Şifremi unuttum
              </Link>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-1 w-full text-sm border border-ink-200 rounded-lg px-3 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition"
            />
          </div>

          <label className="flex items-center gap-2 text-xs text-ink-600 cursor-pointer">
            <input
              type="checkbox"
              checked={form.rememberMe}
              onChange={(e) => setForm({ ...form, rememberMe: e.target.checked })}
              className="w-4 h-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500"
            />
            Beni hatırla
          </label>

          <button
            type="submit"
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)] transition"
          >
            Giriş Yap
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink-600">
          Hesabın yok mu?{' '}
          <Link href="/register" className="font-semibold text-brand-600 hover:underline">
            Kayıt ol
          </Link>
        </p>

      </div>
    </div>
  )
}