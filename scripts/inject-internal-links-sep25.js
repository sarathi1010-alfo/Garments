const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/data/guides-data.ts');
let content = fs.readFileSync(targetFile, 'utf8');

// Inject inbound link to September 25 guides in September 24 guides

// 1. In 'computerized-multi-axis-automated-high-pressure-thermal-transfer-sublimation-edge-calibration-teamwear-polos'
const sep24SublimationTarget = 'For adjacent automated component assembly and finishing processes, review our technical guides on';
const sep24SublimationReplacement = 'For automated buttonhole seating on corporate athletic apparel, review <a href="/guides/computerized-multi-axis-automated-buttonhole-seating-dynamic-tension-stabilization-corporate-athletic-apparel">Automated High-Speed Buttonhole Seating</a>. For adjacent component assembly processes, consult';

if (content.includes(sep24SublimationTarget)) {
  content = content.replace(sep24SublimationTarget, sep24SublimationReplacement);
  console.log("Injected link into September 24 Sublimation guide.");
}

// 2. In 'dindigul-madurai-technical-fiber-dyeing-zld-water-reclamation-corridors'
const sep24DyeingTarget = 'For adjacent regional processing and eco-dyeing corridors across Tamil Nadu, explore';
const sep24DyeingReplacement = 'For adjacent regional processing and eco-dyeing corridors across Tamil Nadu, explore <a href="/guides/sankarankovil-puliyangudi-high-tenacity-weaving-eco-dyeing-corridors">Sankarankovil & Puliyangudi Technical Weaving Corridors</a>,';

if (content.includes(sep24DyeingTarget)) {
  content = content.replace(sep24DyeingTarget, sep24DyeingReplacement);
  console.log("Injected link into September 24 Dindigul-Madurai guide.");
}

// 3. In 'recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-66-high-temperature-activewear'
const sep24PolymerTarget = 'For additional material science comparisons of bio-based polyamides, consult our technical guides on';
const sep24PolymerReplacement = 'For additional material science comparisons of bio-based polyamides, consult our technical guides on <a href="/guides/recycled-nylon-66-4way-stretch-vs-bio-based-polyamide-1010-high-stress-endurance-activewear">Recycled Nylon 6,6 vs Bio-Based Polyamide 10,10</a>,';

if (content.includes(sep24PolymerTarget)) {
  content = content.replace(sep24PolymerTarget, sep24PolymerReplacement);
  console.log("Injected link into September 24 Bio-PA 6,6 guide.");
}

fs.writeFileSync(targetFile, content, 'utf8');
console.log("Bidirectional internal links injected successfully!");
