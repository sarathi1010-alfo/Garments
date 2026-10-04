import { test, expect } from '@playwright/test';

test('Verify November 16, 2026 newly published guides render cleanly', async ({ page }) => {
  const routes = [
    '/guides/custom-open-water-water-polo-goalie-caps-heavy-duty-suit-reinforcements-guide',
    '/guides/thanjavur-papanasam-technical-weaving-narrow-fabric-trims-corridor',
    '/guides/magneto-rheological-elastomer-mre-dynamic-impact-mitigation-activewear-guide'
  ];

  for (const route of routes) {
    await page.goto(`http://localhost:3000${route}`);
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toBeVisible();
  }
});
