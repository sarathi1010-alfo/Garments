#!/usr/bin/env python3
import re

with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
    content = f.read()

existing_links_map = {
    "custom-cricket-jerseys": [
        "<p>Read our detailed technical manufacturing guide on <a href='/guides/custom-cricket-jersey-manufacturing-moisture-wicking-collar-engineering-guide'>Custom Cricket Jersey Manufacturing: Moisture-Wicking Fabrics, Collar Engineering & Sublimation Printing</a>.</p>"
    ],
    "custom-apparel-manufacturers-in-salem-guide": [
        "<p>Explore regional fabric sourcing and yarn spinning clusters in <a href='/guides/salem-erode-textile-corridor-organic-cotton-micropolyester-activewear-hub'>Salem & Erode Textile Corridor: Organic Cotton & Micro-Polyester Activewear Fabrics</a>.</p>"
    ],
    "flatlock-vs-overlock-vs-coverstitch-athletic-seams-comparison": [
        "<p>Read our technical engineering comparison on <a href='/guides/6-needle-4-thread-flatlock-stitching-vs-overlock-seams-sportswear-guide'>6-Needle 4-Thread Flatlock Stitching vs. Overlock Seams in Custom Sportswear Manufacturing</a>.</p>"
    ]
}

modified = False
for slug, link_htmls in existing_links_map.items():
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

print(f"Internal linking injection into existing guides completed. Modified: {modified}")
