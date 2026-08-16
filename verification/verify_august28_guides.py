import asyncio
from playwright.async_api import async_playwright
import os

routes = [
    "automated-ultrasonic-elastic-band-insertion-edge-trim-workstations",
    "sankari-erode-high-tenacity-viscose-filament-yarns-sourcing",
    "seamless-flat-bed-warp-knitting-vs-flatlock-seaming-compression-tights"
]

async def main():
    os.makedirs("verification/screenshots", exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 900})

        for slug in routes:
            url = f"http://localhost:3000/guides/{slug}"
            print(f"Navigating to {url}...")
            response = await page.goto(url, wait_until="networkidle")
            assert response and response.status == 200, f"Failed to load {url}, status: {response.status if response else 'None'}"

            # Check answer block presence
            answer_block = await page.query_selector("text=Quick Answer")
            assert answer_block is not None, f"Quick Answer block not found on {slug}"

            # Take screenshot
            shot_path = f"verification/screenshots/august28_{slug}.png"
            await page.screenshot(path=shot_path, full_page=False)
            print(f"Saved screenshot to {shot_path}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
