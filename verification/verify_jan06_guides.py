import os
import time
import subprocess
from playwright.sync_api import sync_playwright

def verify_jan06_guides():
    env = os.environ.copy()
    env["PORT"] = "3000"
    env["PATH"] = env.get("PATH", "") + ":" + os.path.join(os.getcwd(), "node_modules/.bin")

    server_process = subprocess.Popen(
        ["bun", "run", "start"],
        env=env,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )

    time.sleep(5)

    routes = [
        "/guides/custom-open-water-water-polo-course-corner-tower-optical-fiber-fusion-splice-repair-tender-outerwear-guide",
        "/guides/madurai-west-usilampatti-agro-fleece-horticultural-shade-mesh-corridor",
        "/guides/piezo-capacitive-micro-dynamic-multi-axis-dynamic-torsional-shear-resonance-kinetic-harmonic-activewear-guide"
    ]

    os.makedirs("verification/screenshots", exist_ok=True)

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page(viewport={"width": 1280, "height": 900})

            for idx, route in enumerate(routes, start=1):
                url = f"http://localhost:3000{route}"
                print(f"Navigating to {url}...")
                response = page.goto(url, wait_until="networkidle")
                print(f"Response status: {response.status if response else 'None'}")
                assert response.status == 200, f"Route {route} returned status {response.status}"

                screenshot_path = f"verification/screenshots/jan06_guide_{idx}.png"
                page.screenshot(path=screenshot_path, full_page=False)
                print(f"Saved screenshot: {screenshot_path}")

            browser.close()
    finally:
        server_process.terminate()
        server_process.wait()

if __name__ == "__main__":
    verify_jan06_guides()
