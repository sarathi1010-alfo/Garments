// Process the new uploaded "V" monogram into logo + favicon sizes.
// The source is a black stylized "V" on a light gray/white background.
// We luminance-key it: dark pixels -> opaque, light pixels -> transparent,
// preserving anti-aliased edges. Emits a black-V variant (for light bg: nav,
// favicon) and a white-V variant (for dark bg: footer).
const sharp = require("sharp");
const fs = require("fs");

const SRC = "/home/z/my-project/upload/pasted_image_1782365150616.png";
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

  // 1. Find the bbox of dark pixels (the V) to trim the white margins.
  let minX = W,
    minY = H,
    maxX = 0,
    maxY = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * ch;
      const v = (data[i] + data[i + 1] + data[i + 2]) / 3;
      if (v < 140) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log(`V bbox: x[${minX}-${maxX}] y[${minY}-${maxY}]`);

  // 2. Square crop centered on the V bbox center. Clamp to image bounds
  //    (the V nearly fills the frame, so the square is min(W,H)).
  const side = Math.min(W, H);
  const ccx = (minX + maxX) / 2;
  const ccy = (minY + maxY) / 2;
  let left = Math.max(0, Math.min(Math.round(ccx - side / 2), W - side));
  let top = Math.max(0, Math.min(Math.round(ccy - side / 2), H - side));
  console.log(`square crop ${side}x${side} at (${left},${top})`);

  const cropRaw = await sharp(SRC)
    .extract({ left, top, width: side, height: side })
    .removeAlpha()
    .raw()
    .toBuffer();

  // 3. Threshold luminance key with a smooth anti-aliased transition.
  //    Source bg is light blue-gray (~v=210), the V is near-black (~v=25).
  //    v < 100  -> fully opaque (the V)
  //    v > 180  -> fully transparent (the background)
  //    100..180 -> smooth ramp (anti-aliased edges)
  //    RGB = pure black for the dark variant, pure white for the light variant.
  const blackRGBA = Buffer.alloc(side * side * 4);
  const whiteRGBA = Buffer.alloc(side * side * 4);
  for (let p = 0, q = 0; p < side * side; p++, q += 4) {
    const r = cropRaw[p * 3],
      g = cropRaw[p * 3 + 1],
      b = cropRaw[p * 3 + 2];
    const v = (r + g + b) / 3;
    let a;
    if (v < 100) a = 255;
    else if (v > 180) a = 0;
    else a = Math.round((255 * (180 - v)) / 80); // smooth ramp 100..180
    blackRGBA[q] = 0;
    blackRGBA[q + 1] = 0;
    blackRGBA[q + 2] = 0;
    blackRGBA[q + 3] = a;
    whiteRGBA[q] = 255;
    whiteRGBA[q + 1] = 255;
    whiteRGBA[q + 2] = 255;
    whiteRGBA[q + 3] = a;
  }
  const blackV = sharp(blackRGBA, {
    raw: { width: side, height: side, channels: 4 },
  });
  const whiteV = sharp(whiteRGBA, {
    raw: { width: side, height: side, channels: 4 },
  });

  // 4. Emit sizes.
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.mkdirSync(APP_DIR, { recursive: true });
  const outputs = [
    { file: `${PUBLIC_DIR}/logo-mark.png`, size: 512, src: blackV }, // nav (light bg)
    { file: `${PUBLIC_DIR}/logo-mark-2x.png`, size: 96, src: blackV },
    {
      file: `${PUBLIC_DIR}/logo-mark-light.png`,
      size: 512,
      src: whiteV,
    }, // footer (dark bg)
    { file: `${APP_DIR}/icon.png`, size: 256, src: blackV }, // favicon
    { file: `${APP_DIR}/apple-icon.png`, size: 180, src: blackV },
  ];
  for (const o of outputs) {
    await o.src
      .clone()
      .resize(o.size, o.size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
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
