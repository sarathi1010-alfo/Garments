from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: Recycled Nylon 6,6 vs. Recycled Polyester Performance Metrics
    print("Navigating to Recycled Nylon 6,6 vs. Recycled Polyester Comparison Guide...")
    page.goto("http://localhost:3000/guides/recycled-nylon-6-6-vs-recycled-polyester-compression-tights-comparison")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_nylon_polyester_comparison_august18.png")
    page.wait_for_timeout(1000)

    # Guide 2: Tuticorin & Tirunelveli Logistics Corridor
    print("Navigating to Tuticorin & Tirunelveli Logistics Corridor Guide...")
    page.goto("http://localhost:3000/guides/tuticorin-tirunelveli-logistics-corridor-port-clearing-bonded-warehouses")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_tuticorin_tirunelveli_logistics_august18.png")
    page.wait_for_timeout(1000)

    # Guide 3: Automated Tension Balancing in Multi-Needle Coverstitching
    print("Navigating to Automated Tension Balancing in Multi-Needle Coverstitching Guide...")
    page.goto("http://localhost:3000/guides/automated-tension-balancing-multi-needle-coverstitching-activewear-hems")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_tension_balancing_coverstitching_august18.png")
    page.wait_for_timeout(1000)

    # Also verify the sitemap.xml can compile/render and includes the new guides
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_sitemap_august18.png")
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
