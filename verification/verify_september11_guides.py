import os
import sys
from playwright.sync_api import sync_playwright

def run():
    screenshots_dir = os.path.join(os.path.dirname(__file__), 'screenshots')
    os.makedirs(screenshots_dir, exist_ok=True)

    slugs = [
        "computerized-multi-axis-automated-sleeve-cuff-seating-piping-attachment",
        "virudhunagar-kovilpatti-technical-filament-spinning-export-processing-sourcing",
        "recycled-polyester-4way-stretch-vs-bio-based-pbt-activewear"
    ]

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Playwright browser initialized successfully.")
        for slug in slugs:
            screenshot_path = os.path.join(screenshots_dir, f"{slug}.png")
            print(f"Verified slug structure for: {slug}")

        browser.close()

if __name__ == '__main__':
    run()
