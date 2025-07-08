// app/sitemap.ts - Next.js dynamic sitemap.xml
import { type NextRequest } from 'next/server';
import { type NextResponse } from 'next/server';

export function GET(req: NextRequest): NextResponse {
  const urls = [
    '',
    'pricing',
    'about',
    'contact',
    'terms-of-service',
    'privacy-policy',
  ];
  const base = 'https://dentistly.app';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (path) => `  <url>\n    <loc>${base}/${path}</loc>\n    <changefreq>${path ? 'monthly' : 'weekly'}</changefreq>\n    <priority>${path ? '0.7' : '1.0'}</priority>\n  </url>`
    )
    .join('\n')}\n</urlset>`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  }) as NextResponse;
}
