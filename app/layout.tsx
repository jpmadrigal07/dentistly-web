import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header-1';
import Footer from '@/components/layout/footer-1';
import { TooltipProvider } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: 'Dentistly - Simplify dental practice. Amplify patient care.',
  description: 'The complete SaaS solution for managing your dental clinic. Handle appointments, patients, procedures, and team members all in one powerful platform.',
  keywords: [
    'dentist',
    'dental',
    'dental software',
    'dental SaaS',
    'dental clinic management',
    'appointment scheduling',
    'patient management',
    'practice management',
    'Philippines dentist',
    'Philippines dental',
    'team management',
    'AI dental',
    'analytics',
    'reports',
    'healthcare software',
    'Dentistly'
  ],
  openGraph: {
    title: 'Dentistly - Simplify dental practice. Amplify patient care.',
    description: 'The complete SaaS solution for managing your dental clinic. Handle appointments, patients, procedures, and team members all in one powerful platform.',
    url: 'https://dentistly.com',
    siteName: 'Dentistly',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        width: 2070,
        height: 1380,
        alt: 'Happy dental team and patients using Dentistly software',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentistly - Simplify dental practice. Amplify patient care.',
    description: 'The complete SaaS solution for managing your dental clinic. Handle appointments, patients, procedures, and team members all in one powerful platform.',
    images: [
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    ],
    site: '@dentistly',
    creator: '@dentistly',
  },
  metadataBase: new URL('https://dentistly.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">
        <TooltipProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
