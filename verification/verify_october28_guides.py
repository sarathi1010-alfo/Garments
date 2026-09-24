import os
import time
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to the new Badminton guide
    page.goto("http://localhost:3000/guides/custom-badminton-kit-manufacturing-ultralight-micropolyester-shoulder-mobility-guide")
    page.wait_for_timeout(1000)

    # Scroll down to capture content and AEO blocks
    page.evaluate("window.scrollBy(0, 500)")
    page.wait_for_timeout(500)

    # Take screenshot of the Badminton guide page
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    screenshot_path = "/home/jules/verification/screenshots/october28_badminton_guide.png"
    page.screenshot(path=screenshot_path)
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
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
