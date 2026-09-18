with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
    code = f.read()

oct15_updates = [
    (
        "computerized-multi-axis-automated-pocket-flap-seating-dynamic-tension-control-sub-zero-arctic-jackets",
        '\\n\\nReview 3D storm-hood attachment automation in our guide on <a href=\\"/guides/computerized-multi-axis-automated-storm-hood-seating-dynamic-tension-control-sub-zero-arctic-outerwear\\">Computerized Multi-Axis Automated Storm-Hood Seating & Dynamic Tension Control in Sub-Zero Arctic Outerwear</a>.'
    ),
    (
        "bagalkot-gadag-technical-filament-weaving-eco-dyeing-infrastructure-corridors",
        '\\n\\nDiscover northern weaving hubs in our guide on <a href=\\"/guides/vijayapura-kalaburagi-technical-filament-weaving-eco-dyeing-infrastructure-corridors\\">Vijayapura & Kalaburagi Technical Filament Weaving & Eco-Dyeing Infrastructure Corridors</a>.'
    ),
    (
        "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-410-sub-zero-arctic-activewear",
        '\\n\\nCompare 100% bio-based polyamide 5,10 textiles in our guide on <a href=\\"/guides/recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-510-sub-zero-arctic-outerwear\\">Recycled Nylon 6,6 4-Way Stretch vs. Bio-Based Polyamide 5,10 in Sub-Zero Arctic Outerwear</a>.'
    )
]

for slug, link_text in oct15_updates:
    pattern = f'"slug": "{slug}"'
    slug_idx = code.find(pattern)
    if slug_idx == -1:
        print(f"Warning: slug pattern {pattern} not found!")
        continue

    faqs_idx = code.find('"faqs":', slug_idx)
    if faqs_idx == -1:
        print(f"Warning: faqs not found for {slug}")
        continue

    # We find the closing quote of content right before "faqs":
    content_end = code.rfind('",', slug_idx, faqs_idx)
    if content_end == -1:
        print(f"Warning: content end quote not found for {slug}")
        continue

    if "storm-hood-seating" in code[slug_idx:faqs_idx] or "vijayapura-kalaburagi" in code[slug_idx:faqs_idx] or "polyamide-510" in code[slug_idx:faqs_idx]:
        print(f"Link already present for {slug}")
        continue

    # Insert link_text before content_end
    code = code[:content_end] + link_text + code[content_end:]
    print(f"Successfully injected link for {slug}")

with open("src/data/guides-data.ts", "w", encoding="utf-8") as f:
    f.write(code)

print("Done updating October 15 guides.")
