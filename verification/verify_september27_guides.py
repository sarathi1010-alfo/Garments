import sys

def verify():
    print("Verifying September 27, 2026 technical guides...")
    with open('src/data/guides-data.ts', 'r') as f:
        content = f.read()

    slugs = [
        "computerized-multi-axis-automated-collar-band-attachment-dynamic-stitch-density-control-corporate-sportswear",
        "erode-bhavani-technical-dyeing-zld-water-reclamation-corridors",
        "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-614-alpine-mountaineering-activewear"
    ]

    for slug in slugs:
        if slug in content:
            print(f"✅ Found slug: {slug}")
        else:
            print(f"❌ Missing slug: {slug}")
            sys.exit(1)

    print("All September 27 guides verified successfully!")

if __name__ == "__main__":
    verify()
