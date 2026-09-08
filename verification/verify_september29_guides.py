import sys

def verify():
    print("Verifying September 29, 2026 technical guides...")
    with open('src/data/guides-data.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    slugs = [
        "computerized-multi-axis-automated-sleeve-cuff-seating-dynamic-tension-control-corporate-sportswear",
        "namakkal-salem-technical-apparel-packaging-export-logistics-infrastructure-corridors",
        "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-410-high-flexibility-activewear"
    ]

    for slug in slugs:
        if slug in content:
            print(f"✅ Found slug: {slug}")
        else:
            print(f"❌ Missing slug: {slug}")
            sys.exit(1)

    print("All September 29 guides verified successfully!")

if __name__ == "__main__":
    verify()
