import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    os.makedirs("verification/screenshots", exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 800})

        routes = [
            "/guides/automated-ultrasonic-elastic-band-insertion-edge-trim-workstations",
            "/guides/sankari-erode-high-tenacity-viscose-filament-yarns-sourcing",
            "/guides/seamless-flat-bed-warp-knitting-vs-4-needle-6-thread-flatlock-compression-tights",
        ]

        for route in routes:
            url = f"http://localhost:3000{route}"
            print(f"Navigating to {url}...")
            res = await page.goto(url, wait_until="networkidle")
            assert res.status == 200, f"Failed with status {res.status}"

            slug = route.split("/")[-1]
            screenshot_path = f"verification/screenshots/{slug}.png"
            await page.screenshot(path=screenshot_path)
            print(f"Captured screenshot for {slug} -> {screenshot_path}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
