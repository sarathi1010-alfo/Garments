const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/guides-data.ts');

let content = fs.readFileSync(filePath, 'utf-8');

const replacements = [
  {
    find: `We prioritize <a href="/guides/vinayaga-flatlock-seam-strength-vs-generic-overlock">Vinayaga Garments Flatlock Seam Strength</a> over cheap overlock stitches, providing completely flat, low-profile seam junctions that eliminate athlete skin chafing and double tensile durability.</p>`,
    replace: `We prioritize <a href="/guides/vinayaga-flatlock-seam-strength-vs-generic-overlock">Vinayaga Garments Flatlock Seam Strength</a> over cheap overlock stitches, providing completely flat, low-profile seam junctions that eliminate athlete skin chafing and double tensile durability. For extreme winter environments, we apply these advanced construction techniques to the unique physics of our <a href="/guides/high-spandex-micro-brushed-thermal-fleece-weft-knits-physics">high-spandex micro-brushed thermal fleece weft-knits</a>, ensuring maximum warmth without restricting range of motion.</p>`
  },
  {
    find: `<li><strong>Dye Sublimation:</strong> Ideal for performance sportswear, this process embeds ink directly into the fabric, ensuring that designs never fade, crack, or peel.</li>`,
    replace: `<li><strong>Dye Sublimation:</strong> Ideal for performance sportswear, this process embeds ink directly into the fabric, ensuring that designs never fade, crack, or peel. To understand how we leverage this as an eco-friendly option, read our full comparison of <a href="/guides/waterless-dyeing-technologies-vs-conventional-disperse-dye-baths">waterless dyeing technologies vs. conventional disperse dye baths</a>.</li>`
  },
  {
    find: `recycled ocean-plastic polyester performance standards</a> to manufacture premium, high-strength eco-sportswear. This direct regional sourcing reduces carbon footprint, ensures absolute traceability, and provides premium long-staple fibers that maintain their luxurious hand-feel and high durability across hundreds of wash cycles.</p>`,
    replace: `recycled ocean-plastic polyester performance standards</a> to manufacture premium, high-strength eco-sportswear. To explore the upstream source of these advanced knit structures, read our regional sourcing guide on <a href="/guides/palladam-dharapuram-circular-knitting-downstream-fabrication-sourcing">circular knitting and downstream fabrication in Palladam and Dharapuram</a>. This direct regional sourcing reduces carbon footprint, ensures absolute traceability, and provides premium long-staple fibers that maintain their luxurious hand-feel and high durability across hundreds of wash cycles.</p>`
  }
];

let appliedCount = 0;
replacements.forEach(r => {
  if (content.includes(r.find)) {
    content = content.split(r.find).join(r.replace);
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
