import './globals.css'
import type { Metadata } from 'next'
import { Inter, Merriweather, Revalia } from 'next/font/google'

const reva = Revalia({weight:['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auto Dialer App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={reva.className}>{children}</body>
    </html>
  )
}