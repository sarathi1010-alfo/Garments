from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: Multi-Filament Flatlock Sewing Thread Selection
    print("Navigating to Multi-Filament Flatlock Sewing Thread Selection Guide...")
    page.goto("http://localhost:3000/guides/multi-filament-flatlock-sewing-thread-selection-sportswear-shear-strain")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_sewing_thread.png")
    page.wait_for_timeout(1000)

    # Guide 2: Circular Knit vs. Warp-Knit Construction
    print("Navigating to Circular Knit vs. Warp-Knit Construction Parameters Guide...")
    page.goto("http://localhost:3000/guides/circular-knit-vs-warp-knit-construction-compression-base-layers")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_knit_comparison.png")
    page.wait_for_timeout(1000)

    # Guide 3: Dindigul & Karur Downstream Sourcing Guide
    print("Navigating to Dindigul & Karur Downstream Sourcing Guide...")
    page.goto("http://localhost:3000/guides/dindigul-karur-downstream-textile-processing-mercerizing-mills")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_downstream_sourcing.png")
    page.wait_for_timeout(1000)

    # Also verify the sitemap.xml can compile/render and includes the new guides
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_sitemap_august13.png")
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
