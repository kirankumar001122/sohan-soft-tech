const LOCAL_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredUrl) return new URL(configuredUrl).origin;

  const vercelHost = (
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL
  )?.trim();
  if (vercelHost) {
    return new URL(`https://${vercelHost}`).origin;
  }

  return LOCAL_SITE_URL;
}