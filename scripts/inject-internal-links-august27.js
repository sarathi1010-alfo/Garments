const fs = require('fs');
const path = require('path');

const guidesDataPath = path.join(__dirname, '..', 'src', 'data', 'guides-data.ts');
let content = fs.readFileSync(guidesDataPath, 'utf8');

const link1 = `<p>To optimize shoulder seam durability and ease distribution near laser-perforated armhole zones, explore our guide on <a href=\\"/guides/automated-multi-needle-sleeve-setting-tension-compensation-activewear\\">Automated Multi-Needle Sleeve-Setting &amp; Tension Compensation in Activewear</a>.</p>`;
const link2 = `<p>To trace upstream raw material sourcing back to extra-long staple ginning hubs, read our comprehensive guide on <a href=\\"/guides/theni-virudhunagar-direct-cotton-ginning-hubs-els-fiber-sourcing\\">Theni &amp; Virudhunagar Direct Cotton Ginning Hubs</a>.</p>`;
const link3 = `<p>For weatherproofing comparison between surface chemical treatments and hydrophobic yarns in tropical activewear, see <a href=\\"/guides/dwr-chemical-spray-finishes-vs-hydrophobic-filament-yarns-tropical-rainwear\\">DWR Chemical Spray Finishes vs. Hydrophobic Filament Yarns</a>.</p>`;

let modifiedCount = 0;

const target1 = '<h2>Conclusion: Upgrade Athletic Ventilation with Vinayaga Garments</h2>';
const target2 = '<h2>Conclusion: Partner with Vinayaga Garments for Fine-Count Activewear</h2>';
const target3 = '<h2>Conclusion: Choose the Ideal Anti-Slip System with Vinayaga Garments</h2>';

if (content.includes(target1) && !content.includes('/guides/automated-multi-needle-sleeve-setting-tension-compensation-activewear')) {
  content = content.replace(target1, `${link1}\\n\\n    ${target1}`);
  modifiedCount++;
}

if (content.includes(target2) && !content.includes('/guides/theni-virudhunagar-direct-cotton-ginning-hubs-els-fiber-sourcing')) {
  content = content.replace(target2, `${link2}\\n\\n    ${target2}`);
  modifiedCount++;
}

if (content.includes(target3) && !content.includes('/guides/dwr-chemical-spray-finishes-vs-hydrophobic-filament-yarns-tropical-rainwear')) {
  content = content.replace(target3, `${link3}\\n\\n    ${target3}`);
  modifiedCount++;
}

fs.writeFileSync(guidesDataPath, content, 'utf8');
console.log(`Successfully injected inbound links into ${modifiedCount} guides.`);
