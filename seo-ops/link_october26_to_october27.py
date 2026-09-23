with open("src/data/guides-data.ts", "r") as f:
    text = f.read()

# Target October 26 guides
oct26_basketball_slug = '"slug": "custom-basketball-jersey-manufacturing-wide-cut-shoulder-armholes-micromesh-guide"'
oct26_dindigul_slug = '"slug": "dindigul-karur-technical-home-athletic-textile-belt-circular-knits-guide"'
oct26_uv_slug = '"slug": "uv-blocking-upf-50-solar-protection-custom-outdoor-activewear-guide"'

volleyball_link = '<p>Explore custom volleyball apparel engineering in <a href=\\"/guides/custom-volleyball-jersey-manufacturing-spandex-blend-freedom-of-movement-guide\\">Custom Volleyball Jersey Manufacturing: High-Elasticity Spandex Blends, Freedom of Movement & Sublimated Graphics</a>.</p>'
kanchipuram_link = '<p>Learn about synthetic weaving in <a href=\\"/guides/kanchipuram-chengalpattu-technical-textile-belt-poly-satin-weaving-hub\\">Kanchipuram & Chengalpattu Technical Textile Belt: Poly-Satin & High-Gauge Synthetic Weaving</a>.</p>'
gradient_link = '<p>Discover dual-layer sweat wicking in <a href=\\"/guides/moisture-management-formulations-hydrophilic-hydrophobic-gradient-fabrics-guide\\">Moisture-Management Formulations & Hydrophilic-Hydrophobic Gradient Fabrics in Sportswear</a>.</p>'

def append_link_to_guide(full_text, slug_marker, link_html):
    pos = full_text.find(slug_marker)
    if pos == -1:
        print(f"Slug marker not found: {slug_marker}")
        return full_text

    # Find faqs after slug_marker
    faqs_pos = full_text.find('"faqs":', pos)
    if faqs_pos == -1:
        print(f"faqs not found after {slug_marker}")
        return full_text

    # Find closing quote of content before faqs_pos
    quote_pos = full_text.rfind('",', pos, faqs_pos)
    if quote_pos == -1:
        print(f"closing quote not found before faqs_pos")
        return full_text

    updated_text = full_text[:quote_pos] + link_html + full_text[quote_pos:]
    print(f"Successfully added link for {slug_marker[:40]}...")
    return updated_text

text = append_link_to_guide(text, oct26_basketball_slug, volleyball_link)
text = append_link_to_guide(text, oct26_dindigul_slug, kanchipuram_link)
text = append_link_to_guide(text, oct26_uv_slug, gradient_link)

with open("src/data/guides-data.ts", "w") as f:
    f.write(text)

print("Finished link injection script!")
