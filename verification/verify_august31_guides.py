import asyncio
from playwright.async_api import async_playwright
import os

async def verify_august31_guides():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        os.makedirs('verification/screenshots', exist_ok=True)

        guides = [
            'computerized-automatic-hems-sleeve-cuff-stitching-compression-apparel',
            'dindigul-karur-downstream-yarn-mercerizing-dyeing-hubs-sourcing',
            'waterproof-membrane-laminates-vs-thermal-tpu-backing-tapes'
        ]

        for guide_slug in guides:
            url = f'http://localhost:3000/guides/{guide_slug}'
            print(f"Navigating to {url}...")
            try:
                response = await page.goto(url, wait_until='networkidle')
                print(f"Status for {guide_slug}: {response.status}")

                screenshot_path = f'verification/screenshots/{guide_slug}.png'
                await page.screenshot(path=screenshot_path, full_page=True)
                print(f"Saved screenshot to {screenshot_path}")
            except Exception as e:
                print(f"Error loading {url}: {e}")

        await browser.close()

if __name__ == '__main__':
    asyncio.run(verify_august31_guides())
