with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
    content = f.read()

target = 'Compare PA 11 polar textiles in our guide on <a href=\\"/guides/recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-11-polar-expedition-apparel\\">Recycled Nylon 6,6 4-Way Stretch vs. Bio-Based Polyamide 11 in Polar Expedition Apparel</a>.'

replacement = target + '\\n\\nExplore dynamic hem seating automation in our guide on <a href=\\"/guides/computerized-multi-axis-automated-hem-seating-dynamic-tension-control-polar-expedition-suits\\">Computerized Multi-Axis Automated Hem-Seating & Dynamic Tension Control in Polar Expedition Suits</a>.\\n\\nExplore monomer synthesis corridors in our guide on <a href=\\"/guides/hosur-bengaluru-high-tenacity-technical-monomer-synthesis-polymer-compounding-corridors\\">Hosur & Bengaluru High-Tenacity Technical Monomer Synthesis & Polymer Compounding Corridors</a>.\\n\\nCompare PA 5,6 polar textiles in our guide on <a href=\\"/guides/recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-56-polar-expedition-gear\\">Recycled Nylon 6,6 4-Way Stretch vs. Bio-Based Polyamide 5,6 in Polar Expedition Gear</a>.'

if target in content:
    content = content.replace(target, replacement)
    with open("src/data/guides-data.ts", "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully replaced target in src/data/guides-data.ts")
else:
    print("Target string not found.")
