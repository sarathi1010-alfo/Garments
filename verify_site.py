import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Start the server in the background
        print("Starting dev server...")
        process = await asyncio.create_subprocess_shell(
            "npm run dev",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )

        # Wait for server to be ready
        await asyncio.sleep(10)

        try:
            # Check Homepage
            print("Checking homepage...")
            await page.goto("http://localhost:3000")
            await page.screenshot(path="homepage.png")

            # Verify ResourceHub exists
            resource_hub = await page.query_selector("section:has-text('Resource Hub')")
            if resource_hub:
                print("✅ Resource Hub found")
            else:
                print("❌ Resource Hub NOT found")

            # Verify FAQ exists
            faq = await page.query_selector("section:has-text('Everything You Need to Know')")
            if faq:
                print("✅ FAQ section found")
            else:
                print("❌ FAQ section NOT found")

            # Check a new guide page
            print("Checking new guide page...")
            await page.goto("http://localhost:3000/guides/custom-apparel-manufacturers-tamil-nadu")
            await page.screenshot(path="guide_page.png")
            title = await page.title()
            print(f"Guide page title: {title}")

            # Check Sitemap index
            print("Checking sitemap...")
            await page.goto("http://localhost:3000/sitemap.xml")
            content = await page.content()
            if "sitemap/0.xml" in content:
                print("✅ Sitemap index contains chunk 0")
            else:
                print("❌ Sitemap index is missing chunks")
                print(content[:500])

            # Check Sitemap chunk
            await page.goto("http://localhost:3000/sitemap/0.xml")
            content = await page.content()
            if "http://localhost:3000" in content:
                print("✅ Sitemap chunk 0 is accessible and has URLs")
            else:
                print("❌ Sitemap chunk 0 is problematic")

        finally:
            process.terminate()
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
