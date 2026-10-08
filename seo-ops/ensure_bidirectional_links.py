import json

with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
    text = f.read()

# We can find each object by slug and insert contextual link into its content field
def add_link_to_slug(content_text, target_slug, link_anchor_html):
    if target_slug in content_text:
        return content_text
    # Append paragraph before final section strong tag or CTA
    insert_pos = content_text.find("<p class=\\\"mt-8 pt-8 border-t border-border\\\">")
    if insert_pos != -1:
        new_para = f"<p>Also explore related technical guides: {link_anchor_html}.</p>"
        return content_text[:insert_pos] + new_para + content_text[insert_pos:]
    return content_text

# 1. volunteer media crew -> event operations setup crew
slug1 = "custom-open-water-water-polo-volunteer-media-crew-apparel-guide"
target1 = "custom-open-water-water-polo-event-operations-setup-crew-outerwear-guide"
anchor1 = "<a href=\\\"/guides/custom-open-water-water-polo-event-operations-setup-crew-outerwear-guide\\\">Custom Open-Water Water Polo Event Operations & Setup Crew Outerwear</a>"

# 2. nagapattinam rope corridor -> rameswaram netting belt
slug2 = "nagapattinam-velankanni-marine-rope-synthetic-cable-manufacturing-corridor"
target2 = "rameswaram-ramanathapuram-marine-netting-coastal-cordage-belt"
anchor2 = "<a href=\\\"/guides/rameswaram-ramanathapuram-marine-netting-coastal-cordage-belt\\\">Rameswaram & Ramanathapuram Marine Netting & Coastal Cordage Belt</a>"

# Replace in text
# Find slug1 content block
pos1 = text.find(f'"slug": "{slug1}"')
if pos1 != -1:
    content_start = text.find('"content": "', pos1) + len('"content": "')
    content_end = text.find('",\n  "faqs":', content_start)
    if content_start != -1 and content_end != -1:
        old_content = text[content_start:content_end]
        new_content = add_link_to_slug(old_content, target1, anchor1)
        text = text[:content_start] + new_content + text[content_end:]

pos2 = text.find(f'"slug": "{slug2}"')
if pos2 != -1:
    content_start = text.find('"content": "', pos2) + len('"content": "')
    content_end = text.find('",\n  "faqs":', content_start)
    if content_start != -1 and content_end != -1:
        old_content = text[content_start:content_end]
        new_content = add_link_to_slug(old_content, target2, anchor2)
        text = text[:content_start] + new_content + text[content_end:]

with open("src/data/guides-data.ts", "w", encoding="utf-8") as f:
    f.write(text)

print("Updated links successfully!")
