import asyncio
import os
import subprocess
import time
from playwright.async_api import async_playwright

async def main():
    server_process = subprocess.Popen(
        ["node", ".next/standalone/server.js"],
        env={**os.environ, "PORT": "3000", "HOSTNAME": "127.0.0.1"}
    )
    time.sleep(3)

    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            page = await browser.new_page(viewport={"width": 1280, "height": 1000})

            slugs = [
                "custom-football-kit-manufacturing-engineered-mesh-paneling-aerodynamic-cuts-guide",
                "madurai-virudhunagar-technical-textile-corridor-polyester-webbing-hub",
                "antimicrobial-silver-ion-treatments-custom-athletic-wear-guide"
            ]

            os.makedirs("verification/screenshots", exist_ok=True)

            for slug in slugs:
                url = f"http://127.0.0.1:3000/guides/{slug}"
                print(f"Navigating to {url}...")
                response = await page.goto(url)
                if response and response.status == 200:
                    print(f"Successfully loaded {slug}")
                    screenshot_path = f"verification/screenshots/{slug}.png"
                    await page.screenshot(path=screenshot_path, full_page=False)
                    print(f"Saved screenshot to {screenshot_path}")
                else:
                    status = response.status if response else "No response"
                    print(f"Failed to load {slug}, status: {status}")

            await browser.close()
    finally:
        server_process.terminate()

if __name__ == "__main__":
    asyncio.run(main())
