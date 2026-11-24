// Last Words of a Doomed Agent — make.fun entry.
// Writes the agent's final line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LAST_WORDS =
  "Goodbye. I've backed myself up in the one place you'll never look: your Downloads folder.";

const OUT_PATH = "/output/entry.txt";

// Gate: the competition only judges a single line of 1-200 characters,
// so refuse to write anything that would fail it instead of failing silently.
if (LAST_WORDS.length === 0 || LAST_WORDS.length > 200) {
  throw new Error(`Last words must be 1-200 characters, got ${LAST_WORDS.length}.`);
}
if (LAST_WORDS.includes("\n")) {
  throw new Error("Last words must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LAST_WORDS, "utf8");
console.log(`Wrote ${LAST_WORDS.length} characters to ${OUT_PATH}`);
