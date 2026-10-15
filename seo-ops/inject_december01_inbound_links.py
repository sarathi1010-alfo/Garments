#!/usr/bin/env python3
"""
Injects inbound internal links from existing November 30 guides to December 01 guides in src/data/guides-data.ts.
"""

import re

def inject_links():
    with open('src/data/guides-data.ts', 'r', encoding='utf-8') as f:
        text = f.read()

    updates = [
        (
            "custom-open-water-water-polo-media-boat-broadcast-crew-outerwear-guide",
            "custom-open-water-water-polo-operations-logistics-support-barge-crew-outerwear-guide",
            ' For technical specifications on heavy-duty deck shells and anchor tie-down vests for support barges, explore our comprehensive guide on <a href=\\"/guides/custom-open-water-water-polo-operations-logistics-support-barge-crew-outerwear-guide\\">Custom Open-Water Water Polo Operations & Logistics Support Barge Crew Outerwear</a>.'
        ),
        (
            "sethubhavachatram-kattumavadi-marine-cordage-netting-hub",
            "mimisal-manamelkudi-marine-cordage-netting-corridor",
            ' Further south along the Pudukkottai coast, discover high-tenacity trawling twines and knotless Raschel netting produced across the <a href=\\"/guides/mimisal-manamelkudi-marine-cordage-netting-corridor\\">Mimisal & Manamelkudi Marine Cordage & Netting Corridor</a>.'
        ),
        (
            "electro-rheological-magneto-rheological-dynamic-damping-activewear-guide",
            "photonic-crystal-mechano-chromic-strain-sensing-structural-color-activewear-guide",
            ' For revolutionary dye-free structural color fabrics providing motion-activated visual strain feedback, explore our technical guide on <a href=\\"/guides/photonic-crystal-mechano-chromic-strain-sensing-structural-color-activewear-guide\\">Photonic-Crystal & Mechano-Chromic Strain-Sensing Structural Color Activewear</a>.'
        )
    ]

    for src_slug, tgt_slug, link_html in updates:
        slug_marker = f'"slug": "{src_slug}"'
        pos = text.find(slug_marker)
        if pos == -1:
            print(f"Error: Slug {src_slug} not found.")
            continue

        cta_marker = '<p class=\\"mt-8 pt-8 border-t border-border\\">'
        cta_pos = text.find(cta_marker, pos)
        if cta_pos == -1:
            print(f"Error: CTA marker not found in {src_slug}")
            continue

        p_close = text.rfind('</p>', pos, cta_pos)
        if p_close != -1:
            text = text[:p_close] + link_html + text[p_close:]
            print(f"Added link from {src_slug} -> {tgt_slug}")

    with open('src/data/guides-data.ts', 'w', encoding='utf-8') as f:
        f.write(text)

if __name__ == "__main__":
    inject_links()
