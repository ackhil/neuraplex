import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Neuraplex — Autism & ADHD Assessment Software',
  description:
    'Clinician-led, end-to-end platform supporting autism and ADHD assessment pathways — cutting waiting times, standardising process, improving outcomes.',
  openGraph: {
    title: 'Neuraplex — Autism & ADHD Assessment Software',
    description:
      'End-to-end neurodevelopmental assessment software built for clinicians.',
    url: 'https://neuraplex.co.uk',
    siteName: 'Neuraplex',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
