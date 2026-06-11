export default function sitemap() {
  const baseUrl = 'https://ryannyberg.com'; // Update to your actual domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Since it's a single-page portfolio, we just need the root.
    // If you add multiple pages (e.g., /about, /projects), add them here:
    // {
    //   url: `${baseUrl}/projects`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
