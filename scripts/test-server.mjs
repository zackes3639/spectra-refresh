// Dependency-free static test server for the production build in /dist.
// Verifies the real shipped output (OG tags, webp/avif delivery, directory
// routes) the way it will deploy — no Vite/HMR involved.
//
// Usage:
//   npm run build          # produce /dist first
//   npm run test:server    # serve it (default http://localhost:4321)
//   PORT=8080 npm run test:server
import { createServer } from "node:http";
import { stat, readFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const port = Number(process.env.PORT) || 4321;
const host = process.env.HOST || "localhost";

const MIME = {
	".html": "text/html; charset=utf-8",
	".css": "text/css; charset=utf-8",
	".js": "text/javascript; charset=utf-8",
	".mjs": "text/javascript; charset=utf-8",
	".json": "application/json; charset=utf-8",
	".svg": "image/svg+xml",
	".ico": "image/x-icon",
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".webp": "image/webp",
	".avif": "image/avif",
	".gif": "image/gif",
	".woff": "font/woff",
	".woff2": "font/woff2",
	".ttf": "font/ttf",
	".txt": "text/plain; charset=utf-8",
	".xml": "application/xml",
	".map": "application/json; charset=utf-8",
};

// Resolve a request URL to a file inside /dist, honoring Astro's directory-style
// routes (/about -> /about/index.html). Returns null on traversal attempts.
async function resolveFile(urlPath) {
	const decoded = decodeURIComponent(urlPath.split("?")[0]);
	const safe = path.normalize(path.join(distDir, decoded));
	if (!safe.startsWith(distDir)) return null; // path traversal guard

	const candidates = [];
	if (path.extname(safe)) {
		candidates.push(safe);
	} else {
		candidates.push(path.join(safe, "index.html"));
		candidates.push(`${safe}.html`);
	}
	for (const candidate of candidates) {
		try {
			const info = await stat(candidate);
			if (info.isFile()) return candidate;
		} catch {}
	}
	return null;
}

const server = createServer(async (req, res) => {
	const filePath = await resolveFile(req.url || "/");

	if (!filePath) {
		// Serve a generated 404 page if the build produced one, else a plain message.
		let body = `404 Not Found: ${req.url}`;
		let type = "text/plain; charset=utf-8";
		try {
			body = await readFile(path.join(distDir, "404.html"));
			type = MIME[".html"];
		} catch {}
		res.writeHead(404, { "content-type": type });
		res.end(body);
		console.log(`404  ${req.method} ${req.url}`);
		return;
	}

	const type = MIME[path.extname(filePath)] || "application/octet-stream";
	res.writeHead(200, { "content-type": type, "cache-control": "no-cache" });
	createReadStream(filePath).pipe(res);
	console.log(`200  ${req.method} ${req.url} -> ${path.relative(root, filePath)}`);
});

try {
	await stat(path.join(distDir, "index.html"));
} catch {
	console.error("✗ No build found at /dist. Run `npm run build` first.");
	process.exit(1);
}

server.listen(port, host, () => {
	console.log(`\n  Test server (serving /dist)\n  → http://${host}:${port}/\n  Ctrl+C to stop\n`);
});
