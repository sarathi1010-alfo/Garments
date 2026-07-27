from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: Computerized Ultrasonic Sleeve-Welding
    print("Navigating to Ultrasonic Sleeve-Welding Guide...")
    page.goto("http://localhost:3000/guides/computerized-ultrasonic-sleeve-welding-aerodynamic-athletic-wear")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_ultrasonic_welding.png")
    page.wait_for_timeout(1000)

    # Guide 2: Anti-Microbial Silver-Nano Yarn
    print("Navigating to Anti-Microbial Silver-Nano Yarn Guide...")
    page.goto("http://localhost:3000/guides/anti-microbial-silver-nano-yarn-polymer-physics-laundry-depletion")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_silver_nano.png")
    page.wait_for_timeout(1000)

    # Guide 3: Custom Apparel Logistics to US East Coast
    print("Navigating to US East Coast Logistics Guide...")
    page.goto("http://localhost:3000/guides/custom-apparel-logistics-tuticorin-port-us-east-coast-clearance")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_us_east_coast.png")
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
