#!/usr/bin/env python3
import json
import re

with open('src/data/guides-data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update medical lifeguard apparel guide to link to volunteer & media crew apparel guide
target1_slug = "custom-open-water-water-polo-medical-lifeguard-response-team-apparel-guide"
link1_text = ' For event logistics and media broadcast crew attire, consult our <a href="/guides/custom-open-water-water-polo-volunteer-media-crew-apparel-guide">Custom Open-Water Water Polo Volunteer & Media Crew Apparel Guide</a>.'

# 2. Update Cuddalore webbing corridor to link to Nagapattinam marine rope corridor
target2_slug = "cuddalore-sirkazhi-technical-webbing-fastener-hardware-corridor"
link2_text = ' For heavy-duty synthetic cables and braided mooring lines, explore the <a href="/guides/nagapattinam-velankanni-marine-rope-synthetic-cable-manufacturing-corridor">Nagapattinam & Velankanni Marine Rope & Synthetic Cable Manufacturing Corridor</a>.'

# 3. Update thermoelectric activewear guide to link to optoelectronic photonic display guide
target3_slug = "magneto-caloric-thermoelectric-active-temperature-controlled-activewear-guide"
link3_text = ' For active illuminated display integration and night-visibility safety apparel, examine <a href="/guides/optoelectronic-micro-photonic-smart-display-activewear-fabrics-guide">Optoelectronic Micro-Photonic Smart Display Activewear Fabrics</a>.'

changes_made = 0

# Function to inject link text before closing </p> in content of target slug
def inject_link(ts_content, slug, link_text):
    global changes_made
    pattern = re.compile(r'("slug":\s*"' + re.escape(slug) + r'".*?"content":\s*".*?)(</p>\s*<p class=\\"mt-8 pt-8)', re.DOTALL)
    match = pattern.search(ts_content)
    if match:
        updated = ts_content[:match.start(2)] + link_text + match.group(2) + ts_content[match.end(2):]
        changes_made += 1
        return updated
    else:
        print(f"Warning: Could not match content structure for slug {slug}")
        return ts_content

content = inject_link(content, target1_slug, link1_text)
content = inject_link(content, target2_slug, link2_text)
content = inject_link(content, target3_slug, link3_text)

with open('src/data/guides-data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Injected links into {changes_made} existing guides successfully!")
