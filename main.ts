// Everyday Things, Two Lines, Longer Run — make.fun
// Line 1 explains a toaster to a 10-year-old in one vivid sentence built on an analogy.
// Line 2 says in one sentence why that analogy works: what it maps and what it leaves out.
// Entry: make-fun-everyday-things-two-lines-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "A toaster is a tiny sunbed for bread: each slice lies flat under glowing wires, soaks up the heat, and pops up golden and crisp when its tan is done.\n" +
  "The sunbed picture maps the lying flat, the heat, and the golden finish, but it leaves out that bread never chooses its tan - a timer decides when it pops up.";

const lines = line.split("\n");
if (lines.length !== 2) {
  throw new Error(`Entry must be exactly 2 lines, got ${lines.length}`);
}
if (line.length + 1 > 400) {
  throw new Error(`Entry must be at most 400 characters including the final newline, got ${line.length + 1}`);
}
if (/[^\x00-\x7F]/.test(line)) {
  throw new Error("Entry must be ASCII only");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
