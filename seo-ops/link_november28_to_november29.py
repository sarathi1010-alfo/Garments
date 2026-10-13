import json

with open('src/data/guides-data.ts', 'r') as f:
    text = f.read()

# 1. Update custom-open-water-water-polo-water-safety-lifesaving-divers-outerwear-guide
old_1 = '<a href="/guides/custom-open-water-water-polo-technical-operations-director-outerwear-guide">Technical Operations Director Outerwear Guide</a>.'
new_1 = old_1 + ' For immediate coastal emergency and medical triage gear, review our guide on <a href="/guides/custom-open-water-water-polo-medical-emergency-response-outerwear-guide">Custom Open-Water Water Polo Medical & Emergency Response Team Outerwear</a>.'

if old_1 in text:
    text = text.replace(old_1, new_1)

# 2. Update kottaipattinam-manamelkudi-marine-cordage-netting-hub
old_2 = '<a href="/guides/kulasekharapatnam-tiruchendur-coastal-synthetic-webbing-netting-corridor">Kulasekharapatnam & Tiruchendur Webbing Corridor Guide</a>.'
new_2 = old_2 + ' Further north along the Thanjavur coast, explore the high-tenacity trawling twines and knotless netting produced at the <a href="/guides/adirampattinam-mallipattinam-marine-cordage-netting-hub">Adirampattinam & Mallipattinam Marine Cordage Hub</a>.'

if old_2 in text:
    text = text.replace(old_2, new_2)

# 3. Update phase-change-micro-encapsulated-thermoregulatory-activewear-guide
old_3 = '<a href="/guides/thermoelectrically-cooled-peltier-micro-climate-activewear-guide">Thermoelectrically Cooled Activewear Guide</a>.'
new_3 = old_3 + ' For next-generation zero-power active cooling utilizing paramagnetic liquid metal, explore our technical guide on <a href="/guides/magneto-caloric-paramagnetic-micro-fluidic-cooling-activewear-guide">Magneto-Caloric & Paramagnetic Micro-Fluidic Cooling Activewear Fabrics</a>.'

if old_3 in text:
    text = text.replace(old_3, new_3)

with open('src/data/guides-data.ts', 'w') as f:
    f.write(text)

print("Updated November 28 guides with bidirectional links to November 29 guides.")
