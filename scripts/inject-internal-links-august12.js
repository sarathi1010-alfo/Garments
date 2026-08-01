const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/guides-data.ts');

let content = fs.readFileSync(filePath, 'utf-8');

const replacements = [
  {
    find: `These fabrics feature an open 'micro-mesh' structure that allows for maximum airflow. The goal is a garment that feels nearly invisible to the runner, even when they are at peak exertion. Learn how this airflow works in our <a href="/guides/breathability-in-sportswear-complete-guide">Complete Guide to Breathability</a>.</p>`,
    replace: `These fabrics feature an open 'micro-mesh' structure that allows for maximum airflow. The goal is a garment that feels nearly invisible to the runner, even when they are at peak exertion. Learn how this airflow works in our <a href="/guides/breathability-in-sportswear-complete-guide">Complete Guide to Breathability</a>. For hot, humid conditions, we apply these ventilation principles to <a href="/guides/double-knit-mesh-venting-physics-tropical-activewear">double-knit mesh venting structures for extreme tropical athletic climates</a>, mitigating heat stress and keeping athletes cool.</p>`
  },
  {
    find: `high-impact sports uniforms, rugby kits, or compression leggings, which we detail in our specialized guide on <a href="/guides/high-efficiency-compression-fabric-physics-stitch-tension-limits">Compression Fabric Physics & Tension Limits</a>. To resolve this, Vinayaga Garments utilizes advanced ring-spinning and vortex-spinning technologies to blend semi-synthetic fibers with high-strength synthetic polymers, creating a dual-phase yarn matrix.`,
    replace: `high-impact sports uniforms, rugby kits, or compression leggings, which we detail in our specialized guide on <a href="/guides/high-efficiency-compression-fabric-physics-stitch-tension-limits">Compression Fabric Physics & Tension Limits</a>. To resolve this, Vinayaga Garments utilizes advanced ring-spinning and vortex-spinning technologies to blend semi-synthetic fibers with high-strength synthetic polymers, creating a dual-phase yarn matrix. To understand how nylon microfibers are structurally engineered for these high-stretch applications, read our technical comparison of <a href="/guides/mechanical-air-jet-texturizing-vs-high-twist-friction-texturizing">mechanical air-jet texturizing vs. high-twist friction-texturizing</a>.`
  },
  {
    find: `We process our organic cotton in partner wet-processing mills and <a href="/guides/organic-cotton-spinning-mercerizing-rajapalayam-madurai-mills">combed compact spinning and mercerizing facilities in Rajapalayam and Madurai</a> that utilize state-of-the-art waste heat recovery and Zero Liquid Discharge (ZLD) effluent treatment systems.`,
    replace: `We process our organic cotton in partner wet-processing mills, <a href="/guides/organic-cotton-spinning-mercerizing-rajapalayam-madurai-mills">combed compact spinning and mercerizing facilities in Rajapalayam and Madurai</a>, and the advanced ring spinning frame arrays of our <a href="/guides/dindigul-madurai-spinning-corridor-carded-combed-yarn-sourcing">Dindigul & Madurai Spinning Corridor</a> that utilize state-of-the-art waste heat recovery and Zero Liquid Discharge (ZLD) effluent treatment systems.`
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
