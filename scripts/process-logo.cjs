// Crop to the circular emblem and make corners transparent, so the logo works
// cleanly as both a website logo (on off-white nav) and a favicon (in a tab).
const sharp = require("sharp");
const fs = require("fs");

const SRC = "/home/z/my-project/upload/pasted_image_1782363094616.png";
const PUBLIC_DIR = "/home/z/my-project/public/images";
const APP_DIR = "/home/z/my-project/src/app";

async function run() {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const W = info.width,
    H = info.height,
    ch = info.channels;

  // 1. Locate the white circle via bright-pixel bbox (v > 225).
  let bMinX = W,
    bMinY = H,
    bMaxX = 0,
    bMaxY = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * ch;
      const v = (data[i] + data[i + 1] + data[i + 2]) / 3;
      if (v > 225) {
        if (x < bMinX) bMinX = x;
        if (x > bMaxX) bMaxX = x;
        if (y < bMinY) bMinY = y;
        if (y > bMaxY) bMaxY = y;
      }
    }
  }
  const cx = Math.round((bMinX + bMaxX) / 2);
  const cy = Math.round((bMinY + bMaxY) / 2);
  const radius = Math.round((bMaxX - bMinX) / 2) + 18; // include circle edge + aa
  console.log(`circle center (${cx},${cy}) r=${radius}`);

  // 2. Square crop centered on the circle.
  const side = radius * 2;
  let left = cx - radius;
  let top = cy - radius;
  left = Math.max(0, Math.min(left, W - side));
  top = Math.max(0, Math.min(top, H - side));
  console.log(`crop ${side}x${side} at (${left},${top})`);

  const cropRGB = await sharp(SRC)
    .extract({ left, top, width: side, height: side })
    .removeAlpha()
    .raw()
    .toBuffer();

  // 3. Build a circular alpha mask (white circle on transparent, 2px aa band).
  const mask = Buffer.alloc(side * side);
  const r2 = radius * radius;
  const aa = 1.5; // anti-alias half-width
  for (let y = 0; y < side; y++) {
    for (let x = 0; x < side; x++) {
      const dx = x - radius;
      const dy = y - radius;
      const d = Math.sqrt(dx * dx + dy * dy);
      let a = 255;
      if (d > radius + aa) a = 0;
      else if (d > radius - aa) {
        a = Math.round(255 * (1 - (d - (radius - aa)) / (2 * aa)));
      }
      mask[y * side + x] = a;
    }
  }

  // 4. Compose RGBA (circle interior keeps its RGB; outside = transparent).
  const rgba = Buffer.alloc(side * side * 4);
  for (let p = 0, q = 0; p < side * side; p++, q += 4) {
    rgba[q] = cropRGB[p * 3];
    rgba[q + 1] = cropRGB[p * 3 + 1];
    rgba[q + 2] = cropRGB[p * 3 + 2];
    rgba[q + 3] = mask[p];
  }

  const emblem = sharp(rgba, {
    raw: { width: side, height: side, channels: 4 },
  });

  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.mkdirSync(APP_DIR, { recursive: true });

  const outputs = [
    { file: `${PUBLIC_DIR}/logo-mark.png`, size: 512 },
    { file: `${PUBLIC_DIR}/logo-mark-2x.png`, size: 96 },
    { file: `${APP_DIR}/icon.png`, size: 256 },
    { file: `${APP_DIR}/apple-icon.png`, size: 180 },
  ];

  for (const o of outputs) {
    await emblem
      .clone()
      .resize(o.size, o.size, { fit: "cover" })
      .png()
      .toFile(o.file);
    const stat = fs.statSync(o.file);
    console.log(`wrote ${o.file} (${o.size}x${o.size}, ${stat.size} bytes)`);
  }
  console.log("done");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
