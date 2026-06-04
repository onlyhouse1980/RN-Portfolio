const DEFAULT_SITE_URL = 'https://anewshade.de';

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    DEFAULT_SITE_URL;

  const urlWithProtocol = /^https?:\/\//.test(configuredUrl)
    ? configuredUrl
    : `https://${configuredUrl}`;

  return urlWithProtocol.replace(/\/+$/, '');
}
