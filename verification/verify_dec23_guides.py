import os
import time
import subprocess
from playwright.sync_api import sync_playwright

def verify_dec23_guides():
    # Start server
    env = os.environ.copy()
    env["PORT"] = "3000"
    env["PATH"] = env.get("PATH", "") + ":/usr/local/bun/bin:" + os.path.join(os.getcwd(), "node_modules/.bin")

    server_process = subprocess.Popen(
        ["bun", "run", "start"],
        env=env,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )

    time.sleep(5)

    routes = [
        "/guides/custom-open-water-water-polo-emergency-winch-cable-rigging-crew-outerwear-guide",
        "/guides/poonjar-teekoy-highland-natural-latex-heavy-duck-canvas-hub",
        "/guides/piezo-capacitive-micro-dynamic-shear-multi-axis-strain-activewear-guide"
    ]

    os.makedirs("verification/screenshots", exist_ok=True)

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page(viewport={"width": 1280, "height": 800})

            for i, route in enumerate(routes):
                url = f"http://localhost:3000{route}"
                print(f"Navigating to {url}...")
                response = page.goto(url, wait_until="networkidle")
                assert response and response.status == 200, f"Failed to load {url}, status: {response.status if response else 'None'}"

                shot_path = f"verification/screenshots/dec23_guide_{i+1}.png"
                page.screenshot(path=shot_path, full_page=False)
                print(f"Saved screenshot to {shot_path}")

            browser.close()
    finally:
        server_process.terminate()
        server_process.wait()

if __name__ == "__main__":
    verify_dec23_guides()
