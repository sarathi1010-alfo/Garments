import asyncio
import os
import subprocess
import time
from playwright.async_api import async_playwright

async def main():
    # Start Next.js preview/standalone server
    server_process = subprocess.Popen(
        ["node", ".next/standalone/server.js"],
        env={**os.environ, "PORT": "3000", "HOSTNAME": "127.0.0.1"}
    )
    time.sleep(3) # Wait for server to start

    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            page = await browser.new_page()

            slugs = [
                "computerized-multi-axis-automated-pocket-flap-seating-dynamic-tension-control-tactical-athletic-apparel",
                "theni-virudhunagar-direct-combed-cotton-ginning-high-tenacity-spinning-corridors",
                "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-1012-alpine-outdoor-activewear"
            ]

            os.makedirs("verification/screenshots", exist_ok=True)

            for slug in slugs:
                url = f"http://127.0.0.1:3000/guides/{slug}"
                print(f"Navigating to {url}...")
                response = await page.goto(url)
                if response.status == 200:
                    print(f"Successfully loaded {slug}")
                    screenshot_path = f"verification/screenshots/{slug}.png"
                    await page.screenshot(path=screenshot_path, full_page=False)
                    print(f"Saved screenshot to {screenshot_path}")
                else:
                    print(f"Failed to load {slug}, status: {response.status}")

            await browser.close()
    finally:
        server_process.terminate()

if __name__ == "__main__":
    asyncio.run(main())
