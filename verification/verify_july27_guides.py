from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    # Guide 1: Custom School and College Athletic Kits
    print("Navigating to School Athletic Kits Guide...")
    page.goto("http://localhost:3000/guides/custom-school-college-athletic-kits-purchasing-standards")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_school_kits.png")
    page.wait_for_timeout(1000)

    # Guide 2: South Indian Garment Corridors Synergy
    print("Navigating to South Indian Garment Corridors Synergy Guide...")
    page.goto("http://localhost:3000/guides/erode-karur-garment-corridors-namakkal-fabrication-partners")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_garment_corridors.png")
    page.wait_for_timeout(1000)

    # Guide 3: Anti-Static Yarn Selection & Finishing
    print("Navigating to Anti-Static Yarn Selection & Finishing Guide...")
    page.goto("http://localhost:3000/guides/anti-static-yarn-selection-dry-fit-fabric-finishing")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_anti_static.png")
    page.wait_for_timeout(1000)
    print("Verification completed successfully!")

if __name__ == "__main__":
    # Ensure screenshot and video directories exist
    os.makedirs("verification/screenshots", exist_ok=True)
    os.makedirs("verification/videos", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Record video of our interactions
        context = browser.new_context(
            record_video_dir="verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
