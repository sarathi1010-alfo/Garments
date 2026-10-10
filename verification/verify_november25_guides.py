import os
import time
import subprocess
from playwright.sync_api import sync_playwright

def run_verification():
    os.makedirs("verification/screenshots", exist_ok=True)

    # Start next server in background using bun
    server = subprocess.Popen(["bun", "run", "start"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    time.sleep(4)

    slugs = [
        "custom-open-water-water-polo-marshals-safety-craft-crew-outerwear-guide",
        "kulasekharapatnam-tiruchendur-coastal-synthetic-webbing-netting-corridor",
        "triboelectric-electrostatic-active-dust-repellent-activewear-guide"
    ]

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page(viewport={"width": 1280, "height": 800})

            for slug in slugs:
                url = f"http://localhost:3000/guides/{slug}"
                print(f"Navigating to {url}...")
                response = page.goto(url, wait_until="networkidle")
                assert response and response.status == 200, f"Failed to load {url}, status: {response.status if response else 'None'}"
                screenshot_path = f"verification/screenshots/{slug}.png"
                page.screenshot(path=screenshot_path, full_page=False)
                print(f"Saved screenshot to {screenshot_path}")

            browser.close()
    finally:
        server.terminate()
        server.wait()

if __name__ == "__main__":
    run_verification()
