import sys
import os

def verify():
    print("Verifying September 26, 2026 guides...")
    with open('src/data/guides-data.ts', 'r') as f:
        content = f.read()

    slugs = [
        "computerized-multi-axis-automated-collar-placket-seating-dynamic-tension-stabilization-corporate-sportswear",
        "kovilpatti-sattur-high-tenacity-technical-spinning-export-logistics-corridors",
        "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-46-extreme-temperature-tactical-activewear"
    ]

    for slug in slugs:
        if slug in content:
            print(f"✅ Found slug: {slug}")
        else:
            print(f"❌ Missing slug: {slug}")
            sys.exit(1)

    print("All September 26 guides verified successfully!")

if __name__ == "__main__":
    verify()
