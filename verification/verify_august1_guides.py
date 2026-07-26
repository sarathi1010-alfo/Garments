from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    os.makedirs("/home/jules/verification/videos", exist_ok=True)

    # Guide 1: Automated Robotic Pocket Setting & Barcode Tracking
    print("Navigating to Robotic Pocket Setting & Barcode Tracking Guide...")
    page.goto("http://localhost:3000/guides/automated-robotic-pocket-setting-barcode-tracking-tamil-nadu")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/robotic_pocket_setting_barcode_tracking.png")
    page.wait_for_timeout(1000)

    # Guide 2: Custom Apparel Logistics to Australian Ports
    print("Navigating to Australian Port Logistics & Clearance Guide...")
    page.goto("http://localhost:3000/guides/custom-apparel-logistics-australian-ports-sydney-melbourne-clearance")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/australian_port_logistics_clearance.png")
    page.wait_for_timeout(1000)

    # Guide 3: High-Efficiency Compression Fabric Physics
    print("Navigating to Compression Fabric Physics Guide...")
    page.goto("http://localhost:3000/guides/high-efficiency-compression-fabric-physics-stitch-tension-limits")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/compression_fabric_physics_limits.png")
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
