def inject_inbound_links():
    with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Update custom-open-water-water-polo-medical-emergency-response-outerwear-guide
    old_text_1 = 'To equip all operational teams across your aquatic event, pair medical responder outerwear with event director apparel detailed in <a href=\\"/guides/custom-open-water-water-polo-technical-operations-director-outerwear-guide\\">Technical & Operations Director Outerwear</a>'
    new_text_1 = 'To equip all operational teams across your aquatic event, pair medical responder outerwear with broadcast crew outerwear detailed in <a href=\\"/guides/custom-open-water-water-polo-media-boat-broadcast-crew-outerwear-guide\\">Media Boat & Broadcast Crew Outerwear</a>, event director apparel in <a href=\\"/guides/custom-open-water-water-polo-technical-operations-director-outerwear-guide\\">Technical & Operations Director Outerwear</a>'

    # 2. Update adirampattinam-mallipattinam-marine-cordage-netting-hub
    old_text_2 = 'Explore related regional netting and cordage capabilities in our guides on <a href=\\"/guides/kottaipattinam-manamelkudi-marine-cordage-netting-hub\\">Kottaipattinam & Manamelkudi Marine Cordage Hub</a>'
    new_text_2 = 'Explore related regional netting and cordage capabilities in our guides on <a href=\\"/guides/sethubhavachatram-kattumavadi-marine-cordage-netting-hub\\">Sethubhavachatram & Kattumavadi Marine Cordage Hub</a>, <a href=\\"/guides/kottaipattinam-manamelkudi-marine-cordage-netting-hub\\">Kottaipattinam & Manamelkudi Marine Cordage Hub</a>'

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

    with open("src/data/guides-data.ts", "w", encoding="utf-8") as f:
        f.write(updated_content)

    print("Inbound link injection complete!")

if __name__ == "__main__":
    inject_inbound_links()
