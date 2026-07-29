from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: Computerized Weft-Straightener Knit Pattern Alignment
    print("Navigating to Computerized Weft-Straightener Guide...")
    page.goto("http://localhost:3000/guides/high-gauge-computerized-weft-straightener-knit-pattern-alignment")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_weft_straightener.png")
    page.wait_for_timeout(1000)

    # Guide 2: Organic Cotton Sourcing from Salem & Dharmapuri
    print("Navigating to Organic Cotton Sourcing Guide...")
    page.goto("http://localhost:3000/guides/organic-cotton-sourcing-salem-dharmapuri-farming-clusters")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_organic_cotton_sourcing.png")
    page.wait_for_timeout(1000)

    # Guide 3: Vinayaga Flatlock Seam Strength vs Generic Overlock
    print("Navigating to Vinayaga Flatlock Seam Strength Guide...")
    page.goto("http://localhost:3000/guides/vinayaga-flatlock-seam-strength-vs-generic-overlock")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_flatlock_vs_overlock.png")
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
