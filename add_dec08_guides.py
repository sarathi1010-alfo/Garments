import re

with open("src/data/guides-data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Check if new guides already added
if "custom-open-water-water-polo-course-boundary-anchor-barge-crew-outerwear-guide" in content:
    print("Already added!")
    exit(0)

# Add internal links to dec 07 guides to point to dec 08 guides
content = content.replace(
    'and <a href="/guides/electro-chromic-voltage-tunable-color-shifting-activewear-guide">Electro-Chromic Voltage-Tunable Activewear</a>.',
    'and <a href="/guides/custom-open-water-water-polo-course-boundary-anchor-barge-crew-outerwear-guide">Course Boundary & Anchor Barge Crew Outerwear</a>.'
)

content = content.replace(
    'and <a href="/guides/electro-chromic-voltage-tunable-color-shifting-activewear-guide">Electro-Chromic Voltage-Tunable Activewear</a>.</p>',
    'and <a href="/guides/gudalur-wayanad-border-technical-synthetic-canvas-cordage-hub">Gudalur & Wayanad Border Cordage Hub</a>.</p>'
)

content = content.replace(
    'and <a href="/guides/custom-open-water-water-polo-rescue-water-safety-kayaker-outerwear-guide">Rescue & Safety Kayaker Outerwear</a>.',
    'and <a href="/guides/mechano-luminescent-stress-activated-friction-illuminating-activewear-guide">Mechano-Luminescent Friction-Illuminating Activewear</a>.'
)

new_guides_code = ''',
  {
    slug: "custom-open-water-water-polo-course-boundary-anchor-barge-crew-outerwear-guide",
    title: "Custom Open-Water Water Polo Course Boundary & Anchor Barge Crew Outerwear: Stormproof Deck Bibs, Buoyant Rigging Aprons & High-Tenacity Cable Handling Gear",
    description: "Technical guide to custom open-water water polo course boundary and anchor barge crew outerwear. Covers stormproof deck bibs, buoyant rigging aprons, 500D Cordura cable handling reinforcement, and marine safety equipment.",
    h1: "Custom Open-Water Water Polo Course Boundary & Anchor Barge Crew Outerwear: Technical Engineering Guide",
    category: "Sports & Team Kits",
    readTime: "16 min read",
    date: "December 08, 2026",
    author: "Selvaraj Rayamuthu, Chief Marine Operations Apparel Engineer, Vinayaga Garments",
    answerBlock: "Custom open-water water polo course boundary and anchor barge crew outerwear combines 25,000mm hydrostatic head PVC-coated waterproof bibs, 500D Cordura reinforced cable-handling knees and palms, 75N inherent foam flotation aprons, and high-visibility neon yellow weather shells designed for heavy aquatic rigging and line hauling.",
    keywords: [
      "custom open water water polo anchor barge outerwear",
      "course boundary rigging deck bibs vinayaga garments",
      "aquatic anchor crew waterproof apparel",
      "buoyant rigging apron water polo",
      "marine cable handling safety outerwear"
    ],
    imageAlt: "Course boundary and anchor barge crew wearing stormproof heavy deck bibs and buoyant rigging aprons deploying tension cables for an open-water water polo arena",
    highlights: [
      "25,000mm hydrostatic head heavy-duty PVC-coated polyester bib trousers with heat-welded leakproof seams",
      "500D Cordura palm and knee reinforcement panels providing extreme cut and abrasion resistance during steel cable hauling",
      "75 Newton inherent closed-cell flotation foam integrated into low-profile rigging aprons that do not interfere with winch operations",
      "High-visibility fluorescent neon yellow and safety black color blocking with 3M Scotchlite retro-reflective bands for dark ocean work"
    ],
    content: `<p>Deploying and maintaining an international open-water water polo arena requires heavy aquatic infrastructure. Work crews stationed on anchor barges and boundary tension craft must winch heavy concrete anchors, haul tensioned stainless steel cables, and secure floating perimeter lane lines against strong tides and wave swells. <strong>Vinayaga Garments</strong> manufactures specialized <strong>Custom Open-Water Water Polo Course Boundary & Anchor Barge Crew Outerwear</strong> engineered specifically for heavy aquatic rigging and marine cable operations.</p>

<h2>Heavy Deck Rigging Ergonomics & Marine Protection</h2>

<p>Anchor barge crews face extreme physical mechanics and environmental hazards distinct from swimmers or officiating personnel:</p>

<h3>1. High-Tensile Cable & Rope Handling Reinforcement</h3>
<p>Hauling synthetic hawser lines and steel boundary cables causes extreme friction and pinch hazards. Our deck trousers and rigging aprons feature heavy 500D Cordura overlays across knees, thighs, and palms, preventing rope burns and fabric punctures during heavy winch operations.</p>

<h3>2. 25,000mm Hydrostatic Head Heavy Stormproof Bibs</h3>
<p>To resist continuous saltwater spray, heavy rainfall, and deck flooding, our anchor crew bibs are constructed from 650GSM PVC-coated polyester with high-frequency electronic seam welds, offering complete zero-leak impermeability.</p>

<h3>3. Integrated 75N Low-Profile Flotation Aprons</h3>
<p>Traditional bulky PFDs can snag on winch handles and cable clamps. We incorporate 75 Newton closed-cell foam flotation inside slimline chest and waist rigging aprons, ensuring positive buoyancy if a crew member is swept overboard during line tensioning.</p>

<h2>Technical Specification Matrix: Anchor Barge Rigging Apparel</h2>

<table>
  <thead>
    <tr>
      <th>Outerwear Component</th><th>Material Engineering Specs</th><th>Performance Parameter</th><th>Aquatic Rigging Functionality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Storm Deck Bibs</td><td>650GSM Heavy PVC-Coated Polyester</td><td>25,000mm Hydrostatic Head / Salt-Proof</td><td>Impervious Defense Against Deck Swells & Torrential Rain</td>
    </tr>
    <tr>
      <td>Reinforcement Panels</td><td>500D Cordura Overlay with PU Backing</td><td>>100,000 Martindale Abrasion Cycles</td><td>Punctures & Rope-Burn Protection During Cable Pulls</td>
    </tr>
    <tr>
      <td>Flotation Rigging Apron</td><td>Segmented Closed-Cell PVC Foam</td><td>75 Newton Inherent Flotation (ISO 12402)</td><td>Slim-Profile Overboard Safety Without Snag Risk</td>
    </tr>
    <tr>
      <td>Hardware & Zippers</td><td>Non-Corrosive Molded Polymer Zippers & Buckles</td><td>100% Saltwater Corrosion Resistance</td><td>Prevents Jamming from Salt Crust Build-Up</td>
    </tr>
  </tbody>
</table>

<h2>Rigging Safety Features & Crew Tool Integration</h2>

<p>Every garment is engineered for maximum utility and crew safety during high-stress water polo setup operations:</p>

<ul>
  <li><strong>Quick-Drain Tool & Shackle Pockets:</strong> Reinforced thigh pockets with stainless steel grommet drain holes hold shackle keys, rigging pliers, and buoy markers without water buildup.</li>
  <li><strong>Overboard Retrieval Harness Loop:</strong> Heavy-duty high-tensile webbing loop on the upper back allows crane hoist or boat hook retrieval during accidental fall-overboard scenarios.</li>
  <li><strong>High-Visibility Safety Color Blocking:</strong> Neon yellow chest and arm panels combined with 3M Scotchlite reflective tape maximize crew visibility during dawn, dusk, or night setup shifts.</li>
</ul>

<p>Explore our complete marine operations collection in our technical guides on <a href="/guides/custom-open-water-water-polo-rescue-water-safety-kayaker-outerwear-guide">Rescue & Safety Kayaker Outerwear</a>, <a href="/guides/gudalur-wayanad-border-technical-synthetic-canvas-cordage-hub">Gudalur & Wayanad Border Cordage Hub</a>, and <a href="/guides/mechano-luminescent-stress-activated-friction-illuminating-activewear-guide">Mechano-Luminescent Friction-Illuminating Activewear</a>.</p>

<p class="mt-8 pt-8 border-t border-border">
  <strong>Equip your marine anchor and course rigging crew with Vinayaga Garments:</strong><br />
  Contact our marine technical outerwear division today for anchor barge deck bib samples, custom aquatic rigging specs, and bulk marine staff gear quotes.
</p>
<div class="not-prose mt-4">
  <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
    Request Anchor Crew Outerwear Samples & Quotes
    <span class="material-symbols-outlined">arrow_forward</span>
  </a>
</div>`,
    faqs: [
      {
        q: "How do anchor barge bibs protect workers from cable friction and rope burn?",
        a: "Our bibs incorporate 500D Cordura reinforcement panels over high-wear thigh and knee areas, providing superior resistance against steel cable abrasion and synthetic hawser line burn."
      },
      {
        q: "What waterproofing standard is applied to course boundary crew outerwear?",
        a: "We utilize heavy 650GSM PVC-coated polyester fabrics with electronic high-frequency seam welds rated at 25,000mm hydrostatic head for 100% waterproof performance."
      },
      {
        q: "Does the 75N flotation apron restrict movement during heavy winch work?",
        a: "No, the flotation foam is segmented into low-profile anatomical panels that fit flush against the chest and waist, avoiding snag hazards on winch handles."
      },
      {
        q: "What is the minimum order quantity for custom branded anchor crew gear?",
        a: "We support specialized maritime operations starting at 10 sets per order, including custom event branding and reflective crew role patches."
      }
    ]
  },
  {
    slug: "gudalur-wayanad-border-technical-synthetic-canvas-cordage-hub",
    title: "Gudalur & Wayanad Border Technical Synthetic & Canvas Cordage Hub: Heavy Industrial Canvas, UV-Stabilized Synthetic Webbing & Nilgiris Border Textile Corridor",
    description: "Regional sourcing guide for Gudalur and Wayanad border technical synthetic and canvas cordage hub. Details heavy industrial cotton duck canvas, UV-stabilized polypropylene tie-down webbing, high-tenacity border cordage, and mountain transport gear manufacturing.",
    h1: "Gudalur & Wayanad Border Technical Synthetic & Canvas Cordage Hub: Regional Sourcing Guide",
    category: "Location / Regional Sourcing",
    readTime: "15 min read",
    date: "December 08, 2026",
    author: "Selvaraj Rayamuthu, Director of Mountain Supply Chain & Industrial Textiles, Vinayaga Garments",
    answerBlock: "The Gudalur and Wayanad border textile corridor bridging Tamil Nadu and Kerala specializes in heavy 600GSM to 1000GSM waterproofed cotton duck canvas, high-tensile UV-stabilized polypropylene webbing, rot-proof synthetic cordage, and heavy-duty protective covers engineered for mountain logistics and rugged aquatic transport.",
    keywords: [
      "gudalur wayanad border synthetic canvas hub",
      "industrial duck canvas cordage sourcing vinayaga",
      "heavy synthetic tie down webbing manufacturer nilgiris",
      "border mountain cordage textile supply chain",
      "waterproof industrial canvas India"
    ],
    imageAlt: "Textile machinery weaving heavy industrial duck canvas and UV-stabilized synthetic webbing at a Gudalur border production facility",
    highlights: [
      "Heavy 600GSM to 1000GSM cotton duck canvas treated with paraffin-wax and silicone water-repellent coatings",
      "UV-stabilized high-tenacity polypropylene and nylon 66 tie-down webbing with break strengths up to 4,500 kg",
      "Rot-proof and mildew-resistant synthetic cordage engineered for high-humidity mountain forests and coastal transport",
      "Strategic cross-border sourcing bridging Nilgiris (Tamil Nadu) and Wayanad (Kerala) transport corridors"
    ],
    content: `<p>Positioned at the strategic tri-junction of Tamil Nadu, Kerala, and Karnataka, the Gudalur and Wayanad border region represents a vital industrial hub for heavy technical canvas, high-tensile synthetic webbing, and rugged transport cordage. Known for demanding high-altitude monsoon conditions, local textile mills specialize in rot-proof, high-mass woven fabrics engineered to withstand extreme moisture, UV degradation, and mechanical stress. <strong>Vinayaga Garments</strong> leverages the <strong>Gudalur & Wayanad Border Technical Synthetic & Canvas Cordage Hub</strong> to supply heavy-duty technical textiles for outdoor equipment, aquatic barrier covers, and sports infrastructure.</p>

<h2>Industrial Canvas & Synthetic Cordage Capabilities</h2>

<p>The Gudalur-Wayanad border manufacturing ecosystem offers distinct technical advantages for heavy industrial apparel and logistics textiles:</p>

<h3>1. High-Mass Waterproofed Cotton Duck Canvas</h3>
<p>Border weaving units produce heavy-weight cotton duck canvas ranging from 600GSM to 1,000GSM. Treated with non-toxic paraffin wax emulsions and silicone waterproofing agents, this canvas delivers exceptional tear resistance and breathable water-repellency for outdoor shelters and marine gear bags.</p>

<h3>2. UV-Stabilized Polypropylene & Nylon 66 Webbing</h3>
<p>To secure heavy gear during transit over rugged mountain roads or ocean barges, local mills weave high-tenacity webbing added with Hindered Amine Light Stabilizers (HALS). This prevents solar degradation and maintains breaking strengths up to 4,500 kg after prolonged outdoor exposure.</p>

<h3>3. Mold & Mildew Resistant Synthetic Braided Ropes</h3>
<p>Operating in high-humidity rainforest environments, Gudalur cordage manufacturers specialize in rot-resistant braided polyester and polypropylene ropes that resist fungal rot, saltwater corrosion, and chemical breakdown.</p>

<h2>Gudalur Border Technical Cordage & Canvas Matrix</h2>

<table>
  <thead>
    <tr>
      <th>Industrial Textile Grade</th><th>Material Specification</th><th>Tensile / Hydrostatic Rating</th><th>Primary Athletic & Transport Application</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Heavy Industrial Canvas</td><td>100% Cotton Duck / 800GSM Wax Treated</td><td>>2,500 N Tensile Strength / 5,000mm Hydrostatic</td><td>Heavy Equipment Covers & Sports Storage Duftles</td>
    </tr>
    <tr>
      <td>Tie-Down Synthetic Webbing</td><td>High-Tenacity UV Polypropylene / 50mm Width</td><td>45 kN (4,500 kg) Break Strength</td><td>Anchor Barge Line Securing & Gear Transport Belts</td>
    </tr>
    <tr>
      <td>Braided Mooring Cordage</td><td>High-Density Polyethylene / Braided Core</td><td>Zero Water Absorption / Floating Capability</td><td>Open-Water Arena Perimeter Line Securing</td>
    </tr>
    <tr>
      <td>Reinforced Vinyl Canvas</td><td>PVC Laminated Polyester / 650GSM</td><td>100% Water-Tight / Cold-Crack -30°C</td><td>Water Polo Boundary Buoy Cover Liners</td>
    </tr>
  </tbody>
</table>

<h2>Cross-Border Logistics & Quality Control Standards</h2>

<p>Vinayaga Garments enforces rigorous quality protocols across our Gudalur and Wayanad textile partners:</p>

<ul>
  <li><strong>Continuous UV Weatherometer Testing:</strong> Webbing and canvas batches undergo accelerated xenon-arc UV testing to ensure color fastness and tensile retention.</li>
  <li><strong>Cross-Border Transit Optimization:</strong> Leveraging the Gudalur-Wayanad highway corridor, raw materials and finished heavy textiles are dispatched rapidly to our Tirupur and Salem garment factories.</li>
  <li><strong>Eco-Conscious Wax & Dye Processing:</strong> Utilizing PFC-free fluorocarbon substitutes and biodegradable waterproofing waxes to minimize environmental impact in the Nilgiris Biosphere.</li>
</ul>

<p>Discover adjacent regional textile corridors in our guides on <a href="/guides/kotagiri-coonoor-high-altitude-thermal-baselayer-hub">Kotagiri & Coonoor Thermal Baselayer Hub</a>, <a href="/guides/custom-open-water-water-polo-course-boundary-anchor-barge-crew-outerwear-guide">Course Boundary & Anchor Barge Crew Outerwear</a>, and <a href="/guides/mechano-luminescent-stress-activated-friction-illuminating-activewear-guide">Mechano-Luminescent Friction-Illuminating Activewear</a>.</p>

<p class="mt-8 pt-8 border-t border-border">
  <strong>Source heavy industrial canvas and synthetic webbing from Gudalur with Vinayaga Garments:</strong><br />
  Contact our mountain supply chain team today for canvas swatches, webbing strength test reports, and bulk technical textile quotes.
</p>
<div class="not-prose mt-4">
  <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
    Request Gudalur Canvas Swatches & Strength Reports
    <span class="material-symbols-outlined">arrow_forward</span>
  </a>
</div>`,
    faqs: [
      {
        q: "Why source heavy industrial canvas and webbing from the Gudalur-Wayanad border hub?",
        a: "The region specializes in high-mass 600-1000GSM duck canvas and UV-stabilized webbing engineered for extreme high-humidity and high-moisture mountain logistics."
      },
      {
        q: "What waterproofing treatments are applied to Gudalur duck canvas?",
        a: "Canvas fabrics are treated with non-toxic paraffin-wax emulsions, silicone waterproofing agents, or PVC laminations providing hydrostatic resistance up to 5,000mm."
      },
      {
        q: "What is the break strength of the UV-stabilized synthetic tie-down webbing?",
        a: "Our 50mm high-tenacity polypropylene and nylon tie-down webbings achieve breaking strengths up to 45 kN (4,500 kg)."
      },
      {
        q: "What is the Minimum Order Quantity (MOQ) for custom technical canvas rolls?",
        a: "We offer low minimum order quantities starting at 300 meters per specifications for industrial covers, bags, and aquatic event infrastructure."
      }
    ]
  },
  {
    slug: "mechano-luminescent-stress-activated-friction-illuminating-activewear-guide",
    title: "Mechano-Luminescent & Stress-Activated Friction-Illuminating Smart Activewear Fabrics: ZnS:Cu Micro-Crystal Encapsulated Fibers, Motion-Activated Kinetic Illumination & Dynamic Night Sportswear",
    description: "Technical guide to mechano-luminescent and stress-activated friction-illuminating smart activewear fabrics. Covers copper-doped zinc sulfide (ZnS:Cu) micro-crystal encapsulation, kinetic stress-activated photon emission, battery-free friction illumination, and dynamic nighttime athletic safety apparel.",
    h1: "Mechano-Luminescent & Stress-Activated Friction-Illuminating Smart Activewear: Technical Engineering Guide",
    category: "Fabric & Customization Technology",
    readTime: "17 min read",
    date: "December 08, 2026",
    author: "Selvaraj Rayamuthu, Chief Smart Apparel & Photonic Materials Engineer, Vinayaga Garments",
    answerBlock: "Mechano-luminescent stress-activated activewear embeds copper-doped zinc sulfide (ZnS:Cu) micro-crystals in flexible elastomeric matrix yarns that emit brilliant battery-free cyan/green light under kinetic movement, mechanical strain, and friction, delivering self-powered nighttime safety illumination for runners and cyclists.",
    keywords: [
      "mechano luminescent stress activated activewear",
      "friction illuminating smart sportswear vinayaga",
      "battery free kinetic light emitting activewear",
      "ZnS Cu micro crystal smart fabric",
      "motion activated self powered athletic apparel"
    ],
    imageAlt: "Close-up macro render of mechano-luminescent micro-crystal elastomeric yarns glowing with cyan kinetic light under mechanical tension and muscle movement during night running",
    highlights: [
      "Copper-doped zinc sulfide (ZnS:Cu) micro-crystal encapsulation emitting 520nm cyan/green photons directly under mechanical strain",
      "100% battery-free kinetic light generation powered purely by athletic movement, muscle flex, and stride friction",
      "High-stretch silicone elastomer matrix maintaining mechano-luminescent response through over 200,000 stretch cycles",
      "Enhanced nighttime runner and cyclist safety visible up to 250 meters in zero-light conditions without external power packs"
    ],
    content: `<p>In nighttime athletic safety and high-visibility sportswear, traditional reflective materials require external light sources (such as automobile headlights) to function, while battery-powered LED apparel adds bulk, wire stiffness, and charging maintenance. <strong>Vinayaga Garments</strong> introduces <strong>Mechano-Luminescent & Stress-Activated Friction-Illuminating Smart Activewear Fabrics</strong>—a zero-power, battery-free smart textile technology that converts kinetic energy, muscle elongation, and friction directly into visible photon emissions.</p>

<h2>Photonic Physics of Mechano-Luminescent Activewear Yarns</h2>

<p>Mechano-luminescence (ML) is the physical emission of light resulting from mechanical action on a solid-state material:</p>

<h3>1. Copper-Doped Zinc Sulfide (ZnS:Cu) Micro-Crystal Core</h3>
<p>Our smart fibers incorporate micro-encapsulated copper-doped zinc sulfide (ZnS:Cu) crystals embedded within a transparent, highly elastomeric polyurethane sheath. When the athlete stretches the fabric (e.g., knee flex, elbow drive, or thoracic expansion), mechanical stress concentrated across the crystal lattice triggers electron-hole recombination, emitting bright 520nm cyan/green light.</p>

<h3>2. Motion-Proportional Kinetic Luminance</h3>
<p>The intensity of the light emission is directly proportional to the strain rate and friction frequency. High-speed sprints, rapid arm drives, or joint flexion generate instant, vibrant light pulses, providing dynamic visual feedback that mirrors the athlete's biomechanical exertion.</p>

<h3>3. Zero-Weight & Zero-Maintenance Integration</h3>
<p>Because energy is harvested instantaneously from kinetic movement, mechano-luminescent apparel requires zero batteries, microcontrollers, or wiring harnesses. The garment remains as lightweight, flexible, and breathable as standard technical sportswear.</p>

<h2>Mechano-Luminescent Smart Activewear Specification Matrix</h2>

<table>
  <thead>
    <tr>
      <th>Smart Material Layer</th><th>Material Composition Specs</th><th>Photonic & Mechanical Rating</th><th>Athletic Performance Metric</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Luminescent Crystal Core</td><td>ZnS:Cu Micro-Crystals (5-12 Micron)</td><td>Peak Emission Wavelength: 520 nm (Cyan/Green)</td><td>Instantaneous Kinetic Light Pulse Generation</td>
    </tr>
    <tr>
      <td>Elastomeric Sheath Matrix</td><td>Optical-Grade Polyurethane Elastomer</td><td>250% Elongation / >200,000 Flex Cycles</td><td>Durable Stretch Without Photonic Degradation</td>
    </tr>
    <tr>
      <td>Base Knit Construction</td><td>82% Recycled Polyester / 18% Spandex</td><td>210GSM Moisture-Wicking Interlock</td><td>4-Way Stretch Compression & Thermal Balance</td>
    </tr>
    <tr>
      <td>Luminance Visibility</td><td>Kinetic Friction Driven Output</td><td>Visible Distance: Up to 250 Meters in Dark</td><td>360-Degree Self-Powered Night Safety Signal</td>
    </tr>
  </tbody>
</table>

<h2>Athletic Applications & Biomechanical Strain Mapping</h2>

<p>Vinayaga Garments strategically places mechano-luminescent yarns in high-movement body zones to maximize visibility and performance insights:</p>

<ul>
  <li><strong>Night Running & Cycling Safety:</strong> Integrated into calf panels, elbow sleeves, and chest stripes, ensuring multi-directional visibility for urban night runners without charging batteries.</li>
  <li><strong>Real-Time Biomechanical Visual Feedback:</strong> Coaches can visually monitor stride frequency and joint extension symmetry by analyzing light intensity pulses across left and right leg muscles.</li>
  <li><strong>Sub-Aquatic Visibility:</strong> Works underwater without short-circuit risks, making it ideal for open-water water polo, triathlon swim legs, and night diving apparel.</li>
</ul>

<p>Explore our complete smart activewear technical lineup in our guides on <a href="/guides/electro-chromic-voltage-tunable-color-shifting-activewear-guide">Electro-Chromic Voltage-Tunable Activewear</a>, <a href="/guides/custom-open-water-water-polo-course-boundary-anchor-barge-crew-outerwear-guide">Course Boundary & Anchor Barge Crew Outerwear</a>, and <a href="/guides/gudalur-wayanad-border-technical-synthetic-canvas-cordage-hub">Gudalur & Wayanad Border Cordage Hub</a>.</p>

<p class="mt-8 pt-8 border-t border-border">
  <strong>Pioneer mechano-luminescent smart sportswear with Vinayaga Garments:</strong><br />
  Contact our smart textile engineering division today for kinetic light fabric swatches, biomechanical activewear samples, and custom smart garment quotes.
</p>
<div class="not-prose mt-4">
  <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
    Request Kinetic Smart Fabric Swatches & Quotes
    <span class="material-symbols-outlined">arrow_forward</span>
  </a>
</div>`,
    faqs: [
      {
        q: "How does mechano-luminescent activewear emit light without batteries or electrical wires?",
        a: "Embedded copper-doped zinc sulfide (ZnS:Cu) micro-crystals emit photons when subjected to mechanical strain, stretch, and friction generated directly by body movement."
      },
      {
        q: "Does the mechano-luminescent glowing effect wear off over time?",
        a: "Our optical polyurethane elastomeric encapsulation protects the micro-crystals through over 200,000 stretch cycles, maintaining vibrant light emission throughout the garment life."
      },
      {
        q: "Is friction-illuminating sportswear safe to wash in standard laundry machines?",
        a: "Yes, because there are no battery packs or electrical wires, the garment can be machine washed in cold water on gentle cycles using standard mild detergent."
      },
      {
        q: "From what distance is the kinetic light visible during night running?",
        a: "Under dark conditions, kinetic movement generates bright 520nm cyan/green light pulses visible up to 250 meters away."
      }
    ]
  }'''

# Insert right before ending '];'
idx = content.rfind('];')
if idx != -1:
    new_content = content[:idx].rstrip() + new_guides_code + "\n];\n"
    with open("src/data/guides-data.ts", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully added 3 new guides for Dec 08, 2026!")
else:
    print("Could not find ending ];")
