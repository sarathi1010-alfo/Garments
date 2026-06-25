import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Set caching headers for all pages
  response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  response.headers.set('X-Robots-Tag', 'index, follow');

  // Prevent blocking of static assets and set long-term cache
  if (request.nextUrl.pathname.startsWith('/_next/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    response.headers.set('X-Robots-Tag', 'all');
  }

  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
