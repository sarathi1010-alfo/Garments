from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    os.makedirs("verification/screenshots", exist_ok=True)

    # Guide 1: School & College Colorfastness
    print("Navigating to School & College Sports Kits Guide...")
    page.goto("http://localhost:3000/guides/custom-school-and-college-sports-kits-colorfastness-sourcing-standards")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/guide_school_college_colorfastness.png")
    page.wait_for_timeout(1000)

    # Guide 2: Erode-Karur-Namakkal Downstream Sourcing
    print("Navigating to Erode, Karur, & Namakkal Downstream Guide...")
    page.goto("http://localhost:3000/guides/erode-karur-namakkal-downstream-fabrication-sourcing-guide")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/guide_erode_karur_namakkal.png")
    page.wait_for_timeout(1000)

    # Guide 3: Anti-Static Fabrics
    print("Navigating to Anti-Static Yarns Guide...")
    page.goto("http://localhost:3000/guides/anti-static-yarns-fabric-finishing-dry-fit-athletics")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/guide_anti_static_yarns.png")
    page.wait_for_timeout(1000)

    # Sitemap verification
    print("Navigating to Sitemap...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/sitemap_xml.png")
    page.wait_for_timeout(1000)
    print("Visual verification completed successfully!")

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
