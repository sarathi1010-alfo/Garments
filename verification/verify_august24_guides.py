from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("verification/screenshots", exist_ok=True)
    os.makedirs("verification/videos", exist_ok=True)

    # Guide 1: Erode & Karur Viscose Rayon Spinning Corridors Guide
    print("Navigating to Erode & Karur Viscose Rayon Sourcing Guide...")
    page.goto("http://localhost:3005/guides/erode-karur-viscose-rayon-spinning-corridors-high-elasticity-yarns")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_erode_karur_viscose_august24.png")
    page.wait_for_timeout(1000)

    # Guide 2: High-Definition Dye-Sublimation Calibration Guide
    print("Navigating to HD Dye-Sublimation Calibration Guide...")
    page.goto("http://localhost:3005/guides/high-definition-dye-sublimation-calibration-ink-jet-dot-gain-color-profile-tuning")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_dye_sublimation_calibration_august24.png")
    page.wait_for_timeout(1000)

    # Guide 3: Recycled Polyester vs Organic Cotton School Team Kits Comparison Guide
    print("Navigating to Recycled Polyester vs Organic Cotton Guide...")
    page.goto("http://localhost:3005/guides/recycled-polyester-vs-organic-cotton-school-team-kits-durability-lca")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_rpet_organic_cotton_august24.png")
    page.wait_for_timeout(1000)

    # Sitemap verification
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3005/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_sitemap_august24.png")
    page.wait_for_timeout(1000)

    print("Verification completed successfully!")

if __name__ == "__main__":
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
