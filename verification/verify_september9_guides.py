import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1440, "height": 900})

        # Navigate to guides index
        await page.goto("http://localhost:3000/guides", wait_until="networkidle")
        await page.screenshot(path="verification/screenshots/guides_index_september9.png", full_page=False)

        # Navigate to first new guide
        url1 = "http://localhost:3000/guides/computerized-multi-axis-automated-sleeve-placket-seating-cording-attachment"
        await page.goto(url1, wait_until="networkidle")
        await page.screenshot(path="verification/screenshots/september9_guide1_placket.png", full_page=False)

        # Navigate to second new guide
        url2 = "http://localhost:3000/guides/puliyangudi-kovilpatti-technical-yarn-texturizing-export-logistics-sourcing"
        await page.goto(url2, wait_until="networkidle")
        await page.screenshot(path="verification/screenshots/september9_guide2_puliyangudi.png", full_page=False)

        # Navigate to third new guide
        url3 = "http://localhost:3000/guides/recycled-elastane-vs-bio-based-tpe-compression-leggings"
        await page.goto(url3, wait_until="networkidle")
        await page.screenshot(path="verification/screenshots/september9_guides.png", full_page=False)

        print("Visual verification screenshots captured successfully.")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
