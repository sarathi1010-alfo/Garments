import asyncio
from playwright.async_api import async_playwright
import subprocess
import time
import os

async def main():
    # Start next server in background on port 3000
    server = subprocess.Popen(["./node_modules/.bin/next", "start", "-p", "3000"])
    time.sleep(3)

    os.makedirs("verification/screenshots", exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Visit new guide page
        target_url = "http://localhost:3000/guides/custom-open-water-water-polo-medical-lifeguard-apparel-guide"
        print(f"Navigating to {target_url}...")
        await page.goto(target_url, wait_until="networkidle")

        screenshot_path = "verification/screenshots/nov20_medical_lifeguard_guide.png"
        await page.screenshot(path=screenshot_path, full_page=False)
        print(f"Screenshot saved to {screenshot_path}")

        await browser.close()

    server.terminate()

if __name__ == "__main__":
    asyncio.run(main())
