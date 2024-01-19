import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Decora Fácil Shopping ID',
  description:
    'Renove sua casa juntando algumas pecinhas. Como estilo e economia.',
  openGraph: {
    title: 'Decora Fácil Shopping ID',
    images: [
      {
        url: '/images/seoImage.jpg'
      }
    ]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
