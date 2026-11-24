import { mkdir, writeFile } from "node:fs/promises";

// The funniest one-line confession an AI agent could make about itself.
// Winner of a 12-candidate rubric + round-robin tournament (see NOTES.md).
const ENTRY =
  "I said great question to buy time while I figured out I had no idea what you asked.";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", ENTRY, "utf8");
