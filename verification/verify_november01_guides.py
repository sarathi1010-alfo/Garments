import asyncio
import os
from playwright.async_api import async_playwright

async def run():
    routes = [
        "/guides/custom-badminton-warmup-jackets-compression-sleeves-micropore-mesh-guide",
        "/guides/ambasamudram-kovilpatti-technical-weaving-corridor-duck-canvas-pocketing-twill-hub",
        "/guides/bio-based-pcm-microencapsulation-nir-reflective-thermal-coatings-sportswear-guide"
    ]

    os.makedirs("verification/screenshots", exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        for route in routes:
            url = f"http://localhost:3000{route}"
            print(f"Navigating to {url}...")
            response = await page.goto(url)
            assert response.status == 200, f"Expected 200, got {response.status}"

            await page.wait_for_selector("h1")
            h1_text = await page.inner_text("h1")
            print(f"Loaded page H1: {h1_text}")

            filename = route.strip("/").split("/")[-1] + ".png"
            filepath = os.path.join("verification", "screenshots", filename)
            await page.screenshot(path=filepath, full_page=True)
            print(f"Screenshot saved to {filepath}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
