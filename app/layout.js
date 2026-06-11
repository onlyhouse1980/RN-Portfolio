import './globals.css';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Barlow+Condensed:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
