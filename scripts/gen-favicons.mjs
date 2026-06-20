import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "src/assets/logo.png");
const PUB = path.join(root, "public");

// Raster PNG outputs (size -> filename)
const pngs = [
	[96, "favicon-96x96.png"],
	[180, "apple-touch-icon.png"],
	[192, "web-app-manifest-192x192.png"],
	[512, "web-app-manifest-512x512.png"],
];

async function resizePng(size) {
	return sharp(SRC)
		.resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
		.png()
		.toBuffer();
}

for (const [size, name] of pngs) {
	const buf = await resizePng(size);
	await writeFile(path.join(PUB, name), buf);
	console.log(`wrote ${name} (${size}x${size}, ${buf.length} bytes)`);
}

// SVG wrappers embedding a 256px PNG so the existing *.svg <link>s keep working
const embedded = (await resizePng(256)).toString("base64");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><image href="data:image/png;base64,${embedded}" width="256" height="256"/></svg>\n`;
for (const name of ["icon.svg", "favicon.svg"]) {
	await writeFile(path.join(PUB, name), svg);
	console.log(`wrote ${name} (${svg.length} bytes)`);
}

// favicon.ico — PNG-encoded ICO container with 16/32/48 entries
const icoSizes = [16, 32, 48];
const icoPngs = await Promise.all(icoSizes.map(resizePng));
const count = icoSizes.length;
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(count, 4);

const entries = [];
let offset = 6 + count * 16;
for (let i = 0; i < count; i++) {
	const size = icoSizes[i];
	const data = icoPngs[i];
	const entry = Buffer.alloc(16);
	entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
	entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
	entry.writeUInt8(0, 2); // palette
	entry.writeUInt8(0, 3); // reserved
	entry.writeUInt16LE(1, 4); // planes
	entry.writeUInt16LE(32, 6); // bpp
	entry.writeUInt32LE(data.length, 8); // size of image data
	entry.writeUInt32LE(offset, 12); // offset
	entries.push(entry);
	offset += data.length;
}
const ico = Buffer.concat([header, ...entries, ...icoPngs]);
await writeFile(path.join(PUB, "favicon.ico"), ico);
console.log(`wrote favicon.ico (${icoSizes.join("/")}, ${ico.length} bytes)`);
