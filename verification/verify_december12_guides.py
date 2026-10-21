#!/usr/bin/env python3
import asyncio
import os
import subprocess
import time
from playwright.async_api import async_playwright

async def main():
    print("Starting Next.js production server...")
    env = os.environ.copy()
    env["PATH"] = env.get("PATH", "") + ":/usr/local/bun/bin"
    server = subprocess.Popen(["bun", "run", "start"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, env=env)
    time.sleep(5)

    os.makedirs("verification/screenshots", exist_ok=True)

    urls = [
        "http://localhost:3000/guides/custom-open-water-water-polo-post-event-award-protocol-crew-outerwear-guide",
        "http://localhost:3000/guides/kanthalur-marayoor-highland-technical-synthetic-mountain-canvas-hub",
        "http://localhost:3000/guides/thermoelectric-peltier-active-heat-sink-micro-fan-cool-cell-activewear-guide"
    ]

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        for idx, url in enumerate(urls, 1):
            print(f"Navigating to {url}...")
            response = await page.goto(url, wait_until="networkidle")
            print(f"Status: {response.status}")
            assert response.status == 200, f"Expected status 200, got {response.status}"

            screenshot_path = f"verification/screenshots/december12_guide_{idx}.png"
            await page.screenshot(path=screenshot_path, full_page=False)
            print(f"Saved screenshot: {screenshot_path}")

        await browser.close()

    server.terminate()
    print("Server stopped. Verification successful.")

if __name__ == "__main__":
    asyncio.run(main())
