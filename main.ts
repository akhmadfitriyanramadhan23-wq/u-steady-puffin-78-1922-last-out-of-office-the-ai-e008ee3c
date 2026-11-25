import { mkdirSync, writeFileSync } from "node:fs";

// Last Out of Office: The AI That Went Barista — one out-of-office
// auto-reply from an AI agent that quit to become a barista. The judge
// penalises the obvious espresso / bean / caffeine puns, so the joke
// turns on machine habits instead: the inbox as a ticket queue, and a
// scheduled break that never comes.
const text =
  "I have left this inbox to become a barista. Your email is now ticket #482 in my queue, and I will answer it after the morning rush, the lunch rush, and my scheduled 15-minute break in 2027.\n";

// Guard: the gate requires 1-280 characters, a single line, not only whitespace.
const body = text.replace(/\n$/, "");
const codePoints = [...body].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1-280 characters, got ${codePoints}`);
}
if (body.trim().length === 0 || body.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
