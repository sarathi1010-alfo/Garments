from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: GOTS and OCS Organic Cotton Traceability Methodologies
    print("Navigating to GOTS and OCS Organic Cotton Traceability Methodologies Guide...")
    page.goto("http://localhost:3000/guides/gots-ocs-organic-cotton-certification-traceability-methodology-exports")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_organic_cotton_traceability.png")
    page.wait_for_timeout(1000)

    # Guide 2: Polyurethane vs. Silicone Heat-Seal Backing Tapes
    print("Navigating to Polyurethane vs. Silicone Heat-Seal Backing Tapes Guide...")
    page.goto("http://localhost:3000/guides/polyurethane-vs-silicone-heat-seal-backing-tapes-waterproof-seams")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_backing_tapes_comparison.png")
    page.wait_for_timeout(1000)

    # Guide 3: Erode & Salem Downstream Sourcing Guide
    print("Navigating to Erode & Salem Downstream Sourcing Guide...")
    page.goto("http://localhost:3000/guides/erode-salem-downstream-fabrication-garment-washing-embroidery-clusters")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_erode_salem_downstream_sourcing.png")
    page.wait_for_timeout(1000)

    # Also verify the sitemap.xml can compile/render and includes the new guides
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_sitemap_august14.png")
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
