import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Hafiz Naveed Uddin | Agentic AI Developer & SOC Analyst',
  description: 'Portfolio of Hafiz Naveed Uddin - Agentic AI Developer, Cybersecurity Analyst, Full-Stack Developer with 20+ certifications',
  openGraph: {
    title: 'Hafiz Naveed Uddin',
    description: 'Building Intelligent Systems. Defending Digital Frontiers.',
    images: ['/images/og-image.png'],
    url: 'https://naveed-portfolio.vercel.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hafiz Naveed Uddin | Agentic AI Developer',
    description: 'Agentic AI Developer, SOC Analyst, Full-Stack Developer',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-gray-900 text-white antialiased">
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
