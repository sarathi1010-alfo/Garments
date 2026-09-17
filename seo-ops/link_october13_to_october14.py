with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
    code = f.read()

oct13_updates = [
    (
        "computerized-multi-axis-automated-collar-band-attachment-dynamic-tension-control-sub-zero-arctic-apparel",
        '\\n\\nExplore sleeve-cuff assembly automation in our guide on <a href=\\"/guides/computerized-multi-axis-automated-elastic-sleeve-cuff-seating-dynamic-tension-control-sub-zero-arctic-gear\\">Computerized Multi-Axis Automated Elastic Sleeve-Cuff Seating & Dynamic Tension Control in Sub-Zero Arctic Gear</a>.'
    ),
    (
        "udupi-mangaluru-high-tenacity-technical-filament-weaving-port-logistics-infrastructure-corridors",
        '\\n\\nDiscover interior weaving hubs in our guide on <a href=\\"/guides/dharwad-belagavi-technical-filament-weaving-eco-dyeing-infrastructure-corridors\\">Dharwad & Belagavi Technical Filament Weaving & Eco-Dyeing Infrastructure Corridors</a>.'
    ),
    (
        "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-11-sub-zero-arctic-gear",
        '\\n\\nCompare bio-polyamide 6,10 textiles in our guide on <a href=\\"/guides/recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-610-sub-zero-arctic-apparel\\">Recycled Nylon 6,6 4-Way Stretch vs. Bio-Based Polyamide 6,10 in Sub-Zero Arctic Apparel</a>.'
    )
]

for slug, link_text in oct13_updates:
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
    # It looks like: ...</a>.",\n  "faqs":
    content_end = code.rfind('",', slug_idx, faqs_idx)
    if content_end == -1:
        print(f"Warning: content end quote not found for {slug}")
        continue

    # Check if link_text is already inside code[slug_idx:faqs_idx]
    if "dharwad-belagavi" in code[slug_idx:faqs_idx] or "elastic-sleeve-cuff" in code[slug_idx:faqs_idx] or "polyamide-610" in code[slug_idx:faqs_idx]:
        print(f"Link already present for {slug}")
        continue

    # Insert link_text before content_end
    code = code[:content_end] + link_text + code[content_end:]
    print(f"Successfully injected link for {slug}")

with open("src/data/guides-data.ts", "w", encoding="utf-8") as f:
    f.write(code)

print("Done updating October 13 guides.")
