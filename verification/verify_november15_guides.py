import os
from playwright.sync_api import sync_playwright

os.makedirs("verification/screenshots", exist_ok=True)

urls = [
    "http://localhost:3000/guides/custom-open-water-water-polo-rough-water-caps-robes-guide",
    "http://localhost:3000/guides/kumbakonam-swamimalai-technical-braiding-twine-sourcing-belt",
    "http://localhost:3000/guides/micro-fluidic-cooling-capillary-evaporative-activewear-guide"
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 800})

    for idx, url in enumerate(urls, start=1):
        page.goto(url, wait_until="networkidle")
        screenshot_path = f"verification/screenshots/november15_guide_{idx}.png"
        page.screenshot(path=screenshot_path, full_page=False)
        print(f"Captured screenshot for {url} -> {screenshot_path}")

    browser.close()
