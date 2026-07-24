from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    # Guide 1: High-Density Heat-Transfer and Silicone Gel Grip Engineering
    print("Navigating to High-Density Heat-Transfer & Silicone Gel Grip Guide...")
    page.goto("http://localhost:3000/guides/high-density-heat-transfer-silicone-gel-grip-sportswear")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_silicone_grip.png")
    page.wait_for_timeout(1000)

    # Guide 2: Namakkal to Delhi NCR & Mumbai Bulk Apparel Logistics Corridors
    print("Navigating to Namakkal to Delhi/Mumbai Logistics Guide...")
    page.goto("http://localhost:3000/guides/namakkal-delhi-mumbai-bulk-apparel-logistics-corridors")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_north_india_logistics.png")
    page.wait_for_timeout(1000)

    # Guide 3: Phase-Change Materials & Cellular Knit Thermoregulation
    print("Navigating to Phase-Change Materials & Cellular Knit Thermoregulation Guide...")
    page.goto("http://localhost:3000/guides/phase-change-materials-cellular-knit-thermoregulation-sportswear")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_pcm_thermoregulation.png")
    page.wait_for_timeout(1000)
    print("Verification completed successfully!")

if __name__ == "__main__":
    # Ensure screenshot and video directories exist
    os.makedirs("verification/screenshots", exist_ok=True)
    os.makedirs("verification/videos", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
