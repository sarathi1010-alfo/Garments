import json
import re
import sys

def inject_links():
    filepath = "src/data/guides-data.ts"
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Targets to update in existing guides
    # 1. Inside `computerized-multi-axis-automated-hem-fold-seating-dynamic-tension-control-corporate-sportswear`
    target1 = "computerized-multi-axis-automated-hem-fold-seating-dynamic-tension-control-corporate-sportswear"
    link1 = '<p>For related tactical activewear assembly, read our technical guide on <a href=\\"/guides/computerized-multi-axis-automated-pocket-flap-seating-dynamic-tension-control-tactical-athletic-apparel\\">Computerized Multi-Axis Automated Pocket-Flap Seating & Dynamic Tension Control in Tactical Athletic Apparel</a>.</p>'

    # 2. Inside `dindigul-madurai-technical-fiber-processing-export-logistics-infrastructure-corridors`
    target2 = "dindigul-madurai-technical-fiber-processing-export-logistics-infrastructure-corridors"
    link2 = '<p>To explore upstream Extra-Long Staple cotton ginning and high-tenacity spinning hubs, read our regional guide on <a href=\\"/guides/theni-virudhunagar-direct-combed-cotton-ginning-high-tenacity-spinning-corridors\\">Theni & Virudhunagar Direct Combed Cotton Ginning & High-Tenacity Spinning Corridors</a>.</p>'

    # 3. Inside `recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-610-high-temperature-dynamic-activewear`
    target3 = "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-610-high-temperature-dynamic-activewear"
    link3 = '<p>For sub-zero alpine performance comparisons, review our technical guide on <a href=\\"/guides/recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-1012-alpine-outdoor-activewear\\">Recycled Nylon 6,6 4-Way Stretch vs. Bio-Based Polyamide 10,12 in Alpine Outdoor Activewear</a>.</p>'

    modified = False

    for target, link in [(target1, link1), (target2, link2), (target3, link3)]:
        if target in content and "computerized-multi-axis-automated-pocket-flap-seating" not in content and "theni-virudhunagar-direct-combed-cotton-ginning" not in content and "recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-1012" not in content:
            pos = content.find(target)
            if pos != -1:
                # find closing </p> in the content string
                p_end = content.find("</p>", pos)
                if p_end != -1:
                    content = content[:p_end+4] + " " + link + content[p_end+4:]
                    modified = True
                    print(f"Successfully injected inbound link into {target}")

    if modified:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print("Updated src/data/guides-data.ts with inbound internal links.")

if __name__ == "__main__":
    inject_links()
