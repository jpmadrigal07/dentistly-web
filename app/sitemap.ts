
import { MetadataRoute } from 'next';

// Example static slugs for Dentistly (replace with dynamic fetch if needed)
const staticPages = [
  '',
  'pricing',
  'about',
  'contact',
  'terms-of-service',
  'privacy-policy',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  return staticPages.map((slug) => ({
    url: `https://dentistly.app/${slug}`,
    lastModified,
  }));
}
