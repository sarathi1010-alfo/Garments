from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: Recycled Elastane vs. Creora Highclo Chlorine-Resistant Spandex
    print("Navigating to Recycled Elastane vs. Creora Highclo Comparison Guide...")
    page.goto("http://localhost:3000/guides/recycled-elastane-vs-creora-highclo-swimwear-performance")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_swimwear_performance_august19.png")
    page.wait_for_timeout(1000)

    # Guide 2: Karur Textile Processing Clusters Sourcing Guide
    print("Navigating to Karur Textile Processing Clusters Guide...")
    page.goto("http://localhost:3000/guides/karur-textile-processing-clusters-home-commercial-weaving")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_karur_processing_august19.png")
    page.wait_for_timeout(1000)

    # Guide 3: High-Efficiency Computerized Laser-Cutting vs. Die-Cutting
    print("Navigating to High-Efficiency Computerized Laser-Cutting vs. Die-Cutting Guide...")
    page.goto("http://localhost:3000/guides/computerized-laser-cutting-vs-die-cutting-athletic-uniforms")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_laser_cutting_comparison_august19.png")
    page.wait_for_timeout(1000)

    # Also verify the sitemap.xml can compile/render and includes the new guides
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_sitemap_august19.png")
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
