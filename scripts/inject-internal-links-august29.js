const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/guides-data.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

function addInboundLink(targetSlug, findStr, replaceStr) {
  let slugIdx = fileContent.indexOf(`"slug": "${targetSlug}"`);
  if (slugIdx === -1) {
    console.error(`Target slug ${targetSlug} not found`);
    return;
  }
  let nextSlugIdx = fileContent.indexOf(`"slug":`, slugIdx + 20);
  if (nextSlugIdx === -1) nextSlugIdx = fileContent.length;
  let guideBlock = fileContent.slice(slugIdx, nextSlugIdx);
  if (!guideBlock.includes(findStr)) {
    console.error(`findStr not found in ${targetSlug}`);
    return;
  }
  let newGuideBlock = guideBlock.replace(findStr, () => replaceStr);
  fileContent = fileContent.slice(0, slugIdx) + newGuideBlock + fileContent.slice(nextSlugIdx);
  console.log(`Successfully updated ${targetSlug}`);
}

addInboundLink(
  "automated-ultrasonic-elastic-band-insertion-edge-trim-workstations",
  "Automated Tension Balancing in Multi-Needle Coverstitching</a>",
  "Automated Tension Balancing in Multi-Needle Coverstitching</a> and our technical guide on <a href=\\\"\/guides\/computerized-automatic-bobbin-winding-thread-tension-balancing\\\">Computerized Automatic Bobbin Winding &amp; Thread Tension Balancing<\/a>"
);

addInboundLink(
  "sankari-erode-high-tenacity-viscose-filament-yarns-sourcing",
  "Erode & Karur Viscose Rayon Spinning Corridors</a>.</li>",
  "Erode & Karur Viscose Rayon Spinning Corridors</a> and our B2B guide for <a href=\\\"\/guides\/dharmapuri-hosur-industrial-corridors-nylon-66-filament-yarns-sourcing\\\">Dharmapuri &amp; Hosur High-Tenacity Nylon 6,6 Filament Yarns<\/a>.</li>"
);

addInboundLink(
  "seamless-flat-bed-warp-knitting-vs-flatlock-seaming-compression-tights",
  "Multi-Filament Flatlock Sewing Thread Selection</a>",
  "Multi-Filament Flatlock Sewing Thread Selection</a> and our performance comparison on <a href=\\\"\/guides\/eco-friendly-water-based-screen-printing-vs-high-density-silicone-heat-transfer\\\">Water-Based Screen Printing vs. High-Density Silicone Heat Transfer<\/a>"
);

fs.writeFileSync(filePath, fileContent, 'utf-8');
console.log("Inbound internal links injection complete.");
