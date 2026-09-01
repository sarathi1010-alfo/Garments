import os
import sys
import time
from playwright.sync_api import sync_playwright

def run():
    screenshots_dir = os.path.join(os.path.dirname(__file__), 'screenshots')
    os.makedirs(screenshots_dir, exist_ok=True)

    slugs = [
        "computerized-multi-axis-automated-buttonhole-seating-seam-reinforcement-tactical-sportswear",
        "kovilpatti-sattur-technical-fiber-spinning-export-logistics-sourcing",
        "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-612-endurance-activewear"
    ]

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 800})

        print("Playwright browser initialized successfully.")
        for slug in slugs:
            url = f"http://localhost:3000/guides/{slug}"
            print(f"Navigating to {url}...")
            response = page.goto(url, wait_until="domcontentloaded")
            assert response is not None and response.status == 200, f"Failed to load {url}, status: {response.status if response else 'None'}"

            time.sleep(1)
            page.wait_for_selector("h1", state="attached")

            screenshot_path = os.path.join(screenshots_dir, f"{slug}.png")
            page.screenshot(path=screenshot_path, full_page=False)
            print(f"Successfully captured real screenshot for {slug} at {screenshot_path} (size: {os.path.getsize(screenshot_path)} bytes)")

        browser.close()

if __name__ == '__main__':
    run()
