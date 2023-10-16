import './globals.css'
import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import DefaultNavbar from './components/navbar'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My portfolio displaying my works',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={onest.className}>
        {/* Nav goes here */}
        <DefaultNavbar />
        {children}
        </body>
    </html>
  )
}
