from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: Hydrophobic vs. Hydrophilic Multi-Denier Fiber Blends
    print("Navigating to Hydrophobic vs. Hydrophilic Multi-Denier Fiber Blends Guide...")
    page.goto("http://localhost:3000/guides/hydrophobic-vs-hydrophilic-multi-denier-fiber-blends-marathon-singlets")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_fleece_physics_august15.png")
    page.wait_for_timeout(1000)

    # Guide 2: Custom Apparel Logistics and Port Clearing to East Africa
    print("Navigating to Custom Apparel Logistics and Port Clearing to East Africa Guide...")
    page.goto("http://localhost:3000/guides/custom-apparel-logistics-tuticorin-port-to-east-african-gateways")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_east_africa_august15.png")
    page.wait_for_timeout(1000)

    # Guide 3: Rotary Screen Printing vs. Digital Dye Sublimation
    print("Navigating to Rotary Screen Printing vs. Digital Dye Sublimation Guide...")
    page.goto("http://localhost:3000/guides/high-speed-rotary-screen-printing-vs-digital-dye-sublimation-sportswear")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_printing_comparison_august15.png")
    page.wait_for_timeout(1000)

    # Also verify the sitemap.xml can compile/render and includes the new guides
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_sitemap_august15.png")
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
