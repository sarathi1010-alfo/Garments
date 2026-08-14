import { test, expect } from '@playwright/test';

test('verify august 25 guides rendering', async ({ page }) => {
  const urls = [
    'http://localhost:3000/guides/high-frequency-ultrasonic-pocket-welding-thermal-seam-bonding',
    'http://localhost:3000/guides/perundurai-bhavani-downstream-dyeing-hubs-zld-processing',
    'http://localhost:3000/guides/seamless-warp-knit-vs-cut-and-sew-flatlock-compression-leggings'
  ];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`Navigating to ${url}`);
    await page.goto(url);
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toBeVisible();
    await page.screenshot({ path: `verification/screenshots/august25_guide_${i + 1}.png`, fullPage: true });
  }
});
