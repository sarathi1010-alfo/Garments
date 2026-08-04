from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: Advanced Compression Fabric Sizing Dynamics
    print("Navigating to Advanced Compression Fabric Sizing Dynamics Guide...")
    page.goto("http://localhost:3000/guides/advanced-compression-fabric-sizing-dynamics-digital-body-mapping")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_compression_sizing_august16.png")
    page.wait_for_timeout(1000)

    # Guide 2: Seamless Flat-Bed Knitting vs. Standard Circular Knit Sewing
    print("Navigating to Seamless Flat-Bed Knitting vs. Standard Circular Knit Sewing Guide...")
    page.goto("http://localhost:3000/guides/seamless-flat-bed-knitting-vs-standard-circular-knit-sewing")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_seamless_vs_circular_august16.png")
    page.wait_for_timeout(1000)

    # Guide 3: Palladam & Coimbatore Cotton Spinning
    print("Navigating to Palladam & Coimbatore Cotton Spinning Guide...")
    page.goto("http://localhost:3000/guides/palladam-coimbatore-cotton-spinning-knit-yarn-texturizing-corridors")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_palladam_coimbatore_spinning_august16.png")
    page.wait_for_timeout(1000)

    # Also verify the sitemap.xml can compile/render and includes the new guides
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_sitemap_august16.png")
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
