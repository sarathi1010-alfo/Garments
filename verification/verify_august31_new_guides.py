import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 800})

        slugs = [
            "computerized-multi-axis-automated-collar-seating-rib-knit-attachment",
            "sankari-bhavani-downstream-yarn-mercerizing-eco-bleaching-hubs-sourcing",
            "silicone-anti-slip-gel-coatings-vs-encapsulated-elastomeric-elastic-bands"
        ]

        os.makedirs("verification/screenshots", exist_ok=True)

        for slug in slugs:
            url = f"http://localhost:3000/guides/{slug}"
            try:
                print(f"Navigating to {url}...")
                response = await page.goto(url, wait_until="load", timeout=20000)
                await asyncio.sleep(1)
                status = response.status if response else "No response"
                print(f"Status for {slug}: {status}")
                screenshot_path = f"verification/screenshots/{slug}.png"
                await page.screenshot(path=screenshot_path, full_page=True)
                print(f"Saved screenshot: {screenshot_path}")
            except Exception as e:
                print(f"Error navigating to {url}: {e}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
