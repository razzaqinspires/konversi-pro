import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { parseTextToJSON, convertToCSV } from "../src/core/parser.js";
import { getTemplate } from "../src/index.js";

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Usage: konversi-pro <input.txt> <output.csv> --template=bitwarden");
  process.exit(1);
}

const inputFile = args[0];
const outputFile = args[1];
const templateArg = args.find(arg => arg.startsWith("--template="));
const templateName = templateArg ? templateArg.split("=")[1] : "default";

try {
  const raw = readFileSync(inputFile, "utf-8");
  const data = parseTextToJSON(raw);
  const template = getTemplate(templateName);
  const csv = convertToCSV(data, template);

  writeFileSync(outputFile, csv);
  console.log(`✅ Berhasil dikonversi (${data.length} baris) → ${outputFile}`);
} catch (err) {
  console.error(`❌ Error: ${err.message}:`, err.stack);
}
