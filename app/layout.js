import './globals.css';
import { Bebas_Neue, Space_Mono, Barlow_Condensed } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-mono',
});

const barlowCondensed = Barlow_Condensed({
  weight: ['300', '400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-condensed',
});

/**
 * Global SEO Metadata for the Next.js App Router.
 * This configuration applies automatically to all routes unless overridden.
 * @type {import('next').Metadata}
 */
export const metadata = {
  metadataBase: new URL('https://ryannyberg.com'), // Update with actual production domain
  title: {
    default: 'Ryan Nyberg — Full Stack Developer & AI Engineer',
    template: '%s | Ryan Nyberg'
  },
  description: 'Next.js developer portfolio — building fast, scalable, and visually striking digital experiences, specializing in React, TypeScript, and AI integrations.',
  keywords: ['Full Stack Developer', 'Next.js', 'React', 'TypeScript', 'Web Development', 'AI Integration', 'GSAP', 'Frontend Engineer'],
  authors: [{ name: 'Ryan Nyberg' }],
  creator: 'Ryan Nyberg',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Ryan Nyberg — Full Stack Developer',
    description: 'Next.js developer portfolio — building fast, scalable, and visually striking digital experiences.',
    siteName: 'Ryan Nyberg Portfolio',
    images: [
      {
        url: '/communiversity.png', // Replace with a dedicated og-image if available
        width: 1200,
        height: 630,
        alt: 'Ryan Nyberg Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Nyberg — Full Stack Developer',
    description: 'Next.js developer portfolio — building fast, scalable, and visually striking digital experiences.',
    images: ['/communiversity.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * The RootLayout component acts as the global shell for the entire Next.js application.
 * It is responsible for injecting global CSS, pre-loading essential Google Fonts,
 * and wrapping all child routes inside the standard `<html>` and `<body>` tags.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components/pages to render inside the layout.
 * @returns {JSX.Element} The rendered global HTML structure.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceMono.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
