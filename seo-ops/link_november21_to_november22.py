import re

with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Link from custom-open-water-water-polo-volunteer-media-crew-apparel-guide
# Add link to custom-open-water-water-polo-event-operations-setup-crew-outerwear-guide
pattern_1 = r'(For specialized referee and officiating outerwear, see <a href="/guides/custom-open-water-water-polo-referee-apparel-officiating-thermal-shells-guide">Custom Open-Water Water Polo Referee Apparel</a>\.)'
replacement_1 = r'\1 For heavy buoy rigging and dock logistics outerwear, explore <a href="/guides/custom-open-water-water-polo-event-operations-setup-crew-outerwear-guide">Custom Open-Water Water Polo Event Operations & Setup Crew Outerwear</a>.'

if re.search(pattern_1, content):
    content = re.sub(pattern_1, replacement_1, content)
    print("Added link 1 to volunteer crew apparel guide")
else:
    print("Pattern 1 not found, trying alternate link target in volunteer crew guide")
    pattern_1_alt = r'(Synergy with Aquatic Event Operations)'
    replacement_1_alt = r'\1</h2\><p>For heavy deck rigging and pontoon management, pair volunteer crew gear with <a href="/guides/custom-open-water-water-polo-event-operations-setup-crew-outerwear-guide">Custom Open-Water Water Polo Event Operations Setup Crew Outerwear</a>.</p><h2'
    content = content.replace("<h2>Synergy with Aquatic Event Operations", "<h2>Synergy with Aquatic Event Operations</h2\><p>For heavy deck rigging and pontoon management, pair volunteer crew gear with <a href=\"/guides/custom-open-water-water-polo-event-operations-setup-crew-outerwear-guide\">Custom Open-Water Water Polo Event Operations Setup Crew Outerwear</a>.</p><h2")

# 2. Link from nagapattinam-velankanni-marine-rope-synthetic-cable-manufacturing-corridor
# Add link to rameswaram-ramanathapuram-marine-netting-coastal-cordage-belt
if "rameswaram-ramanathapuram-marine-netting-coastal-cordage-belt" not in content.split("nagapattinam-velankanni-marine-rope-synthetic-cable-manufacturing-corridor")[1].split("optoelectronic-micro-photonic-smart-display-activewear-fabrics-guide")[0]:
    target_text_2 = "Synergy with Regional Textile Corridors"
    replacement_2 = "Synergy with Regional Textile Corridors</h2><p>For fine polypropylene draw cords and monofilament mesh netting, cross-reference with <a href=\"/guides/rameswaram-ramanathapuram-marine-netting-coastal-cordage-belt\">Rameswaram & Ramanathapuram Marine Netting Belt</a>.</p><h2"
    content = content.replace("<h2>Synergy with Regional Textile Corridors", replacement_2, 1)
    print("Added link 2 to Nagapattinam rope corridor guide")

# 3. Link from optoelectronic-micro-photonic-smart-display-activewear-fabrics-guide
# Add link to electromagnetic-actuated-dynamic-ventilation-variable-aperture-activewear-guide
target_text_3 = "Synergy with Smart Activewear & High-Vis Systems"
replacement_3 = "Synergy with Smart Activewear & High-Vis Systems</h2><p>Combine photonic illumination with active airflow modulation from <a href=\"/guides/electromagnetic-actuated-dynamic-ventilation-variable-aperture-activewear-guide\">Electromagnetic Actuated Dynamic Ventilation Fabrics</a>.</p><h2"
content = content.replace("<h2>Synergy with Smart Activewear & High-Vis Systems", replacement_3, 1)
print("Added link 3 to optoelectronic micro-photonic smart display guide")

with open("src/data/guides-data.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("Finished updating Nov 21 guides with Nov 22 internal links.")
