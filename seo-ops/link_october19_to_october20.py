import re

with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
    content = f.read()

oct19_links_map = {
    "computerized-multi-axis-automated-thermal-collar-baffle-seating-dynamic-tension-control-sub-zero-arctic-outerwear": [
        "<p>Review articulated sleeve attachment in our guide on <a href='/guides/computerized-multi-axis-automated-thermal-elbow-articulated-sleeve-attachment-dynamic-tension-control-sub-zero-arctic-outerwear'>Computerized Multi-Axis Automated Thermal Elbow-Articulated Sleeve Attachment & Dynamic Tension Control in Sub-Zero Arctic Outerwear</a>.</p>",
        "<p>Explore the Haveri-Davanagere weaving corridor in our guide on <a href='/guides/haveri-davanagere-technical-filament-weaving-eco-dyeing-infrastructure-corridors'>Haveri & Davanagere Technical Filament Weaving & Eco-Dyeing Infrastructure Corridors</a>.</p>"
    ],
    "koppal-ballari-technical-filament-weaving-eco-dyeing-infrastructure-corridors": [
        "<p>Discover automated sleeve joining in our guide on <a href='/guides/computerized-multi-axis-automated-thermal-elbow-articulated-sleeve-attachment-dynamic-tension-control-sub-zero-arctic-outerwear'>Computerized Multi-Axis Automated Thermal Elbow-Articulated Sleeve Attachment & Dynamic Tension Control in Sub-Zero Arctic Outerwear</a>.</p>",
        "<p>Explore the Haveri & Davanagere textile corridor in our guide on <a href='/guides/haveri-davanagere-technical-filament-weaving-eco-dyeing-infrastructure-corridors'>Haveri & Davanagere Technical Filament Weaving & Eco-Dyeing Infrastructure Corridors</a>.</p>"
    ],
    "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-410-cold-weather-extreme-outerwear": [
        "<p>Explore sleeve automation in our guide on <a href='/guides/computerized-multi-axis-automated-thermal-elbow-articulated-sleeve-attachment-dynamic-tension-control-sub-zero-arctic-outerwear'>Computerized Multi-Axis Automated Thermal Elbow-Articulated Sleeve Attachment & Dynamic Tension Control in Sub-Zero Arctic Outerwear</a>.</p>",
        "<p>Compare bio-polyamide 5,6 textiles in our guide on <a href='/guides/recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-56-sub-zero-alpine-outerwear'>Recycled Nylon 6,6 4-Way Stretch vs. Bio-Based Polyamide 5,6 in Sub-Zero Alpine Outerwear</a>.</p>"
    ]
}

modified = False
for slug, link_htmls in oct19_links_map.items():
    slug_pattern = f'"slug": "{slug}"'
    if slug_pattern in content:
        for link_html in link_htmls:
            if link_html not in content:
                slug_idx = content.find(slug_pattern)
                content_end_idx = content.find('",\n    "faqs":', slug_idx)
                if content_end_idx == -1:
                    content_end_idx = content.find('",\n  "faqs":', slug_idx)
                if content_end_idx != -1:
                    content = content[:content_end_idx] + link_html + content[content_end_idx:]
                    modified = True

with open("src/data/guides-data.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Internal linking injection into October 19 guides completed. Modified: {modified}")
