import asyncio
import os
from playwright.async_api import async_playwright

async def verify():
    os.makedirs("verification/screenshots", exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Test Dec 14 guide 1
        url1 = "http://localhost:3000/guides/custom-open-water-water-polo-medical-evacuation-rib-vessel-crew-outerwear-guide"
        print(f"Navigating to {url1}")
        await page.goto(url1, wait_until="networkidle")
        await page.screenshot(path="verification/screenshots/dec14_guide1.png", full_page=True)

        # Test Dec 14 guide 2
        url2 = "http://localhost:3000/guides/punalur-shencottah-railway-border-heavy-duck-canvas-cordage-belt"
        print(f"Navigating to {url2}")
        await page.goto(url2, wait_until="networkidle")
        await page.screenshot(path="verification/screenshots/dec14_guide2.png", full_page=True)

        # Test Dec 14 guide 3
        url3 = "http://localhost:3000/guides/magneto-rheological-micro-solenoid-dynamic-dampening-activewear-guide"
        print(f"Navigating to {url3}")
        await page.goto(url3, wait_until="networkidle")
        await page.screenshot(path="verification/screenshots/dec14_guide3.png", full_page=True)

        await browser.close()
        print("Screenshots taken successfully!")

if __name__ == "__main__":
    asyncio.run(verify())
