import './globals.css'
import { Inter } from 'next/font/google'
import Header from 'src/components/Header/index.tsx'
import Footer from 'src/components/Footer/index.tsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Scotseal',
  description: 'Premium windows, doors, and home improvements in Scotland',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}