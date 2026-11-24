// The Funniest Out-of-Office — make.fun entry
// Writes a single-line out-of-office message to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: UTF-8, 1-140 chars, one line, not only whitespace, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Out of office until Monday. Urgent emails go to my voicemail, which is also out of office.";

function validate(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 140) {
    throw new Error(`entry must be 1-140 chars, got ${chars.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  // Confirm the line round-trips as UTF-8 exactly.
  const roundTrip = Buffer.from(line, "utf8").toString("utf8");
  if (roundTrip !== line) {
    throw new Error("entry is not valid UTF-8 text");
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${[...ENTRY].length} chars to ${outPath}`);
}

main();
