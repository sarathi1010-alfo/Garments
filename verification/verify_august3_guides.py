from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    os.makedirs("/home/jules/verification/videos", exist_ok=True)

    # Guide 1: Automated Laser Pattern-Matching
    print("Navigating to Automated Laser Pattern-Matching Guide...")
    page.goto("http://localhost:3000/guides/automated-laser-pattern-matching-sublimated-jerseys-seams")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/automated_laser_pattern_matching.png")
    page.wait_for_timeout(1000)

    # Guide 2: High-Density Interlock Knitting Tension Calibration
    print("Navigating to High-Density Interlock Knitting Tension Calibration Guide...")
    page.goto("http://localhost:3000/guides/high-density-interlock-knitting-tension-calibration-stretch-uniformity")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/high_density_interlock_knitting_tension.png")
    page.wait_for_timeout(1000)

    # Guide 3: Custom Apparel Logistics from Tuticorin Port to East Asia
    print("Navigating to Tuticorin Port East Asia Logistics Guide...")
    page.goto("http://localhost:3000/guides/custom-apparel-logistics-tuticorin-port-japan-south-korea-clearance")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/tuticorin_east_asia_logistics.png")
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
