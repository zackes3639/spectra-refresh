// Build-time image pipeline: generate webp + avif siblings for the site's
// raster images so they can be served via <picture> with the original as a
// fallback. Re-run after replacing any source image (e.g. the retouched
// headshot from Task 8): `node scripts/optimize-images.mjs`.
//
// Uses `sharp`, which already ships as an Astro dependency. If you ever run
// this in a clean environment without it: `npm i -D sharp`.
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Source rasters (relative to /public). webp + avif are written alongside each.
const sources = [
	"images/dr-lisa-koche-headshot.jpeg",
	"images/generated/root-cause-still-life.png",
	"images/generated/founder-story-still-life.png",
	"images/generated/about-story-still-life.png",
];

for (const rel of sources) {
	const input = path.join(root, "public", rel);
	const base = input.replace(/\.(png|jpe?g)$/i, "");
	const meta = await sharp(input).metadata();

	await sharp(input).webp({ quality: 80 }).toFile(`${base}.webp`);
	await sharp(input).avif({ quality: 50 }).toFile(`${base}.avif`);

	console.log(`optimized ${rel} (${meta.width}x${meta.height}) -> .webp + .avif`);
}
