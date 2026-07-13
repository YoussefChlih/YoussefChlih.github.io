// scripts/optimize-images.mjs
// Compresses the photographic PNGs in /public to AVIF + WebP under ~150KB each,
// and emits width/height metadata consumed by next/image (since `output: 'export'`
// keeps the server optimizer off). Re-run after changing the source images.
//
//   node scripts/optimize-images.mjs
//
import sharp from "sharp";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");

// Photo sources to optimize. `src` is the original PNG (kept for fallback);
// we emit `<name>.avif` and `<name>.webp` at several widths.
const sources = [
  { src: "portrait.png", widths: [480, 768, 960], maxWidth: 960 },
  { src: "headshot.png", widths: [400, 640, 680], maxWidth: 680 },
];

const QUALITY_AVIF = 50; // AVIF is extremely efficient; 45-55 is visually lossless on photos.
const QUALITY_WEBP = 72;

const KB = 1024;

async function optimize() {
  const report = [];
  for (const { src, widths, maxWidth } of sources) {
    const inPath = join(PUBLIC, src);
    if (!existsSync(inPath)) {
      console.warn(`! source not found: ${inPath}`);
      continue;
    }
    const buf = await readFile(inPath);
    const meta = await sharp(buf).metadata();
    const base = src.replace(/\.png$/i, "");

    // Fit within maxWidth but never upscale.
    const targetWidth = Math.min(meta.width, maxWidth);

    for (const w of widths) {
      const useWidth = Math.min(w, meta.width);
      const resize = sharp(buf).resize({ width: useWidth, withoutEnlargement: true });

      const avif = await resize
        .clone()
        .avif({ quality: QUALITY_AVIF, effort: 4 })
        .toBuffer();
      const webp = await resize
        .clone()
        .webp({ quality: QUALITY_WEBP, effort: 4 })
        .toBuffer();

      await mkdir(join(PUBLIC, "opt", base), { recursive: true });
      await writeFile(join(PUBLIC, "opt", base, `${useWidth}.avif`), avif);
      await writeFile(join(PUBLIC, "opt", base, `${useWidth}.webp`), webp);

      report.push({
        file: `${base}/${useWidth}.avif`,
        kb: (avif.length / KB).toFixed(1),
        fmt: "avif",
      });
      report.push({
        file: `${base}/${useWidth}.webp`,
        kb: (webp.length / KB).toFixed(1),
        fmt: "webp",
      });
    }

    // Also emit a single "full" optimized WebP/AVIF used as the default/fallback.
    const fullAvif = await sharp(buf)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .avif({ quality: QUALITY_AVIF, effort: 4 })
      .toBuffer();
    const fullWebp = await sharp(buf)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: QUALITY_WEBP, effort: 4 })
      .toBuffer();
    await writeFile(join(PUBLIC, `${base}.avif`), fullAvif);
    await writeFile(join(PUBLIC, `${base}.webp`), fullWebp);

    report.push({
      file: `${base}.avif (full)`,
      kb: (fullAvif.length / KB).toFixed(1),
      fmt: "avif",
    });
    report.push({
      file: `${base}.webp (full)`,
      kb: (fullWebp.length / KB).toFixed(1),
      fmt: "webp",
    });
  }

  console.log("\n== Optimized image report ==");
  for (const r of report) {
    const flag = Number(r.kb) > 150 ? "  ⚠ OVER 150KB" : "";
    console.log(`  ${r.kb.padStart(7)} KB  ${r.fmt.padEnd(4)}  ${r.file}${flag}`);
  }
}

optimize().catch((e) => {
  console.error(e);
  process.exit(1);
});
