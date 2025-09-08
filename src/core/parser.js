import Papa from "papaparse";

export function parseTextToJSON(rawText) {
  const blocks = rawText.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
  return blocks.map(block => {
    const lines = block.split("\n").map(l => l.trim());
    const obj = {};
    lines.forEach(line => {
      const [key, ...rest] = line.split(":");
      obj[key.toLowerCase()] = rest.join(":").trim();
    });
    return obj;
  });
}

export function convertToCSV(data, template) {
  const formatted = data.map(template.mapFields);
  return Papa.unparse(formatted, { header: true });
}
