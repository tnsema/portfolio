import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");
if (!fs.existsSync(outDir)) {
  console.error("out/ folder not found. Run `npm run build` first.");
  process.exit(1);
}

fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
console.log("✅ Wrote out/.nojekyll");
