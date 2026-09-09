import re

def main():
    filepath = 'src/data/guides-data.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    pairs = [
        (
            'computerized-multi-axis-automated-pocket-flap-seating-dynamic-tension-control-tactical-athletic-apparel',
            ' <p>For advanced neckband and collar finishing, read our technical guide on <a href=\\"/guides/computerized-multi-axis-automated-collar-band-attachment-dynamic-stitch-density-control-tactical-sportswear\\">Computerized Multi-Axis Automated Collar-Band Attachment & Dynamic Stitch Density Control in Tactical Sportswear</a>.</p>'
        ),
        (
            'theni-virudhunagar-direct-combed-cotton-ginning-high-tenacity-spinning-corridors',
            ' <p>To explore downstream technical weaving and eco-friendly zero-liquid-discharge dyeing hubs, read our regional sourcing guide on <a href=\\"/guides/sankarankovil-rajapalayam-technical-weaving-eco-dyeing-infrastructure-corridors\\">Sankarankovil & Rajapalayam Technical Weaving & Eco-Dyeing Infrastructure Corridors</a>.</p>'
        ),
        (
            'recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-1012-alpine-outdoor-activewear',
            ' <p>For cold-weather running tights and baselayers, review our technical comparison on <a href=\\"/guides/recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-612-high-flexibility-cold-weather-activewear\\">Recycled Nylon 6,6 4-Way Stretch vs. Bio-Based Polyamide 6,12 in High-Flexibility Cold-Weather Activewear</a>.</p>'
        )
    ]

    modified = False
    for target_slug, link_html in pairs:
        pattern = f'"slug": "{target_slug}"'
        pos = content.find(pattern)
        if pos == -1:
            print('Target slug not found:', target_slug, flush=True)
            continue
        faqs_pos = content.find('"faqs": [', pos)
        guide_chunk = content[pos:faqs_pos]

        # Check if already injected
        match = re.search(r'href=\\"/guides/([^"\\]+)\\"', link_html)
        if match:
            link_slug = match.group(1)
            if link_slug in guide_chunk:
                print('Already injected into:', target_slug, flush=True)
                continue

        # Find ending quote of content property before faqs
        content_end = content.rfind('",\n', pos, faqs_pos)
        if content_end != -1:
            content = content[:content_end] + link_html + content[content_end:]
            modified = True
            print('Successfully injected inbound link into:', target_slug, flush=True)

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Saved updated src/data/guides-data.ts', flush=True)

if __name__ == '__main__':
    main()
