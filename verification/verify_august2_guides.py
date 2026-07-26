from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    os.makedirs("/home/jules/verification/videos", exist_ok=True)

    # Guide 1: Automatic Heat-Seal Seam Taping
    print("Navigating to Automatic Heat-Seal Seam Taping Guide...")
    page.goto("http://localhost:3000/guides/automatic-heat-seal-seam-taping-waterproof-membrane-laminates")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/automatic_heat_seal_seam_taping.png")
    page.wait_for_timeout(1000)

    # Guide 2: Custom Apparel Logistics to Singapore and Malaysia
    print("Navigating to Singapore and Malaysia Logistics Guide...")
    page.goto("http://localhost:3000/guides/custom-apparel-logistics-singapore-malaysia-ceca-exemptions")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/singapore_malaysia_logistics_ceca.png")
    page.wait_for_timeout(1000)

    # Guide 3: Modal & Bamboo Fiber Blends
    print("Navigating to Modal & Bamboo Fiber Blends Guide...")
    page.goto("http://localhost:3000/guides/modal-bamboo-fiber-blends-athletic-wear-chemistry")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/modal_bamboo_blends_chemistry.png")
    page.wait_for_timeout(1000)

    print("Verification completed successfully!")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
