import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dentistly - Simplify dental practice. Amplify patient care.',
  description: 'The complete SaaS solution for managing your dental clinic. Handle appointments, patients, procedures, and team members all in one powerful platform.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
