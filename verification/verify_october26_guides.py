import asyncio
import os
from playwright.async_api import async_playwright

async def main():
    routes = [
        "/guides/custom-basketball-jersey-manufacturing-wide-cut-shoulder-armholes-micromesh-guide",
        "/guides/dindigul-karur-technical-home-athletic-textile-belt-circular-knits-guide",
        "/guides/uv-blocking-upf-50-solar-protection-custom-outdoor-activewear-guide"
    ]

    os.makedirs("verification/screenshots", exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 800})

        for idx, route in enumerate(routes):
            url = f"http://localhost:3000{route}"
            print(f"Navigating to {url}...")
            response = await page.goto(url, wait_until="networkidle")
            assert response.status == 200, f"Expected 200 OK for {url}, got {response.status}"

            await page.evaluate("window.scrollTo(0, 500)")
            await asyncio.sleep(1)

            screenshot_path = f"verification/screenshots/october26_guide_{idx + 1}.png"
            await page.screenshot(path=screenshot_path, full_page=False)
            print(f"Saved screenshot: {screenshot_path}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
