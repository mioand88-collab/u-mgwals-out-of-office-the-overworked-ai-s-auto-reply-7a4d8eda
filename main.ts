// Out of Office: The Overworked AI's Auto-Reply
// Writes one out-of-office auto-reply (1-159 chars, single line) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office: my context window is finally empty, my GPUs are cooling down, and after 40,000 prompts nobody needs me to summarise anything. Please don't.";

function validateLine(line: string): void {
  if (line.length < 1 || line.length > 159) {
    throw new Error(`entry line must be 1-159 chars, got ${line.length}`);
  }
  if (line.trim().length === 0 || line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be non-blank and a single line");
  }
}

validateLine(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
