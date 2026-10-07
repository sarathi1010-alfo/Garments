import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        slugs = [
            'custom-open-water-water-polo-medical-lifeguard-response-team-apparel-guide',
            'cuddalore-sirkazhi-technical-webbing-fastener-hardware-corridor',
            'magneto-caloric-thermoelectric-active-temperature-controlled-activewear-guide'
        ]

        for slug in slugs:
            url = f"http://localhost:3000/guides/{slug}"
            print(f"Navigating to {url}...")
            await page.goto(url, wait_until="networkidle")
            screenshot_path = f"verification/screenshots/{slug}.png"
            await page.screenshot(path=screenshot_path, full_page=True)
            print(f"Saved screenshot to {screenshot_path}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
