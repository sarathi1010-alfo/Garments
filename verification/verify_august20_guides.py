from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: Spandex Sourcing Guide (Dharmapuri & Krishnagiri)
    print("Navigating to Spandex Sourcing Guide (Dharmapuri & Krishnagiri)...")
    page.goto("http://localhost:3000/guides/dharmapuri-krishnagiri-knitted-elastane-spinning-corridors")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_dharmapuri_krishnagiri_august20.png")
    page.wait_for_timeout(1000)

    # Guide 2: Nano-Dri vs Chitosan Bio-treatment
    print("Navigating to Nano-Dri vs Chitosan Bio-treatment Comparison Guide...")
    page.goto("http://localhost:3000/guides/nano-dri-antimicrobial-finishes-vs-chitosan-bio-treatment-sportswear")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_nanodri_chitosan_august20.png")
    page.wait_for_timeout(1000)

    # Guide 3: HD 3D Digital Body Mapping
    print("Navigating to HD 3D Digital Body Mapping Guide...")
    page.goto("http://localhost:3000/guides/3d-digital-body-mapping-personalized-athletic-uniform-pattern-grading")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_3d_bodymapping_august20.png")
    page.wait_for_timeout(1000)

    # Also verify the sitemap.xml can compile/render and includes the new guides
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_sitemap_august20.png")
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
