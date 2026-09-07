import re
import sys

with open('src/data/guides-data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Slugs of interest:
slug1 = "computerized-multi-axis-automated-collar-band-attachment-dynamic-stitch-density-control-corporate-sportswear"
link1_href = "/guides/computerized-multi-axis-automated-sleeve-placket-seating-dynamic-tension-control-corporate-sportswear"
link1_anchor = "Automated Sleeve-Placket Seating & Dynamic Tension Control"

slug2 = "erode-bhavani-technical-dyeing-zld-water-reclamation-corridors"
link2_href = "/guides/karur-erode-technical-weaving-high-tenacity-circular-knitting-corridors"
link2_anchor = "Karur & Erode Technical Weaving & High-Tenacity Circular Knitting Infrastructure Corridors"

slug3 = "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-614-alpine-mountaineering-activewear"
link3_href = "/guides/recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-510-high-flexibility-activewear"
link3_anchor = "Recycled Nylon 6,6 vs. Bio-Based Polyamide 5,10 Technical Comparison"

updated_count = 0

for slug, href, anchor in [
    (slug1, link1_href, link1_anchor),
    (slug2, link2_href, link2_anchor),
    (slug3, link3_href, link3_anchor)
]:
    pos = content.find(f'"slug": "{slug}"')
    if pos != -1:
        # Locate the content property string inside this guide object
        content_key_pos = content.find('"content":', pos)
        if content_key_pos != -1:
            # Insert a new paragraph with link HTML near the end of the content field before "faqs":
            faqs_key_pos = content.find('"faqs":', content_key_pos)
            if faqs_key_pos != -1 and href not in content[content_key_pos:faqs_key_pos]:
                # Locate position just before closing quote of content field
                end_quote_pos = content.rfind('"', content_key_pos, faqs_key_pos)
                if end_quote_pos != -1:
                    html_link = f' <p>For additional technical insights, explore our guide on <a href=\\"{href}\\">{anchor}</a>.</p>'
                    content = content[:end_quote_pos] + html_link + content[end_quote_pos:]
                    updated_count += 1
                    print(f"Successfully injected HTML link into {slug}")

with open('src/data/guides-data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Inbound link injection complete. Total updated: {updated_count}")
