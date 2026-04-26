import type { Metadata } from 'next'
import { Manrope, Philosopher } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { ClientLayoutWrapper } from '@/components/layout/ClientLayoutWrapper'

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const philosopher = Philosopher({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Swakula Sali Community',
  description: 'A digital ecosystem connecting the Swakula Sali community worldwide. Directory, Matrimony, Business, and Events.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${philosopher.variable} font-sans min-h-screen flex flex-col antialiased`}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
