with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
    text = f.read()

def add_link_to_slug(content_text, target_slug, link_anchor_html):
    if target_slug in content_text:
        print(f"Link to {target_slug} already exists.")
        return content_text
    insert_pos = content_text.find('<p class=\\"mt-8 pt-8 border-t border-border\\">')
    if insert_pos != -1:
        new_para = f"<p>Also explore related officiating apparel and technical developments in <a href=\\\"/guides/{target_slug}\\\">{link_anchor_html}</a>.</p>"
        return content_text[:insert_pos] + new_para + content_text[insert_pos:]
    else:
        print("Insert position not found!")
    return content_text

links_to_add = [
    (
        "custom-open-water-water-polo-timing-scoring-official-outerwear-guide",
        "custom-open-water-water-polo-jury-appeals-board-outerwear-guide",
        "Custom Open-Water Water Polo Jury & Appeals Board Outerwear Guide"
    ),
    (
        "kanyakumari-nagercoil-heavy-maritime-canvas-synthetic-twine-hub",
        "tuticorin-tirunelveli-heavy-industrial-canvas-marine-rope-belt",
        "Tuticorin & Tirunelveli Heavy Industrial Canvas & Marine Rope Belt"
    ),
    (
        "shape-memory-polymer-smp-micro-channel-dynamic-moisture-management-activewear-guide",
        "piezoelectric-ferroelectric-nanofiber-active-energy-harvesting-activewear-guide",
        "Piezoelectric & Ferroelectric Nanofiber Active Energy-Harvesting Activewear Fabrics Guide"
    )
]

for source_slug, target_slug, anchor_text in links_to_add:
    pos = text.find(f'"slug": "{source_slug}"')
    if pos != -1:
        content_start = text.find('"content": "', pos) + len('"content": "')
        content_end = text.find('",\n  "faqs":', content_start)
        if content_start != -1 and content_end != -1:
            old_content = text[content_start:content_end]
            new_content = add_link_to_slug(old_content, target_slug, anchor_text)
            text = text[:content_start] + new_content + text[content_end:]
            print(f"Successfully linked {source_slug} -> {target_slug}")
        else:
            print(f"Could not find content bounds for {source_slug}")
    else:
        print(f"Could not find slug {source_slug}")

with open("src/data/guides-data.ts", "w", encoding="utf-8") as f:
    f.write(text)

print("Bidirectional linking completed successfully!")
