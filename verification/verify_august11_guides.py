from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: High Spandex Thermal Fleece Physics
    print("Navigating to High Spandex Thermal Fleece Physics Guide...")
    page.goto("http://localhost:3000/guides/high-spandex-micro-brushed-thermal-fleece-weft-knits-physics")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_fleece_physics.png")
    page.wait_for_timeout(1000)

    # Guide 2: Waterless Dyeing Technologies Comparison
    print("Navigating to Waterless Dyeing Guide...")
    page.goto("http://localhost:3000/guides/waterless-dyeing-technologies-vs-conventional-disperse-dye-baths")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_waterless_dyeing.png")
    page.wait_for_timeout(1000)

    # Guide 3: Palladam & Dharapuram Sourcing Guide
    print("Navigating to Palladam & Dharapuram Sourcing Guide...")
    page.goto("http://localhost:3000/guides/palladam-dharapuram-circular-knitting-downstream-fabrication-sourcing")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_palladam_dharapuram_sourcing.png")
    page.wait_for_timeout(1000)

    # Also verify the sitemap.xml can compile/render and includes the new guides
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_sitemap_august11.png")
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
