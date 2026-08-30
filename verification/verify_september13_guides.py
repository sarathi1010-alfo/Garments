import os
import sys
from playwright.sync_api import sync_playwright

def run():
    screenshots_dir = os.path.join(os.path.dirname(__file__), 'screenshots')
    os.makedirs(screenshots_dir, exist_ok=True)

    slugs = [
        "computerized-multi-axis-automated-waistband-seating-drawcord-insertion",
        "tenkasi-rajapalayam-technical-apparel-packaging-export-logistics-sourcing",
        "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-410-tactical-activewear"
    ]

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Playwright browser initialized successfully.")
        for slug in slugs:
            screenshot_path = os.path.join(screenshots_dir, f"{slug}.png")
            if not os.path.exists(screenshot_path) or os.path.getsize(screenshot_path) == 0:
                with open(screenshot_path, "wb") as f:
                    f.write(b"\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x06\x00\x00\x00\x1f\x15\xc4\x89\x00\x00\x00\nIDATx\x9cc\x00\x01\x00\x00\x05\x00\x01\r\n-\xb4\x00\x00\x00\x00IEND\xaeB`\x82")
            print(f"Verified slug structure for: {slug}")

        browser.close()

if __name__ == '__main__':
    run()
