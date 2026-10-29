# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: technical-integrity.spec.ts >> 16-Point Technical & SEO Verification Suite >> Check 12: All page links return 2xx/3xx (no broken links)
- Location: tests/technical-integrity.spec.ts:149:7

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
  131 |     const cls = await page.evaluate(() => {
  132 |       return new Promise<number>((resolve) => {
  133 |         let score = 0;
  134 |         const observer = new PerformanceObserver((list) => {
  135 |           for (const entry of list.getEntries() as any[]) {
  136 |             if (!entry.hadRecentInput) score += entry.value;
  137 |           }
  138 |         });
  139 |         observer.observe({ type: 'layout-shift', buffered: true });
  140 |         setTimeout(() => {
  141 |           observer.disconnect();
  142 |           resolve(score);
  143 |         }, 2000);
  144 |       });
  145 |     });
  146 |     expect(cls).toBeLessThan(0.1);
  147 |   });
  148 | 
  149 |   test('Check 12: All page links return 2xx/3xx (no broken links)', async ({ page, request }) => {
> 150 |     await page.goto('/');
      |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:3014/
  151 |     const hrefs = await page.locator('a[href]').evaluateAll((links) =>
  152 |       links
  153 |         .map((a) => (a as HTMLAnchorElement).href)
  154 |         .filter((href) => href.startsWith('http'))
  155 |     );
  156 |     const uniqueHrefs = Array.from(new Set(hrefs)).slice(0, 30);
  157 |     for (const url of uniqueHrefs) {
  158 |       try {
  159 |         const res = await request.get(url, { failOnStatusCode: false, timeout: 8000 });
  160 |         expect(res.status(), `Dead link detected: ${url}`).toBeLessThan(400);
  161 |       } catch (err: any) {
  162 |         if (err?.message?.includes('ECONNRESET') || err?.message?.includes('ETIMEDOUT') || err?.message?.includes('fetch failed')) {
  163 |           try {
  164 |             const retryRes = await request.get(url, { failOnStatusCode: false, timeout: 8000 });
  165 |             expect(retryRes.status(), `Dead link detected after retry: ${url}`).toBeLessThan(400);
  166 |           } catch (retryErr) {
  167 |             console.warn(`External link probe warning for ${url}:`, retryErr);
  168 |           }
  169 |         } else {
  170 |           throw err;
  171 |         }
  172 |       }
  173 |     }
  174 |   });
  175 | 
  176 |   test('Check 13: Sitemap.xml is accessible and valid XML', async ({ request }) => {
  177 |     const res = await request.get('/sitemap.xml');
  178 |     expect(res.status()).toBe(200);
  179 |     const contentType = res.headers()['content-type'] || '';
  180 |     expect(contentType.includes('xml')).toBe(true);
  181 |     const text = await res.text();
  182 |     expect(text).toContain('<urlset');
  183 |   });
  184 | 
  185 |   test('Check 14: Robots.txt is accessible and specifies sitemap', async ({ request }) => {
  186 |     const res = await request.get('/robots.txt');
  187 |     expect(res.status()).toBe(200);
  188 |     const text = await res.text();
  189 |     expect(text).toContain('User-agent');
  190 |     expect(text).toContain('Sitemap:');
  191 |   });
  192 | 
  193 |   test('Check 15: Responsive layouts with zero horizontal scrollbar on 375px, 768px, 1440px', async ({ page }) => {
  194 |     const viewports = [
  195 |       { width: 375, height: 667 },
  196 |       { width: 768, height: 1024 },
  197 |       { width: 1440, height: 900 },
  198 |     ];
  199 |     for (const vp of viewports) {
  200 |       await page.setViewportSize(vp);
  201 |       await page.goto('/');
  202 |       const hasHorizontalScroll = await page.evaluate(
  203 |         () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  204 |       );
  205 |       expect(hasHorizontalScroll, `Horizontal overflow on ${vp.width}x${vp.height}`).toBe(false);
  206 |     }
  207 |   });
  208 | 
  209 |   test('Check 16: Accessibility landmark (Skip-to-content) and touch targets >= 44px', async ({ page }) => {
  210 |     await page.setViewportSize({ width: 375, height: 667 });
  211 |     await page.goto('/');
  212 |     const skipLink = page.locator('a[href^="#main"], a[href^="#content"], .skip-link');
  213 |     expect(await skipLink.count()).toBeGreaterThanOrEqual(1);
  214 | 
  215 |     const primaryButton = page.locator('button, a.btn, a[role="button"]').first();
  216 |     if (await primaryButton.isVisible()) {
  217 |       const box = await primaryButton.boundingBox();
  218 |       if (box) {
  219 |         expect(box.width).toBeGreaterThanOrEqual(44);
  220 |         expect(box.height).toBeGreaterThanOrEqual(44);
  221 |       }
  222 |     }
  223 |   });
  224 | });
  225 | 
```