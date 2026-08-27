import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1440, "height": 900})

        # Navigate to guides index
        await page.goto("http://localhost:3000/guides", wait_until="networkidle")
        await page.screenshot(path="verification/screenshots/guides_index_september8.png", full_page=False)

        # Navigate to first new guide
        url1 = "http://localhost:3000/guides/computerized-multi-axis-automated-gusset-seating-crotch-reinforcement"
        await page.goto(url1, wait_until="networkidle")
        await page.screenshot(path="verification/screenshots/september8_guide1_gusset.png", full_page=False)

        # Navigate to second new guide
        url2 = "http://localhost:3000/guides/sankarankovil-puliyangudi-high-tenacity-weaving-printing-corridors-sourcing"
        await page.goto(url2, wait_until="networkidle")
        await page.screenshot(path="verification/screenshots/september8_guide2_sankarankovil.png", full_page=False)

        # Navigate to third new guide
        url3 = "http://localhost:3000/guides/castor-bio-based-elastane-vs-creora-highclo-spandex"
        await page.goto(url3, wait_until="networkidle")
        await page.screenshot(path="verification/screenshots/september8_guides.png", full_page=False)

        print("Visual verification screenshots captured successfully.")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
