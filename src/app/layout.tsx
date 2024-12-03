import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: 'Scotseal - Premium Windows, Doors & Home Improvements',
  description: 'Premium windows, doors, and home improvements. Creating dream homes across Scotland since 2008.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}