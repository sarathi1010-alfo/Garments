import sys
import os
import json

def verify():
    print("Verifying September 24, 2026 guides...")
    with open('src/data/guides-data.ts', 'r') as f:
        content = f.read()

    slugs = [
        "computerized-multi-axis-automated-high-pressure-thermal-transfer-sublimation-edge-calibration-teamwear-polos",
        "dindigul-madurai-technical-fiber-dyeing-zld-water-reclamation-corridors",
        "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-66-high-temperature-activewear"
    ]

    for slug in slugs:
        if slug in content:
            print(f"✅ Found slug: {slug}")
        else:
            print(f"❌ Missing slug: {slug}")
            sys.exit(1)

    print("All September 24 guides verified successfully!")

if __name__ == "__main__":
    verify()
