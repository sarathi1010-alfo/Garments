from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    # Navigate to Hot-Air Seam-Taping Guide
    url = "http://localhost:3000/guides/hot-air-seam-taping-machine-parameters-weatherproof-outerwear"
    print(f"Navigating to: {url}")
    page.goto(url)
    page.wait_for_timeout(1000)

    # Scroll down to show Answer Block and key takeaways
    page.evaluate("window.scrollBy(0, 500)")
    page.wait_for_timeout(800)

    # Take screenshot of the Quick Answer block and content
    screenshot_path = "/home/jules/verification/screenshots/verification.png"
    page.screenshot(path=screenshot_path)
    print(f"Screenshot saved to: {screenshot_path}")

    # Scroll further down to show table and content
    page.evaluate("window.scrollBy(0, 1000)")
    page.wait_for_timeout(800)

    # Scroll to FAQs
    page.evaluate("window.scrollBy(0, 1500)")
    page.wait_for_timeout(800)

    # Navigate to Tirupur Regional Sourcing Guide
    url2 = "http://localhost:3000/guides/tirupur-printing-embroidery-hubs-regional-sourcing-guide"
    print(f"Navigating to: {url2}")
    page.goto(url2)
    page.wait_for_timeout(1000)

    page.evaluate("window.scrollBy(0, 800)")
    page.wait_for_timeout(800)

    # Navigate to Silicone Gel vs Screen Prints Guide
    url3 = "http://localhost:3000/guides/high-density-silicone-gel-print-vs-traditional-screen-prints"
    print(f"Navigating to: {url3}")
    page.goto(url3)
    page.wait_for_timeout(1000)

    page.evaluate("window.scrollBy(0, 800)")
    page.wait_for_timeout(1000)

    print("CUJ completed successfully!")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
