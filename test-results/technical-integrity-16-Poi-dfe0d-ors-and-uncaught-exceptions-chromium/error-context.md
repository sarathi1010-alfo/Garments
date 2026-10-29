# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: technical-integrity.spec.ts >> 16-Point Technical & SEO Verification Suite >> Check 2: Zero console errors and uncaught exceptions
- Location: tests/technical-integrity.spec.ts:23:7

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 3

- Array []
+ Array [
+   "Failed to load resource: net::ERR_CONNECTION_RESET",
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - link "Skip to content" [ref=e3] [cursor=pointer]:
      - /url: "#main"
    - navigation [ref=e4]:
      - generic [ref=e5]:
        - link "Vinayaga Garments — home" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "Vinayaga Garments logo — a stylized monogram in a circular emblem" [ref=e7]
          - generic [ref=e8]: Vinayaga Garments
        - generic [ref=e9]:
          - link "Products" [ref=e10] [cursor=pointer]:
            - /url: /products
          - link "Custom Services" [ref=e11] [cursor=pointer]:
            - /url: /manufacturing
          - link "About Us" [ref=e12] [cursor=pointer]:
            - /url: /about
          - link "Guides" [ref=e13] [cursor=pointer]:
            - /url: /guides
          - link "Get a Quote" [ref=e14] [cursor=pointer]:
            - /url: /contact
        - link "Chat with us on WhatsApp" [ref=e16] [cursor=pointer]:
          - /url: https://wa.me/917200551500?text=Hello%20Vinayaga%20Garments%2C%20I'd%20like%20to%20discuss%20custom%20apparel%20requirements.
          - img [ref=e17]
          - text: Chat with us on WhatsApp
    - main [ref=e19]:
      - generic [ref=e21]:
        - generic [ref=e22]:
          - heading "Precision Engineered Custom Athletic Apparel Manufacturer" [level=1] [ref=e24]:
            - text: Precision Engineered
            - text: Custom Athletic Apparel
            - generic [ref=e25]: Manufacturer
          - paragraph [ref=e26]: Vinayaga Garments is a specialized B2B custom athletic apparel manufacturer delivering high-performance teamwear, sublimated jerseys, activewear, and private-label sportswear. We combine technical moisture-wicking textiles with precision flatlock stitching, automated sublimation cutting, and rigorous quality control for sports teams, fitness brands, and corporate athletic programs worldwide.
          - generic [ref=e27]:
            - link "Get a Quote" [ref=e28] [cursor=pointer]:
              - /url: /contact
              - text: Get a Quote
            - link "WhatsApp" [ref=e30] [cursor=pointer]:
              - /url: https://wa.me/917200551500?text=Hello%20Vinayaga%20Garments%2C%20I'd%20like%20to%20discuss%20custom%20apparel%20requirements.
              - text: WhatsApp
            - link "Explore Products" [ref=e32] [cursor=pointer]:
              - /url: /products
              - text: Explore Products
        - img "Custom athletic apparel manufacturer sports jersey featuring precision sublimation printing and high-performance fabric" [ref=e35]
      - generic [ref=e37]:
        - generic [ref=e38]:
          - heading "Manufacturing Excellence" [level=2] [ref=e39]
          - paragraph [ref=e40]: Our facility is equipped to handle complex custom requirements with unyielding attention to detail.
        - generic [ref=e41]:
          - generic [ref=e42]:
            - generic [ref=e44]: palette
            - heading "Vibrant Sublimation" [level=3] [ref=e45]
            - paragraph [ref=e46]: Industry-leading dye sublimation printing that ensures your team's colors remain vibrant and fade-resistant, wash after wash.
          - generic [ref=e47]:
            - generic [ref=e49]: architecture
            - heading "Precision Stitching" [level=3] [ref=e50]
            - paragraph [ref=e51]: Reinforced seams and expert tailoring provide the structural integrity required for high-impact professional athletic wear.
          - generic [ref=e52]:
            - generic [ref=e54]: layers
            - heading "Durable Fabrics" [level=3] [ref=e55]
            - paragraph [ref=e56]: Sourcing only the finest technical fabrics that offer breathability, moisture-wicking, and exceptional mechanical stretch.
      - generic [ref=e58]:
        - generic [ref=e59]:
          - generic [ref=e60]:
            - heading "Featured Work" [level=2] [ref=e61]
            - paragraph [ref=e62]: A selection of our recent premium custom manufacturing projects.
          - link "View Our Gallery" [ref=e63] [cursor=pointer]:
            - /url: https://drive.google.com/drive/folders/1brc2vWURxvbjMJkrAPzUikaRXY-fDxJn
            - text: View Our Gallery
            - img [ref=e64]
        - generic [ref=e66]:
          - generic [ref=e67] [cursor=pointer]:
            - img "A premium navy blue kabaddi team jersey laid out on a pristine white surface. Half-sleeve fitted playing jersey with a single bold gold accent bar across the chest. Clean unbranded custom manufacturing — no logos or text." [ref=e69]
            - generic [ref=e70]:
              - text: Custom Team Kits
              - heading "Kabaddi Team Kit" [level=3] [ref=e71]
          - generic [ref=e72] [cursor=pointer]:
            - img "A close-up, highly detailed photograph focusing on the collar and shoulder construction of a premium corporate sports polo shirt in navy with gold piping." [ref=e74]
            - generic [ref=e75]:
              - text: Corporate Sportswear
              - heading "Performance Polos" [level=3] [ref=e76]
          - generic [ref=e77] [cursor=pointer]:
            - img "A crisp, well-lit studio shot of custom-designed running shorts in deep navy with a thin gold side stripe accent." [ref=e79]
            - generic [ref=e80]:
              - text: Athletic Bottoms
              - heading "Engineered Mobility" [level=3] [ref=e81]
          - generic [ref=e82] [cursor=pointer]:
            - img "A premium navy blue round-neck t-shirt on an invisible mannequin. Clean crew neckline, short sleeves, minimalist unbranded design with subtle gold accent stitching at the neck." [ref=e84]
            - generic [ref=e85]:
              - text: Essential Tees
              - heading "Navy Round-Neck Tee" [level=3] [ref=e86]
      - generic [ref=e88]:
        - generic [ref=e89]:
          - 'heading "How It Works: 4-Step Manufacturing Process" [level=2] [ref=e90]'
          - paragraph [ref=e91]: A streamlined, transparent approach from concept to final delivery.
        - generic [ref=e92]:
          - generic [ref=e93]:
            - generic [ref=e94]: "01"
            - generic [ref=e95]:
              - heading "Select Apparel Style" [level=3] [ref=e96]
              - paragraph [ref=e97]: Browse performance jerseys, training shorts, hoodies, and compression wear.
          - generic [ref=e98]:
            - generic [ref=e99]: "02"
            - generic [ref=e100]:
              - heading "Submit Design & Specs" [level=3] [ref=e101]
              - paragraph [ref=e102]: Provide your vector artwork, PMS color codes, custom sizing breakdowns, and fabric preferences.
          - generic [ref=e103]:
            - generic [ref=e104]: "03"
            - generic [ref=e105]:
              - heading "Sample Approval" [level=3] [ref=e106]
              - paragraph [ref=e107]: Receive pre-production digital mockups and physical sample verification for fit and color accuracy.
          - generic [ref=e108]:
            - generic [ref=e109]: "04"
            - generic [ref=e110]:
              - heading "Bulk Production & Delivery" [level=3] [ref=e111]
              - paragraph [ref=e112]: High-capacity automated manufacturing with global tracked door-to-door delivery.
      - generic [ref=e114]:
        - generic [ref=e115]:
          - generic [ref=e116]:
            - heading "Educational Resource Hub" [level=2] [ref=e117]
            - paragraph [ref=e118]: Deep-dives into textile engineering, manufacturing processes, and design standards to help you build better apparel.
          - link "View All Guides arrow_forward" [ref=e119] [cursor=pointer]:
            - /url: /guides
            - text: View All Guides
            - generic [ref=e120]: arrow_forward
        - generic [ref=e121]:
          - link "Fundamentals What is Custom Apparel Manufacturing? Learn what custom apparel manufacturing is, how the process works, and why it is the best choice for professional sports teams and corporate brands. Read Guide arrow_forward" [ref=e122] [cursor=pointer]:
            - /url: /guides/what-is-custom-apparel-manufacturing
            - generic [ref=e123]:
              - generic [ref=e124]: Fundamentals
              - heading "What is Custom Apparel Manufacturing?" [level=3] [ref=e125]
              - paragraph [ref=e126]: Learn what custom apparel manufacturing is, how the process works, and why it is the best choice for professional sports teams and corporate brands.
              - generic [ref=e127]:
                - text: Read Guide
                - generic [ref=e128]: arrow_forward
          - link "Sports Specific Custom Kabaddi Team Kits The ultimate guide to designing and manufacturing professional Kabaddi team kits. Learn about the best fabrics for durability and grip. Read Guide arrow_forward" [ref=e129] [cursor=pointer]:
            - /url: /guides/custom-kabaddi-team-kits
            - generic [ref=e130]:
              - generic [ref=e131]: Sports Specific
              - heading "Custom Kabaddi Team Kits" [level=3] [ref=e132]
              - paragraph [ref=e133]: The ultimate guide to designing and manufacturing professional Kabaddi team kits. Learn about the best fabrics for durability and grip.
              - generic [ref=e134]:
                - text: Read Guide
                - generic [ref=e135]: arrow_forward
          - link "Fundamentals Custom Apparel Manufacturing Process The definitive 2,500+ word guide to the custom apparel manufacturing pipeline. From technical design and fabric engineering to precision assembly and global logistics. Read Guide arrow_forward" [ref=e136] [cursor=pointer]:
            - /url: /guides/custom-apparel-manufacturing-process-step-by-step
            - generic [ref=e137]:
              - generic [ref=e138]: Fundamentals
              - heading "Custom Apparel Manufacturing Process" [level=3] [ref=e139]
              - paragraph [ref=e140]: The definitive 2,500+ word guide to the custom apparel manufacturing pipeline. From technical design and fabric engineering to precision assembly and global logistics.
              - generic [ref=e141]:
                - text: Read Guide
                - generic [ref=e142]: arrow_forward
          - link "Fabric Technology Dye Sublimation Printing Learn about the technology of dye sublimation. The gold standard for vibrant, permanent, and breathable custom sportswear designs. Read Guide arrow_forward" [ref=e143] [cursor=pointer]:
            - /url: /guides/dye-sublimation-printing-complete-guide
            - generic [ref=e144]:
              - generic [ref=e145]: Fabric Technology
              - heading "Dye Sublimation Printing" [level=3] [ref=e146]
              - paragraph [ref=e147]: Learn about the technology of dye sublimation. The gold standard for vibrant, permanent, and breathable custom sportswear designs.
              - generic [ref=e148]:
                - text: Read Guide
                - generic [ref=e149]: arrow_forward
        - generic [ref=e150]:
          - generic [ref=e151]:
            - generic [ref=e153]: download_done
            - generic [ref=e154]:
              - heading "Looking for custom specifications?" [level=4] [ref=e155]
              - paragraph [ref=e156]: Download our technical tech-pack templates and measurement charts.
          - link "Get Expert Consultation" [ref=e157] [cursor=pointer]:
            - /url: /contact
      - generic [ref=e159]:
        - generic [ref=e160]:
          - heading "Frequently Asked Questions" [level=2] [ref=e161]
          - paragraph [ref=e162]: Everything you need to know about our custom apparel manufacturing process.
        - generic [ref=e163]:
          - heading "What is the minimum order quantity (MOQ) for custom sportswear?" [level=3] [ref=e165]:
            - button "What is the minimum order quantity (MOQ) for custom sportswear?" [ref=e166]:
              - text: What is the minimum order quantity (MOQ) for custom sportswear?
              - img
          - heading "What printing techniques do you use for athletic uniforms?" [level=3] [ref=e168]:
            - button "What printing techniques do you use for athletic uniforms?" [ref=e169]:
              - text: What printing techniques do you use for athletic uniforms?
              - img
          - heading "What fabrics are available for performance sportswear?" [level=3] [ref=e171]:
            - button "What fabrics are available for performance sportswear?" [ref=e172]:
              - text: What fabrics are available for performance sportswear?
              - img
          - heading "What is the typical turnaround time for custom apparel orders?" [level=3] [ref=e174]:
            - button "What is the typical turnaround time for custom apparel orders?" [ref=e175]:
              - text: What is the typical turnaround time for custom apparel orders?
              - img
          - heading "Do you provide private label services and custom neck tags?" [level=3] [ref=e177]:
            - button "Do you provide private label services and custom neck tags?" [ref=e178]:
              - text: Do you provide private label services and custom neck tags?
              - img
      - generic [ref=e181]:
        - heading "Elevate Your Team's Identity" [level=2] [ref=e182]
        - paragraph [ref=e183]: Ready to outfit your organization with premium, custom-engineered apparel? Message us on WhatsApp to discuss your specific requirements — Selvaraj Rayamuthu and our team respond personally.
        - generic [ref=e184]:
          - link "Chat on WhatsApp" [ref=e185] [cursor=pointer]:
            - /url: https://wa.me/917200551500?text=Hello%20Vinayaga%20Garments%2C%20I'd%20like%20to%20discuss%20custom%20apparel%20requirements.
            - img [ref=e186]
            - text: Chat on WhatsApp
          - link "Email Us" [ref=e188] [cursor=pointer]:
            - /url: mailto:rajuselvan786@gmail.com
      - generic [ref=e189]:
        - generic [ref=e190]:
          - generic [ref=e191]:
            - heading "Manufacturing Hubs" [level=3] [ref=e192]:
              - link "Manufacturing Hubs" [ref=e193] [cursor=pointer]:
                - /url: /districts
            - list [ref=e194]:
              - listitem [ref=e195]:
                - link "Garments in Ariyalur" [ref=e196] [cursor=pointer]:
                  - /url: /districts/ariyalur
              - listitem [ref=e197]:
                - link "Chengalpattu Manufacturing" [ref=e198] [cursor=pointer]:
                  - /url: /districts/chengalpattu
              - listitem [ref=e199]:
                - link "Serving Chennai" [ref=e200] [cursor=pointer]:
                  - /url: /districts/chennai
              - listitem [ref=e201]:
                - link "Garments in Coimbatore" [ref=e202] [cursor=pointer]:
                  - /url: /districts/coimbatore
              - listitem [ref=e203]:
                - link "Cuddalore Manufacturing" [ref=e204] [cursor=pointer]:
                  - /url: /districts/cuddalore
              - listitem [ref=e205]:
                - link "Serving Dharmapuri" [ref=e206] [cursor=pointer]:
                  - /url: /districts/dharmapuri
              - listitem [ref=e207]:
                - link "Garments in Dindigul" [ref=e208] [cursor=pointer]:
                  - /url: /districts/dindigul
              - listitem [ref=e209]:
                - link "Erode Manufacturing" [ref=e210] [cursor=pointer]:
                  - /url: /districts/erode
              - listitem [ref=e211]:
                - link "Serving Kallakurichi" [ref=e212] [cursor=pointer]:
                  - /url: /districts/kallakurichi
              - listitem [ref=e213]:
                - link "Garments in Kanchipuram" [ref=e214] [cursor=pointer]:
                  - /url: /districts/kanchipuram
          - generic [ref=e215]:
            - heading "Product Categories" [level=3] [ref=e216]:
              - link "Product Categories" [ref=e217] [cursor=pointer]:
                - /url: /products
            - list [ref=e218]:
              - listitem [ref=e219]:
                - link "Men's Shirts Manufacturers" [ref=e220] [cursor=pointer]:
                  - /url: /products/mens-shirts
              - listitem [ref=e221]:
                - link "Shop Women's Sarees" [ref=e222] [cursor=pointer]:
                  - /url: /products/womens-sarees
              - listitem [ref=e223]:
                - link "View Kids Wear Catalog" [ref=e224] [cursor=pointer]:
                  - /url: /products/kids-wear
              - listitem [ref=e225]:
                - link "Denim Jeans Manufacturers" [ref=e226] [cursor=pointer]:
                  - /url: /products/denim-jeans
              - listitem [ref=e227]:
                - link "Shop Cotton Kurtas" [ref=e228] [cursor=pointer]:
                  - /url: /products/cotton-kurtas
              - listitem [ref=e229]:
                - link "View Silk Sarees Catalog" [ref=e230] [cursor=pointer]:
                  - /url: /products/silk-sarees
              - listitem [ref=e231]:
                - link "T-Shirts Wholesale Manufacturers" [ref=e232] [cursor=pointer]:
                  - /url: /products/t-shirts-wholesale
              - listitem [ref=e233]:
                - link "Shop Trousers Manufacturers" [ref=e234] [cursor=pointer]:
                  - /url: /products/trousers-manufacturers
              - listitem [ref=e235]:
                - link "View Blouses Catalog" [ref=e236] [cursor=pointer]:
                  - /url: /products/blouses
              - listitem [ref=e237]:
                - link "Lehenga Choli Manufacturers" [ref=e238] [cursor=pointer]:
                  - /url: /products/lehenga-choli
          - generic [ref=e239]:
            - heading "Our Services" [level=3] [ref=e240]:
              - link "Our Services" [ref=e241] [cursor=pointer]:
                - /url: /services
            - list [ref=e242]:
              - listitem [ref=e243]:
                - link "Custom Manufacturing" [ref=e244] [cursor=pointer]:
                  - /url: /services/custom-manufacturing
              - listitem [ref=e245]:
                - link "Private Label Production" [ref=e246] [cursor=pointer]:
                  - /url: /services/private-label
              - listitem [ref=e247]:
                - link "OEM Garment Production" [ref=e248] [cursor=pointer]:
                  - /url: /services/oem-production
              - listitem [ref=e249]:
                - link "Sublimation & Printing" [ref=e250] [cursor=pointer]:
                  - /url: /services/sublimation-printing
          - generic [ref=e251]:
            - heading "Industry Directory" [level=3] [ref=e252]:
              - link "Industry Directory" [ref=e253] [cursor=pointer]:
                - /url: /directory
            - list [ref=e254]:
              - listitem [ref=e255]:
                - link "Cotton Garment Production" [ref=e256] [cursor=pointer]:
                  - /url: /fabrics/cotton
              - listitem [ref=e257]:
                - link "Garment Export Services" [ref=e258] [cursor=pointer]:
                  - /url: /business/exporters
              - listitem [ref=e259]:
                - link "ISO Certified Quality" [ref=e260] [cursor=pointer]:
                  - /url: /quality/iso-certified
              - listitem [ref=e261]:
                - link "Athletic & Sports Wear" [ref=e262] [cursor=pointer]:
                  - /url: /occasions/sports
        - paragraph [ref=e264]:
          - text: Vinayaga Garments is a leading manufacturer and supplier of premium apparel across Tamil Nadu, integral to the
          - strong [ref=e265]: Alfo
          - text: ecosystem and
          - strong [ref=e266]: Sarathi
          - text: business network. Specializing in athletic wear, corporate uniforms, and custom textile solutions.
    - contentinfo [ref=e267]:
      - generic [ref=e268]:
        - generic [ref=e269]:
          - generic [ref=e270]:
            - img "Vinayaga Garments logo" [ref=e271]
            - generic [ref=e272]: Vinayaga Garments
          - paragraph [ref=e273]:
            - text: Premium Athletic Craftsmanship. Engineered for performance, tailored for trust. Part of the
            - strong [ref=e274]: Alfo
            - text: ecosystem in partnership with
            - strong [ref=e275]: Sarathi
            - text: .
          - generic [ref=e276]:
            - generic [ref=e277]:
              - img [ref=e278]
              - generic [ref=e281]: Selvaraj Rayamuthu
            - link "+91 89738 54526" [ref=e282] [cursor=pointer]:
              - /url: tel:+918973854526
              - img [ref=e283]
              - generic [ref=e285]: +91 89738 54526
            - link "04282 291 256" [ref=e286] [cursor=pointer]:
              - /url: tel:+914282291256
              - img [ref=e287]
              - generic [ref=e291]: 04282 291 256
            - link "rajuselvan786@gmail.com" [ref=e292] [cursor=pointer]:
              - /url: mailto:rajuselvan786@gmail.com
              - img [ref=e293]
              - generic [ref=e296]: rajuselvan786@gmail.com
            - link "Chat on WhatsApp" [ref=e297] [cursor=pointer]:
              - /url: https://wa.me/917200551500?text=Hello%20Vinayaga%20Garments%2C%20I'd%20like%20to%20discuss%20custom%20apparel%20requirements.
              - img [ref=e298]
              - generic [ref=e300]: Chat on WhatsApp
          - paragraph [ref=e302]: © 2024 Vinayaga Garments. All rights reserved. Supporting the Alfo business network.
        - generic [ref=e303]:
          - heading "Company" [level=4] [ref=e304]
          - generic [ref=e305]:
            - link "Contact Us" [ref=e306] [cursor=pointer]:
              - /url: mailto:rajuselvan786@gmail.com
            - link "About Us" [ref=e307] [cursor=pointer]:
              - /url: /about
            - button "Sustainability" [ref=e308] [cursor=pointer]
        - generic [ref=e309]:
          - heading "Legal" [level=4] [ref=e310]
          - generic [ref=e311]:
            - button "Privacy Policy" [ref=e312] [cursor=pointer]
            - button "Terms of Service" [ref=e313] [cursor=pointer]
  - region "Notifications (F8)":
    - list
  - alert [ref=e314]
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
> 25  |     expect(consoleErrors).toEqual([]);
      |                           ^ Error: expect(received).toEqual(expected) // deep equality
  26  |     expect(pageErrors).toEqual([]);
  27  |   });
  28  | 
  29  |   test('Check 3: Title tag contains primary keyword and length is <= 60 chars', async ({ page }) => {
  30  |     await page.goto('/');
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
```