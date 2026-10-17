import re

with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Check if new guides already added
if "custom-open-water-water-polo-referees-technical-jury-outerwear-guide" in content:
    print("Already added!")
    exit(0)

# Add internal links to dec 05 guides if needed
content = content.replace(
    'and <a href="/guides/kodaikanal-nilgiris-high-altitude-technical-fleece-knitwear-hub">Kodaikanal Technical Fleece Hub</a>.',
    'and <a href="/guides/optically-active-photochromic-solarchromic-activewear-guide">Optically Active Photochromic Activewear</a>.'
)

content = content.replace(
    'and <a href="/guides/piezo-resistive-conductive-elastomer-strain-sensing-activewear-guide">Piezo-Resistive Strain-Sensing Activewear</a>.',
    'and <a href="/guides/yercaud-shevaroy-hills-cold-climate-athletic-outerwear-hub">Yercaud Cold-Climate Sportswear Hub</a>.'
)

content = content.replace(
    'and <a href="/guides/custom-open-water-water-polo-media-pontoon-broadcast-crew-outerwear-guide">Media Pontoon Broadcast Outerwear</a>.',
    'and <a href="/guides/custom-open-water-water-polo-referees-technical-jury-outerwear-guide">Open-Water Referees Outerwear</a>.'
)

new_guides_code = ''',
  {
    slug: "custom-open-water-water-polo-referees-technical-jury-outerwear-guide",
    title: "Custom Open-Water Water Polo Referees & Technical Jury Outerwear: Weatherproof Tribunal Jackets, High-Visibility Officiating Deck Apparel & Floating Document Storage",
    description: "Technical guide to custom open-water water polo referees and technical jury outerwear. Covers windproof tribunal jackets, anti-glare referee shells, high-visibility officiating deck wear, waterproof clipboard pockets, and thermal insulation for marine officiating.",
    h1: "Custom Open-Water Water Polo Referees & Technical Jury Outerwear: Technical Engineering Guide",
    category: "Sports & Team Kits",
    readTime: "16 min read",
    date: "December 06, 2026",
    author: "Selvaraj Rayamuthu, Chief Technical Outerwear & Marine Apparel Engineer, Vinayaga Garments",
    answerBlock: "Custom open-water water polo referees and technical jury outerwear provides 20,000mm hydrostatic waterproofness, anti-glare high-visibility yellow panels, floating waterproof document/clipboard storage, and ergonomic thermal articulation designed for static aquatic officiating in extreme coastal weather.",
    keywords: [
      "custom open water water polo referee outerwear",
      "technical jury floating tribunal jacket vinayaga",
      "marine water polo officiating deck apparel",
      "waterproof clipboard pocket referee coat",
      "anti glare high visibility water polo official gear"
    ],
    imageAlt: "Open-water water polo referees and technical jury members wearing weatherproof tribunal jackets and high-visibility officiating deck gear on a coastal jury pontoon",
    highlights: [
      "20,000mm hydrostatic head 3-layer waterproof breathable shell with sealed seams for prolonged static offshore officiating",
      "High-visibility fluorescent yellow panels with anti-glare matte finish to ensure high referee visibility without blinding glare on the water",
      "Dual-sealed floating waterproof document holsters and quick-access digital clipboard pockets",
      "Thermal fleece neck liners and articulated action back sleeves for unrestricted arm signaling and card presentation"
    ],
    content: `<p>Officiating open-water water polo matches on floating jury barges, coastal docks, and offshore pontoons subjects referees and technical jury officials to prolonged exposure to wind, salt spray, harsh glare, and rapid thermal drops. Unlike mobile deck marshals, technical jury members remain static for hours while taking score logs, verifying exclusion foul times, and managing digital scoreboards. <strong>Vinayaga Garments</strong> engineers purpose-built <strong>Custom Open-Water Water Polo Referees & Technical Jury Outerwear</strong> that combines marine-grade weather protection with specialized officiating functionality.</p>

<h2>Thermal & Hydrodynamic Challenges of Offshore Match Officiating</h2>

<p>Referees and technical jury panels face distinct environmental stress factors during multi-day open-water aquatic tournaments:</p>

<h3>1. Static Conductive Cooling & Wind Chill Factor</h3>
<p>Because jury officials remain seated or stationary on elevated barges for consecutive 32-minute regulation games, wind speeds over coastal waters drastically lower core body temperature. Our outerwear integrates 150GSM micro-grid polar thermal lining bonded to a 3-layer hydrophobic membrane, retaining vital body heat without adding restrictive bulk.</p>

<h3>2. High-Glare Sunlight & Aquatic Reflectivity</h3>
<p>Sunlight reflecting off marine waves creates intense glare that dazzles officials, obstructing accurate view of subtle underwater fouls or ball turnover lines. Our tribunal shells feature non-reflective matte outer finishes combined with optical-grade anti-glare brimmed storm hoods engineered to fit seamlessly over headset communications.</p>

<h3>3. Scorecard & Digital Clipboard Protection</h3>
<p>Water spray from swimmer kicks or sudden squalls can ruin paper match sheets or corrupt touch-screen digital clipboards. We integrate dual-sealed TPU transparent chest pockets with IP67 watertight zippers and integrated internal buoyancy inserts to ensure match records stay dry and float if dropped into open water.</p>

<h2>Technical Specification Matrix: Marine Jury & Referee Outerwear</h2>

<table>
  <thead>
    <tr>
      <th>Gear Layer / Module</th><th>Material Engineering Specs</th><th>Performance Parameter</th><th>Officiating Ergonomic Functionality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Outer Shell Membrane</td><td>3-Layer Hydrophobic Ripstop Nylon</td><td>20,000mm Hydrostatic Head / 18,000 g/m² Moisture Vapor Transmission</td><td>Stormproof Rain & Salt-Spray Barrier</td>
    </tr>
    <tr>
      <td>Visibility & Anti-Glare</td><td>Fluorescent ISO 20471 Yellow + Matte Anti-Reflective Coating</td><td>Retro-Reflective 3M Scotchlite Stripes</td><td>High-Contrast Visibility Across 50-Meter Water Course</td>
    </tr>
    <tr>
      <td>Document Storage</td><td>Floating Buoyant TPU Pocket with Watertight Seal</td><td>IP67 Submersible / Positive Buoyancy</td><td>Waterproof Protection for Digital Clipboards & Match Logs</td>
    </tr>
    <tr>
      <td>Sleeve Articulation</td><td>Ergonomic Action-Back Raglan Construction</td><td>360° Unrestricted Arm Motion Range</td><td>Instant Arm Signaling for Exclusions & Penalty Shots</td>
    </tr>
  </tbody>
</table>

<h2>Officiating Ergonomics & Marine Deck Safety Features</h2>

<p>Every element of Vinayaga Garments officiating coats is tuned to the exact physical demands of open-water tournament directors and referees:</p>

<ul>
  <li><strong>Quick-Access Card & Whistle Attachments:</strong> Laminated lanyard anchor loops and magnetic card holsters on the upper chest allow instantaneous retrieval of yellow/red cards and electronic marine whistles.</li>
  <li><strong>Thermal Fleece Neck & Wrist Gaskets:</strong> Neoprene inner wrist cuffs stop sea spray from entering sleeves when raising arms to signal goals or fouls.</li>
  <li><strong>Marine Deck Safety D-Rings:</strong> Stainless steel 316 D-rings located at the waist allow secure clipping to jury barge safety tethers during rough sea conditions.</li>
</ul>

<p>Explore our complete marine sports kit line in our technical guides on <a href="/guides/custom-open-water-water-polo-media-pontoon-broadcast-crew-outerwear-guide">Media Pontoon Outerwear</a>, <a href="/guides/yercaud-shevaroy-hills-cold-climate-athletic-outerwear-hub">Yercaud Cold-Climate Sportswear Hub</a>, and <a href="/guides/optically-active-photochromic-solarchromic-activewear-guide">Optically Active Photochromic Activewear</a>.</p>

<p class="mt-8 pt-8 border-t border-border">
  <strong>Equip your aquatic referee panel with Vinayaga Garments:</strong><br />
  Contact our aquatic apparel engineering division today for referee deck shell samples, custom official embroidery options, and bulk tournament outfitting quotes.
</p>
<div class="not-prose mt-4">
  <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
    Request Referee Outerwear Samples & Quotes
    <span class="material-symbols-outlined">arrow_forward</span>
  </a>
</div>`,
    faqs: [
      {
        q: "What makes open-water water polo referee outerwear different from standard deck jackets?",
        a: "It combines 20,000mm hydrostatic water resistance, anti-glare high-visibility panels, floating TPU pockets for digital scorepads, and 360-degree sleeve articulation for instant referee signaling."
      },
      {
        q: "Are the clipboard storage pockets waterproof and buoyant?",
        a: "Yes, the chest pockets use IP67 watertight zippers and integrated foam lining so scoreboards and match logs remain completely dry and float if accidentally dropped into water."
      },
      {
        q: "How does anti-glare technology assist water polo referees?",
        a: "The outer shell uses a matte non-reflective treatment that prevents harsh glare from water reflections, reducing eye strain and helping referees make precise foul calls."
      },
      {
        q: "What is the minimum order quantity for custom referee coats?",
        a: "We offer flexible minimum order quantities starting at 15 coats for tournament officiating crews with custom federation logos and official role badging."
      }
    ]
  },
  {
    slug: "yercaud-shevaroy-hills-cold-climate-athletic-outerwear-hub",
    title: "Yercaud & Shevaroy Hills Cold-Climate Athletic Outerwear Sourcing Hub: Highland Softshell Bonding, Weather-Resistant Athletic Jackets & Salem Regional Sportswear",
    description: "Sourcing guide for Yercaud and Shevaroy Hills cold-climate athletic outerwear. Details high-altitude softshell lamination, windproof fleece-lined jackets, moisture-dispersing thermal sport shells, and Salem district sportswear manufacturing.",
    h1: "Yercaud & Shevaroy Hills Cold-Climate Athletic Outerwear Sourcing Hub: Regional Manufacturing Guide",
    category: "Location / Regional Sourcing",
    readTime: "15 min read",
    date: "December 06, 2026",
    author: "Selvaraj Rayamuthu, Director of Regional Supply Chain & Highland Sportswear, Vinayaga Garments",
    answerBlock: "The Yercaud and Shevaroy Hills cold-climate athletic outerwear corridor in Salem district specializes in 3-layer laminated softshell bonding, windproof micro-fleece thermal linings, and weather-resistant athletic jackets engineered for high-altitude endurance sports and mountain training.",
    keywords: [
      "yercaud shevaroy hills cold climate outerwear sourcing",
      "salem district athletic softshell jacket manufacturer",
      "highland sports jackets vinayaga garments",
      "windproof fleece lined activewear yercaud",
      "mountain training outerwear tamil nadu"
    ],
    imageAlt: "Garment craftsmen inspecting high-altitude laminated softshell jackets and windproof athletic apparel at a Yercaud outerwear facility in Salem district",
    highlights: [
      "3-layer PUR bonded softshell fabrics combining 10,000mm water resistance with 15,000 g/m²/24h breathability",
      "Micro-fleece interior insulation optimized for high-altitude mountain running, cycling, and trekking apparel",
      "Direct manufacturing synergy with Salem textile mills for rapid sourcing of high-density technical synthetics",
      "Flexible order volumes (MOQ 200 units) tailored for sports academies, trekking clubs, and corporate outdoor teams"
    ],
    content: `<p>Rising 1,500 meters above sea level in Tamil Nadu's Salem district, the Yercaud plateau and surrounding Shevaroy Hills represent an advantageous highland manufacturing ecosystem for cold-climate sportswear and mountain outerwear. Positioned directly adjacent to Salem's major spinning mills and industrial dye houses, the Yercaud corridor merges highland product testing conditions with advanced textile engineering. <strong>Vinayaga Garments</strong> leverages the <strong>Yercaud & Shevaroy Hills Cold-Climate Athletic Outerwear Sourcing Hub</strong> to produce technical softshells, windbreakers, and insulated athletic wear.</p>

<h2>Highland Sourcing Advantages of the Salem-Yercaud Corridor</h2>

<p>The Yercaud regional cluster provides distinct manufacturing benefits for sports brands and athletic federations requiring cold-weather performance gear:</p>

<h3>1. Integrated Lamination & Softshell Bonding Technology</h3>
<p>Local manufacturing units employ multi-roller poly-urethane (PUR) hot-melt adhesive lamination lines. This process bonds woven water-repellent face fabrics with breathable TPU membranes and brushed polyester fleece backings, producing 3-layer softshell jackets that resist mountain squalls while allowing perspiration vapor to escape.</p>

<h3>2. Direct Proximity to Salem Technical Textile Infrastructure</h3>
<p>Raw synthetic yarns, high-tenacity nylon ripstops, and elastomeric knits are sourced within a 30-kilometer radius from Salem industrial parks. This tight supply chain reduces material transit times, lowers transport emissions, and ensures rapid prototype turnaround within 5 to 7 business days.</p>

<h3>3. Real-World Altitude & Micro-Climate Product Testing</h3>
<p>New outerwear designs undergo environmental field testing directly along Yercaud's high-humidity, misty mountain trails and steep elevation shifts. This ensures zipper sealing, thermal retention, and hood articulation perform impeccably under actual mountain conditions.</p>

<h2>Yercaud Outerwear Material & Lamination Specification Matrix</h2>

<table>
  <thead>
    <tr>
      <th>Outerwear Fabric Type</th><th>Layer Structure & Lamination</th><th>Technical Hydro-Thermal Metric</th><th>Primary Athletic Application</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3-Layer Highland Softshell</td><td>DWR Polyester Face + TPU Film + Microfleece</td><td>10,000mm Water Column / 15,000 g/m²/24h MVTR</td><td>Trail Running & High-Altitude Sportswear</td>
    </tr>
    <tr>
      <td>Ultra-Light Windbreaker</td><td>40D Nylon Ripstop with Silicon Coating</td><td>Air Permeability < 1.0 CFM / 75g Total Weight</td><td>Packable Cycling & Marathon Wind Shells</td>
    </tr>
    <tr>
      <td>Hybrid Thermal Midlayer</td><td>Grid Fleece Torso + Stretch Elastane Sleeves</td><td>CLO Value 0.85 / 4-Way 250% Stretch</td><td>Active Cold-Weather Training & Warm-Ups</td>
    </tr>
    <tr>
      <td>Stormproof Heavy Shell</td><td>300D Polyester Oxford + Fully Taped Seams</td><td>15,000mm Hydrostatic Head / Windproof Rating 0 CFM</td><td>Outdoor Event Staff & Mountain Coaching Gear</td>
    </tr>
  </tbody>
</table>

<h2>Customization Capabilities & Sustainable Production</h2>

<p>Vinayaga Garments offers complete OEM and ODM customization across the Yercaud outerwear sourcing hub:</p>

<ul>
  <li><strong>Precision Laser Cutting & Seamless Welding:</strong> Pockets and zipper garages feature ultrasonic bonding for sleek, water-resistant seams without stitch-hole leaks.</li>
  <li><strong>Eco-Friendly PFC-Free DWR Finishes:</strong> Outer fabrics utilize C0 fluorocarbon-free durable water-repellent coatings that safeguard mountain ecosystems.</li>
  <li><strong>Reflective Safety Accents:</strong> High-visibility 3M Scotchlite tape and reflective brand logos ensure runner and cyclist safety along foggy mountain roads.</li>
</ul>

<p>Discover more technical sportswear corridors in our guides on <a href="/guides/kodaikanal-nilgiris-high-altitude-technical-fleece-knitwear-hub">Kodaikanal & Nilgiris Technical Fleece Hub</a>, <a href="/guides/custom-open-water-water-polo-referees-technical-jury-outerwear-guide">Open-Water Referees Outerwear</a>, and <a href="/guides/optically-active-photochromic-solarchromic-activewear-guide">Optically Active Photochromic Activewear</a>.</p>

<p class="mt-8 pt-8 border-t border-border">
  <strong>Source mountain athletic outerwear from Yercaud with Vinayaga Garments:</strong><br />
  Contact our Salem highland supply chain team today for softshell fabric swatches, technical jacket samples, and mountain sportswear production estimates.
</p>
<div class="not-prose mt-4">
  <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
    Request Yercaud Outerwear Swatches & Quotes
    <span class="material-symbols-outlined">arrow_forward</span>
  </a>
</div>`,
    faqs: [
      {
        q: "Why source cold-climate athletic outerwear from Yercaud and Salem?",
        a: "The region combines direct access to Salem's advanced synthetic textile mills with specialized highland PUR softshell lamination facilities and real-world mountain testing environments."
      },
      {
        q: "What waterproof and breathability ratings are available in Yercaud softshells?",
        a: "Our standard 3-layer bonded softshells offer 10,000mm hydrostatic water resistance with 15,000 g/m²/24h moisture vapor transmission, ideal for intense mountain training."
      },
      {
        q: "Are the durable water repellent (DWR) coatings environmentally friendly?",
        a: "Yes, we exclusively utilize C0 PFC-free fluorocarbon-free DWR finishes that protect against rain and mud while keeping manufacturing eco-conscious."
      },
      {
        q: "What is the Minimum Order Quantity (MOQ) for custom technical jackets?",
        a: "Our flexible production lines support minimum orders starting at 200 units per style for sports academies, event teams, and outdoor brands."
      }
    ]
  },
  {
    slug: "optically-active-photochromic-solarchromic-activewear-guide",
    title: "Optically Active Photochromic & Solarchromic Dynamic Activewear Fabrics: Solar-Activated Dynamic Shading, Spiropyran Dye Encapsulation & Smart UV-Shielding Sportswear",
    description: "Technical guide to optically active photochromic and solarchromic dynamic activewear fabrics. Covers solar-activated molecular dye transition, real-time UV index visual indicator knits, dynamic thermal regulation, and smart photochromic athletic apparel.",
    h1: "Optically Active Photochromic & Solarchromic Dynamic Activewear: Technical Engineering Guide",
    category: "Fabric & Customization Technology",
    readTime: "17 min read",
    date: "December 06, 2026",
    author: "Selvaraj Rayamuthu, Chief Smart Apparel & Photonic Materials Engineer, Vinayaga Garments",
    answerBlock: "Optically active photochromic activewear incorporates micro-encapsulated spiropyran and naphthopyran dyes into athletic knits, triggering a reversible molecular structure shift under solar UV radiation (<400nm) to darken the fabric within 5 seconds, providing dynamic UV protection (UPF 50+) and real-time visual solar intensity feedback.",
    keywords: [
      "optically active photochromic solarchromic activewear",
      "solar activated dye photochromic sportswear vinayaga",
      "smart uv indicator athletic fabric",
      "spiropyran naphthopyran microcapsule sportswear",
      "dynamic photochromic solar shading jersey"
    ],
    imageAlt: "Close-up visualization of photochromic micro-encapsulated athletic fabric shifting color dynamically under sun glare to absorb UV rays during outdoor athletic competition",
    highlights: [
      "Reversible spiropyran molecular ring-opening transition under UV light (320-400nm) activated in under 5 seconds",
      "UPF 50+ dynamic protection scale that automatically enhances UV blockade as solar irradiance increases",
      "Micro-encapsulated organic dyes resistant to thermal degradation and tested through 60 home wash cycles",
      "Integrated visual solar intensity zones giving athletes clear real-time warning of peak UV exposure levels"
    ],
    content: `<p>In open-air athletics such as marathon running, road cycling, beach volleyball, and cricket, athletes experience continuous fluctuations in solar radiation and ultraviolet (UV) intensity. Conventional sportswear relies on static dyes that provide fixed solar absorption regardless of cloud cover or sunlight peaks. <strong>Vinayaga Garments</strong> introduces <strong>Optically Active Photochromic & Solarchromic Dynamic Activewear Fabrics</strong>, utilizing photo-responsive micro-capsules that reversibly transform color, UV absorption, and thermal reflectance upon exposure to sunlight.</p>

<h2>Photochemical Mechanism of Photochromic & Solarchromic Textiles</h2>

<p>Photochromism is a reversible photochemical reaction where a chemical species undergoes a structural change upon absorbing electromagnetic radiation, altering its absorption spectrum:</p>

<h3>1. Spiropyran & Naphthopyran Molecular Ring-Opening</h3>
<p>Organic photochromic compounds such as spiropyrans and naphthopyrans are encapsulated within micro-spherical polymeric shells (1 to 5 microns in diameter). In indoor or shaded environments, the spiropyran molecule stays in its closed, colorless spiro form. Upon exposure to ultraviolet light (320-400nm), the carbon-oxygen bond cleaves open into an elongated, conjugated merocyanine structure, instantly absorbing visible light and darkening the textile within 3 to 5 seconds.</p>

<h3>2. Dynamic UPF 50+ Solar Defense Amplification</h3>
<p>As the molecular structure shifts to its darkened merocyanine state, the fabric's UV absorption coefficient expands dramatically. While standard white jersey knits offer UPF 15+, photochromic activewear dynamically scales to UPF 50+ during intense peak-noon solar radiation, blocking over 98% of harmful UVA and UVB rays.</p>

<h3>3. Reversible Thermal Regulation & Thermal Decay</h3>
<p>When athletes transition into shaded park loops or mountain shadows, the absence of UV radiation triggers thermal back-relaxation, causing the molecules to revert to their uncolored form within 30 to 45 seconds. This thermal decay restores maximum breathability and lightness, preventing heat trapping when direct sunlight subsides.</p>

<h2>Photochromic Smart Activewear Technical Matrix</h2>

<table>
  <thead>
    <tr>
      <th>Smart Textile Component</th><th>Chemical & Molecular Architecture</th><th>Activation / Response Parameter</th><th>Athletic Performance Metric</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Photochromic Dyes</td><td>Micro-Encapsulated Spiropyran / Naphthopyran</td><td>320-400nm UV Light Spectrum Trigger</td><td>Reversible Darkening in < 5 Seconds</td>
    </tr>
    <tr>
      <td>UV Protection Factor</td><td>Dynamic Zinc-Oxide Augmented Polymer Shell</td><td>UPF 15+ (Shade) to UPF 50+ (Direct Sun)</td><td>Adaptive UVA/UVB Solar Shielding</td>
    </tr>
    <tr>
      <td>Base Knit Fabric</td><td>85% Polyester Micro-Piqué / 15% Elastane</td><td>Capillary Action Moisture Transfer</td><td>4-Way Stretch with 180g/m² Basis Weight</td>
    </tr>
    <tr>
      <td>Wash & Color Fastness</td><td>Cross-Linked Polyurethane Shell Encapsulation</td><td>ISO 105-C06 Wash Fastness Grade 4-5</td><td>60 Home Laundry Cycle Durability Rating</td>
    </tr>
  </tbody>
</table>

<h2>Applications in Smart Sportswear & Real-Time UV Visual Indicators</h2>

<p>Vinayaga Garments integrates solarchromic technology across several high-performance athletic apparel categories:</p>

<ul>
  <li><strong>Real-Time UV Index Warning Panels:</strong> Engineered chest or sleeve motifs shift color from clear to vibrant violet when the UV Index exceeds 8, giving athletes visual notification to apply sunscreen or hydrate.</li>
  <li><strong>Dynamic Solar Shading Running Shirts:</strong> High-exertion marathon singlets darken on sun-exposed shoulders and back zones to reduce solar glare and skin inflammation during long-distance races.</li>
  <li><strong>Sublimated Brand & Team Logo Reveals:</strong> Custom sponsor logos and team insignia appear dynamically only when players step out onto sunny playing fields.</li>
</ul>

<p>Explore our full range of smart activewear innovation guides in our articles on <a href="/guides/piezo-resistive-conductive-elastomer-strain-sensing-activewear-guide">Piezo-Resistive Strain-Sensing Activewear</a>, <a href="/guides/yercaud-shevaroy-hills-cold-climate-athletic-outerwear-hub">Yercaud Cold-Climate Sportswear Hub</a>, and <a href="/guides/custom-open-water-water-polo-referees-technical-jury-outerwear-guide">Open-Water Referees Outerwear</a>.</p>

<p class="mt-8 pt-8 border-t border-border">
  <strong>Develop photochromic activewear with Vinayaga Garments:</strong><br />
  Contact our smart fabric R&D team today for solarchromic fabric swatches, dynamic UV indicator samples, and custom smart teamwear manufacturing options.
</p>
<div class="not-prose mt-4">
  <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
    Request Photochromic Fabric Swatches & Quotes
    <span class="material-symbols-outlined">arrow_forward</span>
  </a>
</div>`,
    faqs: [
      {
        q: "How fast does photochromic activewear change color in sunlight?",
        a: "The micro-encapsulated spiropyran dyes react to UV radiation within 3 to 5 seconds when exposed to direct sunlight, and revert to clear within 30 to 45 seconds in the shade."
      },
      {
        q: "Does photochromic fabric retain its color-changing ability after washing?",
        a: "Yes, our micro-encapsulation in durable cross-linked polyurethane shells protects the dyes, maintaining full photochromic reactivity through 60 standard home laundry cycles."
      },
      {
        q: "How does solarchromic activewear improve UV protection for athletes?",
        a: "The fabric dynamically scales its solar protection from UPF 15+ in ambient shade up to UPF 50+ in direct sun, blocking over 98% of harmful UVA and UVB radiation."
      },
      {
        q: "Can custom team logos be printed using photochromic dyes?",
        a: "Yes, we can apply photochromic screen printing or sublimation overlays so that team logos, sponsor graphics, or UV warning icons reveal themselves only in sunlight."
      }
    ]
  }'''

# Insert right before ending '];'
idx = content.rfind('];')
if idx != -1:
    new_content = content[:idx].rstrip() + new_guides_code + "\n];\n"
    with open("src/data/guides-data.ts", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully added 3 new guides for Dec 06, 2026!")
else:
    print("Could not find ending ];")
