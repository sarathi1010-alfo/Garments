import re

def link_oct30_to_oct31():
    filepath = "src/data/guides-data.ts"
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    tennis_slug = "custom-tennis-padel-team-uniforms-uv-protective-pique-knits-motion-gussets-guide"
    table_tennis_link = '<p>Discover high-velocity racket sports jersey engineering in <a href=\\"/guides/custom-table-tennis-squash-team-apparel-ergonomic-raglan-sleeves-micropore-mesh-guide\\">Custom Table Tennis & Squash Team Apparel: Ergonomic Raglan Sleeves, Micro-Pore Mesh & Anti-Cling Finishes</a>.</p>'

    webbing_slug = "rajapalayam-virudhunagar-industrial-webbing-belt-high-tenacity-tapes-heavy-duty-canvas-hub"
    sankarankovil_link = '<p>Explore Southern Tamil Nadu duck canvas and pocketing fabric sourcing in <a href=\\"/guides/sankarankovil-tenkasi-technical-weaving-corridor-duck-canvas-pocketing-fabric-hub\\">Sankarankovil & Tenkasi Technical Weaving Corridor: High-Tenacity Poly-Cotton Duck Canvas & Pocketing Fabric Sourcing</a>.</p>'

    graphene_slug = "graphene-infused-thermal-conducting-fibers-static-dissipative-textiles-guide"
    aramid_link = '<p>Learn about extreme high-impact aramid reinforcements in <a href=\\"/guides/aramid-fiber-blends-cordura-reinforcements-motorsport-extreme-activewear-guide\\">Aramid-Fiber Blends & Abrasion-Resistant Cordura Reinforcements in Custom Motorsport & Extreme Activewear</a>.</p>'

    # Helper to insert before faqs
    def insert_link_before_faqs(full_text, slug, link_to_add):
        slug_pattern = f'slug: "{slug}"'
        pos = full_text.find(slug_pattern)
        if pos == -1:
            print(f"Slug {slug} not found!")
            return full_text

        # Find where faqs: starts after this slug
        faqs_pos = full_text.find('faqs:', pos)
        if faqs_pos == -1:
            print(f"faqs: not found after {slug}")
            return full_text

        # Search backward from faqs_pos for '",\n' or '",\n  faqs:'
        quote_pos = full_text.rfind('",', pos, faqs_pos)
        if quote_pos == -1:
            print(f"Closing quote before faqs not found for {slug}")
            return full_text

        print(f"Injecting into {slug} at position {quote_pos}")
        return full_text[:quote_pos] + link_to_add + full_text[quote_pos:]

    content = insert_link_before_faqs(content, tennis_slug, table_tennis_link)
    content = insert_link_before_faqs(content, webbing_slug, sankarankovil_link)
    content = insert_link_before_faqs(content, graphene_slug, aramid_link)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    link_oct30_to_oct31()
