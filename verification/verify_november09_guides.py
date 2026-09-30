import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 800})

        routes = [
            "/guides/custom-dragon-boat-paddling-spray-jackets-waterproof-breathable-guide",
            "/guides/cuddalore-chidambaram-chemical-resistant-coastal-workwear-belt-hub",
            "/guides/thermoelectric-thermochromic-activewear-fabrics-adaptive-camouflage-guide"
        ]

        for i, route in enumerate(routes):
            url = f"http://localhost:3000{route}"
            print(f"Navigating to {url}...")
            await page.goto(url, wait_until="networkidle")
            h1 = await page.inner_text("h1")
            print(f"H1 Title: {h1}")
            screenshot_path = f"verification/screenshots/nov09_guide_{i+1}.png"
            await page.screenshot(path=screenshot_path)
            print(f"Saved screenshot to {screenshot_path}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
