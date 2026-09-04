import asyncio
import os
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Start dev server if needed or check against running local server at http://localhost:3000
        # If server is not running on 3000, we can test route resolution or start preview
        target_slugs = [
            "computerized-multi-axis-automated-elastic-leg-cuff-seating-silicone-gripper-bonding-cycling-shorts",
            "karur-namakkal-technical-warp-knitting-export-logistics-sourcing",
            "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-1012-alpine-activewear"
        ]

        os.makedirs("verification/screenshots", exist_ok=True)

        for slug in target_slugs:
            url = f"http://localhost:3000/guides/{slug}"
            print(f"Visiting {url}...")
            try:
                response = await page.goto(url, timeout=15000)
                if response and response.status == 200:
                    print(f"✅ Route loaded successfully: {slug}")
                    await page.screenshot(path=f"verification/screenshots/{slug}.png", full_page=False)
                else:
                    print(f"⚠️ Non-200 response ({response.status if response else 'None'}) for {slug}")
            except Exception as e:
                print(f"Could not load {url}: {e}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
