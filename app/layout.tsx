import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rezervio — Modern Randevu Platformu',
  description: 'Psikologlar, diyetisyenler, kuaförler için akıllı randevu yönetimi.',
  metadataBase: new URL('https://rezervio.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Rezervio — Modern Randevu Platformu',
    description: 'Psikologlar, diyetisyenler, kuaförler için akıllı randevu yönetimi.',
    url: 'https://rezervio.com',
    siteName: 'Rezervio',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  )
}