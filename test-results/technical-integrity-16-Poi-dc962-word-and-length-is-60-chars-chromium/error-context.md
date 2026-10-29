# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: technical-integrity.spec.ts >> 16-Point Technical & SEO Verification Suite >> Check 3: Title tag contains primary keyword and length is <= 60 chars
- Location: tests/technical-integrity.spec.ts:29:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:3014/
Call log:
  - navigating to "http://127.0.0.1:3014/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: 127.0.0.1
      - text: refused to connect.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
    - generic [ref=e16]: ERR_CONNECTION_REFUSED
  - generic [ref=e17]:
    - button "Reload" [ref=e19] [cursor=pointer]
    - button "Details" [ref=e20] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const TARGET_KEYWORD = process.env.TARGET_KEYWORD || 'custom athletic apparel manufacturer';
  4   | 
  5   | test.describe('16-Point Technical & SEO Verification Suite', () => {
  6   |   let consoleErrors: string[] = [];
  7   |   let pageErrors: Error[] = [];
  8   | 
  9   |   test.beforeEach(async ({ page }) => {
  10  |     consoleErrors = [];
  11  |     pageErrors = [];
  12  |     page.on('console', (msg) => {
  13  |       if (msg.type() === 'error') consoleErrors.push(msg.text());
  14  |     });
  15  |     page.on('pageerror', (err) => pageErrors.push(err));
  16  |   });
  17  | 
  18  |   test('Check 1: Page loads with HTTP 200', async ({ page }) => {
  19  |     const response = await page.goto('/', { waitUntil: 'domcontentloaded' });
  20  |     expect(response?.status()).toBe(200);
  21  |   });
  22  | 
  23  |   test('Check 2: Zero console errors and uncaught exceptions', async ({ page }) => {
  24  |     await page.goto('/', { waitUntil: 'networkidle' });
  25  |     expect(consoleErrors).toEqual([]);
  26  |     expect(pageErrors).toEqual([]);
  27  |   });
  28  | 
  29  |   test('Check 3: Title tag contains primary keyword and length is <= 60 chars', async ({ page }) => {
> 30  |     await page.goto('/');
      |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:3014/
  31  |     const title = await page.title();
  32  |     expect(title.length).toBeGreaterThanOrEqual(15);
  33  |     expect(title.length).toBeLessThanOrEqual(60);
  34  |     expect(title.toLowerCase()).toContain(TARGET_KEYWORD.toLowerCase());
  35  |   });
  36  | 
  37  |   test('Check 4: Meta description exists, 120-160 chars, and contains keyword', async ({ page }) => {
  38  |     await page.goto('/');
  39  |     const metaDesc = await page.locator('meta[name="description"]').getAttribute('content');
  40  |     expect(metaDesc).toBeTruthy();
  41  |     expect(metaDesc!.length).toBeGreaterThanOrEqual(120);
  42  |     expect(metaDesc!.length).toBeLessThanOrEqual(160);
  43  |     expect(metaDesc!.toLowerCase()).toContain(TARGET_KEYWORD.toLowerCase());
  44  |   });
  45  | 
  46  |   test('Check 5: Exactly one H1 tag with semantic content', async ({ page }) => {
  47  |     await page.goto('/');
  48  |     const h1 = page.locator('h1');
  49  |     expect(await h1.count()).toBe(1);
  50  |     const text = await h1.textContent();
  51  |     expect(text?.trim().length).toBeGreaterThan(10);
  52  |   });
  53  | 
  54  |   test('Check 6: Valid JSON-LD Structured Data (WebApplication, FAQPage, HowTo, BreadcrumbList)', async ({ page }) => {
  55  |     await page.goto('/');
  56  |     const schemas = await page.evaluate(() => {
  57  |       const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
  58  |       return scripts.map((s) => {
  59  |         try {
  60  |           return JSON.parse(s.textContent || '{}');
  61  |         } catch {
  62  |           return null;
  63  |         }
  64  |       });
  65  |     });
  66  | 
  67  |     expect(schemas.length).toBeGreaterThanOrEqual(1);
  68  |     expect(schemas.every((s) => s !== null)).toBe(true);
  69  | 
  70  |     const types = schemas.flatMap((s) => (Array.isArray(s) ? s.map((item) => item['@type']) : [s['@type']]));
  71  |     expect(types.some((t) => t === 'WebApplication' || t === 'SoftwareApplication')).toBe(true);
  72  |     expect(types).toContain('FAQPage');
  73  |     expect(types).toContain('HowTo');
  74  |     expect(types).toContain('BreadcrumbList');
  75  |   });
  76  | 
  77  |   test('Check 7: Open Graph and Twitter Card tags present', async ({ page }) => {
  78  |     await page.goto('/');
  79  |     const requiredOg = ['og:title', 'og:description', 'og:image', 'og:url', 'og:type'];
  80  |     for (const og of requiredOg) {
  81  |       const content = await page.locator(`meta[property="${og}"]`).getAttribute('content');
  82  |       expect(content).toBeTruthy();
  83  |     }
  84  |     const requiredTwitter = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];
  85  |     for (const tw of requiredTwitter) {
  86  |       const content = await page.locator(`meta[name="${tw}"]`).getAttribute('content');
  87  |       expect(content).toBeTruthy();
  88  |     }
  89  |   });
  90  | 
  91  |   test('Check 8: All images have non-empty Alt text', async ({ page }) => {
  92  |     await page.goto('/');
  93  |     const missingAltCount = await page.locator('img:not([alt])').count();
  94  |     expect(missingAltCount).toBe(0);
  95  |   });
  96  | 
  97  |   test('Check 9: Zero mixed content on HTTPS', async ({ page }) => {
  98  |     const insecureRequests: string[] = [];
  99  |     page.on('request', (req) => {
  100 |       if (req.url().startsWith('http://') && !req.url().includes('localhost') && !req.url().includes('127.0.0.1')) {
  101 |         insecureRequests.push(req.url());
  102 |       }
  103 |     });
  104 |     await page.goto('/');
  105 |     expect(insecureRequests).toEqual([]);
  106 |   });
  107 | 
  108 |   test('Check 10: Largest Contentful Paint (LCP) < 2.5s', async ({ page }) => {
  109 |     await page.goto('/');
  110 |     const lcp = await page.evaluate(() => {
  111 |       return new Promise<number>((resolve) => {
  112 |         let maxLcp = 0;
  113 |         const observer = new PerformanceObserver((list) => {
  114 |           const entries = list.getEntries();
  115 |           if (entries.length > 0) {
  116 |             maxLcp = entries[entries.length - 1].startTime;
  117 |           }
  118 |         });
  119 |         observer.observe({ type: 'largest-contentful-paint', buffered: true });
  120 |         setTimeout(() => {
  121 |           observer.disconnect();
  122 |           resolve(maxLcp);
  123 |         }, 3000);
  124 |       });
  125 |     });
  126 |     expect(lcp).toBeLessThan(2500);
  127 |   });
  128 | 
  129 |   test('Check 11: Cumulative Layout Shift (CLS) < 0.1', async ({ page }) => {
  130 |     await page.goto('/');
```