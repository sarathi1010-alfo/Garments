import os
import sys
from playwright.sync_api import sync_playwright

def main():
    os.makedirs('verification/screenshots', exist_ok=True)

    slugs = [
        'computerized-dynamic-ultrasonic-sleeve-hemming-cording-attachment',
        'tenkasi-shenkottai-technical-weaving-natural-dye-processing-corridors-sourcing',
        'recycled-polyester-micro-mesh-vs-grs-recycled-nylon-air-permeable-knits'
    ]

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800})

        for idx, slug in enumerate(slugs, 1):
            url = f'http://localhost:3000/guides/{slug}'
            print(f'Navigating to: {url}')
            response = page.goto(url, wait_until='networkidle')
            if response.status != 200:
                print(f'Error: status code {response.status} for {url}')
                sys.exit(1)

            screenshot_path = f'verification/screenshots/september7_guide_{idx}.png'
            page.screenshot(path=screenshot_path, full_page=False)
            print(f'Saved screenshot to: {screenshot_path}')

        browser.close()
    print('All visual verification screenshots captured successfully!')

if __name__ == '__main__':
    main()
