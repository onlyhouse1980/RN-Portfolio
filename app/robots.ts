export default function robots() {
  const baseUrl = 'https://ryannyberg.com'; // Update to your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
