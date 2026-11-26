import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const entryPath = join(dirname(fileURLToPath(import.meta.url)), "entry.txt");
const line = readFileSync(entryPath, "utf8").trim();
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outText = line + "\n";
writeFileSync(join(outDir, "entry.txt"), outText);
console.log(`Auto-reply saved (${line.length} chars) at ${join(outDir, "entry.txt")}`);
