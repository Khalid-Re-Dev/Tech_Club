import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tech Pioneers Club - Empowering Technology Learning',
  description: 'Join Tech Pioneers Club - A community empowering youth through technology, innovation, and volunteer-driven learning. Together, we code the future.',
  keywords: ['Tech Pioneers Club', 'Technology Learning', 'Programming', 'Innovation', 'Community'],
  authors: [{ name: 'Tech Pioneers Club' }],
  openGraph: {
    title: 'Tech Pioneers Club',
    description: 'Empowering youth and communities through technology',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
