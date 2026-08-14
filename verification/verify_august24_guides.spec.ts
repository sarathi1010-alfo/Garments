import { test, expect } from '@playwright/test';

test('verify August 24 guides rendering', async ({ page }) => {
  const slugs = [
    'erode-karur-viscose-rayon-spinning-corridors-high-elasticity-yarns',
    'high-definition-dye-sublimation-calibration-ink-jet-dot-gain-color-profile-tuning',
    'recycled-polyester-vs-organic-cotton-school-team-kits-durability-lca'
  ];

  for (const slug of slugs) {
    console.log(`Navigating to http://localhost:3000/guides/${slug}...`);
    await page.goto(`http://localhost:3000/guides/${slug}`, { waitUntil: 'networkidle' });

    // Verify H1 is present
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    // Verify Answer Block is present
    const answerBlock = page.locator('.bg-muted\\/50, .border-l-4').first();
    await expect(answerBlock).toBeVisible();

    // Take screenshot
    await page.screenshot({
      path: `verification/screenshots/august24_${slug.slice(0, 30)}.png`,
      fullPage: false
    });
    console.log(`Screenshot saved for ${slug}`);
  }
});
