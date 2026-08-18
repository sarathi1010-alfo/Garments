const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/guides-data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const guides = JSON.parse(content.substring(content.indexOf('['), content.lastIndexOf('];') + 1));

function injectLink(guideSlug, searchString, replacementHtml) {
  const guide = guides.find(g => g.slug === guideSlug);
  if (!guide) {
    console.error(`Guide not found: ${guideSlug}`);
    return false;
  }
  if (guide.content.includes(replacementHtml)) {
    console.log(`Link already present in ${guideSlug}`);
    return true;
  }
  if (!guide.content.includes(searchString)) {
    console.error(`Search string not found in ${guideSlug}: "${searchString.slice(0, 50)}..."`);
    return false;
  }
  guide.content = guide.content.replace(searchString, replacementHtml);
  console.log(`Successfully injected link into ${guideSlug}`);
  return true;
}

// 1. Inbound to computerized-laser-cutting-edge-sealing-high-stretch-activewear
injectLink(
  'automated-multi-axis-cnc-laser-perforation-breathable-athletic-vents',
  '<h2>Conclusion: Upgrade Athletic Ventilation with Vinayaga Garments</h2>',
  '<p>To compare multi-axis laser perforation with full-contour laser pattern cutting, read our technical guide on <a href="/guides/computerized-laser-cutting-edge-sealing-high-stretch-activewear">Computerized Laser-Cutting & Thermal Edge-Sealing in High-Stretch Activewear Fabrication</a>.</p>\n\n<h2>Conclusion: Upgrade Athletic Ventilation with Vinayaga Garments</h2>'
);

// 2. Inbound to tirupur-erode-organic-cotton-combed-yarn-spinning-mills-sourcing
injectLink(
  'organic-cotton-sourcing-salem-dharmapuri-farming-clusters',
  '<h2>Conclusion: Engineering Custom Apparel with a Conscience</h2>',
  '<p>For a regional B2B sourcing overview of downstream GOTS-certified compact ring-spinning mills, explore our guide on <a href="/guides/tirupur-erode-organic-cotton-combed-yarn-spinning-mills-sourcing">Tirupur & Erode Organic Cotton Combed Yarn Spinning Mills Sourcing</a>.</p>\n\n<h2>Conclusion: Engineering Custom Apparel with a Conscience</h2>'
);

// 3. Inbound to dye-sublimation-vs-direct-to-film-dtf-transfer-printing-activewear
injectLink(
  'dye-sublimation-ink-cross-linking-times-vs-curing-temperatures',
  '<h2>Conclusion: Partnering with a Technical Print Specialist</h2>',
  '<p>To compare gas-phase sublimation with surface film transfer methods on mixed-fiber activewear, read our technical comparison on <a href="/guides/dye-sublimation-vs-direct-to-film-dtf-transfer-printing-activewear">Dye-Sublimation vs. Direct-to-Film (DTF) Transfer Printing in Performance Activewear</a>.</p>\n\n<h2>Conclusion: Partnering with a Technical Print Specialist</h2>'
);

const updatedFileContent = 'export const guides = ' + JSON.stringify(guides, null, 2) + ';\n';
fs.writeFileSync(filePath, updatedFileContent, 'utf-8');
console.log("Successfully updated bidirectional internal links in src/data/guides-data.ts");
