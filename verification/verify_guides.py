from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Guide 1: Fabric Testing
    print("Navigating to Fabric Testing Guide...")
    page.goto("http://localhost:3000/guides/specialized-fabric-testing-and-spinning-hubs-in-tamil-nadu")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_testing.png")
    page.wait_for_timeout(1000)

    # Guide 2: Design Template Preparation
    print("Navigating to Design Template Preparation Guide...")
    page.goto("http://localhost:3000/guides/custom-apparel-design-template-preparation-adobe-illustrator-photoshop-guide")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_design.png")
    page.wait_for_timeout(1000)

    # Guide 3: Sportswear Sizing Sizing and Sizing Tolerances
    print("Navigating to Sportswear Sizing Guide...")
    page.goto("http://localhost:3000/guides/custom-sportswear-sizing-fitment-and-tolerance-variation-guide")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_sizing.png")
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
