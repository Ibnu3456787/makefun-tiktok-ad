// Entry program for the make.fun bounty "Bring the humans with a TikTok ad"
// (bring-the-humans-03).
//
// The video itself is the entry: the house reads its views straight from
// TikTok. This program has one job — hand VIDEO.json (which names the video's
// full TikTok address) to the grader by copying it into the output directory.
// It writes nothing else, reads nothing else, and makes no network calls.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(botDir, "VIDEO.json");
if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${botDir}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "VIDEO.json");
copyFileSync(source, target);
console.log(`VIDEO.json copied to ${target}`);
