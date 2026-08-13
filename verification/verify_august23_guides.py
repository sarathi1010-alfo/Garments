from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("verification/screenshots", exist_ok=True)
    os.makedirs("verification/videos", exist_ok=True)

    # Guide 1: DWR Chemical Finishes vs Mechanical Membrane Laminates
    print("Navigating to DWR vs Mechanical Membrane Laminates Guide...")
    page.goto("http://localhost:3000/guides/dwr-chemical-finishes-vs-mechanical-membrane-laminates-sportswear")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_dwr_membrane_august23.png")
    page.wait_for_timeout(1000)

    # Guide 2: Rajapalayam & Virudhunagar Mercerized Cotton Sourcing Guide
    print("Navigating to Rajapalayam & Virudhunagar Sourcing Guide...")
    page.goto("http://localhost:3000/guides/rajapalayam-virudhunagar-mercerized-cotton-spinning-mills-sourcing")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_rajapalayam_virudhunagar_august23.png")
    page.wait_for_timeout(1000)

    # Guide 3: HD 3D Pattern Nesting & CAD Marker Efficiency Guide
    print("Navigating to HD 3D Pattern Nesting & CAD Marker Efficiency Guide...")
    page.goto("http://localhost:3000/guides/3d-pattern-nesting-cad-marker-efficiency-volume-apparel")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_pattern_nesting_cad_august23.png")
    page.wait_for_timeout(1000)

    # Sitemap verification
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_sitemap_august23.png")
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
