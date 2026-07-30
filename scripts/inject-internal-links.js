const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/guides-data.ts');

let content = fs.readFileSync(filePath, 'utf-8');

const replacements = [
  {
    find: `You should also be aware of <a href="/guides/minimum-order-quantities-moqs-explained">Minimum Order Quantities (MOQs)</a> and how they affect your order strategy.</p>`,
    replace: `You should also be aware of <a href="/guides/minimum-order-quantities-moqs-explained">Minimum Order Quantities (MOQs)</a> and how they affect your order strategy. For high-end finishing, check our B2B overview of the <a href="/guides/tirupur-printing-embroidery-hubs-regional-sourcing-guide">Tirupur printing and embroidery hubs</a> to maximize your product value.</p>`
  },
  {
    find: `<a href="/contact">Connect with Selvaraj Rayamuthu today via WhatsApp or Email</a> to request a virtual tour of our automated sewing floor, consult on custom design templates, and receive an expert direct-factory quote.</p>`,
    replace: `To ensure your machinery parameters are calibrated perfectly for rain-fed environments, consult our technical breakdown of <a href="/guides/hot-air-seam-taping-machine-parameters-weatherproof-outerwear">hot-air seam-taping machine parameters for weatherproof outerwear</a>. <a href="/contact">Connect with Selvaraj Rayamuthu today via WhatsApp or Email</a> to request a virtual tour of our automated sewing floor, consult on custom design templates, and receive an expert direct-factory quote.</p>`
  },
  {
    find: `<a href="/contact">Contact Selvaraj Rayamuthu today via WhatsApp or Email</a> to consult on embroidery options for your heavy stretch uniforms, receive digital mockups, and secure a factory-direct quote.</p>`,
    replace: `For advanced tactile grip branding, explore our comparison of <a href="/guides/high-density-silicone-gel-print-vs-traditional-screen-prints">high-density silicone gel prints vs. traditional screen prints</a> to optimize performance. <a href="/contact">Contact Selvaraj Rayamuthu today via WhatsApp or Email</a> to consult on embroidery options for your heavy stretch uniforms, receive digital mockups, and secure a factory-direct quote.</p>`
  }
];

let appliedCount = 0;
replacements.forEach(r => {
  if (content.includes(r.find)) {
    content = content.replace(r.find, r.replace);
    console.log(`Successfully replaced text for: ${r.find.slice(0, 40)}...`);
    appliedCount++;
  } else {
    console.warn(`WARNING: Target text not found: ${r.find.slice(0, 40)}...`);
  }
});

if (appliedCount === replacements.length) {
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log("All internal links successfully injected into guides-data.ts!");
} else {
  console.error("Not all replacements could be applied. Aborting file write.");
  process.exit(1);
}
