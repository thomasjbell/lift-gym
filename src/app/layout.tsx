import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialSidebar from '@/components/SocialSidebar'
import SocialTooltip from '@/components/SocialTooltip'

export const metadata: Metadata = {
  title: 'Lift Gym - Personal, Supportive, Friendly',
  description: 'Transform your fitness journey with Lift Gym. Personal, supportive, and friendly fitness environment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <Header />
        <SocialSidebar />
        <SocialTooltip />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}