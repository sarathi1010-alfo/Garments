def inject_inbound_links():
    with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Update custom-open-water-water-polo-medical-emergency-response-outerwear-guide
    old_text_1 = 'our dedicated guides on <a href=\\"/guides/custom-open-water-water-polo-water-safety-lifesaving-divers-outerwear-guide\\">Water Safety & Life Saving Divers Outerwear</a> and <a href=\\"/guides/custom-open-water-water-polo-technical-operations-director-outerwear-guide\\">Technical & Operations Director Apparel</a>.'
    new_text_1 = 'our dedicated guides on <a href=\\"/guides/custom-open-water-water-polo-media-boat-broadcast-crew-outerwear-guide\\">Media Boat & Broadcast Crew Outerwear</a>, <a href=\\"/guides/custom-open-water-water-polo-water-safety-lifesaving-divers-outerwear-guide\\">Water Safety & Life Saving Divers Outerwear</a>, and <a href=\\"/guides/custom-open-water-water-polo-technical-operations-director-outerwear-guide\\">Technical & Operations Director Apparel</a>.'

    # 2. Update adirampattinam-mallipattinam-marine-cordage-netting-hub
    old_text_2 = 'manufacturing partners in <a href=\\"/guides/kottaipattinam-manamelkudi-marine-cordage-netting-hub\\">Kottaipattinam & Manamelkudi</a>, <a href=\\"/guides/kayalpattinam-punnakayal-marine-synthetic-rope-hawser-belt\\">Kayalpattinam & Punnakayal</a>'
    new_text_2 = 'manufacturing partners in <a href=\\"/guides/sethubhavachatram-kattumavadi-marine-cordage-netting-hub\\">Sethubhavachatram & Kattumavadi</a>, <a href=\\"/guides/kottaipattinam-manamelkudi-marine-cordage-netting-hub\\">Kottaipattinam & Manamelkudi</a>, <a href=\\"/guides/kayalpattinam-punnakayal-marine-synthetic-rope-hawser-belt\\">Kayalpattinam & Punnakayal</a>'

    # 3. Update magneto-caloric-paramagnetic-micro-fluidic-cooling-activewear-guide
    old_text_3 = 'our dedicated guides on <a href=\\"/guides/phase-change-micro-encapsulated-thermoregulatory-activewear-guide\\">Phase-Change Micro-Encapsulated Activewear</a>, <a href=\\"/guides/thermoelectrically-cooled-peltier-micro-climate-activewear-guide\\">Peltier Thermoelectrically Cooled Activewear</a>, <a href=\\"/guides/electromagnetic-actuated-dynamic-ventilation-variable-aperture-activewear-fabrics\\">Electromagnetic Dynamic Ventilation Fabrics</a>, and <a href=\\"/guides/piezoelectric-ferroelectric-nanofiber-active-energy-harvesting-activewear-guide\\">Piezoelectric Energy-Harvesting Fabrics</a>.'
    new_text_3 = 'our dedicated guides on <a href=\\"/guides/electro-rheological-magneto-rheological-dynamic-damping-activewear-guide\\">ER/MR Smart Fluid Dynamic Damping Activewear</a>, <a href=\\"/guides/phase-change-micro-encapsulated-thermoregulatory-activewear-guide\\">Phase-Change Micro-Encapsulated Activewear</a>, <a href=\\"/guides/thermoelectrically-cooled-peltier-micro-climate-activewear-guide\\">Peltier Thermoelectrically Cooled Activewear</a>, <a href=\\"/guides/electromagnetic-actuated-dynamic-ventilation-variable-aperture-activewear-fabrics\\">Electromagnetic Dynamic Ventilation Fabrics</a>, and <a href=\\"/guides/piezoelectric-ferroelectric-nanofiber-active-energy-harvesting-activewear-guide\\">Piezoelectric Energy-Harvesting Fabrics</a>.'

    updated_content = content
    if old_text_1 in updated_content:
        updated_content = updated_content.replace(old_text_1, new_text_1)
        print("Updated Medical & Emergency Response Outerwear guide with link to Media Boat Crew Outerwear.")
    else:
        print("Notice: Target string 1 not found or already updated.")

    if old_text_2 in updated_content:
        updated_content = updated_content.replace(old_text_2, new_text_2)
        print("Updated Adirampattinam & Mallipattinam guide with link to Sethubhavachatram & Kattumavadi.")
    else:
        print("Notice: Target string 2 not found or already updated.")

    if old_text_3 in updated_content:
        updated_content = updated_content.replace(old_text_3, new_text_3)
        print("Updated Magneto-Caloric Activewear guide with link to ER/MR Dynamic Damping Activewear.")
    else:
        print("Notice: Target string 3 not found or already updated.")

    with open("src/data/guides-data.ts", "w", encoding="utf-8") as f:
        f.write(updated_content)

    print("Inbound link injection complete!")

if __name__ == "__main__":
    inject_inbound_links()
