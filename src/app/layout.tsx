import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'SecCon Group | Trusted Partner. Critical Mission.',
    template: '%s | SecCon Group',
  },
  description:
    'SecCon Group is a Service-Disabled Veteran Owned Small Business (SDVOSB) and Minority Business Enterprise (MBE) providing integrated security solutions, training, and mission support to U.S. Government agencies and defense sectors.',
  keywords: [
    'SDVOSB', 'MBE', 'security contractor', 'DoD contractor', 'government security',
    'protective security', 'law enforcement training', 'SecCon Group',
  ],
  authors: [{ name: 'SecCon Group' }],
  openGraph: {
    type: 'website',
    siteName: 'SecCon Group',
    title: 'SecCon Group | Trusted Partner. Critical Mission.',
    description: 'SDVOSB + MBE security contracting company delivering integrated solutions for critical missions worldwide.',
  },
  icons: {
    icon: '/seccon-mark-favicon.svg',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`} suppressHydrationWarning>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
