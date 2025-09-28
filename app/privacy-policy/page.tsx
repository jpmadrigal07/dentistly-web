export const metadata = {
  title: 'Dentistly Privacy Policy',
  description: 'Read the Privacy Policy for Dentistly, the SaaS dental management platform. Learn how we protect your privacy and data.',
  keywords: [
    'privacy policy', 'Dentistly privacy', 'dental SaaS privacy', 'dental software', 'dental clinic management', 'practice management', 'Dentistly', 'Philippines dentist', 'Philippines dental', 'AI dental', 'analytics', 'reports', 'healthcare software'
  ],
  openGraph: {
    title: 'Dentistly Privacy Policy',
    description: 'Read the Privacy Policy for Dentistly, the SaaS dental management platform. Learn how we protect your privacy and data.',
    url: 'https://dentistly.app/privacy-policy',
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
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentistly Privacy Policy',
    description: 'Read the Privacy Policy for Dentistly, the SaaS dental management platform. Learn how we protect your privacy and data.',
    images: [
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    ],
    site: '@dentistly',
    creator: '@dentistly',
  },
  metadataBase: new URL('https://dentistly.app'),
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="container max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Last updated: July 8, 2025</p>
        <p className="mb-4">Dentistly ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our SaaS dental management platform.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <p className="mb-4">We collect information you provide directly, such as account registration details, appointment data, patient records, and team information. We may also collect usage data and cookies to improve our service.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">We use your information to provide, maintain, and improve Dentistly, including appointment management, patient records, multi-clinic support, procedures, team management, and analytics.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">3. Data Security</h2>
        <p className="mb-4">We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">4. Sharing of Information</h2>
        <p className="mb-4">We do not sell or rent your personal information. We may share information with service providers as necessary to operate Dentistly, or as required by law.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Rights</h2>
        <p className="mb-4">You have the right to access, update, or delete your personal information. Contact us at john@zkript.dev for assistance.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">6. Changes to This Policy</h2>
        <p className="mb-4">We may update this Privacy Policy from time to time. Continued use of Dentistly after changes constitutes acceptance of the new policy.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at john@zkript.dev.</p>
      </div>
    </>
  );
}