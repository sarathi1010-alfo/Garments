import sys
import os
import time
import subprocess
from playwright.sync_api import sync_playwright

def main():
    os.makedirs("verification/screenshots", exist_ok=True)

    # Start preview server using bun run start
    print("Starting Next.js production preview server...")
    server = subprocess.Popen(
        ["bun", "run", "start"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )

    time.sleep(5)

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page(viewport={"width": 1280, "height": 800})

            urls = [
                ("http://localhost:3000/guides/custom-rowing-unisuits-water-sports-apparel-spandex-guide", "verification/screenshots/custom-rowing-unisuits-guide.png"),
                ("http://localhost:3000/guides/tenkasi-shenkottai-technical-weaving-cordage-corridor-hub", "verification/screenshots/tenkasi-shenkottai-corridor.png"),
                ("http://localhost:3000/guides/graphene-infused-photothermal-radiative-cooling-fabrics-guide", "verification/screenshots/graphene-radiative-cooling.png")
            ]

            for url, screenshot_path in urls:
                print(f"Navigating to {url}...")
                page.goto(url, wait_until="networkidle")
                page.screenshot(path=screenshot_path, full_page=True)
                print(f"Saved screenshot to {screenshot_path}")

            browser.close()
    finally:
        server.terminate()
        print("Server stopped.")

if __name__ == "__main__":
    main()
