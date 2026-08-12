from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("verification/screenshots", exist_ok=True)
    os.makedirs("verification/videos", exist_ok=True)

    # Guide 1: Flatlock vs ActiveSeam
    print("Navigating to Flatlock vs ActiveSeam Guide...")
    page.goto("http://localhost:3000/guides/flatlock-vs-activeseam-construction-compression-base-layers")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_flatlock_activeseam_august22.png")
    page.wait_for_timeout(1000)

    # Guide 2: Sankari & Salem Cotton mills
    print("Navigating to Sankari & Salem cotton Sourcing Guide...")
    page.goto("http://localhost:3000/guides/sankari-salem-cotton-ginning-carding-mills")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_sankari_salem_august22.png")
    page.wait_for_timeout(1000)

    # Guide 3: Pre-shrinking & Heat-setting
    print("Navigating to Pre-shrinking & Heat-setting Guide...")
    page.goto("http://localhost:3000/guides/pre-shrinking-heat-setting-synthetic-elastomeric-circular-knits")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_pre_shrinking_heat_setting_august22.png")
    page.wait_for_timeout(1000)

    # Sitemap verification
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_sitemap_august22.png")
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
