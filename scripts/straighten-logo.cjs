// Straighten the logo: rotate the symbol upright + recenter it in the circle,
// then regenerate all logo/favicon sizes with transparent corners.
const sharp = require("sharp");
const fs = require("fs");

const SRC = "/home/z/my-project/upload/pasted_image_1782363094616.png";
const PUBLIC_DIR = "/home/z/my-project/public/images";
const APP_DIR = "/home/z/my-project/src/app";

// Rotation correction (degrees). Negative = counter-clockwise.
// VLM assessed the symbol as tilted ~11° clockwise; rotate -11° to straighten.
const ROTATE_DEG = -11;

async function run() {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const W = info.width,
    H = info.height,
    ch = info.channels;

  // 1. Locate the white circle (bright bbox).
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
  const ccx = Math.round((bMinX + bMaxX) / 2);
  const ccy = Math.round((bMinY + bMaxY) / 2);
  const radius = Math.round((bMaxX - bMinX) / 2) + 18; // include aa + small pad
  const side = radius * 2;
  console.log(`circle center (${ccx},${ccy}) r=${radius} side=${side}`);

  // 2. Square crop centered on the circle.
  let left = Math.max(0, Math.min(ccx - radius, W - side));
  let top = Math.max(0, Math.min(ccy - radius, H - side));
  const cropRGB = await sharp(SRC)
    .extract({ left, top, width: side, height: side })
    .removeAlpha()
    .raw()
    .toBuffer();

  // 3. Circular alpha mask (transparent corners).
  const mask = Buffer.alloc(side * side);
  const r2 = radius * radius;
  const aa = 1.5;
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
  const emblemRaw = Buffer.alloc(side * side * 4);
  for (let p = 0, q = 0; p < side * side; p++, q += 4) {
    emblemRaw[q] = cropRGB[p * 3];
    emblemRaw[q + 1] = cropRGB[p * 3 + 1];
    emblemRaw[q + 2] = cropRGB[p * 3 + 2];
    emblemRaw[q + 3] = mask[p];
  }
  const emblem = sharp(emblemRaw, {
    raw: { width: side, height: side, channels: 4 },
  });

  // 4. Rotate the emblem. The circle is rotationally symmetric so it stays
  //    inscribed; the symbol inside rotates to upright. Background = transparent.
  const rotatedBuf = await emblem
    .clone()
    .rotate(ROTATE_DEG, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const rMeta = await sharp(rotatedBuf).metadata();
  console.log(
    `after rotation: ${rMeta.width}x${rMeta.height} (bounding box expanded)`
  );

  // 5. Crop back to the original side x side, centered (the circle is still
  //    centered in the expanded canvas).
  const rW = rMeta.width,
    rH = rMeta.height;
  const cL = Math.floor((rW - side) / 2);
  const cT = Math.floor((rH - side) / 2);
  const recroppedBuf = await sharp(rotatedBuf)
    .extract({ left: cL, top: cT, width: side, height: side })
    .png()
    .toBuffer();

  // 6. Recenter the symbol: find the dark-pixel centroid and shift so it
  //    lands exactly on the image center.
  const reRaw = await sharp(recroppedBuf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const rd = reRaw.data,
    rch = reRaw.info.channels;
  let sx = 0,
    sy = 0,
    sc = 0;
  for (let y = 0; y < side; y++) {
    for (let x = 0; x < side; x++) {
      const i = (y * side + x) * rch;
      const a = rd[i + 3];
      if (a < 32) continue; // skip transparent (outside circle)
      const v = (rd[i] + rd[i + 1] + rd[i + 2]) / 3;
      if (v < 80) {
        sx += x;
        sy += y;
        sc++;
      }
    }
  }
  const cmx = sx / sc,
    cmy = sy / sc;
  const targetShiftX = Math.round(side / 2 - cmx); // how far to move symbol right
  const targetShiftY = Math.round(side / 2 - cmy); // how far to move symbol down
  console.log(
    `symbol centroid after rotation: (${cmx.toFixed(1)}, ${cmy.toFixed(
      1
    )}) -> shift (${targetShiftX}, ${targetShiftY})`
  );

  // 7. Composite the recropped emblem onto a fresh side x side transparent
  //    canvas at the computed offset to recenter the symbol.
  const shiftedBuf = await sharp({
    create: {
      width: side,
      height: side,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: recroppedBuf, left: targetShiftX, top: targetShiftY }])
    .png()
    .toBuffer();

  // 8. Re-apply the circular alpha mask to clean any edge artifacts from the
  //    shift, keeping the circle boundary crisp.
  const finalRaw = await sharp(shiftedBuf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let p = 0, q = 3; p < side * side; p++, q += 4) {
    finalRaw.data[q] = Math.min(finalRaw.data[q], mask[p]);
  }
  const finalEmblem = sharp(finalRaw.data, {
    raw: { width: side, height: side, channels: 4 },
  });

  // 9. Emit the sizes.
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.mkdirSync(APP_DIR, { recursive: true });
  const outputs = [
    { file: `${PUBLIC_DIR}/logo-mark.png`, size: 512 },
    { file: `${PUBLIC_DIR}/logo-mark-2x.png`, size: 96 },
    { file: `${APP_DIR}/icon.png`, size: 256 },
    { file: `${APP_DIR}/apple-icon.png`, size: 180 },
  ];
  for (const o of outputs) {
    await finalEmblem
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
