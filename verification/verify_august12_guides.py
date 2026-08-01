from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Ensuring verification directories exist...")
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    # Guide 1: Double-Knit Mesh Venting Structures for Extreme Tropical Climates
    print("Navigating to Double-Knit Mesh Venting Structures Guide...")
    page.goto("http://localhost:3000/guides/double-knit-mesh-venting-physics-tropical-activewear")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_mesh_venting.png")
    page.wait_for_timeout(1000)

    # Guide 2: Mechanical Air-Jet Texturizing Comparison
    print("Navigating to Mechanical Air-Jet Texturizing Guide...")
    page.goto("http://localhost:3000/guides/mechanical-air-jet-texturizing-vs-high-twist-friction-texturizing")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_texturizing_comparison.png")
    page.wait_for_timeout(1000)

    # Guide 3: Dindigul & Madurai Spinning Corridor Sourcing Guide
    print("Navigating to Dindigul & Madurai Spinning Corridor Guide...")
    page.goto("http://localhost:3000/guides/dindigul-madurai-spinning-corridor-carded-combed-yarn-sourcing")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_guide_dindigul_madurai_sourcing.png")
    page.wait_for_timeout(1000)

    # Also verify the sitemap.xml can compile/render and includes the new guides
    print("Navigating to sitemap.xml...")
    page.goto("http://localhost:3000/sitemap.xml")
    page.wait_for_timeout(2000)
    page.screenshot(path="/app/verification/screenshots/verification_sitemap_august12.png")
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
