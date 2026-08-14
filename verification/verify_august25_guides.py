from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("verification/screenshots", exist_ok=True)
    os.makedirs("verification/videos", exist_ok=True)

    # Guide 1: Ultrasonic Pocket Welding Guide
    print("Navigating to High-Frequency Ultrasonic Pocket Welding Guide...")
    page.goto("http://localhost:3000/guides/high-frequency-ultrasonic-pocket-welding-thermal-seam-bonding")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_ultrasonic_pocket_welding_august25.png")
    page.wait_for_timeout(1000)

    # Guide 2: Perundurai & Bhavani ZLD Dyeing Guide
    print("Navigating to Perundurai & Bhavani ZLD Dyeing Guide...")
    page.goto("http://localhost:3000/guides/perundurai-bhavani-downstream-dyeing-hubs-zld-processing")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_perundurai_bhavani_zld_august25.png")
    page.wait_for_timeout(1000)

    # Guide 3: Seamless Warp-Knit vs Cut-and-Sew Flatlock Leggings Comparison Guide
    print("Navigating to Seamless Warp-Knit vs Cut-and-Sew Flatlock Leggings Guide...")
    page.goto("http://localhost:3000/guides/seamless-warp-knit-vs-cut-and-sew-flatlock-compression-leggings")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_seamless_vs_flatlock_leggings_august25.png")
    page.wait_for_timeout(1000)

    # Sitemap verification
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_sitemap_august25.png")
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
