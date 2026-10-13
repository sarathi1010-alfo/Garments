import re

with open('src/data/guides-data.ts', 'r') as f:
    text = f.read()

updates = [
    (
        "custom-open-water-water-polo-water-safety-lifesaving-divers-outerwear-guide",
        "custom-open-water-water-polo-medical-emergency-response-outerwear-guide",
        ' For immediate coastal medical and emergency response gear, explore our specialized guide on <a href=\\"/guides/custom-open-water-water-polo-medical-emergency-response-outerwear-guide\\">Custom Open-Water Water Polo Medical & Emergency Response Team Outerwear</a>.'
    ),
    (
        "kottaipattinam-manamelkudi-marine-cordage-netting-hub",
        "adirampattinam-mallipattinam-marine-cordage-netting-hub",
        ' Further north along the Thanjavur coast, explore the high-tenacity trawling twines and knotless netting produced at the <a href=\\"/guides/adirampattinam-mallipattinam-marine-cordage-netting-hub\\">Adirampattinam & Mallipattinam Marine Cordage Hub</a>.'
    ),
    (
        "phase-change-micro-encapsulated-thermoregulatory-activewear-guide",
        "magneto-caloric-paramagnetic-micro-fluidic-cooling-activewear-guide",
        ' For next-generation zero-power active cooling utilizing paramagnetic liquid metal, explore our technical guide on <a href=\\"/guides/magneto-caloric-paramagnetic-micro-fluidic-cooling-activewear-guide\\">Magneto-Caloric & Paramagnetic Micro-Fluidic Cooling Activewear Fabrics</a>.'
    )
]

for src_slug, tgt_slug, link_html in updates:
    slug_marker = f'"slug": "{src_slug}"'
    pos = text.find(slug_marker)
    if pos == -1:
        print(f"Error: Slug {src_slug} not found.")
        continue

    # Find CTA block in this guide
    cta_marker = '<p class=\\"mt-8 pt-8 border-t border-border\\">'
    cta_pos = text.find(cta_marker, pos)
    if cta_pos == -1:
        print(f"Error: CTA marker not found in {src_slug}")
        continue

    # Find preceding </p> before CTA
    p_close = text.rfind('</p>', pos, cta_pos)
    if p_close != -1:
        insert_str = f'{link_html}'
        text = text[:p_close] + insert_str + text[p_close:]
        print(f"Added link from {src_slug} -> {tgt_slug}")

with open('src/data/guides-data.ts', 'w') as f:
    f.write(text)
