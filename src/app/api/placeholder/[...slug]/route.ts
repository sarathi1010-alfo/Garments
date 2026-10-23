import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];

  let width = 1200;
  let height = 675;

  if (slug.length >= 2) {
    const parsedWidth = parseInt(slug[0], 10);
    const parsedHeight = parseInt(slug[1], 10);
    if (!isNaN(parsedWidth) && parsedWidth > 0) width = parsedWidth;
    if (!isNaN(parsedHeight) && parsedHeight > 0) height = parsedHeight;
  } else if (slug.length === 1) {
    const parsedWidth = parseInt(slug[0], 10);
    if (!isNaN(parsedWidth) && parsedWidth > 0) width = parsedWidth;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="#1e293b"/>
  <rect x="5%" y="5%" width="90%" height="90%" fill="none" stroke="#334155" stroke-width="2" stroke-dasharray="8 8"/>
  <text x="50%" y="46%" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#f8fafc" text-anchor="middle" dominant-baseline="middle">Vinayaga Garments</text>
  <text x="50%" y="54%" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="#94a3b8" text-anchor="middle" dominant-baseline="middle">Custom Athletic Apparel &amp; Uniform Manufacturing • ${width} × ${height}</text>
</svg>`;

  return new NextResponse(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
