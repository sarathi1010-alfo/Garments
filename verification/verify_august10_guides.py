from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: Recycled Ocean-Plastic Polyester Weaving Performance Standards
    print("Navigating to Recycled Ocean-Plastic Guide...")
    page.goto("http://localhost:3000/guides/recycled-ocean-plastic-polyester-weaving-performance-standards")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_ocean_plastic.png")
    page.wait_for_timeout(1000)

    # Guide 2: Dye-Sublimation Ink Cross-Linking Times vs Curing Temperatures
    print("Navigating to Dye-Sublimation Calibration Guide...")
    page.goto("http://localhost:3000/guides/dye-sublimation-ink-cross-linking-times-vs-curing-temperatures")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_sublimation_curing.png")
    page.wait_for_timeout(1000)

    # Guide 3: Salem & Erode Cotton Sourcing Guide
    print("Navigating to Salem & Erode Cotton Sourcing Guide...")
    page.goto("http://localhost:3000/guides/salem-erode-regional-sourcing-guide-cotton-ginning-yarn-sizing-mills")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_salem_erode_sourcing.png")
    page.wait_for_timeout(1000)

    # Also verify the sitemap.xml can compile/render and includes the new guides
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_sitemap.png")
    page.wait_for_timeout(1000)

    print("Verification completed successfully!")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/app/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
