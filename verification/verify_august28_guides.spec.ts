import { test, expect } from '@playwright/test';

test('Verify August 28 Guides Render Correctly', async ({ page }) => {
  const routes = [
    '/guides/automated-ultrasonic-elastic-band-insertion-edge-trim-workstations',
    '/guides/sankari-erode-high-tenacity-viscose-filament-yarns-sourcing',
    '/guides/seamless-flat-bed-warp-knitting-vs-4-needle-6-thread-flatlock-compression-tights',
  ];

  for (const route of routes) {
    const response = await page.goto(`http://localhost:3000${route}`);
    expect(response?.status()).toBe(200);

    // Verify H1 exists
    const h1 = await page.locator('h1').innerText();
    expect(h1.length).toBeGreaterThan(10);

    // Take screenshot
    const slug = route.split('/').pop();
    await page.screenshot({ path: `verification/screenshots/${slug}.png`, fullPage: false });
  }
});
