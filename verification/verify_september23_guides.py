import asyncio
import os
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        target_slugs = [
            "computerized-multi-axis-automated-chamois-pad-seating-ultrasonic-3d-edge-bonding-cycling-bib-shorts",
            "coimbatore-tirupur-technical-filament-spinning-air-jet-texturizing-sourcing",
            "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-11-alpine-activewear"
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
