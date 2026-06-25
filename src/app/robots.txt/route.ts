export async function GET() {
  const robots = `User-agent: *
Allow: /
Allow: /_next/
Allow: /_next/static/
Allow: /_next/image*
Allow: /images/
Allow: /api/placeholder/
Disallow: /admin/
Disallow: /login/
Disallow: /register/
Disallow: /cart/
Disallow: /checkout/
Disallow: /account/
Disallow: /api/
Disallow: /_next/data/

User-agent: Googlebot
Allow: /
Crawl-delay: 0.5

User-agent: Googlebot-Image
Allow: /
Allow: /_next/image*
Allow: /images/
Allow: /api/placeholder/

Sitemap: https://garment.alfo.online/sitemap.xml
Host: https://garment.alfo.online`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
