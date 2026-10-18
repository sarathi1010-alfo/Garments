import re

with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Check if new guides already added
if "custom-open-water-water-polo-rescue-water-safety-kayaker-outerwear-guide" in content:
    print("Already added!")
    exit(0)

# Add internal links to dec 06 guides to point to dec 07 guides
content = content.replace(
    'and <a href="/guides/optically-active-photochromic-solarchromic-activewear-guide">Optically Active Photochromic Activewear</a>.',
    'and <a href="/guides/custom-open-water-water-polo-rescue-water-safety-kayaker-outerwear-guide">Rescue & Water Safety Kayaker Outerwear</a>.'
)

content = content.replace(
    'and <a href="/guides/optically-active-photochromic-solarchromic-activewear-guide">Optically Active Photochromic Activewear</a>.</p>',
    'and <a href="/guides/kotagiri-coonoor-high-altitude-thermal-baselayer-hub">Kotagiri & Coonoor Thermal Baselayer Hub</a>.</p>'
)

content = content.replace(
    'and <a href="/guides/custom-open-water-water-polo-referees-technical-jury-outerwear-guide">Open-Water Referees Outerwear</a>.',
    'and <a href="/guides/electro-chromic-voltage-tunable-color-shifting-activewear-guide">Electro-Chromic Voltage-Tunable Activewear</a>.'
)

new_guides_code = ''',
  {
    slug: "custom-open-water-water-polo-rescue-water-safety-kayaker-outerwear-guide",
    title: "Custom Open-Water Water Polo Rescue & Water Safety Kayaker Outerwear: High-Visibility Safety Shells, Quick-Rescue Deck Gear & Buoyant Technical Outerwear",
    description: "Technical guide to custom open-water water polo rescue and water safety kayaker outerwear. Covers high-visibility safety shells, quick-rescue deck gear, 100 Newton inherently buoyant paddling jackets, splash-proof radio harness pockets, and cold-water immersion protection.",
    h1: "Custom Open-Water Water Polo Rescue & Water Safety Kayaker Outerwear: Technical Engineering Guide",
    category: "Sports & Team Kits",
    readTime: "16 min read",
    date: "December 07, 2026",
    author: "Selvaraj Rayamuthu, Chief Technical Outerwear & Marine Safety Apparel Engineer, Vinayaga Garments",
    answerBlock: "Custom open-water water polo rescue and water safety kayaker outerwear combines 100 Newton inherent PVC foam flotation, high-visibility fluorescent yellow/orange shells, 20,000mm hydrostatic spray barrier membranes, and articulated paddler arm sleeves engineered for rapid aquatic emergency response.",
    keywords: [
      "custom open water water polo rescue kayaker outerwear",
      "water safety deck jacket vinayaga garments",
      "aquatic rescue dry top paddling shell",
      "buoyant safety outerwear water polo",
      "marine emergency responder activewear"
    ],
    imageAlt: "Water safety kayakers and rescue swimmers wearing high-visibility buoyant safety shells and quick-rescue deck gear patrolling an open-water water polo arena",
    highlights: [
      "100 Newton ISO 12402-5 certified inherent closed-cell PVC foam flotation panels integrated into ergonomic paddling shells",
      "20,000mm hydrostatic head 3-layer ripstop polyester with high-visibility fluorescent orange and neon yellow color blocking",
      "Waterproof VHF radio chest holster with mic loop, whistle anchor, and rapid strobe light attachment points",
      "Latex neck and wrist gaskets with neoprene cover seals preventing water flush during high-speed paddling and water entry"
    ],
    content: `<p>During open-water water polo tournaments held in ocean bays, coastal lakes, and rivers, water safety kayakers and rescue craft operators form the immediate life-safety perimeter around the playing arena. Positioned on stationary or moving kayaks, rescue marshals must monitor distressed athletes, respond instantly to cramp or head injury emergencies, and endure hours of exposure to sun, waves, and cold water splash. <strong>Vinayaga Garments</strong> engineers specialized <strong>Custom Open-Water Water Polo Rescue & Water Safety Kayaker Outerwear</strong> engineered specifically for high-mobility aquatic emergency response.</p>

<h2>Paddler Ergonomics & Flotation Mechanics for Safety Kayakers</h2>

<p>Rescue kayakers operate under continuous physical strain that differs significantly from static officiating staff or boat captains:</p>

<h3>1. Rotational Torso Articulation & 100N Inherent Buoyancy</h3>
<p>Traditional bulky life vests create armpit chafing and impede rotational paddling strokes. Our safety tops incorporate 100 Newton closed-cell PVC flotation foam segmented into anatomical chest and back panels. This distribution allows full 360-degree torso twisting and overhead reach without riding up toward the chin.</p>

<h3>2. Spray-Barrier Dry Top Membranes</h3>
<p>Continuous paddle drip and wave chop can drench kayakers, causing rapid evaporative cooling. We utilize a 3-layer 20,000mm waterproof breathable polyester shell with sealed seams and adjustable neoprene waistband skirts that snap securely around kayak spray skirts to create a watertight seal.</p>

<h3>3. High-Contrast Aquatic Emergency Visibility</h3>
<p>To remain clearly visible to powerboat captains, tournament referees, and swimmers across 100-meter distances in choppy water, our jackets combine ISO 20471 fluorescent orange and bright neon yellow panels with 3M Scotchlite retro-reflective shoulder bands.</p>

<h2>Technical Specification Matrix: Safety Kayaker Rescue Apparel</h2>

<table>
  <thead>
    <tr>
      <th>Module / Feature</th><th>Material Engineering Specs</th><th>Performance Parameter</th><th>Rescue & Paddling Functionality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Flotation Core</td><td>Inherent Segmented Closed-Cell PVC Foam</td><td>100 Newton Buoyancy (ISO 12402-5)</td><td>Unrestricted Paddling Torque & Swimmer Towing Support</td>
    </tr>
    <tr>
      <td>Dry Shell Fabric</td><td>3-Layer Hydrophobic Ripstop Nylon</td><td>20,000mm Hydrostatic Head / 16,000 g/m² MVTR</td><td>Complete Water Ingress Defense & Sweat Vapor Release</td>
    </tr>
    <tr>
      <td>Communication Holster</td><td>Laser-Cut Drain TPU Radio Pocket</td><td>Submersible Radio Retention</td><td>Secure Storage for Marine VHF Radios & Strobe Beacons</td>
    </tr>
    <tr>
      <td>Gaskets & Seals</td><td>Flexible Latex Gaskets with Neoprene Over-Cuffs</td><td>Zero-Flush Seal at Neck & Wrists</td><td>Prevents Internal Flooding During Emergency Roll or Water Entry</td>
    </tr>
  </tbody>
</table>

<h2>Emergency Rescue Integration & Safety Features</h2>

<p>Every element of Vinayaga Garments rescue kayaker jackets is designed for high-stress aquatic intervention:</p>

<ul>
  <li><strong>Quick-Release Tow Tether Harness:</strong> Integrated stainless steel ring and quick-release chest buckle allow rapid attachment of tow lines to assist distressed swimmers or disabled kayaks.</li>
  <li><strong>Marine Whistle & Rescue Knife Attachments:</strong> Padded chest tabs provide instant thumb-release access to pea-less safety whistles and blunt-tip rescue shears.</li>
  <li><strong>Reinforced High-Wear Knees & Elbows:</strong> Abrasion-resistant 500D Cordura overlays protect high-impact zones against dock friction and paddle shaft contact.</li>
</ul>

<p>Explore our complete marine sports kit line in our technical guides on <a href="/guides/custom-open-water-water-polo-referees-technical-jury-outerwear-guide">Open-Water Referees Outerwear</a>, <a href="/guides/kotagiri-coonoor-high-altitude-thermal-baselayer-hub">Kotagiri & Coonoor Thermal Baselayer Hub</a>, and <a href="/guides/electro-chromic-voltage-tunable-color-shifting-activewear-guide">Electro-Chromic Voltage-Tunable Activewear</a>.</p>

<p class="mt-8 pt-8 border-t border-border">
  <strong>Equip your aquatic rescue team with Vinayaga Garments:</strong><br />
  Contact our technical outerwear division today for safety kayaker dry top samples, custom event branding, and bulk marine safety outfitting quotes.
</p>
<div class="not-prose mt-4">
  <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
    Request Kayaker Safety Gear Samples & Quotes
    <span class="material-symbols-outlined">arrow_forward</span>
  </a>
</div>`,
    faqs: [
      {
        q: "What buoyancy rating is integrated into water safety kayaker jackets?",
        a: "Our kayaker jackets incorporate 100 Newton ISO 12402-5 certified segmented PVC foam flotation that provides positive buoyancy without restricting paddling motion."
      },
      {
        q: "How do latex and neoprene gaskets protect kayakers from water ingress?",
        a: "Flexible latex inner gaskets create a watertight seal at the neck and wrists, while neoprene outer cuffs protect the latex from UV degradation and abrasion."
      },
      {
        q: "Can safety jackets accommodate VHF radios and emergency strobe lights?",
        a: "Yes, the chest features a laser-cut TPU radio holster with elastic mic loops, D-rings for strobe beacons, and lanyard anchor points for pea-less rescue whistles."
      },
      {
        q: "What is the minimum order quantity for custom branded rescue jackets?",
        a: "We offer flexible minimum order quantities starting at 15 units for event safety crews, complete with custom high-visibility printing and role identification patches."
      }
    ]
  },
  {
    slug: "kotagiri-coonoor-high-altitude-thermal-baselayer-hub",
    title: "Kotagiri & Coonoor High-Altitude Thermal Baselayer Sourcing Hub: Highland Thermal Rib Knits, Fine Merino Blends & Nilgiris Cold-Climate Apparel",
    description: "Sourcing guide for Kotagiri and Coonoor high-altitude thermal baselayer and knitwear hub. Details Nilgiris highland thermal rib knits, fine merino wool blend activewear, anti-microbial hollow-fiber insulation, and cold-climate sportswear manufacturing.",
    h1: "Kotagiri & Coonoor High-Altitude Thermal Baselayer Sourcing Hub: Regional Manufacturing Guide",
    category: "Location / Regional Sourcing",
    readTime: "15 min read",
    date: "December 07, 2026",
    author: "Selvaraj Rayamuthu, Director of Regional Supply Chain & Highland Sportswear, Vinayaga Garments",
    answerBlock: "The Kotagiri and Coonoor high-altitude thermal baselayer corridor in the Nilgiris district specializes in fine 18.5-micron merino wool blend knits, double-faced thermal rib structures, hollow-fiber synthetic insulation, and anti-microbial cold-climate activewear for mountain training.",
    keywords: [
      "kotagiri coonoor thermal baselayer sourcing",
      "nilgiris highland merino wool activewear vinayaga",
      "cold climate thermal knitwear manufacturer tamil nadu",
      "thermal rib knit baselayer supply chain",
      "mountain athletic baselayer india"
    ],
    imageAlt: "Textile technicians inspecting fine merino wool thermal baselayers and circular thermal rib knits at a Kotagiri production facility in the Nilgiris hills",
    highlights: [
      "18.5-micron superfine Australian merino wool blended with recycled polyester for itch-free next-to-skin thermal comfort",
      "3D circular thermal rib structures trapping insulating air pockets while maintaining rapid moisture wicking",
      "Natural wool lanolin anti-microbial properties delivering multi-day odor resistance for high-altitude endurance sports",
      "Direct highland sourcing from Nilgiris knitting hubs with flexible MOQs (200 units) for sports academies and outdoor brands"
    ],
    content: `<p>Situated at elevations exceeding 1,800 meters in the Nilgiris district of Tamil Nadu, Kotagiri and Coonoor form a world-class highland textile corridor specializing in thermal baselayers, high-density rib knits, and cold-weather athletic undergarments. Renowned for cool ambient temperatures and specialized circular knitting traditions, this regional hub provides ideal conditions for processing fine wools, elastomeric technical yarns, and hollow-core thermal fibers. <strong>Vinayaga Garments</strong> leverages the <strong>Kotagiri & Coonoor High-Altitude Thermal Baselayer Sourcing Hub</strong> to supply premium base layers for endurance athletes, mountain runners, and cold-weather sports teams.</p>

<h2>Highland Thermal Knitwear Capabilities of Kotagiri & Coonoor</h2>

<p>The Kotagiri-Coonoor textile cluster offers distinct technical capabilities that set it apart in cold-climate athletic apparel manufacturing:</p>

<h3>1. Superfine 18.5-Micron Merino Wool Blending</h3>
<p>Local spinning and knitting mills process ultra-soft 18.5-micron merino wool combined with high-tenacity polyester and elastane. This creates a soft, non-scratchy next-to-skin layer that regulates body temperature in sub-zero or rapidly fluctuating mountain climates.</p>

<h3>2. 3D Air-Trapping Thermal Rib Structures</h3>
<p>Utilizing high-gauge circular knitting machinery, Kotagiri facilities produce waffle knits, 2x2 thermal ribs, and brushed fleece-back interlocks. These structural knits trap dead air inside microscopic micro-chambers, providing exceptional warmth-to-weight ratios without restricting movement.</p>

<h3>3. Multi-Day Anti-Odor Performance</h3>
<p>Natural merino fiber structures coupled with silver-ion thread integration inhibit bacterial growth, ensuring thermal baselayers stay fresh during multi-day alpine expeditions, cross-country skiing, or cold-weather football training.</p>

<h2>Kotagiri Baselayer Material & Thermal Specification Matrix</h2>

<table>
  <thead>
    <tr>
      <th>Baselayer Fabric Blend</th><th>Knit Construction & Weight</th><th>Thermal Insulation & Wicking Metric</th><th>Primary Athletic Application</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>50% Merino / 50% Recycled Poly</td><td>Single Jersey / 190GSM</td><td>CLO Value 0.75 / Push-Pull Moisture Transfer</td><td>Mountain Running & Cycling Baselayers</td>
    </tr>
    <tr>
      <td>100% Superfine Merino Wool</td><td>2x2 Rib Knit / 230GSM</td><td>CLO Value 1.10 / Natural Merino Odor Control</td><td>Sub-Zero Alpine Training & Winter Sportswear</td>
    </tr>
    <tr>
      <td>Hollow-Fiber Polyester / Spandex</td><td>Brushed Thermal Interlock / 220GSM</td><td>200% 4-Way Stretch / Hydrophobic Moisture Release</td><td>High-Exertion Cold-Weather Compression Tops</td>
    </tr>
    <tr>
      <td>Merino-Bamboo Thermal Hybrid</td><td>Waffle Grid Structure / 210GSM</td><td>High Vapor Transmission / Hypoallergenic Skin Touch</td><td>Expedition Activewear & Outdoor Coaching Wear</td>
    </tr>
  </tbody>
</table>

<h2>Seam Ergonomics & Sustainable Highland Manufacturing</h2>

<p>Vinayaga Garments integrates specialized garment engineering into every Kotagiri thermal baselayer:</p>

<ul>
  <li><strong>Flatlock Seamless Stitching:</strong> 6-needle 4-thread flat seam construction eliminates chafing under heavy backpacks or outerwear shells.</li>
  <li><strong>Anatomical Body-Mapped Ventilation:</strong> Lighter mesh knit zones under arms and back facilitate targeted cooling during peak athletic output.</li>
  <li><strong>Eco-Friendly Mountain Production:</strong> Sourcing facilities utilize solar-assisted water heating and closed-loop textile washing systems to protect the fragile Nilgiris ecosystem.</li>
</ul>

<p>Discover more high-altitude sourcing hubs in our guides on <a href="/guides/yercaud-shevaroy-hills-cold-climate-athletic-outerwear-hub">Yercaud Cold-Climate Sportswear Hub</a>, <a href="/guides/custom-open-water-water-polo-rescue-water-safety-kayaker-outerwear-guide">Rescue & Safety Kayaker Outerwear</a>, and <a href="/guides/electro-chromic-voltage-tunable-color-shifting-activewear-guide">Electro-Chromic Voltage-Tunable Activewear</a>.</p>

<p class="mt-8 pt-8 border-t border-border">
  <strong>Source merino thermal baselayers from Kotagiri with Vinayaga Garments:</strong><br />
  Contact our Nilgiris highland supply chain division today for thermal knit swatches, merino sample garments, and bulk cold-climate activewear quotes.
</p>
<div class="not-prose mt-4">
  <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
    Request Kotagiri Thermal Swatches & Quotes
    <span class="material-symbols-outlined">arrow_forward</span>
  </a>
</div>`,
    faqs: [
      {
        q: "Why choose Kotagiri and Coonoor for thermal baselayer manufacturing?",
        a: "The Nilgiris region offers high-altitude processing expertise, specialized circular knitting for 18.5-micron superfine merino wool, and ideal micro-climate conditions for technical thermal knits."
      },
      {
        q: "Is merino wool athletic baselayer material scratchy on sensitive skin?",
        a: "No, we exclusively use 18.5-micron superfine merino fibers blended with soft synthetic or bamboo yarns, ensuring a silky, itch-free next-to-skin touch."
      },
      {
        q: "How does body-mapped knit structure improve athletic thermal performance?",
        a: "Body-mapping places dense thermal rib knits over key muscle groups for warmth, while placing breathable open mesh structures under arms to vent excess heat."
      },
      {
        q: "What is the Minimum Order Quantity (MOQ) for custom merino thermal baselayers?",
        a: "Our flexible highland production lines accept minimum orders starting at 200 units per colorway for sports brands, academies, and winter event teams."
      }
    ]
  },
  {
    slug: "electro-chromic-voltage-tunable-color-shifting-activewear-guide",
    title: "Electro-Chromic & Voltage-Tunable Color-Shifting Smart Activewear Fabrics: Low-Voltage Organic Electro-Chromic Polymers, Active Reflectivity & Dynamic Visual Modulation",
    description: "Technical guide to electro-chromic and voltage-tunable color-shifting smart activewear fabrics. Covers low-voltage organic electro-chromic polymer (ECP) coats, flexible printed circuit integration, mobile app controlled active color modulation, and dynamic thermal radiation control.",
    h1: "Electro-Chromic & Voltage-Tunable Color-Shifting Smart Activewear: Technical Engineering Guide",
    category: "Fabric & Customization Technology",
    readTime: "17 min read",
    date: "December 07, 2026",
    author: "Selvaraj Rayamuthu, Chief Smart Apparel & Photonic Materials Engineer, Vinayaga Garments",
    answerBlock: "Electro-chromic voltage-tunable activewear integrates organic electro-chromic polymer (ECP) coats and flexible conductive yarns that change color and thermal reflectivity under micro-volt electrical signals (1.5V-3.0V), enabling smartphone-controlled color modification, active nighttime visibility, and dynamic thermal radiation control.",
    keywords: [
      "electro chromic voltage tunable activewear",
      "color shifting smart fabric vinayaga garments",
      "organic electrochromic polymer sportswear",
      "voltage controlled activewear color shift",
      "smart electronic activewear textile"
    ],
    imageAlt: "Microscopic render of electro-chromic polymer coated athletic yarn shifting color under low voltage electrical pulses in a high-tech smart jersey",
    highlights: [
      "Low-voltage organic electro-chromic polymer (ECP) actuation requiring only 1.5V to 3.0V for rapid color state switching",
      "Flexible conductive silver-coated nylon yarn grid seamlessly woven into 4-way stretch activewear knits",
      "BLE (Bluetooth Low Energy) micro-controller integration allowing smartphone or smartwatch color customization",
      "Dynamic infrared emissivity modulation capable of shifting fabric heat retention by up to 3.5°C on demand"
    ],
    content: `<p>In modern athletic performance and team sportswear, visual customization has traditionally been permanent—set during the initial dyeing, printing, or sublimation process. <strong>Vinayaga Garments</strong> introduces <strong>Electro-Chromic & Voltage-Tunable Color-Shifting Smart Activewear Fabrics</strong>, bringing dynamic electronic optical control to athletic apparel. By applying thin films of organic electro-chromic polymers (ECPs) onto conductive textile fibers, activewear can alter its color spectrum, light absorption, and infrared heat emissivity in real time via low-voltage electrical signals.</p>

<h2>Electrochemical Mechanism of Voltage-Tunable Sportswear</h2>

<p>Electro-chromism is the reversible modification of optical properties caused by electrochemically induced oxidation or reduction reactions under applied electrical voltage:</p>

<h3>1. Conjugated Organic Electro-Chromic Polymers (ECPs)</h3>
<p>Our smart fabrics utilize poly(3,4-ethylenedioxythiophene) (PEDOT) and polyaniline derivatives nano-coated onto ultrafine silver-plated nylon yarns. In the neutral state, the polymer absorbs specific visible light wavelengths (e.g., deep blue or dark grey). Applying a miniature 1.5V to 3.0V direct current (DC) pulse extracts electrons, shifting the polymer into an oxidized, highly transparent or vibrant red state within 800 milliseconds.</p>

<h3>2. Flexible Micro-Power Supply & BLE Control</h3>
<p>Power is supplied by a ultra-lightweight, flexible lithium-polymer battery pack (weighing under 12 grams) encased in a waterproof silicone capsule inside a hidden pocket. A low-energy Bluetooth (BLE) microcontroller interfaces with a mobile app or smartwatch, allowing athletes or team managers to switch jersey colors, initiate flashing high-visibility safety pulses, or activate heat-reflecting modes with a single tap.</p>

<h3>3. Dynamic Thermal Emissivity & Heat Management</h3>
<p>Beyond visual aesthetics, electro-chromic states alter the textile's mid-infrared emissivity. In oxidized mode, the fabric increases radiant heat loss to cool the athlete during intense sprints; in neutral mode, it reflects thermal body radiation back to retain warmth during rest intervals.</p>

<h2>Electro-Chromic Smart Activewear Technical Matrix</h2>

<table>
  <thead>
    <tr>
      <th>Smart Textile Module</th><th>Chemical & Electronic Architecture</th><th>Electrical / Response Parameter</th><th>Athletic Performance Metric</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Electro-Chromic Polymer</td><td>PEDOT:PSS / Polyaniline Composite Shell</td><td>Actuation Voltage: 1.5V - 3.0V DC</td><td>Sub-Second (800ms) Color State Transition</td>
    </tr>
    <tr>
      <td>Conductive Grid Yarn</td><td>Silver-Plated Nylon (40 Ohm/m Resistance)</td><td>4-Way Stretch (220% Elongation)</td><td>Seamless Stretchable Electrical Bus Line</td>
    </tr>
    <tr>
      <td>Control Module</td><td>Nordic BLE 5.2 Microcontroller + LiPo Battery</td><td>Power Draw: 12mW / Battery Life: 18 Hours</td><td>App-Controlled Color & Safety Flashing</td>
    </tr>
    <tr>
      <td>Washability & Durability</td><td>Hydrophobic Polyurethane Encapsulation</td><td>IP68 Waterproof Connector System</td><td>50 Standard Machine Wash Cycle Rating</td>
    </tr>
  </tbody>
</table>

<h2>Athletic Applications & Next-Generation Activewear Features</h2>

<p>Vinayaga Garments electro-chromic technology enables revolutionary capabilities across sportswear disciplines:</p>

<ul>
  <li><strong>Home & Away Instant Uniform Switching:</strong> Single team jerseys electronically switch between primary home colors and white away shades, eliminating the need for duplicate uniform kits.</li>
  <li><strong>Night Runner Active Reflectivity:</strong> Cyclists and nocturnal runners activate rapid high-contrast flashing color patterns that maximize visibility under headlights.</li>
  <li><strong>Real-Time Leader Identification:</strong> In triathlon or cycling peloton races, race leaders' jerseys automatically shift color based on live GPS timing system feeds.</li>
</ul>

<p>Explore our full range of smart activewear innovation guides in our articles on <a href="/guides/optically-active-photochromic-solarchromic-activewear-guide">Optically Active Photochromic Activewear</a>, <a href="/guides/kotagiri-coonoor-high-altitude-thermal-baselayer-hub">Kotagiri & Coonoor Thermal Baselayer Hub</a>, and <a href="/guides/custom-open-water-water-polo-rescue-water-safety-kayaker-outerwear-guide">Rescue & Safety Kayaker Outerwear</a>.</p>

<p class="mt-8 pt-8 border-t border-border">
  <strong>Pioneer electro-chromic smart activewear with Vinayaga Garments:</strong><br />
  Contact our smart textile engineering division today for electro-chromic fabric demonstrations, electronic prototype integration, and custom smart sportswear development.
</p>
<div class="not-prose mt-4">
  <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
    Request Smart Activewear Demos & Quotes
    <span class="material-symbols-outlined">arrow_forward</span>
  </a>
</div>`,
    faqs: [
      {
        q: "How does electro-chromic activewear change color electronically?",
        a: "Low-voltage electrical signals (1.5V-3.0V) sent through conductive yarns alter the oxidation state of organic electro-chromic polymers (PEDOT) on the fiber surface, switching its light absorption in under 1 second."
      },
      {
        q: "Is voltage-tunable smart activewear safe to wear during intense sweating or rain?",
        a: "Yes, the electrical circuits operate at safe ultra-low DC voltages (under 3V) and are completely encapsulated in waterproof polyurethane coatings with IP68 sealed battery connections."
      },
      {
        q: "How long does the battery power the color-shifting activewear?",
        a: "The compact 12-gram micro-battery provides up to 18 hours of continuous operation in static color mode, or 10 hours in active flashing safety mode."
      },
      {
        q: "Can electro-chromic sportswear be washed in standard laundry machines?",
        a: "Yes, once the detachable micro-battery pod is unclipped, the encapsulated electro-chromic fabric withstands up to 50 standard machine wash cycles."
      }
    ]
  }'''

# Insert right before ending '];'
idx = content.rfind('];')
if idx != -1:
    new_content = content[:idx].rstrip() + new_guides_code + "\n];\n"
    with open("src/data/guides-data.ts", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully added 3 new guides for Dec 07, 2026!")
else:
    print("Could not find ending ];")
