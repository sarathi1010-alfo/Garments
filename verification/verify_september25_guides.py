import sys
import os
import json

def verify():
    print("Verifying September 25, 2026 guides...")
    with open('src/data/guides-data.ts', 'r') as f:
        content = f.read()

    slugs = [
        "computerized-multi-axis-automated-buttonhole-seating-dynamic-tension-stabilization-corporate-athletic-apparel",
        "sankarankovil-puliyangudi-high-tenacity-weaving-eco-dyeing-corridors",
        "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-1010-high-stress-endurance-activewear"
    ]

    for slug in slugs:
        if slug in content:
            print(f"✅ Found slug: {slug}")
        else:
            print(f"❌ Missing slug: {slug}")
            sys.exit(1)

    print("All September 25 guides verified successfully!")

if __name__ == "__main__":
    verify()
