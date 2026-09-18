import re

# Read src/data/guides-data.ts
with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Define internal links to inject into October 16 guides using single quotes for href
oct16_links_map = {
    "computerized-multi-axis-automated-storm-hood-seating-dynamic-tension-control-sub-zero-arctic-outerwear": [
        "<p>Review drawcord seating in our guide on <a href='/guides/computerized-multi-axis-automated-elastic-drawcord-seating-dynamic-tension-control-sub-zero-arctic-outerwear'>Computerized Multi-Axis Automated Elastic Drawcord Seating & Dynamic Tension Control in Sub-Zero Arctic Outerwear</a>.</p>",
        "<p>Explore the Bidar weaving corridor in our guide on <a href='/guides/bidar-kalaburagi-technical-filament-weaving-eco-dyeing-infrastructure-corridors'>Bidar & Kalaburagi Technical Filament Weaving & Eco-Dyeing Infrastructure Corridors</a>.</p>"
    ],
    "vijayapura-kalaburagi-technical-filament-weaving-eco-dyeing-infrastructure-corridors": [
        "<p>Discover automated drawcord seating in our guide on <a href='/guides/computerized-multi-axis-automated-elastic-drawcord-seating-dynamic-tension-control-sub-zero-arctic-outerwear'>Computerized Multi-Axis Automated Elastic Drawcord Seating & Dynamic Tension Control in Sub-Zero Arctic Outerwear</a>.</p>",
        "<p>Explore the neighboring Bidar corridor in our guide on <a href='/guides/bidar-kalaburagi-technical-filament-weaving-eco-dyeing-infrastructure-corridors'>Bidar & Kalaburagi Technical Filament Weaving & Eco-Dyeing Infrastructure Corridors</a>.</p>"
    ],
    "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-510-sub-zero-arctic-outerwear": [
        "<p>Explore drawcord automation in our guide on <a href='/guides/computerized-multi-axis-automated-elastic-drawcord-seating-dynamic-tension-control-sub-zero-arctic-outerwear'>Computerized Multi-Axis Automated Elastic Drawcord Seating & Dynamic Tension Control in Sub-Zero Arctic Outerwear</a>.</p>",
        "<p>Compare polyamide 6,12 textiles in our guide on <a href='/guides/recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-612-sub-zero-arctic-outerwear'>Recycled Nylon 6,6 4-Way Stretch vs. Bio-Based Polyamide 6,12 in Sub-Zero Arctic Outerwear</a>.</p>"
    ]
}

modified = False
for slug, link_htmls in oct16_links_map.items():
    slug_pattern = f'"slug": "{slug}"'
    if slug_pattern in content:
        for link_html in link_htmls:
            if link_html not in content:
                # Find the location of slug entry and append links into content
                slug_idx = content.find(slug_pattern)
                content_end_idx = content.find('",\n  "faqs":', slug_idx)
                if content_end_idx != -1:
                    content = content[:content_end_idx] + link_html + content[content_end_idx:]
                    modified = True

with open("src/data/guides-data.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Internal linking injection into October 16 guides completed. Modified: {modified}")
