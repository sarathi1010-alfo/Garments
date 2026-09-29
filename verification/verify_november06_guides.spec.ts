import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1280, height: 800 } });

test('verify november 6 guides rendering', async ({ page }) => {
  const routes = [
    '/guides/custom-dragon-boat-outrigger-canoe-paddling-apparel-guide',
    '/guides/thiruthuraipoondi-pattukkottai-coastal-technical-textile-corridor-hub',
    '/guides/electro-responsive-shape-changing-micro-fiber-actuators-activewear-guide'
  ];

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    await page.goto(`http://localhost:3000${route}`);
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toBeVisible();
    await page.screenshot({ path: `verification/screenshots/nov06_guide_${i + 1}.png`, fullPage: false });
  }
});
