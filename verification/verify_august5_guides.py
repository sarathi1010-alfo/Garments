from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: Computerized Embroidery Tension
    print("Navigating to Computerized Embroidery Tension Guide...")
    page.goto("http://localhost:3000/guides/computerized-embroidery-tension-heavy-stretch-knit")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_embroidery_tension.png")
    page.wait_for_timeout(1000)

    # Guide 2: Graphene-Infused Thermodynamic Body Regulation
    print("Navigating to Graphene-Infused Thermodynamic Regulation Guide...")
    page.goto("http://localhost:3000/guides/graphene-infused-thermodynamic-body-temperature-regulation")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_graphene_thermodynamics.png")
    page.wait_for_timeout(1000)

    # Guide 3: Custom Apparel Logistics from Namakkal to EU ports
    print("Navigating to Namakkal to EU Logistics Guide...")
    page.goto("http://localhost:3000/guides/custom-apparel-logistics-namakkal-eu-ports")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_namakkal_eu_logistics.png")
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
