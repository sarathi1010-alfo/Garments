from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: Ultrasonic Seam-Sealing Adhesives
    print("Navigating to Ultrasonic Seam-Sealing Adhesives Guide...")
    page.goto("http://localhost:3000/guides/high-efficiency-ultrasonic-seam-sealing-polymer-adhesives-extreme-weather")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_ultrasonic_seam_sealing.png")
    page.wait_for_timeout(1000)

    # Guide 2: Karur & Erode Downstream Textile Clusters
    print("Navigating to Karur & Erode Downstream Textile Clusters Guide...")
    page.goto("http://localhost:3000/guides/karur-erode-textile-clusters-home-textiles-corporate-accessories")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_karur_erode_clusters.png")
    page.wait_for_timeout(1000)

    # Guide 3: Direct-Factory Sourcing vs Retail Brand Licensing
    print("Navigating to Direct-Factory Sourcing vs Retail Brand Licensing Guide...")
    page.goto("http://localhost:3000/guides/direct-factory-sourcing-vs-retail-brand-licensing")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_direct_factory_vs_licensing.png")
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
