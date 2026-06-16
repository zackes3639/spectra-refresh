// CI/lint guard: every raw <img> in src/ must declare alt, width, and height
// (alt prevents missing alt text; width/height prevent layout shift). Astro's
// <Image/> and <Picture/> components enforce dimensions on their own, so only
// hand-authored <img> tags are checked here.
//
// Run: `node scripts/check-images.mjs` (exits non-zero on any violation).
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "src");

const files = readdirSync(srcDir, { recursive: true })
	.map((f) => path.join(srcDir, f.toString()))
	.filter((f) => f.endsWith(".astro"));

const required = ["alt", "width", "height"];
const violations = [];

for (const file of files) {
	// Drop <style> blocks so CSS comments mentioning "<img>" aren't matched.
	const source = readFileSync(file, "utf8").replace(/<style[\s\S]*?<\/style>/g, "");
	// Require whitespace or a self-closing slash after "img" to match real tags.
	const imgTags = source.match(/<img[\s/][^>]*>/g) ?? [];
	for (const tag of imgTags) {
		const missing = required.filter((attr) => !new RegExp(`(?:\\s|^)${attr}[=\\s/>]`).test(tag));
		if (missing.length > 0) {
			violations.push(`${path.relative(root, file)}: <img> missing ${missing.join(", ")}`);
		}
	}
}

if (violations.length > 0) {
	console.error("✗ Image checks failed:\n" + violations.map((v) => `  - ${v}`).join("\n"));
	process.exit(1);
}

console.log(`✓ All <img> tags in src/ declare alt + width + height (${files.length} files scanned).`);
