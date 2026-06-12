import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Groww You ERP – Smart Business Software',
  description: 'Transform your business with a premium cloud ERP. Seamless GST billing, real-time inventory management, and powerful financial tracking designed for modern enterprises.',
  openGraph: {
    title: 'Groww You ERP – Smart Business Software',
    description: 'Transform your business with a premium cloud ERP.',
    url: 'https://growwyouerp.com',
    siteName: 'Groww You ERP',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'hi_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Groww You ERP – Smart Business Software',
    description: 'Transform your business with a premium cloud ERP.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://growwyouerp.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-[#0F172A] text-white antialiased leading-relaxed overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
