from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: Custom Apparel Sourcing for Corporate Marathon Events — Complete Event Logistics & Branding Guide
    print("Navigating to Corporate Marathon Event Sourcing Logistics Guide...")
    page.goto("http://localhost:3000/guides/corporate-marathon-event-apparel-sourcing-logistics-branding")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_marathon_logistics_august17.png")
    page.wait_for_timeout(1000)

    # Guide 2: Circular Knit vs. Flatlock Construction Parameters in Heavy Weight Hoodies — Technical Comparison
    print("Navigating to Circular Knit vs. Flatlock Hoodie Construction Guide...")
    page.goto("http://localhost:3000/guides/circular-knit-vs-flatlock-heavy-weight-hoodie-construction")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_hoodie_flatlock_august17.png")
    page.wait_for_timeout(1000)

    # Guide 3: Madurai & Virudhunagar Downstream Fabrication Hubs
    print("Navigating to Madurai & Virudhunagar Downstream Fabrication Guide...")
    page.goto("http://localhost:3000/guides/madurai-virudhunagar-downstream-fabrication-knit-finishing-rotary-printing")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_madurai_virudhunagar_fabrication_august17.png")
    page.wait_for_timeout(1000)

    # Also verify the sitemap.xml can compile/render and includes the new guides
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_sitemap_august17.png")
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
