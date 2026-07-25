from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    os.makedirs("/home/jules/verification/videos", exist_ok=True)

    # Guide 1: Automated Laser cutting & Ultrasound seam welding
    print("Navigating to Laser Cutting & Ultrasound Welding Guide...")
    page.goto("http://localhost:3000/guides/automated-laser-cutting-ultrasound-seam-welding-aerodynamic-sportswear")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/laser_cutting_ultrasound_seam_welding.png")
    page.wait_for_timeout(1000)

    # Guide 2: European Sourcing Port Pathways
    print("Navigating to European Retailer Sourcing & Port Pathways Guide...")
    page.goto("http://localhost:3000/guides/custom-apparel-sourcing-european-retailers-namakkal-hamburg-felixstowe")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/european_retailers_sourcing.png")
    page.wait_for_timeout(1000)

    # Guide 3: UPF 50+ UV Protection Chemistry
    print("Navigating to UPF 50+ UV Protection Chemistry Guide...")
    page.goto("http://localhost:3000/guides/upf-50-uv-protection-chemistry-ceramic-infused-yarn-sportswear")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/upf_50_uv_protection_chemistry.png")
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
