from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("verification/screenshots", exist_ok=True)
    os.makedirs("verification/videos", exist_ok=True)

    # Guide 1: Bamboo vs Modal Comparison
    print("Navigating to Bamboo vs Modal Comparison Guide...")
    page.goto("http://localhost:3000/guides/organic-bamboo-vs-tencel-modal-fiber-golf-polos")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_bamboo_modal_august21.png")
    page.wait_for_timeout(1000)

    # Guide 2: Theni & Andipatti cotton corridors
    print("Navigating to Theni & Andipatti Sourcing Guide...")
    page.goto("http://localhost:3000/guides/theni-andipatti-cotton-ginning-corridors-high-tenacity-combed-yarns")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_theni_andipatti_august21.png")
    page.wait_for_timeout(1000)

    # Guide 3: RFID Tracking
    print("Navigating to RFID Tracking Guide...")
    page.goto("http://localhost:3000/guides/computerized-rfid-garment-tracking-industrial-dyeing-finishing")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_guide_rfid_tracking_august21.png")
    page.wait_for_timeout(1000)

    # Sitemap verification
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/verification_sitemap_august21.png")
    page.wait_for_timeout(1000)

    print("Verification completed successfully!")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
