from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    # Guide 1: Custom Archery and Shooting Sportswear
    print("Navigating to Archery & Shooting Sportswear Guide...")
    page.goto("http://localhost:3000/guides/custom-archery-shooting-sportswear-precision-body-mapping")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_archery_shooting.png")
    page.wait_for_timeout(1000)

    # Guide 2: Namakkal to Middle East Logistics
    print("Navigating to Middle East Logistics Guide...")
    page.goto("http://localhost:3000/guides/namakkal-middle-east-logistics-direct-shipping-dubai-riyadh")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_middle_east_logistics.png")
    page.wait_for_timeout(1000)

    # Guide 3: Dye Sublimation Stretch Fabric Optimizations
    print("Navigating to Dye Sublimation Stretch Fabric Guide...")
    page.goto("http://localhost:3000/guides/dye-sublimation-recycled-polyester-elastane-grin-through-prevention")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_dye_sublimation.png")
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
