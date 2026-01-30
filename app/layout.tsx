import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/contexts/language-context'
import './globals.css'
import { WhatsAppButton } from '@/components/whatsapp-button'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Olympos Coconut Apart ve Pansiyon | Doğa ile iç içe bir tatil',
  description: 'Doğa ile iç içe, huzurlu ve keyifli bir konaklama deneyimi. Olympos Coconut Apart ve Pansiyon\'da unutulmaz bir tatil sizi bekliyor.',
  generator: 'v0.app',
  keywords: ['apart', 'pansiyon', 'olympos', 'deniz manzarası', 'tatil', 'Antalya', 'Olympos Coconut', 'doğa'],
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#0c2340',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
