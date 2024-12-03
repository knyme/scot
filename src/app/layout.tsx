import './src/app/global.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}